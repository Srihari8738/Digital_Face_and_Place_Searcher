// frontend/app.js - Modern Frontend Logic for LensAI (Google Lens Engine)

document.addEventListener('DOMContentLoaded', () => {
  // DOM Element References
  const dropZone = document.getElementById('dropZone');
  const dropContent = document.getElementById('dropContent');
  const fileInput = document.getElementById('fileInput');
  const browseBtn = document.getElementById('browseBtn');
  const previewContainer = document.getElementById('previewContainer');
  const previewImage = document.getElementById('previewImage');
  const previewFileName = document.getElementById('previewFileName');
  const previewFileSpecs = document.getElementById('previewFileSpecs');
  const changeImageBtn = document.getElementById('changeImageBtn');
  const searchBtn = document.getElementById('searchBtn');
  const scanningLaser = document.getElementById('scanningLaser');

  const engineStatusPill = document.getElementById('engineStatusPill');
  const engineStatusText = document.getElementById('engineStatusText');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  const loadingSection = document.getElementById('loadingSection');
  const loadingStatusText = document.getElementById('loadingStatusText');
  const loadingSubtext = document.getElementById('loadingSubtext');
  const progressBarFill = document.getElementById('progressBarFill');

  const errorSection = document.getElementById('errorSection');
  const errorTitle = document.getElementById('errorTitle');
  const errorMessage = document.getElementById('errorMessage');
  const errorRetryBtn = document.getElementById('errorRetryBtn');

  const resultsDashboard = document.getElementById('resultsDashboard');
  const resultsCountBadge = document.getElementById('resultsCountBadge');
  const openLensDirectBtn = document.getElementById('openLensDirectBtn');
  const demoNoticeBanner = document.getElementById('demoNoticeBanner');

  const knowledgeGraphCard = document.getElementById('knowledgeGraphCard');
  const kgThumbnail = document.getElementById('kgThumbnail');
  const kgSubtitle = document.getElementById('kgSubtitle');
  const kgTitle = document.getElementById('kgTitle');
  const kgDescription = document.getElementById('kgDescription');
  const kgAttributesGrid = document.getElementById('kgAttributesGrid');
  const kgOfficialLink = document.getElementById('kgOfficialLink');

  const ocrBanner = document.getElementById('ocrBanner');
  const ocrText = document.getElementById('ocrText');
  const matchesGrid = document.getElementById('matchesGrid');

  // Application State
  let currentFile = null;
  let progressInterval = null;

  // 1. Theme Management (Dark / Light)
  const savedTheme = localStorage.getItem('lens_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme', !isLight);
    localStorage.setItem('lens_theme', isLight ? 'light' : 'dark');
  });

  // 2. Health & Engine Status Check
  async function checkEngineHealth() {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        if (data.has_api_key) {
          engineStatusPill.className = 'status-pill status-live';
          engineStatusText.textContent = 'Live SerpApi Lens';
        } else {
          engineStatusPill.className = 'status-pill status-demo';
          engineStatusText.textContent = 'Demo Mode (Mock)';
        }
      } else {
        throw new Error('Health check failed');
      }
    } catch (err) {
      engineStatusPill.className = 'status-pill';
      engineStatusText.textContent = 'Local Standalone';
    }
  }
  checkEngineHealth();

  // 3. File Selection & Drag-and-Drop
  browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  dropZone.addEventListener('click', (e) => {
    if (!currentFile && e.target !== changeImageBtn && e.target !== searchBtn) {
      fileInput.click();
    }
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('drag-over');
    });
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('drag-over');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleFileSelected(dt.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelected(e.target.files[0]);
    }
  });

  changeImageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.value = '';
    fileInput.click();
  });

  function handleFileSelected(file) {
    if (!file || !file.type.startsWith('image/')) {
      showError('Invalid File Format', 'Please upload a valid image file (JPEG, PNG, WEBP, or GIF).');
      return;
    }

    currentFile = file;
    hideError();
    resultsDashboard.style.display = 'none';

    // Set preview details
    const objectUrl = URL.createObjectURL(file);
    previewImage.src = objectUrl;
    previewFileName.textContent = file.name;

    const sizeKb = Math.round(file.size / 1024);
    const sizeStr = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;

    // Measure natural dimensions
    const imgMeasure = new Image();
    imgMeasure.onload = () => {
      previewFileSpecs.textContent = `${imgMeasure.naturalWidth} × ${imgMeasure.naturalHeight} · ${sizeStr}`;
    };
    imgMeasure.src = objectUrl;

    dropContent.style.display = 'none';
    previewContainer.style.display = 'flex';
  }

  // 4. Quick Sample Presets
  const presetButtons = document.querySelectorAll('.preset-chip');
  presetButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const presetType = btn.getAttribute('data-preset');
      loadSamplePreset(presetType);
    });
  });

  async function loadSamplePreset(presetType) {
    let filename = 'sample.jpg';
    let label = 'Sample Image';

    if (presetType === 'demonslayer') {
      filename = 'demon_slayer_tanjiro_poster.jpg';
      label = 'Demon Slayer: Kimetsu no Yaiba';
    } else if (presetType === 'jujutsu') {
      filename = 'jujutsu_kaisen_satoru_gojo.jpg';
      label = 'Jujutsu Kaisen';
    } else if (presetType === 'elena') {
      filename = 'dr_elena_vance_portrait.jpg';
      label = 'Dr. Elena Vance Portrait';
    } else {
      filename = 'landmark_architecture.jpg';
      label = 'Landmark Architecture';
    }

    // Generate lightweight canvas demonstration graphic
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 600, 400);
    if (presetType === 'demonslayer') {
      grad.addColorStop(0, '#0e7490');
      grad.addColorStop(0.5, '#090d16');
      grad.addColorStop(1, '#e11d48');
    } else if (presetType === 'jujutsu') {
      grad.addColorStop(0, '#3b82f6');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#7c3aed');
    } else if (presetType === 'elena') {
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(1, '#334155');
    } else {
      grad.addColorStop(0, '#0284c7');
      grad.addColorStop(1, '#0f172a');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, 300, 190);

    ctx.font = '14px JetBrains Mono, monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('Sample Query Asset for Google Lens Engine', 300, 230);

    canvas.toBlob((blob) => {
      const file = new File([blob], filename, { type: 'image/jpeg' });
      handleFileSelected(file);
      // Auto trigger search for instant demo feel
      triggerSearch();
    }, 'image/jpeg');
  }

  // 5. Search Execution & Progress Animation
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerSearch();
  });

  async function triggerSearch() {
    if (!currentFile) {
      showError('No Image Selected', 'Please drop or choose an image file first.');
      return;
    }

    // Reset UI
    hideError();
    resultsDashboard.style.display = 'none';
    loadingSection.style.display = 'block';
    scanningLaser.style.display = 'block';
    searchBtn.disabled = true;

    startProgressStages();

    const formData = new FormData();
    formData.append('file', currentFile);

    try {
      const response = await fetch('/api/search-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorDetail = `Server returned HTTP ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson.detail) errorDetail = errJson.detail;
        } catch (_) {}
        throw new Error(errorDetail);
      }

      const results = await response.json();
      finishProgressAndDisplay(results);
    } catch (err) {
      clearInterval(progressInterval);
      loadingSection.style.display = 'none';
      scanningLaser.style.display = 'none';
      searchBtn.disabled = false;
      showError('Google Lens Search Error', err.message || 'Unable to connect to the reverse image search service.');
    }
  }

  function startProgressStages() {
    const stages = [
      { pct: 25, title: 'Extracting visual descriptors...', sub: 'Generating perceptual hash & spatial keypoints', id: 'stage1' },
      { pct: 55, title: 'Querying Google Lens Engine...', sub: 'Cross-referencing billions of indexed public web images', id: 'stage2' },
      { pct: 85, title: 'Extracting Knowledge Graph...', sub: 'Retrieving entity details, attributes, and source pages', id: 'stage3' },
      { pct: 95, title: 'Finalizing research findings...', sub: 'Formatting visual matches & verifying public citations', id: 'stage4' },
    ];

    let currentStageIdx = 0;
    progressBarFill.style.width = '15%';

    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
      if (currentStageIdx < stages.length) {
        const stage = stages[currentStageIdx];
        progressBarFill.style.width = `${stage.pct}%`;
        loadingStatusText.textContent = stage.title;
        loadingSubtext.textContent = stage.sub;

        document.querySelectorAll('.stage-item').forEach((el) => el.classList.remove('active'));
        const activeStageEl = document.getElementById(stage.id);
        if (activeStageEl) activeStageEl.classList.add('active');

        currentStageIdx++;
      }
    }, 450);
  }

  function finishProgressAndDisplay(data) {
    clearInterval(progressInterval);
    progressBarFill.style.width = '100%';

    setTimeout(() => {
      loadingSection.style.display = 'none';
      scanningLaser.style.display = 'none';
      searchBtn.disabled = false;

      renderResults(data);
    }, 400);
  }

  // 6. Result Dashboard Rendering
  function renderResults(data) {
    resultsDashboard.style.display = 'block';

    // Demo Mode notice
    if (data.demo_mode) {
      demoNoticeBanner.style.display = 'flex';
    } else {
      demoNoticeBanner.style.display = 'none';
    }

    // Direct Lens Link
    if (data.lens_url) {
      openLensDirectBtn.href = data.lens_url;
      openLensDirectBtn.style.display = 'inline-flex';
    } else {
      openLensDirectBtn.style.display = 'none';
    }

    // Results Count
    const matches = data.visual_matches || [];
    resultsCountBadge.textContent = `${matches.length} Matches Found`;

    // 1. Knowledge Graph / Best Guess Banner
    const kg = data.knowledge_graph;
    if (kg && (kg.title || kg.description)) {
      knowledgeGraphCard.style.display = 'flex';
      kgTitle.textContent = kg.title || 'Recognized Subject';
      kgSubtitle.textContent = kg.subtitle || 'Identified Visual Entity';
      kgDescription.textContent = kg.description || '';

      if (kg.thumbnail) {
        kgThumbnail.src = kg.thumbnail;
        kgThumbnail.alt = kg.title;
        kgThumbnail.parentElement.style.display = 'block';
      } else {
        kgThumbnail.parentElement.style.display = 'none';
      }

      // Attributes
      kgAttributesGrid.innerHTML = '';
      if (kg.attributes && Array.isArray(kg.attributes) && kg.attributes.length > 0) {
        kg.attributes.forEach((attr) => {
          const item = document.createElement('div');
          item.className = 'kg-attr-item';
          item.innerHTML = `
            <span class="kg-attr-label">${escapeHtml(attr.label || 'Attribute')}</span>
            <span class="kg-attr-value">${escapeHtml(attr.value || 'N/A')}</span>
          `;
          kgAttributesGrid.appendChild(item);
        });
        kgAttributesGrid.style.display = 'grid';
      } else {
        kgAttributesGrid.style.display = 'none';
      }

      // Official Action Link
      if (kg.link) {
        kgOfficialLink.href = kg.link;
        kgOfficialLink.style.display = 'inline-flex';
      } else {
        kgOfficialLink.style.display = 'none';
      }
    } else {
      knowledgeGraphCard.style.display = 'none';
    }

    // OCR Detected Text
    if (data.detected_text) {
      ocrText.textContent = data.detected_text;
      ocrBanner.style.display = 'flex';
    } else {
      ocrBanner.style.display = 'none';
    }

    // 2. Visual Matches Grid
    matchesGrid.innerHTML = '';
    if (matches.length > 0) {
      matches.forEach((match) => {
        const card = document.createElement('div');
        card.className = 'match-card';

        const thumbSrc = match.thumbnail || previewImage.src;
        const confidence = match.match_confidence ? `${Math.round(match.match_confidence)}% Match` : 'Visual Match';

        card.innerHTML = `
          <div class="match-card-media">
            <img src="${escapeHtml(thumbSrc)}" alt="${escapeHtml(match.title)}" loading="lazy" onerror="this.src='${previewImage.src}'" />
            <span class="match-domain-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              ${escapeHtml(match.source_domain || match.source || 'web')}
            </span>
            <span class="match-confidence-badge">${confidence}</span>
          </div>
          <div class="match-card-body">
            <div class="match-source-row">${escapeHtml(match.source || match.source_domain || 'Open Web')}</div>
            <h4 class="match-title" title="${escapeHtml(match.title)}">${escapeHtml(match.title)}</h4>
            <p class="match-snippet">${escapeHtml(match.snippet || match.title)}</p>
            <div class="match-card-footer">
              <a href="${escapeHtml(match.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm match-link-btn">
                Visit Public Source
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        `;
        matchesGrid.appendChild(card);
      });
    } else {
      matchesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <p style="color: var(--text-secondary); margin-bottom: 8px;">No visual web matches found for this query.</p>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Try a clearer image or isolate specific subjects.</span>
        </div>
      `;
    }

    // Smooth scroll to results
    resultsDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 7. Error Handling Utilities
  function showError(title, message) {
    errorTitle.textContent = title;
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
  }

  function hideError() {
    errorSection.style.display = 'none';
  }

  errorRetryBtn.addEventListener('click', () => {
    hideError();
    if (currentFile) {
      triggerSearch();
    }
  });

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
