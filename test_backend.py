"""
Automated Test Suite for Google Lens Reverse Image Search FastAPI Backend
Tests healthcheck, image search endpoint, mock responses, and error handling.
"""

import io
import sys
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_health():
    print("1. Testing GET /api/health ...")
    resp = client.get("/api/health")
    assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
    data = resp.json()
    assert data["status"] == "healthy"
    assert "provider" in data
    print(f"   ✓ Health check passed: {data}\n")

def test_frontend_serving():
    print("2. Testing GET / (Frontend serving) ...")
    resp = client.get("/")
    assert resp.status_code == 200, f"Expected 200, got {resp.status_code}"
    assert "LensAI" in resp.text
    assert "Search with Google Lens" in resp.text
    print("   ✓ Frontend index.html served correctly at root path.\n")

def test_search_demonslayer_mock():
    print("3. Testing POST /api/search-image (Demon Slayer query) ...")
    dummy_image = io.BytesIO(b"\xff\xd8\xff\xe0" + b"\x00" * 200) # minimal fake JPEG
    resp = client.post(
        "/api/search-image",
        files={"file": ("demon_slayer_tanjiro.jpg", dummy_image, "image/jpeg")}
    )
    assert resp.status_code == 200, f"Expected 200, got {resp.status_code}: {resp.text}"
    data = resp.json()
    assert data["status"] == "success"
    assert "Demon Slayer" in data["knowledge_graph"]["title"]
    assert len(data["visual_matches"]) >= 3
    assert len(data["source_links"]) >= 3
    print(f"   ✓ Detected Entity: {data['knowledge_graph']['title']}")
    print(f"   ✓ Visual Matches: {len(data['visual_matches'])} matches found")
    print("   ✓ Demon Slayer test passed.\n")

def test_search_jujutsu_mock():
    print("4. Testing POST /api/search-image (Jujutsu Kaisen query) ...")
    dummy_image = io.BytesIO(b"\xff\xd8\xff\xe0" + b"\x00" * 200)
    resp = client.post(
        "/api/search-image",
        files={"file": ("jujutsu_kaisen_satoru_gojo.jpg", dummy_image, "image/jpeg")}
    )
    assert resp.status_code == 200
    data = resp.json()
    assert "Jujutsu Kaisen" in data["knowledge_graph"]["title"]
    print(f"   ✓ Detected Entity: {data['knowledge_graph']['title']}")
    print("   ✓ Jujutsu Kaisen test passed.\n")

def test_search_portrait_mock():
    print("5. Testing POST /api/search-image (Dr. Elena Vance query) ...")
    dummy_image = io.BytesIO(b"\xff\xd8\xff\xe0" + b"\x00" * 200)
    resp = client.post(
        "/api/search-image",
        files={"file": ("dr_elena_vance_portrait.jpg", dummy_image, "image/jpeg")}
    )
    assert resp.status_code == 200
    data = resp.json()
    assert "Elena Vance" in data["knowledge_graph"]["title"]
    print(f"   ✓ Detected Entity: {data['knowledge_graph']['title']}")
    print("   ✓ Academic Researcher test passed.\n")

def test_error_handling():
    print("6. Testing Error Handling (invalid format & empty payload) ...")
    # Empty file (0 bytes)
    empty_file = io.BytesIO(b"")
    resp = client.post(
        "/api/search-image",
        files={"file": ("empty.jpg", empty_file, "image/jpeg")}
    )
    assert resp.status_code == 400
    print("   ✓ 0-byte file correctly rejected with HTTP 400.")

    # Unsupported format
    text_file = io.BytesIO(b"Hello text file")
    resp = client.post(
        "/api/search-image",
        files={"file": ("document.txt", text_file, "text/plain")}
    )
    assert resp.status_code == 400
    print("   ✓ Non-image file correctly rejected with HTTP 400.\n")

if __name__ == "__main__":
    print("==================================================")
    print("STARTING GOOGLE LENS FASTAPI TEST SUITE")
    print("==================================================\n")
    test_health()
    test_frontend_serving()
    test_search_demonslayer_mock()
    test_search_jujutsu_mock()
    test_search_portrait_mock()
    test_error_handling()
    print("==================================================")
    print("ALL 6 FASTAPI BACKEND & FRONTEND TESTS PASSED!")
    print("==================================================")
