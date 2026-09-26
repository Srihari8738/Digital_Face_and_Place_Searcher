"""
backend/auth.py - Email & Password Authentication Service
Provides secure persistent user registration, login, token management,
and profile storage for DIGITAL YOUR users using their original email addresses.
"""

import os
import re
import json
import hashlib
import secrets
from datetime import datetime
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
USERS_FILE = os.path.join(DATA_DIR, "users.json")
SESSIONS_FILE = os.path.join(DATA_DIR, "sessions.json")

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")


def _ensure_storage():
    """Ensure data directory and JSON files exist."""
    os.makedirs(DATA_DIR, exist_ok=True)
    if not os.path.exists(USERS_FILE):
        with open(USERS_FILE, "w", encoding="utf-8") as f:
            json.dump({}, f, indent=2)
    if not os.path.exists(SESSIONS_FILE):
        with open(SESSIONS_FILE, "w", encoding="utf-8") as f:
            json.dump({}, f, indent=2)


def _load_users() -> Dict[str, Any]:
    _ensure_storage()
    try:
        with open(USERS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def _save_users(users: Dict[str, Any]):
    _ensure_storage()
    with open(USERS_FILE, "w", encoding="utf-8") as f:
        json.dump(users, f, indent=2)


def _load_sessions() -> Dict[str, Any]:
    _ensure_storage()
    try:
        with open(SESSIONS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def _save_sessions(sessions: Dict[str, Any]):
    _ensure_storage()
    with open(SESSIONS_FILE, "w", encoding="utf-8") as f:
        json.dump(sessions, f, indent=2)


def hash_password(password: str, salt: str) -> str:
    """Hash password using PBKDF2-HMAC-SHA256."""
    return hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt.encode("utf-8"),
        100000
    ).hex()


def verify_password(password: str, salt: str, password_hash: str) -> bool:
    """Verify input password against stored hash."""
    return hash_password(password, salt) == password_hash


def normalize_email(email: str) -> str:
    """Lowercase and strip whitespace."""
    return email.strip().lower()


def is_valid_email(email: str) -> bool:
    """Validate RFC email syntax."""
    return bool(EMAIL_REGEX.match(normalize_email(email)))


# Request/Response Schemas
class RegisterRequest(BaseModel):
    email: str = Field(..., description="Original user email address")
    password: str = Field(..., min_length=6, description="Password (minimum 6 characters)")
    name: Optional[str] = Field(None, description="User full name or display handle")


class LoginRequest(BaseModel):
    email: str = Field(..., description="Original user email address")
    password: str = Field(..., min_length=6, description="Password")
    name: Optional[str] = Field(None, description="Optional name if auto-creating account")


def get_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    """Retrieve user record by email."""
    users = _load_users()
    norm = normalize_email(email)
    return users.get(norm)


def register_user(email: str, password: str, name: Optional[str] = None) -> Dict[str, Any]:
    """Register a new user with their original email and password."""
    norm = normalize_email(email)
    if not is_valid_email(norm):
        raise ValueError("Invalid email format. Please provide a valid email address (e.g. name@example.com).")

    if len(password) < 6:
        raise ValueError("Password must be at least 6 characters long.")

    users = _load_users()
    if norm in users:
        raise ValueError("An account with this email already exists. Please log in.")

    salt = secrets.token_hex(16)
    pwd_hash = hash_password(password, salt)
    display_name = name.strip() if (name and name.strip()) else norm.split("@")[0].replace(".", " ").title()

    now_str = datetime.now().strftime("%b %Y")
    user_record = {
        "email": norm,
        "name": display_name,
        "avatar": f"https://api.dicebear.com/7.x/initials/svg?seed={norm}&backgroundColor=2563eb,7c3aed",
        "salt": salt,
        "password_hash": pwd_hash,
        "joined": now_str,
        "created_at": datetime.now().isoformat(),
        "searches_used": 0,
        "searches_limit": 50,
        "is_verified": True
    }

    users[norm] = user_record
    _save_users(users)

    token = create_session(norm)
    clean_user = {k: v for k, v in user_record.items() if k not in ("salt", "password_hash")}
    return {"token": token, "user": clean_user}


def authenticate_user(email: str, password: str, name: Optional[str] = None) -> Dict[str, Any]:
    """
    Authenticate a user by email and password.
    If the account does not exist, seamlessly auto-provisions it so the user is never blocked.
    """
    norm = normalize_email(email)
    if not is_valid_email(norm):
        raise ValueError("Invalid email format. Please enter a valid email address (e.g. name@example.com).")

    if len(password) < 6:
        raise ValueError("Password must be at least 6 characters long.")

    users = _load_users()
    user_record = users.get(norm)

    if not user_record:
        # Seamlessly auto-register user on first login with their original email
        return register_user(norm, password, name)

    # User exists, verify password
    if not verify_password(password, user_record["salt"], user_record["password_hash"]):
        raise ValueError("Incorrect password. Please check your password and try again.")

    token = create_session(norm)
    clean_user = {k: v for k, v in user_record.items() if k not in ("salt", "password_hash")}
    return {"token": token, "user": clean_user}


def create_session(email: str) -> str:
    """Create an authentication session token."""
    norm = normalize_email(email)
    token = secrets.token_urlsafe(32)
    sessions = _load_sessions()
    sessions[token] = {
        "email": norm,
        "created_at": datetime.now().isoformat()
    }
    _save_sessions(sessions)
    return token


def get_user_from_token(token: str) -> Optional[Dict[str, Any]]:
    """Retrieve user record from session token."""
    if not token:
        return None
    sessions = _load_sessions()
    session = sessions.get(token)
    if not session:
        return None
    user = get_user_by_email(session["email"])
    if not user:
        return None
    return {k: v for k, v in user.items() if k not in ("salt", "password_hash")}


def revoke_session(token: str) -> bool:
    """Log out / invalidate session token."""
    sessions = _load_sessions()
    if token in sessions:
        del sessions[token]
        _save_sessions(sessions)
        return True
    return False
