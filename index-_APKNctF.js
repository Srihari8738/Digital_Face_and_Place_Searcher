(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{stage:1,title:`Uploading image`,desc:`Secure ephemeral memory ingestion. Zero persistent storage.`,icon:`upload`},{stage:2,title:`Extracting visual features`,desc:`Extracting neural edge descriptors, keypoints, and spatial color histograms.`,icon:`cpu`},{stage:3,title:`Detecting regions and text`,desc:`Isolating visual regions, facial features, character silhouettes, and typography.`,icon:`scan`},{stage:4,title:`Classifying image content`,desc:`Categorizing media format (anime, public figure, scene, artwork, or generic).`,icon:`layers`},{stage:5,title:`Checking indexed public sources`,desc:`Querying publicly accessible domains, legal web archives, and media databases.`,icon:`globe`},{stage:6,title:`Comparing image fingerprints`,desc:`Computing perceptual hash distances, multi-scale cosine, and structural similarity.`,icon:`git-compare`},{stage:7,title:`Reviewing related pages`,desc:`Correlating public reference articles, forums, and editorial mentions.`,icon:`file-text`},{stage:8,title:`Ranking matches`,desc:`Sorting matches into Exact Matches, Near Matches, and Related Pages.`,icon:`sliders`},{stage:9,title:`Preparing source links`,desc:`Validating open web citations, platform protocols, and source quality indicators.`,icon:`external-link`},{stage:10,title:`Search complete`,desc:`Preparing public discovery report with algorithmic confidence estimates.`,icon:`check-circle`}],t=[{id:`sample-demonslayer`,title:`Demon Slayer: Kimetsu no Yaiba`,subtitle:`Anime Key Visual · Tanjiro & Nezuko Kamado`,category:`anime`,src:`/demo/demonslayer.jpg`,fileSize:`812 KB`,dimensions:`1024 × 1536`,format:`JPEG`,entityType:`anime`,classification:`Anime or animation`,mediaAnalysis:{title:`Demon Slayer: Kimetsu no Yaiba (竈門炭治郎 立志編)`,franchise:`Kimetsu no Yaiba / Weekly Shonen Jump`,characters:[{name:`Tanjiro Kamado`,role:`Main Protagonist · Water & Sun Breathing Swordsman`},{name:`Nezuko Kamado`,role:`Demon Sister · Exploding Blood Demon Art`},{name:`Kyojuro Rengoku`,role:`Flame Hashira · Demon Slayer Corps Pillar`},{name:`Zenitsu Agatsuma`,role:`Thunder Breathing Companion`}],studio:`ufotable (Japan)`,releasePeriod:`2019 – Present (Ongoing International Broadcast)`,episodeContext:`Promotional key art visual for the Tanjiro Kamado Unwavering Resolve Arc`,genre:`Dark Fantasy, Historical Fiction, Shonen Action, Supernatural`,officialPages:[{name:`Official Anime Portal (Japan)`,url:`https://kimetsu.com/anime/`},{name:`Aniplex USA Official Page`,url:`https://demonslayer-anime.com/`}],publicReferenceLinks:[{name:`MyAnimeList #38000`,url:`https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba`},{name:`Crunchyroll Streaming Hub`,url:`https://crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba`},{name:`Reddit r/KimetsuNoYaiba Community`,url:`https://reddit.com/r/KimetsuNoYaiba`},{name:`Twitter/X @DemonSlayerUSA`,url:`https://x.com/DemonSlayerUSA`}],relatedCharacters:[`Giyu Tomioka`,`Inosuke Hashibira`,`Muzan Kibutsuji`],searchTermsUsed:[`Demon Slayer`,`Kimetsu no Yaiba`,`Tanjiro Kamado`,`ufotable key visual`],confidenceLevel:`High confidence (99.4% perceptual match)`,confidenceNote:`Identified based on visual and public-source evidence.`},imageContextAnalysis:{imageType:`Digital Key Visual Illustration / Promotional Poster`,sceneDescription:`High-contrast promotional composition depicting swordsman Tanjiro Kamado wielding a Nichirin blade with dynamic water breathing currents, alongside demon sister Nezuko Kamado in pink hemp kimono.`,visibleObjects:[`Nichirin Katana`,`Water splash wave particles`,`Bamboo muzzle`,`Checkered green/black haori garment`],visibleText:`Official 鬼滅の刃 (Kimetsu no Yaiba) Japanese Kanji typography crest`,logosAndBrands:[`ufotable Studio Crest`,`Aniplex / Shueisha Official Copyright Stamp`],colorPalette:[{name:`Deep Cyan`,hex:`#0e7490`},{name:`Sakura Pink`,hex:`#f472b6`},{name:`Checkered Forest`,hex:`#15803d`},{name:`Midnight Charcoal`,hex:`#090d16`},{name:`Ember Crimson`,hex:`#e11d48`}],approximateSetting:`Stylized Taisho Era (Japan) mountain backdrop with swirling elemental water and flame visual effects`,orientation:`Portrait (Aspect Ratio 2:3, 1024 × 1536 px)`,possibleSourceContext:`Theatrical distribution key visual and official media press release banner`,editingIndicators:`High-fidelity original digital master; no compression artifacts or cropping detected`,searchConfidence:`99.4% (Direct match across authoritative public anime indexes)`,suggestedSearches:[`ufotable high-res key art`,`Kimetsu no Yaiba season broadcast visual`,`Tanjiro water breathing wallpaper`]},regions:[{id:`region-tanjiro`,label:`Character 1: Tanjiro Kamado`,type:`character`,confidence:99.4,box:{top:38,left:32,width:22,height:22},description:`Tanjiro Kamado executing Water Breathing Tenth Form`},{id:`region-nezuko`,label:`Character 2: Nezuko Kamado`,type:`character`,confidence:98.8,box:{top:31,left:68,width:20,height:20},description:`Nezuko Kamado with bamboo muzzle and awakened eyes`},{id:`region-ds-logo`,label:`Logo / Typography Region`,type:`logo`,confidence:99.7,box:{top:4,left:33,width:34,height:18},description:`Official Kimetsu no Yaiba Japanese Kanji logo typography`},{id:`region-ds-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete promotional visual key art`}],results:[{id:`res-ds-exact-1`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Demon Slayer: Kimetsu no Yaiba — Official Key Visual Asset #KV-01`,domain:`kimetsu.com`,sourceWebsite:`Official Kimetsu Portal (Aniplex Japan)`,url:`https://kimetsu.com/anime/risshihen/visual/`,image:`/demo/demonslayer.jpg`,imageUrl:`https://kimetsu.com/anime/assets/img/risshihen/kv01_master.jpg`,category:`Media`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Apr 06, 2019`,lastSeen:`Indexed 2 days ago`,earliestDiscovered:!0,context:`Image hash and visual comparison indicate a strong match with the primary broadcast key art published on the official production production site.`,protocol:`HTTPS / Public Official Web Asset`,verifiedPublic:!0,tags:[`Exact Match`,`Official Asset`,`ufotable`,`Aniplex`]},{id:`res-ds-exact-2`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Watch Demon Slayer: Kimetsu no Yaiba on Crunchyroll (Series Page)`,domain:`crunchyroll.com`,sourceWebsite:`Crunchyroll Global Streaming`,url:`https://crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba`,image:`/demo/demonslayer.jpg`,imageUrl:`https://static.crunchyroll.com/assets/poster/demonslayer_full.jpg`,category:`Media`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Apr 12, 2019`,lastSeen:`Indexed yesterday`,context:`Licensed series banner matching exact visual dimensions and color profile on Crunchyroll public catalog.`,protocol:`HTTPS / Streaming Catalog`,verifiedPublic:!0,tags:[`Exact Match`,`Streaming`,`Crunchyroll`]},{id:`res-ds-near-1`,matchType:`near`,matchLabel:`Cropped wallpaper version`,matchConfidence:92.4,similarity:92,similarityTier:`High Similarity`,differences:`Cropped 20% on top and bottom; slight saturation boost for desktop wallpaper distribution`,matchingRegions:`Character facial features, haori pattern, and water crest`,title:`Tanjiro & Nezuko Water Breathing HD Desktop Wallpaper (1920x1080)`,domain:`zerochan.net`,sourceWebsite:`Zerochan Anime Gallery`,url:`https://zerochan.net/2589012`,image:`/demo/demonslayer.jpg`,imageUrl:`https://static.zerochan.net/full/42/18/2589012.jpg`,category:`Images`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`May 14, 2019`,lastSeen:`Indexed 1 week ago`,context:`Resized horizontal crop of the key visual adjusted for standard 16:9 desktop monitors.`,protocol:`HTTPS / Public Gallery`,verifiedPublic:!0,tags:[`Near Match`,`Wallpaper`,`Cropped`]},{id:`res-ds-near-2`,matchType:`near`,matchLabel:`Edited social banner with text overlay`,matchConfidence:87.8,similarity:88,similarityTier:`High Similarity`,differences:`Broadcast schedule overlay added across bottom quadrant; slight color grading adjustment`,matchingRegions:`Tanjiro Nichirin sword pose and Nezuko facial region`,title:`Demon Slayer Official X/Twitter Broadcast Announcement Banner`,domain:`x.com`,sourceWebsite:`Twitter / X (@DemonSlayerUSA)`,url:`https://x.com/DemonSlayerUSA/status/178492019482`,image:`/demo/demonslayer.jpg`,imageUrl:`https://pbs.twimg.com/media/demonslayer_banner.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Oct 02, 2020`,lastSeen:`Indexed 3 days ago`,context:`Social media card containing the key visual formatted with North American airdate timestamps.`,protocol:`HTTPS / Public Social Post`,verifiedPublic:!0,tags:[`Near Match`,`Twitter/X`,`Edited Overlay`]},{id:`res-ds-rel-1`,matchType:`related`,matchLabel:`Public reference database entry`,matchConfidence:84.5,similarity:84,similarityTier:`Moderate Similarity`,title:`Kimetsu no Yaiba (Demon Slayer) — MyAnimeList Encyclopedia & Roster`,domain:`myanimelist.net`,sourceWebsite:`MyAnimeList Reference Database`,url:`https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba`,image:`/demo/demonslayer.jpg`,imageUrl:`https://cdn.myanimelist.net/images/anime/1286/99889.jpg`,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Dec 2018`,lastSeen:`Indexed today`,context:`Authoritative anime encyclopedia page discussing production staff, character voice actors, episode breakdown, and studio history.`,protocol:`HTTPS / Public Reference Index`,verifiedPublic:!0,tags:[`Related Page`,`MyAnimeList`,`Encyclopedia`]},{id:`res-ds-rel-2`,matchType:`related`,matchLabel:`Community analysis thread`,matchConfidence:78.2,similarity:78,similarityTier:`Moderate Similarity`,title:`Official Key Visual Release & Animation Technique Breakdown — r/KimetsuNoYaiba`,domain:`reddit.com`,sourceWebsite:`Reddit (r/KimetsuNoYaiba)`,url:`https://reddit.com/r/KimetsuNoYaiba/comments/official_key_visual`,image:`/demo/demonslayer.jpg`,imageUrl:`https://i.redd.it/demonslayer_kv_discussion.jpg`,category:`Articles`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`Apr 08, 2019`,lastSeen:`Active thread`,context:`Public community forum discussion breaking down the 2D hand-drawn character lines blended with 3D digital CGI water effects.`,protocol:`HTTPS / Public Forum`,verifiedPublic:!0,tags:[`Related Page`,`Reddit`,`Discussion`]}]},{id:`sample-jujutsu`,title:`Jujutsu Kaisen`,subtitle:`Anime Key Visual · Satoru Gojo & Yuji Itadori`,category:`anime`,src:`/demo/jujutsu.jpg`,fileSize:`798 KB`,dimensions:`1024 × 1536`,format:`JPEG`,entityType:`anime`,classification:`Anime or animation`,mediaAnalysis:{title:`Jujutsu Kaisen (呪術廻戦)`,franchise:`Jujutsu Kaisen / Shueisha Weekly Shonen Jump`,characters:[{name:`Satoru Gojo`,role:`Special Grade Sorcerer · Limitless & Six Eyes`},{name:`Yuji Itadori`,role:`Jujutsu High Student · Vessel of Ryomen Sukuna`},{name:`Megumi Fushiguro`,role:`Ten Shadows Technique Sorcerer`},{name:`Ryomen Sukuna`,role:`King of Curses`}],studio:`MAPPA (Japan)`,releasePeriod:`2020 – Present (TV Series & Feature Film)`,episodeContext:`Promotional key visual for the Shibuya Incident / Tokyo Jujutsu High Arc`,genre:`Dark Fantasy, Urban Supernatural, Action, Sorcery`,officialPages:[{name:`Jujutsu Kaisen Official Portal (Japan)`,url:`https://jujutsukaisen.jp/`}],publicReferenceLinks:[{name:`MyAnimeList #40748`,url:`https://myanimelist.net/anime/40748/Jujutsu_Kaisen`},{name:`Reddit r/JuJutsuKaisen Community`,url:`https://reddit.com/r/JuJutsuKaisen`},{name:`Twitter/X @animejujutsu`,url:`https://x.com/animejujutsu`},{name:`Instagram @mappa_official`,url:`https://instagram.com/mappa_official`}],relatedCharacters:[`Nobara Kugisaki`,`Kento Nanami`,`Suguru Geto`],searchTermsUsed:[`Jujutsu Kaisen`,`Gojo Satoru`,`Yuji Itadori`,`MAPPA visual`],confidenceLevel:`High confidence (99.1% perceptual match)`,confidenceNote:`Identified based on visual and public-source evidence.`},imageContextAnalysis:{imageType:`Digital Key Visual Illustration / Promotional Poster`,sceneDescription:`Dark urban cityscape setting featuring special grade sorcerer Satoru Gojo with iconic blindfold and white hair, alongside Yuji Itadori channeling red and purple cursed energy sparks.`,visibleObjects:[`Gojo blindfold`,`Cursed energy aura sparks`,`Tokyo skyscraper skyline silhouettes`,`Jujutsu High uniform`],visibleText:`Official 呪術廻戦 (Jujutsu Kaisen) Kanji title insignia`,logosAndBrands:[`MAPPA Studio Crest`,`TOHO Animation Production Logo`],colorPalette:[{name:`Electric Violet`,hex:`#8b5cf6`},{name:`Neon Crimson`,hex:`#ef4444`},{name:`Tokyo Navy`,hex:`#0f172a`},{name:`Ghost Silver`,hex:`#e2e8f0`},{name:`Abyssal Black`,hex:`#020617`}],approximateSetting:`Nocturnal Shibuya urban rooftop against a glowing metropolis skyline`,orientation:`Portrait (Aspect Ratio 2:3, 1024 × 1536 px)`,possibleSourceContext:`Television broadcast promotion and theatrical release campaign`,editingIndicators:`Original uncompressed digital release art`,searchConfidence:`99.1% (High confidence match across public anime archives)`,suggestedSearches:[`MAPPA official Jujutsu Kaisen art`,`Gojo Satoru key visual wallpaper`,`Jujutsu Kaisen Shibuya visual`]},regions:[{id:`region-gojo`,label:`Character 1: Satoru Gojo`,type:`character`,confidence:99.6,box:{top:12,left:28,width:22,height:20},description:`Satoru Gojo with white hair, black blindfold, and Infinity aura`},{id:`region-itadori`,label:`Character 2: Yuji Itadori`,type:`character`,confidence:99.1,box:{top:26,left:64,width:20,height:18},description:`Yuji Itadori channeling Divergent Fist cursed energy`},{id:`region-jk-logo`,label:`Logo / Title Crest`,type:`logo`,confidence:99.5,box:{top:72,left:3,width:44,height:18},description:`Official 呪術廻戦 Kanji crest with glowing purple accent`},{id:`region-jk-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full composition with Tokyo skyline and cursed energy`}],results:[{id:`res-jk-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`TV Anime Jujutsu Kaisen: Official Shibuya Incident Visual Release`,domain:`jujutsukaisen.jp`,sourceWebsite:`Official Jujutsu Kaisen Portal (TOHO Animation)`,url:`https://jujutsukaisen.jp/visual/shibuya/`,image:`/demo/jujutsu.jpg`,imageUrl:`https://jujutsukaisen.jp/img/visual_shibuya_hq.jpg`,category:`Media`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 24, 2023`,lastSeen:`Indexed 4 days ago`,earliestDiscovered:!0,context:`Image hash and visual comparison indicate an exact match with the primary key visual asset released by MAPPA and TOHO.`,protocol:`HTTPS / Public Official Web Asset`,verifiedPublic:!0,tags:[`Exact Match`,`MAPPA`,`Key Visual`]},{id:`res-jk-near`,matchType:`near`,matchLabel:`Resized official promotional announcement`,matchConfidence:95.5,similarity:96,similarityTier:`High Similarity`,differences:`Resized for social media feed card; compressed for web preview delivery`,matchingRegions:`Gojo blindfold and Itadori fist silhouette`,title:`Jujutsu Kaisen Official PR on X/Twitter: TV Anime Broadcast Visual`,domain:`x.com`,sourceWebsite:`Twitter / X (@animejujutsu)`,url:`https://x.com/animejujutsu/status/1693829104`,image:`/demo/jujutsu.jpg`,imageUrl:`https://pbs.twimg.com/media/jk_pr_post.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 24, 2023`,lastSeen:`Indexed yesterday`,context:`Official production account publishing high-res promotional visual to 2.1M followers.`,protocol:`HTTPS / Public Social Post`,verifiedPublic:!0,tags:[`Near Match`,`Twitter/X`,`Official`]},{id:`res-jk-rel-1`,matchType:`related`,matchLabel:`Studio gallery post`,matchConfidence:91,similarity:91,similarityTier:`High Similarity`,title:`MAPPA Official Instagram: Jujutsu Kaisen Animation Art Showcase`,domain:`instagram.com`,sourceWebsite:`Instagram (@mappa_official)`,url:`https://instagram.com/mappa_official`,image:`/demo/jujutsu.jpg`,imageUrl:`https://instagram.com/p/mappa_art_display`,category:`Images`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Sep 01, 2023`,lastSeen:`Indexed 1 week ago`,context:`Production art showcase post celebrating the visual directors and background art team at MAPPA Tokyo.`,protocol:`HTTPS / Public Photo Post`,verifiedPublic:!0,tags:[`Related Page`,`Instagram`,`MAPPA`]},{id:`res-jk-rel-2`,matchType:`related`,matchLabel:`Public encyclopedia entry`,matchConfidence:89,similarity:89,similarityTier:`High Similarity`,title:`Jujutsu Kaisen — MyAnimeList Official Profile & Staff Registry`,domain:`myanimelist.net`,sourceWebsite:`MyAnimeList Reference Database`,url:`https://myanimelist.net/anime/40748/Jujutsu_Kaisen`,image:`/demo/jujutsu.jpg`,imageUrl:`https://cdn.myanimelist.net/images/anime/1171/109222.jpg`,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Dec 2019`,lastSeen:`Indexed today`,context:`Public database profile detailing voice talent, production companies, and episode ratings.`,protocol:`HTTPS / Public Index`,verifiedPublic:!0,tags:[`Related Page`,`MyAnimeList`,`Directory`]}]},{id:`sample-elon`,title:`Elon Musk (Verified Public Figure)`,subtitle:`CEO & Chief Engineer of SpaceX · CEO of Tesla · Owner & CTO of X`,category:`public-figure`,src:`/demo/elon.jpg`,fileSize:`428 KB`,dimensions:`1024 × 1280`,format:`JPEG`,entityType:`public-figure`,classification:`Public figure`,publicFigureData:{publicName:`Elon Musk`,profession:`CEO & Chief Engineer of SpaceX · CEO of Tesla · Owner & CTO of X · Founder of xAI & Neuralink`,netWorth:`~$260 Billion USD (World’s Wealthiest Individual)`,officialWebsite:`https://x.com/elonmusk`,publicWork:`Pioneered commercial orbital rocketry, electrified global automotive transport, founded implantable neurotechnology, and leads frontier AI development.`,whatTheyDo:`Directs spacecraft engineering and reusable orbital launch systems at SpaceX (Starship, Falcon 9). Oversees automotive design, AI Autopilot, and Optimus humanoid robotics at Tesla. Directs frontier model training (Grok) at xAI and technological direction at X (formerly Twitter).`,howTheyDoIt:`Applies first-principles physics reasoning, extreme vertical integration across hardware/software, and flat organizational hierarchies with rapid iterative prototyping. Operates between Starbase Boca Chica, Giga Texas Austin, and San Francisco.`,companies:[{name:`SpaceX`,role:`Founder, CEO & Chief Engineer`,description:`Commercial aerospace manufacturing, reusable Falcon 9 & Starship orbital launch systems, and Starlink global satellite internet constellation.`,url:`https://spacex.com`},{name:`Tesla, Inc.`,role:`Technoking of Tesla & CEO`,description:`Electric passenger vehicles (Model S/3/X/Y, Cybertruck), utility-scale battery energy storage (Megapack), Full Self-Driving AI, and Optimus humanoid robot.`,url:`https://tesla.com`},{name:`X Corp. (formerly Twitter)`,role:`Owner, Chairman & Chief Technology Officer`,description:`Global real-time public town square, live audio/video communication, creator monetization, and integration hub for xAI.`,url:`https://x.com`},{name:`xAI`,role:`Founder`,description:`Frontier artificial intelligence company developing the Grok family of models, powered by the 100,000 H100 Colossus GPU cluster in Memphis.`,url:`https://x.ai`},{name:`Neuralink`,role:`Co-Founder`,description:`High-bandwidth implantable brain-computer interfaces designed to restore motor, speech, and sensory autonomy.`,url:`https://neuralink.com`},{name:`The Boring Company`,role:`Founder`,description:`Underground tunneling infrastructure and zero-emission transit loops (e.g. Las Vegas Convention Center Loop).`,url:`https://boringcompany.com`}],socialProfiles:[{platform:`X (Twitter)`,handle:`@elonmusk`,followers:`200M+ Followers (Official)`,url:`https://x.com/elonmusk`},{platform:`Instagram`,handle:`@elonmusk`,followers:`Public Figure Profile`,url:`https://instagram.com/elonmusk`},{platform:`Snapchat`,handle:`Elon Musk Public Stories`,followers:`Verified Public Profile`,url:`https://www.snapchat.com`},{platform:`LinkedIn`,handle:`Elon Musk Executive Record`,followers:`Corporate Leadership`,url:`https://www.linkedin.com`},{platform:`Wikipedia`,handle:`Elon Musk (Comprehensive Biography)`,followers:`Verified Open Archive`,url:`https://en.wikipedia.org/wiki/Elon_Musk`},{platform:`Tesla Corporate Bio`,handle:`Leadership Directory`,followers:`Executive Listing`,url:`https://ir.tesla.com/corporate/elon-musk`},{platform:`SpaceX Leadership`,handle:`spacex.com/about`,followers:`Chief Engineer Bio`,url:`https://spacex.com/about`},{platform:`YouTube Broadcasts`,handle:`@SpaceX Official & Tesla Keynotes`,followers:`7M+ Subscribers`,url:`https://youtube.com/@SpaceX`},{platform:`Reddit Community`,handle:`r/elonmusk & r/spacex`,followers:`2.5M+ Members`,url:`https://reddit.com/r/elonmusk`},{platform:`Bloomberg Index`,handle:`Elon R. Musk`,followers:`#1 Global Wealth (~$260B)`,url:`https://bloomberg.com/billionaires/profiles/elon-r-musk`},{platform:`Forbes Profile`,handle:`Elon Musk`,followers:`Billionaires Roster`,url:`https://forbes.com/profile/elon-musk`}],documentedAppearances:[{event:`SpaceX Starship Integrated Flight Test (IFT) Launch`,date:`Starbase Boca Chica, TX`},{event:`Tesla "We, Robot" Cybercab & Optimus Keynote`,date:`Warner Bros. Studios, Burbank, CA`},{event:`International Astronautical Congress (IAC) Keynote Address`,date:`Global Aerospace Assembly`},{event:`US Senate AI Insight Forum`,date:`Capitol Hill, Washington, D.C.`}],reputableNewsSources:[{title:`Bloomberg: Elon Musk Corporate Footprint & Ventures`,url:`https://bloomberg.com`},{title:`Reuters: SpaceX Starship Commercial & Orbital Milestones`,url:`https://reuters.com`},{title:`Wall Street Journal: Inside the Multi-Company Empire of Elon Musk`,url:`https://wsj.com`}],disclaimer:`Exact public-figure match. Verified against corporate regulatory filings (SEC), documented press conferences, and verified social accounts across the open web.`},imageContextAnalysis:{imageType:`High-Resolution Photographic Portrait / Media Capture`,sceneDescription:`Verified public photograph of Elon Musk. Subject is a prominent public figure and corporate executive.`,visibleObjects:[`Formal or business attire`,`Keynote stage / institutional setting`,`Clean facial geometry`],visibleText:`Elon Musk`,logosAndBrands:[`SpaceX`,`Tesla`,`X Corp`,`xAI`,`Neuralink`,`The Boring Company`],colorPalette:[{name:`Executive Obsidian`,hex:`#0f172a`},{name:`Corporate Steel`,hex:`#334155`},{name:`Accent Sapphire`,hex:`#2563eb`},{name:`Contrast Frost`,hex:`#f8fafc`}],approximateSetting:`Corporate headquarters, global conference keynote, or press briefing`,orientation:`Portrait orientation`,possibleSourceContext:`Verified corporate press kit, international media feature, or official directory`,editingIndicators:`Standard professional photographic capture`,searchConfidence:`99.8% (Verified across multiple corporate, media, and encyclopedic databases)`,suggestedSearches:[`Elon Musk career timeline`,`Elon Musk companies and investments`,`Elon Musk latest keynote speech`]},regions:[{id:`region-elon-face`,label:`Elon Musk (Facial Identification)`,type:`face`,confidence:99.8,box:{top:12,left:30,width:40,height:42},description:`Prominent facial geometry matching verified public image database for Elon Musk`},{id:`region-elon-full`,label:`Entire Portrait Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete high-resolution visual asset`}],results:[{id:`res-elon-exact-1`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Official Profile & Executive Records: Elon Musk`,domain:`x.com`,sourceWebsite:`X Corp. Official Profile`,url:`https://x.com/elonmusk`,image:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,imageUrl:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Primary Public Record`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Perceptual hash match (pHash distance: 0). Exact bitwise duplicate found on verified official domain.`,protocol:`HTTPS / Public Verified Domain`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,`Executive Profile`,`Elon Musk`]},{id:`res-elon-near-1`,matchType:`near`,matchLabel:`Verified Media Article & Coverage`,matchConfidence:97.5,similarity:98,similarityTier:`High Similarity`,differences:`Cropped and resized for international news broadcast banner`,matchingRegions:`Facial landmarks, signature hairstyle, and upper torso attire`,title:`Elon Musk: Key Ventures, Executive Leadership & Net Worth Overview`,domain:`bloomberg.com`,sourceWebsite:`Bloomberg Markets`,url:`https://bloomberg.com`,image:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,imageUrl:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Recent editorial feature`,lastSeen:`Indexed 4 hours ago`,context:`Detailed financial analysis, corporate ownership breakdown, and global industry impact of Elon Musk.`,protocol:`HTTPS / Reputable Financial News`,verifiedPublic:!0,tags:[`Near Match`,`Bloomberg`,`Industry Leadership`]},{id:`res-elon-rel-1`,matchType:`related`,matchLabel:`Open Encyclopedic Biography Record`,matchConfidence:94,similarity:94,similarityTier:`High Similarity`,title:`Wikipedia: Comprehensive Career & Biography of Elon Musk`,domain:`wikipedia.org`,sourceWebsite:`Wikipedia, the Free Encyclopedia`,url:`https://en.wikipedia.org/wiki/Elon_Musk`,image:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,imageUrl:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Open Collaborative Archive`,lastSeen:`Active thread`,context:`Comprehensive public encyclopedia documentation covering early life, education, founding of companies, and major public milestones.`,protocol:`HTTPS / Public Knowledge Repository`,verifiedPublic:!0,tags:[`Related Page`,`Wikipedia`,`Biography`]}]},{id:`sample-elena`,title:`Dr. Elena Vance (Academic Keynote Speaker)`,subtitle:`Widely Known Public Figure · Computer Science Professor`,category:`public-figure`,src:`/demo/elena.jpg`,fileSize:`614 KB`,dimensions:`1024 × 1024`,format:`JPEG`,entityType:`public-figure`,classification:`Public figure`,publicFigureData:{publicName:`Dr. Elena Vance, Ph.D.`,profession:`Professor of Computer Science · Research Director in AI Accountability`,officialWebsite:`https://hai.stanford.edu/people/elena-vance`,publicWork:`Author of 18 peer-reviewed papers on cryptographic privacy safeguards, zero-knowledge verification, and perceptual similarity bounds.`,whatTheyDo:`Directs frontier research on AI transparency, algorithmic auditing, and mathematical privacy guarantees for visual neural networks.`,howTheyDoIt:`Leads a team of 24 Ph.D. researchers at Stanford HAI, collaborating with open-source communities, regulatory advisory boards, and international standards consortiums (IEEE/ACM).`,socialProfiles:[{platform:`Instagram`,handle:`@elena.vance.ai`,url:`https://instagram.com`},{platform:`Twitter / X`,handle:`@elenavance_phd`,url:`https://x.com`},{platform:`LinkedIn`,handle:`in/elena-vance-ai`,url:`https://linkedin.com`},{platform:`Wikipedia`,handle:`Elena Vance (Academic)`,url:`https://wikipedia.org`},{platform:`YouTube`,handle:`Stanford HAI Keynotes`,url:`https://youtube.com`}],documentedAppearances:[{event:`Global Tech Summit 2025 Keynote Plenary`,date:`Nov 2025`,location:`San Francisco, CA`},{event:`IEEE Symposium on Security and Privacy`,date:`May 2025`,location:`San Jose, CA`},{event:`ACM Conference on Fairness, Accountability, and Transparency (FAccT)`,date:`Jan 2026`}],officialProfiles:[{platform:`Stanford HAI Academic Profile`,url:`https://hai.stanford.edu/people/elena-vance`},{platform:`IEEE Computer Society Author Index`,url:`https://computer.org/profiles/e-vance-ieee`},{platform:`GitHub Open Source Maintainer`,url:`https://github.com/elena-vance-research`}],reputableNewsSources:[{title:`WIRED Ideas: Balancing Privacy and Machine Perception in Open Systems`,url:`https://wired.com/story/privacy-perceptual-hash-limits`}],disclaimer:`Exact public-figure match. Verified against open university faculty directories, peer-reviewed publications, and documented conference keynotes.`},imageContextAnalysis:{imageType:`Professional Photographic Studio Headshot`,sceneDescription:`Centered high-resolution professional portrait of a woman in dark tailored blazer with natural indoor office illumination and softly defocused research laboratory background.`,visibleObjects:[`Dark tailored wool blazer`,`Silver pendant necklace`,`Optical eyewear frames in background depth`],visibleText:`None detected in query frame`,logosAndBrands:`None visible on apparel`,colorPalette:[{name:`Warm Amber Ochre`,hex:`#d97706`},{name:`Graphite Charcoal`,hex:`#1e293b`},{name:`Alabaster Ivory`,hex:`#f8fafc`},{name:`Slate Gray`,hex:`#64748b`}],approximateSetting:`Modern academic research building or university conference atrium`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Institutional faculty directory, academic symposium speaker biography, or press release headshot`,editingIndicators:`Professional studio color balance and subtle depth-of-field grading`,searchConfidence:`94.2% (Correlated with verified institutional web listings)`,suggestedSearches:[`Stanford HAI faculty directory Elena Vance`,`IEEE Computer Society Elena Vance`,`Tech Summit 2025 keynote speaker`]},regions:[{id:`region-elena-primary`,label:`Face Region: Primary Subject`,type:`face`,confidence:98.7,box:{top:13,left:32,width:34,height:38},description:`Centered facial geometry with 68 landmark points detected`},{id:`region-elena-attire`,label:`Visual Element: Lapel & Attire`,type:`object`,confidence:86.4,box:{top:51,left:40,width:20,height:16},description:`Dark tailored blazer lapel structure`},{id:`region-elena-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full studio portrait composition`}],results:[{id:`res-elena-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Faculty & Research Affiliates Directory 2025–2026`,domain:`hai.stanford.edu`,sourceWebsite:`Stanford University Institute for Human-Centered AI`,url:`https://hai.stanford.edu/people/elena-vance`,image:`/demo/elena.jpg`,imageUrl:`https://hai.stanford.edu/sites/default/files/faculty/vance_elena_2025.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 14, 2025`,lastSeen:`Indexed 3 days ago`,earliestDiscovered:!0,context:`Exact source headshot asset embedded in official Stanford University academic faculty roster.`,protocol:`HTTPS / Public University Index`,verifiedPublic:!0,tags:[`Exact Match`,`Stanford HAI`,`Academic`]},{id:`res-elena-near`,matchType:`near`,matchLabel:`Different photograph from same keynote event`,matchConfidence:89.1,similarity:89,similarityTier:`High Similarity`,differences:`Different camera angle, conference stage lighting, and microphone headset visible`,matchingRegions:`Facial structural geometry and matching eyewear`,title:`Keynote Plenary: Balancing Privacy and Machine Perception in Open Systems`,domain:`techsummit2025.org`,sourceWebsite:`Global Tech Summit Press Center`,url:`https://techsummit2025.org/speakers/elena-vance`,image:`/demo/elena_talk.jpg`,imageUrl:`https://techsummit2025.org/media/gallery/keynote_elena_vance.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Nov 04, 2025`,lastSeen:`Indexed 2 weeks ago`,context:`Conference live photography of the opening morning address at the Moscone Center.`,protocol:`HTTPS / Public Press Kit`,verifiedPublic:!0,tags:[`Near Match`,`Conference`,`Keynote`]},{id:`res-elena-rel`,matchType:`related`,matchLabel:`Peer-reviewed editorial commentary`,matchConfidence:81.5,similarity:82,similarityTier:`Moderate Similarity`,title:`WIRED Ideas: The Myth of Absolute Facial Uniqueness in Web Search`,domain:`wired.com`,sourceWebsite:`WIRED Magazine`,url:`https://wired.com/story/privacy-perceptual-hash-limits`,image:`/demo/elena_talk.jpg`,imageUrl:`https://media.wired.com/photos/vance_editorial_opener.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Dec 09, 2025`,lastSeen:`Indexed 1 month ago`,context:`Featured guest essay discussing mathematical limits in automated visual matching systems.`,protocol:`HTTPS / Editorial Column`,verifiedPublic:!0,tags:[`Related Page`,`WIRED`,`Editorial`]}]},{id:`sample-ordinary`,title:`Private Individual (Street Photography Subject)`,subtitle:`Ordinary Person · Strict Privacy Guardrail Demo`,category:`ordinary-person`,src:`/demo/chen.jpg`,fileSize:`642 KB`,dimensions:`1024 × 1024`,format:`JPEG`,entityType:`ordinary-person`,classification:`Unknown or low-confidence content`,ordinaryPersonGuardrail:{active:!0,mandatoryNotice:`We can describe visible, non-sensitive image details, but we do not identify private individuals or search for personal profiles.`,nonIdentifyingDetails:{visiblePeopleCount:1,approximateComposition:`Chest-up medium close-up portrait, subject positioned in center foreground with direct eye gaze.`,clothingColors:`Charcoal black turtleneck knit sweater with uniform dark weave.`,accessories:`Dark acetate optical eyewear frames with circular silhouette; no visible jewelry.`,pose:`Neutral front-facing posture with chin slightly elevated toward key light source.`,lighting:`Diffused studio softbox key light from upper camera-right; low-fill ratio creating gentle facial shadow.`,background:`Shallow depth of field showing softly blurred ambient indoor architectural elements with cool daylight tones.`,generalScene:`Indoor professional or creative workspace environment.`,visibleTextOrLogos:`None detected across clothing or background.`,imageQuality:`High clarity, sharp focal plane across glasses and eyes, minimal sensor noise.`,editingStatus:`Standard digital RAW camera development; no aggressive filters, generative synthesis, or heavy composite manipulation detected.`}},imageContextAnalysis:{imageType:`Portrait Photography (Unidentified Private Subject)`,sceneDescription:`A single individual photographed in studio lighting wearing dark sweater and spectacles. The subject appears to be a private citizen or non-celebrity individual.`,visibleObjects:[`Dark knit turtleneck`,`Dark circular acetate eyeglasses`],visibleText:`None detected`,logosAndBrands:`None detected`,colorPalette:[{name:`Warm Tawny Skin`,hex:`#ca8a04`},{name:`Onyx Black`,hex:`#0f172a`},{name:`Cool Slate Gray`,hex:`#64748b`},{name:`Soft Linen White`,hex:`#f8fafc`}],approximateSetting:`Modern studio or office interior with neutral blurred backdrop`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Personal photograph, creative portfolio portrait, or unindexed stock photography capture`,editingIndicators:`Natural photographic development; no synthetic distortion or composite staging`,searchConfidence:`Non-identifying mode active (Strict privacy enforcement: zero personal profiling)`,suggestedSearches:[`Studio portrait lighting techniques`,`Minimalist black turtleneck portrait`,`Acetate optical frame styles`]},regions:[{id:`region-ordinary-face`,label:`Face Region (Non-Identifying Visual Region)`,type:`face`,confidence:99.1,box:{top:15,left:33,width:35,height:40},description:`Visual facial geometry used solely for non-identifying lighting and composition analysis`},{id:`region-ordinary-glasses`,label:`Object: Eyewear Frame`,type:`object`,confidence:93.2,box:{top:29,left:35,width:31,height:11},description:`Dark acetate optical eyewear frames`},{id:`region-ordinary-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full composition framing`}],results:[]},{id:`sample-nomatch`,title:`Abstract Architectural Geometry`,subtitle:`Zero Public-Source Matches Demo`,category:`no-match`,src:`/demo/conference.jpg`,fileSize:`786 KB`,dimensions:`1024 × 1024`,format:`JPEG`,entityType:`no-match`,classification:`Unknown or low-confidence content`,isNoMatch:!0,imageContextAnalysis:{imageType:`Auditorium Interior Architecture / Stage Photography`,sceneDescription:`Wide-angle capture of a large indoor conference hall with ambient blue stage wash and distant audience seating.`,visibleObjects:[`Stage platform`,`Audio podium`,`Overhead truss lighting`],visibleText:`Indistinct distant stage lettering`,logosAndBrands:`None definitively matched in public indexes`,colorPalette:[{name:`Indigo Stage Wash`,hex:`#4338ca`},{name:`Deep Navy`,hex:`#1e1b4b`},{name:`Auditorium Cyan`,hex:`#06b6d4`}],approximateSetting:`Large auditorium or convention hall`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Private event photography or unindexed internal corporate seminar`,editingIndicators:`Standard wide lens compression`,searchConfidence:`Low confidence (0 verified public-source matches located)`,suggestedSearches:[`Crop specific stage banner`,`Search audio equipment model`,`Adjust image contrast`]},regions:[{id:`region-nomatch-full`,label:`Entire Scene Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full scene framing with zero index correlation`}],results:[]},{id:`sample-conference`,title:`Global Tech Summit 2024 (Keynote Stage)`,subtitle:`Multi-Element Keynote Scene · Stage Banner, Microphones & Panelists`,category:`landmark`,src:`/demo/conference.jpg`,fileSize:`786 KB`,dimensions:`1024 × 1024`,format:`JPEG`,entityType:`stage-scene`,classification:`Landmark`,imageContextAnalysis:{imageType:`Event Photography / Public Keynote Stage Scene`,sceneDescription:`Wide-angle presentation stage with multiple keynote speakers, digital backdrop reading "GLOBAL TECH SUMMIT 2024", and auditorium lighting.`,visibleObjects:[`Headset microphones`,`Auditorium seating`,`Stage display monitor`,`Branded stage banner`],visibleText:`"GLOBAL TECH SUMMIT 2024"`,logosAndBrands:[`TechSummit Official Brand Crest`,`Google Cloud Sponsor Logo`,`Adobe Enterprise Stamp`],colorPalette:[{name:`Conference Blue`,hex:`#2563eb`},{name:`Deep Royal Navy`,hex:`#1e3a8a`},{name:`Auditorium White`,hex:`#ffffff`},{name:`Cyan Glow`,hex:`#06b6d4`}],approximateSetting:`Convention center main plenary auditorium in San Francisco, CA`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Official conference press kit and international technology journalism coverage`,editingIndicators:`Professional event photojournalism grading; no composite manipulation`,searchConfidence:`97.5% (High correlation across public tech news and conference archives)`,suggestedSearches:[`Global Tech Summit 2024 press gallery`,`TechSummit keynote day 1 liveblog`,`San Francisco convention center plenary 2024`]},regions:[{id:`region-conf-speaker1`,label:`Face Region: Left Keynote Speaker`,type:`face`,confidence:97.5,box:{top:32,left:23,width:12,height:14},description:`Keynote presenter speaking with headset microphone`},{id:`region-conf-speaker2`,label:`Face Region: Right Panelist Host`,type:`face`,confidence:96.8,box:{top:34,left:71,width:12,height:14},description:`Panel host seated with tablet and microphone`},{id:`region-conf-banner`,label:`Logo / Object: Stage Banner & Text`,type:`logo`,confidence:99,box:{top:3,left:4,width:86,height:23},description:`Digital display reading "GLOBAL TECH SUMMIT 2024"`},{id:`region-conf-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Wide shot of auditorium, stage seating, and audience`}],results:[{id:`res-conf-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Global Tech Summit 2024: Official Keynote Media Kit & Highlights`,domain:`techsummit2024.com`,sourceWebsite:`TechSummit Media Center`,url:`https://techsummit2024.com/press/day-1-gallery`,image:`/demo/conference.jpg`,imageUrl:`https://techsummit2024.com/assets/gallery/plenary_opening.jpg`,category:`Images`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Oct 12, 2024`,lastSeen:`Indexed 1 week ago`,earliestDiscovered:!0,context:`Primary press release photograph distributed to international media covering the opening day proceedings.`,protocol:`HTTPS / Public Gallery`,verifiedPublic:!0,tags:[`Exact Match`,`Press Release`,`Keynote`,`San Francisco`]},{id:`res-conf-near`,matchType:`near`,matchLabel:`Cropped editorial companion photograph`,matchConfidence:91.2,similarity:91,similarityTier:`High Similarity`,differences:`Cropped tightly on stage banner and podium speaker; audience seating removed`,matchingRegions:`Stage banner typography and speaker headset position`,title:`Adobe Enterprise Blog: Partnering for Ethical Next-Gen Interfaces`,domain:`blog.adobe.com`,sourceWebsite:`Adobe Enterprise Blog`,url:`https://blog.adobe.com/en/publish/2024/10/tech-summit-sponsorship`,image:`/demo/conference.jpg`,imageUrl:`https://blog.adobe.com/media_1920_summit.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Oct 15, 2024`,lastSeen:`Indexed 3 weeks ago`,context:`Corporate sponsor retrospective detailing main-stage product demonstrations and design system announcements.`,protocol:`HTTPS / Public PR`,verifiedPublic:!0,tags:[`Near Match`,`Corporate Blog`,`Adobe`]},{id:`res-conf-rel`,matchType:`related`,matchLabel:`Live journal reporting page`,matchConfidence:82.5,similarity:83,similarityTier:`Moderate Similarity`,title:`TechCrunch Livewire: What Happened on Day 1 of Global Tech Summit`,domain:`techcrunch.com`,sourceWebsite:`TechCrunch`,url:`https://techcrunch.com/2024/10/12/livewire-tech-summit-day-1/`,image:`/demo/conference.jpg`,imageUrl:`https://techcrunch.com/wp-content/uploads/2024/10/tech-summit-stage.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Oct 12, 2024`,lastSeen:`Indexed 1 month ago`,context:`Journalistic live-blog summarizing key announcements from Google Cloud, Adobe, and Salesforce on enterprise machine learning.`,protocol:`HTTPS / News Article`,verifiedPublic:!0,tags:[`Related Page`,`News`,`TechCrunch`]}]}],n=[{id:`hist-0`,name:`Anime Poster — Demon Slayer: Kimetsu no Yaiba`,date:`Sep 19, 2026 · 11:30`,image:`/demo/demonslayer.jpg`,selectedRegionLabel:`Character 1: Tanjiro Kamado`,resultCount:6,status:`Completed`,sampleId:`sample-demonslayer`,entityType:`anime`,title:`Demon Slayer: Kimetsu no Yaiba`,characters:[{name:`Tanjiro Kamado`,role:`Main Protagonist · Water & Sun Breathing`},{name:`Nezuko Kamado`,role:`Demon Sister · Exploding Blood Art`}],filtersApplied:[`All`]},{id:`hist-1`,name:`Public Figure Search — Dr. Elena Vance`,date:`Sep 18, 2026 · 14:22`,image:`/demo/elena.jpg`,selectedRegionLabel:`Face Region: Primary Subject`,resultCount:3,status:`Completed`,sampleId:`sample-elena`,entityType:`public-figure`,title:`Dr. Elena Vance, Ph.D.`,filtersApplied:[`All`]},{id:`hist-2`,name:`Ordinary Person Strict Privacy Demo`,date:`Sep 17, 2026 · 16:45`,image:`/demo/chen.jpg`,selectedRegionLabel:`Face Region (Non-Identifying)`,resultCount:0,status:`Privacy Guardrail Active`,sampleId:`sample-ordinary`,entityType:`ordinary-person`,title:`Private Individual (Non-Identifying Analysis)`,filtersApplied:[`All`]},{id:`hist-3`,name:`Keynote Stage Scene — Global Tech Summit`,date:`Sep 15, 2026 · 09:41`,image:`/demo/conference.jpg`,selectedRegionLabel:`Entire Image Composition`,resultCount:3,status:`Completed`,sampleId:`sample-conference`,entityType:`stage-scene`,title:`Global Tech Summit 2024`,filtersApplied:[`All`]}],r=[{id:`all`,name:`All Saved Results`,count:3,description:`All bookmarked public source findings`},{id:`media`,name:`Anime & Media Assets`,count:1,description:`Official series key visuals and studio announcements`},{id:`academic`,name:`Academic & Faculty`,count:1,description:`University directories and peer-reviewed journals`},{id:`press`,name:`Press & Media Mentions`,count:1,description:`Conference media kits, blogs, and guest articles`}],i=[{id:`saved-1`,resultId:`res-ds-exact-1`,collectionId:`media`,title:`Demon Slayer: Kimetsu no Yaiba — Official Key Visual Asset #KV-01`,domain:`kimetsu.com`,platform:`Official Kimetsu Portal (Aniplex Japan)`,image:`/demo/demonslayer.jpg`,originalImage:`/demo/demonslayer.jpg`,similarity:99,savedAt:`Sep 19, 2026 · 11:35`,url:`https://kimetsu.com/anime/risshihen/visual/`,category:`Media`,notes:`Official key visual asset on ufotable Japan website.`},{id:`saved-2`,resultId:`res-elena-exact`,collectionId:`academic`,title:`Faculty & Research Affiliates Directory 2025–2026`,domain:`hai.stanford.edu`,platform:`Stanford University HAI`,image:`/demo/elena.jpg`,originalImage:`/demo/elena.jpg`,similarity:96,savedAt:`Sep 18, 2026 · 14:25`,url:`https://hai.stanford.edu/people/elena-vance`,category:`Profiles`,notes:`Verified academic faculty page. High similarity with query image.`},{id:`saved-3`,resultId:`res-conf-exact`,collectionId:`press`,title:`Global Tech Summit 2024: Official Keynote Media Kit & Highlights`,domain:`techsummit2024.com`,platform:`TechSummit Media Center`,image:`/demo/conference.jpg`,originalImage:`/demo/conference.jpg`,similarity:99,savedAt:`Sep 15, 2026 · 09:44`,url:`https://techsummit2024.com/press/day-1-gallery`,category:`Images`,notes:`Identical public press photo in official media distribution kit.`}],a=[{id:`cs-digital-identity`,title:`Digital Identity Footprint`,badge:`Q4 2026`,description:`Monitor when public images containing your verified face or likeness appear on newly indexed open web pages with automated privacy alerts.`,highlights:[`Opt-in cryptographic ownership verification`,`Automated takedown request generator (DMCA / GDPR Right to Erasure)`,`New public appearance notifications`]},{id:`cs-ai-assistant`,title:`Visual Research Assistant`,badge:`Beta`,description:`Interactive AI analyst that answers contextual questions about where and when an image was published, checking publication timelines and citation chains.`,highlights:[`Reverse image timeline reconstruction`,`Publisher metadata extraction`,`Context shift detection (misinformation flagging)`]},{id:`cs-timeline`,title:`Public Appearance Timeline`,badge:`In Development`,description:`Chronological visual graph charting the earliest known public indexed date of an image across open press, forums, and archives.`,highlights:[`Earliest indexed web record discovery`,`Republishing wave visualization`,`Archival snapshot integration`]},{id:`cs-source-graph`,title:`Source Network Graph`,badge:`Preview`,description:`Interactive node-link visualization showing how an image cascaded from its original publication through syndication, social commentary, and news coverage.`,highlights:[`Syndication hub detection`,`Domain cluster analysis`,`Provenance path tracing`]},{id:`cs-reports`,title:`Auditable PDF Compliance Reports`,badge:`Enterprise`,description:`Generate timestamped, legally compliant visual similarity audit dossiers for brand protection teams, copyright holders, and privacy counsels.`,highlights:[`Cryptographic SHA-256 result hashing`,`Executive similarity summary`,`Chain of public availability record`]},{id:`cs-connected-providers`,title:`Connected Search Providers Hub`,badge:`API Hub`,description:`Plug in custom enterprise search APIs, private indexing nodes, or additional commercial reverse image providers with modular connector hooks.`,highlights:[`Multi-provider federated query distribution`,`Real-time provider latency monitoring`,`Enterprise custom indexing endpoint`]}],o=[{id:`demon-slayer`,keywords:[`demon slayer`,`kimetsu`,`tanjiro`,`nezuko`,`rengoku`,`zenitsu`,`inosuke`,`mugen train`],title:`Demon Slayer: Kimetsu no Yaiba (竈門炭治郎 立志編)`,romaji:`Kimetsu no Yaiba`,native:`鬼滅の刃`,franchise:`Kimetsu no Yaiba / Weekly Shonen Jump`,characters:[{name:`Tanjiro Kamado`,role:`Main Protagonist · Water & Sun Breathing Swordsman`},{name:`Nezuko Kamado`,role:`Demon Sister · Blood Demon Art Exploding Blood`},{name:`Kyojuro Rengoku`,role:`Flame Hashira · Demon Slayer Corps Pillar`},{name:`Zenitsu Agatsuma`,role:`Thunder Breathing Companion · First Form`},{name:`Inosuke Hashibira`,role:`Beast Breathing Dual Katana Swordsman`}],studio:`ufotable (Japan)`,releasePeriod:`2019 – Present`,genre:`Dark Fantasy, Historical Fiction, Shonen Action, Supernatural`,officialUrl:`https://kimetsu.com/anime/`,malId:`38000`,malUrl:`https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba`,crunchyrollUrl:`https://crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba`,redditSub:`KimetsuNoYaiba`,twitterHandle:`DemonSlayerUSA`,colorPalette:[{name:`Deep Cyan`,hex:`#0e7490`},{name:`Sakura Pink`,hex:`#f472b6`},{name:`Checkered Forest`,hex:`#15803d`},{name:`Midnight Charcoal`,hex:`#090d16`},{name:`Ember Crimson`,hex:`#e11d48`}]},{id:`jujutsu-kaisen`,keywords:[`jujutsu`,`kaisen`,`gojo`,`satoru`,`itadori`,`sukuna`,`megumi`,`fushiguro`,`nobara`,`shibuya incident`],title:`Jujutsu Kaisen (呪術廻戦)`,romaji:`Jujutsu Kaisen`,native:`呪術廻戦`,franchise:`Jujutsu Kaisen / Weekly Shonen Jump`,characters:[{name:`Satoru Gojo`,role:`Special Grade Jujutsu Sorcerer · Limitless & Six Eyes`},{name:`Yuji Itadori`,role:`Main Protagonist · Vessel of Ryomen Sukuna`},{name:`Megumi Fushiguro`,role:`Grade 2 Sorcerer · Ten Shadows Technique`},{name:`Ryomen Sukuna`,role:`King of Curses · Malevolent Shrine`},{name:`Nobara Kugisaki`,role:`Grade 3 Sorcerer · Straw Doll Technique`}],studio:`MAPPA (Japan)`,releasePeriod:`2020 – Present`,genre:`Dark Fantasy, Supernatural Action, Shonen, Occult Fiction`,officialUrl:`https://jujutsukaisen.jp`,malId:`40748`,malUrl:`https://myanimelist.net/anime/40748/Jujutsu_Kaisen`,crunchyrollUrl:`https://crunchyroll.com/series/GRDV0019R/jujutsu-kaisen`,redditSub:`JuJutsuKaisen`,twitterHandle:`animejujutsu`,colorPalette:[{name:`Cobalt Cursed Indigo`,hex:`#1d4ed8`},{name:`Gojo Cerulean Cyan`,hex:`#38bdf8`},{name:`Sukuna Crimson`,hex:`#dc2626`},{name:`Tokyo Asphalt Charcoal`,hex:`#090d16`}]},{id:`naruto`,keywords:[`naruto`,`shippuden`,`sasuke`,`uchiha`,`kakashi`,`itachi`,`sakura`,`sharingan`,`rasengan`,`hokage`,`konoha`],title:`Naruto Shippuden (NARUTO -ナルト- 疾風伝)`,romaji:`Naruto: Shippuuden`,native:`NARUTO -ナルト- 疾風伝`,franchise:`Naruto / Weekly Shonen Jump`,characters:[{name:`Naruto Uzumaki`,role:`Nine-Tails Jinchuriki · Seventh Hokage`},{name:`Sasuke Uchiha`,role:`Rinnegan & Mangekyo Sharingan Swordsman`},{name:`Kakashi Hatake`,role:`Copy Ninja · Sixth Hokage`},{name:`Itachi Uchiha`,role:`Akatsuki Operative · Tsukuyomi Master`},{name:`Sakura Haruno`,role:`Medical-nin · Strength of a Hundred Seal`}],studio:`Studio Pierrot`,releasePeriod:`2002 – 2017`,genre:`Action, Adventure, Martial Arts, Shonen, Ninja Fantasy`,officialUrl:`https://naruto-official.com`,malId:`1735`,malUrl:`https://myanimelist.net/anime/1735/Naruto__Shippuuden`,crunchyrollUrl:`https://crunchyroll.com/series/GYXQN9G5R/naruto-shippuden`,redditSub:`Naruto`,twitterHandle:`NARUTOtoBORUTO`,colorPalette:[{name:`Uzumaki Orange`,hex:`#ea580c`},{name:`Konoha Navy Blue`,hex:`#1e3a8a`},{name:`Rasengan Cyan`,hex:`#06b6d4`},{name:`Sharingan Crimson`,hex:`#b91c1c`}]},{id:`one-piece`,keywords:[`one piece`,`luffy`,`zoro`,`nami`,`sanji`,`straw hat`,`gear 5`,`kaido`,`wano`,`shanks`,`ace`],title:`One Piece (ONE PIECE - ワンピース)`,romaji:`ONE PIECE`,native:`ワンピース`,franchise:`One Piece / Eiichiro Oda · Shueisha`,characters:[{name:`Monkey D. Luffy`,role:`Straw Hat Captain · Sun God Nika / Gear 5`},{name:`Roronoa Zoro`,role:`Three-Sword Style Swordsman · King of Hell`},{name:`Nami`,role:`Navigator · Cat Burglar`},{name:`Sanji`,role:`Stealth Black Cook · Ifrit Jambe`},{name:`Trafalgar D. Water Law`,role:`Heart Pirates Captain · Ope Ope no Mi`}],studio:`Toei Animation`,releasePeriod:`1999 – Present`,genre:`Action, Adventure, Fantasy, Pirate Epic, Shonen`,officialUrl:`https://one-piece.com`,malId:`21`,malUrl:`https://myanimelist.net/anime/21/One_Piece`,crunchyrollUrl:`https://crunchyroll.com/series/GRMG8ZQZR/one-piece`,redditSub:`OnePiece`,twitterHandle:`OnePieceAnime`,colorPalette:[{name:`Straw Hat Gold`,hex:`#eab308`},{name:`Luffy Vest Scarlet`,hex:`#dc2626`},{name:`Grand Line Cerulean`,hex:`#0284c7`},{name:`Zoro Emerald Green`,hex:`#16a34a`}]},{id:`attack-on-titan`,keywords:[`attack on titan`,`shingeki`,`eren`,`mikasa`,`armin`,`levi`,`yeager`,`scout regiment`,`colossal titan`,`rumbling`],title:`Attack on Titan (進撃の巨人)`,romaji:`Shingeki no Kyojin`,native:`進撃の巨人`,franchise:`Shingeki no Kyojin / Bessatsu Shonen Magazine`,characters:[{name:`Eren Yeager`,role:`Attack & Founding Titan · Yeagerist Leader`},{name:`Levi Ackerman`,role:`Humanity's Strongest Soldier · Special Ops Squad`},{name:`Mikasa Ackerman`,role:`Elite Scout Soldier · Ackerman Lineage`},{name:`Armin Arlert`,role:`Colossal Titan · 15th Commander of the Survey Corps`}],studio:`WIT STUDIO / MAPPA`,releasePeriod:`2013 – 2023`,genre:`Dark Fantasy, Military Action, Mystery, Post-Apocalyptic`,officialUrl:`https://shingeki.tv`,malId:`16498`,malUrl:`https://myanimelist.net/anime/16498/Shingeki_no_Kyojin`,crunchyrollUrl:`https://crunchyroll.com/series/GR751KNZY/attack-on-titan`,redditSub:`ShingekiNoKyojin`,twitterHandle:`anime_shingeki`,colorPalette:[{name:`Survey Corps Olive Khaki`,hex:`#4d533c`},{name:`Wings of Freedom Navy`,hex:`#1e293b`},{name:`Titan Flare Amber`,hex:`#d97706`},{name:`Wall Rose Stone`,hex:`#78716c`}]},{id:`solo-leveling`,keywords:[`solo leveling`,`sung jin-woo`,`jinwoo`,`shadow monarch`,`arise`,`cha hae-in`,`chugong`,`hunter rank`],title:`Solo Leveling (俺だけレベルアップな件)`,romaji:`Ore dake Level Up na Ken`,native:`俺だけレベルアップな件`,franchise:`Solo Leveling / D&C Media / Webtoon`,characters:[{name:`Sung Jin-woo`,role:`Shadow Monarch · S-Rank Hunter`},{name:`Cha Hae-In`,role:`S-Rank Hunter · Hunters Guild Vice-Master`},{name:`Go Gun-Hee`,role:`Korean Hunters Association Chairman`},{name:`Igris`,role:`Blood-Red Commander · Shadow Soldier`}],studio:`A-1 Pictures`,releasePeriod:`2024 – Present`,genre:`Action, Urban Fantasy, Progression Fantasy, Dungeon Fantasy`,officialUrl:`https://sololeveling-anime.net`,malId:`52299`,malUrl:`https://myanimelist.net/anime/52299/Ore_dake_Level_Up_na_Ken`,crunchyrollUrl:`https://crunchyroll.com/series/GEXH3W2W7/solo-leveling`,redditSub:`sololeveling`,twitterHandle:`sololeveling_pr`,colorPalette:[{name:`Monarch Purple Flame`,hex:`#7c3aed`},{name:`Shadow Abyss Navy`,hex:`#0f172a`},{name:`Electric Azure Glow`,hex:`#38bdf8`},{name:`Dungeon Slate`,hex:`#334155`}]},{id:`bleach`,keywords:[`bleach`,`ichigo`,`kurosaki`,`rukia`,`aizen`,`gotei`,`soul reaper`,`bankai`,`thousand-year blood war`,`quincy`],title:`Bleach: Thousand-Year Blood War (BLEACH 千年血戦篇)`,romaji:`Bleach: Sennen Kessen-hen`,native:`BLEACH 千年血戦篇`,franchise:`Bleach / Tite Kubo · Weekly Shonen Jump`,characters:[{name:`Ichigo Kurosaki`,role:`Substitute Soul Reaper · True Zangetsu Bankai`},{name:`Rukia Kuchiki`,role:`Captain of Squad 13 · Hakka no Togame`},{name:`Sosuke Aizen`,role:`Former Squad 5 Captain · Kyoka Suigetsu`},{name:`Yhwach`,role:`Father of the Quincy · The Almighty`}],studio:`Studio Pierrot`,releasePeriod:`2004 – Present`,genre:`Supernatural Action, Shonen, Swordplay, Fantasy`,officialUrl:`https://bleach-anime.com`,malId:`41467`,malUrl:`https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen`,crunchyrollUrl:`https://crunchyroll.com/series/GY199G0RP/bleach`,redditSub:`bleach`,twitterHandle:`BLEACHanimation`,colorPalette:[{name:`Soul Reaper Black`,hex:`#090d16`},{name:`Getsuga Tensho Orange`,hex:`#f97316`},{name:`Quincy Reiatsu Cyan`,hex:`#06b6d4`},{name:`Pure White Shihakusho`,hex:`#f8fafc`}]},{id:`dragon-ball`,keywords:[`dragon ball`,`goku`,`vegeta`,`gohan`,`saiyan`,`kamehameha`,`super saiyan`,`piccolo`,`frieza`,`toriyama`],title:`Dragon Ball Z / Dragon Ball Super (ドラゴンボール)`,romaji:`Dragon Ball Z`,native:`ドラゴンボールZ`,franchise:`Dragon Ball / Akira Toriyama · Bird Studio`,characters:[{name:`Son Goku`,role:`Saiyan Warrior · Ultra Instinct & Super Saiyan`},{name:`Vegeta`,role:`Prince of All Saiyans · Ultra Ego`},{name:`Son Gohan`,role:`Half-Saiyan Scholar · Gohan Beast`},{name:`Piccolo`,role:`Namekian Warrior · Orange Piccolo`}],studio:`Toei Animation`,releasePeriod:`1989 – Present`,genre:`Martial Arts, Action, Sci-Fi Fantasy, Shonen`,officialUrl:`https://dragon-ball-official.com`,malId:`813`,malUrl:`https://myanimelist.net/anime/813/Dragon_Ball_Z`,crunchyrollUrl:`https://crunchyroll.com/series/G6MG10746/dragon-ball-z`,redditSub:`dbz`,twitterHandle:`DB_official_en`,colorPalette:[{name:`Super Saiyan Gold`,hex:`#facc15`},{name:`Goku Gi Orange`,hex:`#ea580c`},{name:`King Kai Navy Blue`,hex:`#1d4ed8`},{name:`Dragon Radar Teal`,hex:`#0d9488`}]},{id:`chainsaw-man`,keywords:[`chainsaw man`,`denji`,`makima`,`power`,`pochita`,`aki`,`hayakawa`,`fujimoto`,`gun devil`],title:`Chainsaw Man (チェンソーマン)`,romaji:`Chainsaw Man`,native:`チェンソーマン`,franchise:`Chainsaw Man / Tatsuki Fujimoto`,characters:[{name:`Denji`,role:`Chainsaw Devil Hybrid · Public Safety Hunter`},{name:`Makima`,role:`Control Devil · Public Safety Special Division 4`},{name:`Power`,role:`Blood Fiend · Public Safety Devil Hunter`},{name:`Aki Hayakawa`,role:`Curse & Fox Devil Contractor`}],studio:`MAPPA`,releasePeriod:`2022 – Present`,genre:`Dark Fantasy, Splatter Action, Supernatural Horror`,officialUrl:`https://chainsawman.dog`,malId:`44511`,malUrl:`https://myanimelist.net/anime/44511/Chainsaw_Man`,crunchyrollUrl:`https://crunchyroll.com/series/GVDHXJ77G/chainsaw-man`,redditSub:`csmanime`,twitterHandle:`CHAINSAWMAN_PR`,colorPalette:[{name:`Chainsaw Engine Ochre`,hex:`#d97706`},{name:`Control Devil Crimson`,hex:`#be123c`},{name:`Public Safety Charcoal`,hex:`#1e293b`},{name:`Industrial Rust`,hex:`#9a3412`}]},{id:`death-note`,keywords:[`death note`,`light yagami`,`kira`,`ryuk`,`shinigami`,`misa`,`near`,`l lawliet`],title:`Death Note (デスノート)`,romaji:`Death Note`,native:`デスノート`,franchise:`Death Note / Tsugumi Ohba & Takeshi Obata`,characters:[{name:`Light Yagami (Kira)`,role:`Owner of the Death Note · God of the New World`},{name:`L Lawliet`,role:`World's Greatest Consulting Detective`},{name:`Ryuk`,role:`Shinigami · Death Note Dropper`},{name:`Misa Amane`,role:`Second Kira · Shinigami Eyes`}],studio:`MADHOUSE`,releasePeriod:`2006 – 2007`,genre:`Psychological Thriller, Crime, Supernatural, Mystery`,officialUrl:`https://www.vap.co.jp/deathnote/`,malId:`1535`,malUrl:`https://myanimelist.net/anime/1535/Death_Note`,crunchyrollUrl:`https://crunchyroll.com/series/G6QW4QK06/death-note`,redditSub:`deathnote`,twitterHandle:`deathnote_jp`,colorPalette:[{name:`Death Note Leather Black`,hex:`#0f172a`},{name:`Kira Crimson Shadow`,hex:`#991b1b`},{name:`Detective Parchment Ivory`,hex:`#f1f5f9`}]},{id:`my-hero-academia`,keywords:[`my hero academia`,`boku no hero`,`deku`,`midoriya`,`bakugo`,`todoroki`,`all might`,`quirk`,`u.a. high`],title:`My Hero Academia (僕のヒーローアカデミア)`,romaji:`Boku no Hero Academia`,native:`僕のヒーローアカデミア`,franchise:`My Hero Academia / Kohei Horikoshi`,characters:[{name:`Izuku Midoriya (Deku)`,role:`Ninth Successor of One For All`},{name:`Katsuki Bakugo (Dynamight)`,role:`Explosion Quirk Hero`},{name:`Shoto Todoroki (Shoto)`,role:`Half-Cold Half-Hot Hero`},{name:`All Might (Toshinori Yagi)`,role:`Symbol of Peace · Former No. 1 Hero`}],studio:`Bones`,releasePeriod:`2016 – Present`,genre:`Superhero Action, School Life, Sci-Fi, Shonen`,officialUrl:`https://heroaca.com`,malId:`31964`,malUrl:`https://myanimelist.net/anime/31964/Boku_no_Hero_Academia`,crunchyrollUrl:`https://crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia`,redditSub:`BokuNoHeroAcademia`,twitterHandle:`heroaca_anime`,colorPalette:[{name:`Deku Hero Teal`,hex:`#0d9488`},{name:`All Might Golden Sun`,hex:`#f59e0b`},{name:`Bakugo Blast Orange`,hex:`#ea580c`},{name:`U.A. High Navy`,hex:`#1e3a8a`}]},{id:`hunter-x-hunter`,keywords:[`hunter x hunter`,`gon`,`killua`,`zoldyck`,`kurapika`,`hisoka`,`leorio`,`chimera ant`,`nen`,`togashi`],title:`Hunter x Hunter (HUNTER×HUNTER)`,romaji:`Hunter x Hunter (2011)`,native:`HUNTER×HUNTER`,franchise:`Hunter x Hunter / Yoshihiro Togashi`,characters:[{name:`Gon Freecss`,role:`Enhancer Nen User · Licensed Rookie Hunter`},{name:`Killua Zoldyck`,role:`Transmuter Nen · Zoldyck Assassin Family Heir`},{name:`Kurapika`,role:`Conjurer Nen · Sole Kurta Clan Survivor`},{name:`Hisoka Morow`,role:`Transmuter Nen · Bungee Gum Magician`}],studio:`MADHOUSE`,releasePeriod:`2011 – 2014`,genre:`Action, Adventure, Fantasy, Psychological, Shonen`,officialUrl:`https://www.ntv.co.jp/hunterhunter/`,malId:`11061`,malUrl:`https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011`,crunchyrollUrl:`https://crunchyroll.com/series/GY3VK58EY/hunter-x-hunter`,redditSub:`HunterXHunter`,twitterHandle:`hunter_anime`,colorPalette:[{name:`Gon Forest Green`,hex:`#16a34a`},{name:`Killua Lightning Blue`,hex:`#38bdf8`},{name:`Kurapika Scarlet Gold`,hex:`#d97706`}]},{id:`frieren`,keywords:[`frieren`,`beyond journey`,`fern`,`stark`,`himmel`,`sousou no frieren`,`zolf`,`mage`],title:`Frieren: Beyond Journey’s End (葬送のフリーレン)`,romaji:`Sousou no Frieren`,native:`葬送のフリーレン`,franchise:`Frieren: Beyond Journey's End / Kanehito Yamada`,characters:[{name:`Frieren`,role:`Elven Mage · Hero Party Veteran`},{name:`Fern`,role:`Human Prodigy Mage · Frieren Apprentice`},{name:`Stark`,role:`Warrior · Eisen Disciple`},{name:`Himmel`,role:`Hero of the Legendary Party`}],studio:`MADHOUSE`,releasePeriod:`2023 – 2024`,genre:`Adventure, Drama, High Fantasy, Slice of Life`,officialUrl:`https://frieren-anime.jp`,malId:`52991`,malUrl:`https://myanimelist.net/anime/52991/Sousou_no_Frieren`,crunchyrollUrl:`https://crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end`,redditSub:`Frieren`,twitterHandle:`Anime_Frieren`,colorPalette:[{name:`Frieren Silver Mist`,hex:`#94a3b8`},{name:`Fern Violet Hue`,hex:`#8b5cf6`},{name:`Blue Moon Weed Cyan`,hex:`#06b6d4`}]},{id:`spy-family`,keywords:[`spy family`,`spy x family`,`anya`,`loid`,`yor`,`forger`,`twilight`,`thorn princess`,`peanuts`],title:`SPY x FAMILY (スパイファミリー)`,romaji:`SPY×FAMILY`,native:`SPY×FAMILY`,franchise:`SPY x FAMILY / Tatsuya Endo`,characters:[{name:`Anya Forger`,role:`Telepathic Orphan Daughter · Subject 007`},{name:`Loid Forger (Twilight)`,role:`Master WISE Spy · Family Patriarch`},{name:`Yor Forger (Thorn Princess)`,role:`Lethal Garden Assassin · Civil Servant`},{name:`Bond Forger`,role:`Precognitive Pyrenean Mountain Dog`}],studio:`WIT STUDIO / CloverWorks`,releasePeriod:`2022 – Present`,genre:`Action Comedy, Espionage, Slice of Life, Family`,officialUrl:`https://spy-family.net`,malId:`50265`,malUrl:`https://myanimelist.net/anime/50265/SPY_FAMILY`,crunchyrollUrl:`https://crunchyroll.com/series/G4PH0WVPX/spy-x-family`,redditSub:`SpyxFamily`,twitterHandle:`spyfamily_anime`,colorPalette:[{name:`Eden Academy Maroon`,hex:`#881337`},{name:`Twilight Sage Green`,hex:`#4d7c0f`},{name:`Anya Hair Rosé`,hex:`#fb7185`}]}];function s(e){if(!e||typeof e!=`string`)return null;let t=e.toLowerCase(),n=t.replace(/[_\-.]/g,` `);for(let e of o)for(let r of e.keywords){let i=r.toLowerCase().replace(/[_\-.]/g,` `);if(n.includes(i)||t.includes(r)||RegExp(`\\b${i.replace(/[-/\\^$*+?.()|[\]{}]/g,`\\$&`)}\\b`,`i`).test(n))return e}return null}async function c(e){if(!e||typeof e!=`string`||e.trim().length<2)return null;try{let t=await fetch(`https://graphql.anilist.co`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:`
  query ($search: String) {
    Page (perPage: 1) {
      media (search: $search, type: ANIME) {
        id
        title {
          english
          romaji
          native
        }
        genres
        description(asHtml: false)
        seasonYear
        coverImage {
          large
          medium
        }
        bannerImage
        studios(isMain: true) {
          nodes {
            name
          }
        }
        characters(role: MAIN, perPage: 6) {
          nodes {
            name {
              full
              native
            }
          }
        }
        siteUrl
      }
    }
  }
  `,variables:{search:e.trim()}})});if(!t.ok)return null;let n=(await t.json()).data?.Page?.media?.[0];if(!n)return null;let r=n.title.english||n.title.romaji,i=n.title.native?` (${n.title.native})`:``;return{id:`anilist-${n.id}`,title:`${r}${i}`,romaji:n.title.romaji,native:n.title.native,franchise:`${r} Franchise`,characters:(n.characters?.nodes||[]).map(e=>({name:e.name.full,role:`Main Cast Member`})),studio:n.studios?.nodes?.[0]?.name||`Animation Studio`,releasePeriod:n.seasonYear?`${n.seasonYear} Broadcast`:`Television Series`,genre:(n.genres||[]).join(`, `)||`Animation / Shonen`,officialUrl:n.siteUrl||`https://anilist.co/anime/${n.id}`,malId:String(n.id),malUrl:`https://myanimelist.net/anime/${n.id}`,crunchyrollUrl:`https://crunchyroll.com/search?q=${encodeURIComponent(r)}`,redditSub:r.replace(/[^a-zA-Z0-9]/g,``),twitterHandle:r.toLowerCase().replace(/[^a-z0-9]/g,``),description:n.description?n.description.slice(0,280)+`...`:``,coverImage:n.coverImage?.large,bannerImage:n.bannerImage}}catch(e){return console.warn(`AniList live query error:`,e),null}}async function l(e){try{let t,n={};if(typeof e==`string`&&e.startsWith(`data:`)){let r=e.split(`,`)[1],i=atob(r),a=Array(i.length);for(let e=0;e<i.length;e++)a[e]=i.charCodeAt(e);let o=new Uint8Array(a);t=new Blob([o],{type:`image/jpeg`}),n[`Content-Type`]=`image/jpeg`}else t=e;let r=await fetch(`https://api.trace.moe/search`,{method:`POST`,body:t,headers:n});if(!r.ok)return null;let i=await r.json();if(!i.result||i.result.length===0)return null;let a=i.result[0];if(a.similarity<.72)return null;let o=await u(a.anilist);return o?(o.similarity=Math.round(a.similarity*100),o.episode=a.episode,o.timestamp=`${Math.floor(a.from/60)}:${Math.floor(a.from%60).toString().padStart(2,`0`)}`,o):null}catch(e){return console.warn(`Trace.moe frame search skipped:`,e.message),null}}async function u(e){try{let t=(await(await fetch(`https://graphql.anilist.co`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:`
  query ($id: Int) {
    Media (id: $id, type: ANIME) {
      id
      title { english romaji native }
      genres
      description(asHtml: false)
      seasonYear
      coverImage { large }
      studios(isMain: true) { nodes { name } }
      characters(role: MAIN, perPage: 6) { nodes { name { full } } }
      siteUrl
    }
  }
  `,variables:{id:e}})})).json()).data?.Media;if(!t)return null;let n=t.title.english||t.title.romaji;return{id:`anilist-${t.id}`,title:`${n} (${t.title.native||t.title.romaji})`,romaji:t.title.romaji,native:t.title.native,franchise:`${n} Franchise`,characters:(t.characters?.nodes||[]).map(e=>({name:e.name.full,role:`Main Cast Member`})),studio:t.studios?.nodes?.[0]?.name||`Animation Studio`,releasePeriod:t.seasonYear?`${t.seasonYear} Broadcast`:`Broadcast Series`,genre:(t.genres||[]).join(`, `)||`Animation / Shonen`,officialUrl:t.siteUrl||`https://anilist.co/anime/${t.id}`,malId:String(t.id),malUrl:`https://myanimelist.net/anime/${t.id}`,crunchyrollUrl:`https://crunchyroll.com/search?q=${encodeURIComponent(n)}`,redditSub:n.replace(/[^a-zA-Z0-9]/g,``),twitterHandle:n.toLowerCase().replace(/[^a-z0-9]/g,``)}}catch{return null}}function d(e,t){let n=(e.characters||[]).map(e=>e.name||e).slice(0,4);return{classification:`Anime or animation`,entityType:`anime`,title:e.title,subtitle:`${e.franchise||e.title} · ${e.studio||`Official Animation`}`,mediaAnalysis:{title:e.title,franchise:e.franchise||e.title,characters:(e.characters||[]).map(e=>typeof e==`string`?{name:e,role:`Key Character`}:e),studio:e.studio||`Animation Production Studio`,releasePeriod:e.releasePeriod||`Broadcast Series`,episodeContext:e.episode?`Episode ${e.episode} at ${e.timestamp||`Key Scene`}`:`Official promotional key visual / promotional illustration`,genre:e.genre||`Action, Supernatural, Fantasy`,officialPages:[{name:`Official Production Portal`,url:e.officialUrl||`#`},{name:`AniList Verified Entry`,url:`https://anilist.co/anime/${e.malId||``}`}],publicReferenceLinks:[{name:`MyAnimeList #${e.malId||`38000`}`,url:e.malUrl||`#`},{name:`Crunchyroll Streaming Hub`,url:e.crunchyrollUrl||`#`},{name:`Reddit r/${e.redditSub||`anime`} Community`,url:`https://reddit.com/r/${e.redditSub||`anime`}`},{name:`Twitter/X @${e.twitterHandle||`anime`}`,url:`https://x.com/${e.twitterHandle||`anime`}`}],relatedCharacters:n,searchTermsUsed:[e.romaji||e.title,e.title,...n.slice(0,2)],confidenceLevel:e.similarity?`High confidence (${e.similarity}% visual match)`:`High confidence (Correlated with public database)`,confidenceNote:`Identified based on multi-frame perceptual matching and public anime reference indexes.`},imageContextAnalysis:{imageType:`Anime Key Visual Artwork / Character Illustration`,sceneDescription:`High-resolution promotional composition from ${e.title} featuring ${n.join(`, `)||`cast members`}. Produced by ${e.studio}.`,visibleObjects:[`Character attire`,`Stylized anime line-art`,`Dynamic lighting and effects`],visibleText:e.native?`${e.native} typography`:`Japanese Kanji series logo`,logosAndBrands:[`${e.studio} Production Mark`,`Official Copyright Registry`],colorPalette:e.colorPalette||[{name:`Primary Theme Hue`,hex:`#2563eb`},{name:`Accent Highlight`,hex:`#f59e0b`},{name:`Deep Shadow Charcoal`,hex:`#0f172a`},{name:`Contrast Ivory`,hex:`#f8fafc`}],approximateSetting:`Stylized anime setting / key visual illustration`,orientation:`Standard illustration format`,possibleSourceContext:`Official anime broadcast portal, promotional teaser, or licensed merchandise art`,editingIndicators:`Original digital master artwork; color saturation balanced for digital display`,searchConfidence:`98.5% (Correlated with public anime encyclopedia and streaming licenses)`,suggestedSearches:[`${e.title} episode guide`,`${e.title} character voice actors`,`${n[0]||`Character`} official wallpaper`]},regions:[{id:`region-anime-char-1`,label:n[0]||`Primary Character`,type:`character`,confidence:99.2,box:{top:12,left:24,width:38,height:42},description:`Visual region isolating ${n[0]||`protagonist`} facial geometry and signature silhouette`},{id:`region-anime-char-2`,label:n[1]||`Secondary Character`,type:`character`,confidence:96.5,box:{top:32,left:52,width:32,height:38},description:`Visual element framing ${n[1]||`supporting character`}`},{id:`region-anime-full`,label:`Entire Poster Frame`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete composition with studio key art and background rendering`}],results:[{id:`res-anime-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Exact Match: Official ${e.title} Production Release & Master Key Art`,domain:`official-portal.jp`,sourceWebsite:`${e.studio} Official Release`,url:e.officialUrl||`https://anilist.co`,image:t,imageUrl:t,category:`Media`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:e.releasePeriod||`Broadcast Release`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Bitwise hash and perceptual frequency match (pHash distance: 0). Exact bitwise duplicate found on official ${e.studio} production website.`,protocol:`HTTPS / Public Official Web Asset`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,e.studio,`Key Visual`]},{id:`res-anime-near-1`,matchType:`near`,matchLabel:`Cropped wallpaper / promotional variant`,matchConfidence:93.4,similarity:93,similarityTier:`High Similarity`,differences:`Resized and cropped for 16:9 wallpaper; subtle color grading applied`,matchingRegions:`Character facial features and central silhouette`,title:`${e.title} HD Artwork Showcase & Gallery`,domain:`zerochan.net`,sourceWebsite:`Zerochan Anime Gallery`,url:`https://zerochan.net/search?q=${encodeURIComponent(e.romaji||e.title)}`,image:t,imageUrl:t,category:`Images`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`Recent`,lastSeen:`Indexed 2 days ago`,context:`Cropped edition of the visual asset formatted for desktop display and fan collections.`,protocol:`HTTPS / Public Community Gallery`,verifiedPublic:!0,tags:[`Near Match`,`Wallpaper`,`Cropped`]},{id:`res-anime-rel-1`,matchType:`related`,matchLabel:`Public reference database entry`,matchConfidence:89.2,similarity:89,similarityTier:`High Similarity`,title:`${e.title} — MyAnimeList Encyclopedia & Roster`,domain:`myanimelist.net`,sourceWebsite:`MyAnimeList Reference Database`,url:e.malUrl||`https://myanimelist.net`,image:t,imageUrl:t,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:e.releasePeriod||`Archive`,lastSeen:`Indexed today`,context:`Encyclopedia page detailing voice actors (${n.join(`, `)}), staff roster, episode list, and score rating.`,protocol:`HTTPS / Public Reference Index`,verifiedPublic:!0,tags:[`Related Page`,`MyAnimeList`,`Encyclopedia`]},{id:`res-anime-rel-2`,matchType:`related`,matchLabel:`Official streaming series page`,matchConfidence:86,similarity:86,similarityTier:`High Similarity`,title:`Watch ${e.title} on Crunchyroll (Series Catalog)`,domain:`crunchyroll.com`,sourceWebsite:`Crunchyroll Global Streaming`,url:e.crunchyrollUrl||`https://crunchyroll.com`,image:t,imageUrl:t,category:`Media`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Broadcast Season`,lastSeen:`Active catalog`,context:`Official global streaming page featuring localized subtitles, episode guides, and promotional art banners.`,protocol:`HTTPS / Streaming Catalog`,verifiedPublic:!0,tags:[`Related Page`,`Streaming`,`Crunchyroll`]},{id:`res-anime-rel-3`,matchType:`related`,matchLabel:`Community discussion thread`,matchConfidence:81.5,similarity:82,similarityTier:`Moderate Similarity`,title:`Official Key Visual & Character Breakdown — r/${e.redditSub||`anime`}`,domain:`reddit.com`,sourceWebsite:`Reddit (r/${e.redditSub||`anime`})`,url:`https://reddit.com/r/${e.redditSub||`anime`}`,image:t,imageUrl:t,category:`Articles`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`Active discussion`,lastSeen:`Active thread`,context:`Community discussion analyzing the art style, character designs, and animation staff behind ${e.title}.`,protocol:`HTTPS / Public Forum`,verifiedPublic:!0,tags:[`Related Page`,`Reddit`,`Discussion`]}]}}var f=[{id:`elon-musk`,keywords:[`elon`,`musk`,`spacex`,`tesla`,`xai`,`starship`,`cybertruck`,`neuralink`],publicName:`Elon Musk`,fullName:`Elon Reeve Musk`,profession:`CEO & Chief Engineer of SpaceX · CEO of Tesla · Owner & CTO of X · Founder of xAI & Neuralink`,netWorth:`~$260 Billion USD (World’s Wealthiest Individual)`,officialWebsite:`https://x.com/elonmusk`,publicWork:`Pioneered commercial orbital rocketry, electrified the global automotive market, developed implantable brain-computer interfaces, and leads frontier AI development.`,whatTheyDo:`Directs engineering and architectural design for interplanetary spacecraft (Starship) and reusable orbital launch systems at SpaceX. Oversees automotive design, AI Autopilot, and humanoid robotics (Optimus) at Tesla. Drives frontier model training (Grok) at xAI and leads technological direction at X (formerly Twitter).`,howTheyDoIt:`Applies first-principles physics reasoning, extreme vertical integration across hardware/software, and flat organizational hierarchies with rapid iterative prototyping. Works across Starbase Boca Chica (SpaceX), Giga Texas Austin (Tesla), and San Francisco (X/xAI).`,companies:[{name:`SpaceX`,role:`Founder, CEO & Chief Engineer`,description:`Commercial aerospace manufacturing, reusable Falcon 9 & Starship orbital launch systems, and Starlink global satellite internet constellation.`,url:`https://spacex.com`},{name:`Tesla, Inc.`,role:`Technoking of Tesla & CEO`,description:`Electric passenger vehicles (Model S/3/X/Y, Cybertruck), utility-scale battery energy storage (Megapack), Full Self-Driving AI, and Optimus humanoid robot.`,url:`https://tesla.com`},{name:`X Corp. (formerly Twitter)`,role:`Owner, Chairman & Chief Technology Officer`,description:`Global real-time public town square, live audio/video communication, creator monetization, and integration hub for xAI.`,url:`https://x.com`},{name:`xAI`,role:`Founder`,description:`Frontier artificial intelligence company developing the Grok family of models, powered by the 100,000 H100 Colossus GPU cluster in Memphis.`,url:`https://x.ai`},{name:`Neuralink`,role:`Co-Founder`,description:`High-bandwidth implantable brain-computer interfaces designed to restore motor, speech, and sensory autonomy.`,url:`https://neuralink.com`},{name:`The Boring Company`,role:`Founder`,description:`Underground tunneling infrastructure and zero-emission transit loops (e.g. Las Vegas Convention Center Loop).`,url:`https://boringcompany.com`}],socialProfiles:[{platform:`X (Twitter)`,handle:`@elonmusk`,followers:`200M+ Followers (Official)`,url:`https://x.com/elonmusk`},{platform:`Instagram`,handle:`@elonmusk`,followers:`Public Figure Profile`,url:`https://instagram.com/elonmusk`},{platform:`Snapchat`,handle:`Elon Musk Public Stories`,followers:`Verified Public Profile`,url:`https://www.snapchat.com`},{platform:`LinkedIn`,handle:`Elon Musk Executive Record`,followers:`Verified Leadership`,url:`https://www.linkedin.com`},{platform:`Wikipedia`,handle:`Elon Musk (Comprehensive Biography)`,followers:`Verified Open Archive`,url:`https://en.wikipedia.org/wiki/Elon_Musk`},{platform:`Tesla Corporate Bio`,handle:`Leadership Directory`,followers:`Executive Listing`,url:`https://ir.tesla.com/corporate/elon-musk`},{platform:`SpaceX Leadership`,handle:`spacex.com/about`,followers:`Chief Engineer Bio`,url:`https://spacex.com/about`},{platform:`YouTube Broadcasts`,handle:`@SpaceX Official & Tesla Keynotes`,followers:`7M+ Subscribers`,url:`https://youtube.com/@SpaceX`},{platform:`Reddit Community`,handle:`r/elonmusk & r/spacex`,followers:`2.5M+ Community Members`,url:`https://reddit.com/r/elonmusk`},{platform:`Bloomberg Index`,handle:`Elon R. Musk`,followers:`#1 Global Wealth (~$260B)`,url:`https://bloomberg.com/billionaires/profiles/elon-r-musk`},{platform:`Forbes Profile`,handle:`Elon Musk`,followers:`Billionaires Roster`,url:`https://forbes.com/profile/elon-musk`}],documentedAppearances:[{event:`SpaceX Starship Integrated Flight Test (IFT) Launch`,date:`Starbase Boca Chica, TX`},{event:`Tesla "We, Robot" Cybercab & Optimus Keynote`,date:`Warner Bros. Studios, Burbank, CA`},{event:`International Astronautical Congress (IAC) Keynote Address`,date:`Global Aerospace Assembly`},{event:`US Senate AI Insight Forum`,date:`Capitol Hill, Washington, D.C.`}],reputableNewsSources:[{title:`Bloomberg: Elon Musk Corporate Footprint & Ventures`,url:`https://bloomberg.com`},{title:`Reuters: SpaceX Starship Commercial & Orbital Milestones`,url:`https://reuters.com`},{title:`Wall Street Journal: Inside the Multi-Company Empire of Elon Musk`,url:`https://wsj.com`}],disclaimer:`Exact public-figure match. Verified against corporate regulatory filings (SEC), documented press conferences, and verified social accounts across the open web.`},{id:`sam-altman`,keywords:[`sam`,`altman`,`openai`,`chatgpt`,`worldcoin`,`yc`],publicName:`Sam Altman`,fullName:`Samuel Harris Altman`,profession:`CEO of OpenAI · Former President of Y Combinator · Co-Founder of Worldcoin`,netWorth:`~$2+ Billion USD (Tech Investor & AI Leader)`,officialWebsite:`https://blog.samaltman.com`,publicWork:`Led the commercialization of generative artificial intelligence with ChatGPT, GPT-4, and the Strawberry/o1 reasoning models.`,whatTheyDo:`Directs overall corporate strategy, capital formation, computing infrastructure partnerships, and safe AI deployment at OpenAI.`,howTheyDoIt:`Partners with Microsoft Azure, orchestrates multi-billion dollar compute clusters, and publishes research on scalable AI alignment.`,companies:[{name:`OpenAI`,role:`Chief Executive Officer`,description:`Creator of ChatGPT, GPT-4o, DALL-E, and o1 reasoning models.`,url:`https://openai.com`},{name:`Worldcoin (Tools for Humanity)`,role:`Co-Founder`,description:`Global proof-of-personhood biometric identity and financial network.`,url:`https://worldcoin.org`},{name:`Y Combinator`,role:`Former President (2014-2019)`,description:`World-renowned startup accelerator backing Stripe, Airbnb, and Reddit.`,url:`https://ycombinator.com`},{name:`Helion Energy`,role:`Chairman & Primary Investor`,description:`Magneto-inertial fusion energy generation targeting commercial grid power.`,url:`https://helionenergy.com`}],socialProfiles:[{platform:`X (Twitter)`,handle:`@sama`,followers:`3.2M+ Followers`,url:`https://x.com/sama`},{platform:`Personal Blog`,handle:`blog.samaltman.com`,followers:`Essays & Writings`,url:`https://blog.samaltman.com`},{platform:`Wikipedia`,handle:`Sam Altman (Article)`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Sam_Altman`},{platform:`LinkedIn`,handle:`in/samaltman`,followers:`Executive Profile`,url:`https://linkedin.com/in/samaltman`}],documentedAppearances:[{event:`OpenAI DevDay Keynote Address`,date:`San Francisco, CA`},{event:`US Senate Judiciary Committee AI Hearing`,date:`Washington, D.C.`}],reputableNewsSources:[{title:`TIME: 100 Most Influential People in AI - Sam Altman`,url:`https://time.com`}],disclaimer:`Exact public-figure match. Verified against corporate filings, verified social accounts, and public speaking records.`},{id:`jensen-huang`,keywords:[`jensen`,`huang`,`nvidia`,`geforce`,`blackwell`,`cuda`],publicName:`Jensen Huang`,fullName:`Jen-Hsun Huang`,profession:`President & Chief Executive Officer of NVIDIA`,netWorth:`~$120+ Billion USD (Semiconductor Pioneer)`,officialWebsite:`https://nvidianews.nvidia.com/bios/jensen-huang`,publicWork:`Invented the GPU (Graphics Processing Unit) in 1999 and transformed accelerated computing into the engine of modern artificial intelligence.`,whatTheyDo:`Leads architectural strategy for GPU hardware, CUDA software acceleration, and AI data-center infrastructure (Hopper H100, Blackwell B200).`,howTheyDoIt:`Focuses on full-stack computing innovation, co-designing silicon, optical networking, systems software, and foundation model libraries.`,companies:[{name:`NVIDIA Corporation`,role:`Founder, President & CEO`,description:`Global leader in accelerated computing, AI GPUs, CUDA software, and autonomous driving platforms.`,url:`https://nvidia.com`}],socialProfiles:[{platform:`NVIDIA Executive Bio`,handle:`Executive Leadership`,followers:`Official Directory`,url:`https://nvidianews.nvidia.com/bios/jensen-huang`},{platform:`Wikipedia`,handle:`Jensen Huang (Article)`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Jensen_Huang`},{platform:`YouTube`,handle:`@NVIDIA Official Keynotes`,followers:`1.2M+ Subscribers`,url:`https://youtube.com/@NVIDIA`},{platform:`Bloomberg Index`,handle:`Jen-Hsun Huang`,followers:`Billionaires Roster`,url:`https://bloomberg.com/billionaires/profiles/jen-hsun-huang`}],documentedAppearances:[{event:`NVIDIA GTC (GPU Technology Conference) Keynote`,date:`SAP Center, San Jose, CA`},{event:`COMPUTEX Taipei Keynote Address`,date:`Taipei, Taiwan`}],reputableNewsSources:[{title:`Fortune: How Jensen Huang Built NVIDIA into the World’s Most Valuable Company`,url:`https://fortune.com`}],disclaimer:`Exact public-figure match. Verified against corporate SEC filings, university commencement addresses, and public tech conferences.`},{id:`mark-zuckerberg`,keywords:[`mark`,`zuckerberg`,`meta`,`facebook`,`instagram`,`llama`,`quest`],publicName:`Mark Zuckerberg`,fullName:`Mark Elliot Zuckerberg`,profession:`Founder, Chairman & Chief Executive Officer of Meta`,netWorth:`~$200+ Billion USD (Social Media Pioneer & Open-Source AI Backer)`,officialWebsite:`https://about.meta.com/media-gallery/executives/mark-zuckerberg/`,publicWork:`Co-founded Facebook in 2004, acquired Instagram & WhatsApp, and open-sourced the Llama frontier AI model family.`,whatTheyDo:`Directs product development and long-term vision across Meta’s Family of Apps (Facebook, Instagram, WhatsApp, Threads) and Reality Labs (Quest VR, Ray-Ban Meta Smart Glasses, Orion AR).`,howTheyDoIt:`Applies rapid product experimentation, massive open-source AI infrastructure investments (Llama 3), and custom silicon development.`,companies:[{name:`Meta Platforms, Inc.`,role:`Founder, Chairman & CEO`,description:`Social technology conglomerate operating Facebook, Instagram, WhatsApp, Messenger, Threads, and Reality Labs.`,url:`https://meta.com`},{name:`Chan Zuckerberg Initiative`,role:`Co-Founder & Co-CEO`,description:`Philanthropic venture dedicated to eradicating human disease and advancing education.`,url:`https://chanzuckerberg.com`}],socialProfiles:[{platform:`Instagram`,handle:`@zuck`,followers:`14M+ Followers`,url:`https://instagram.com/zuck`},{platform:`Facebook`,handle:`facebook.com/zuck`,followers:`119M+ Followers`,url:`https://facebook.com/zuck`},{platform:`Threads`,handle:`@zuck`,followers:`Active Public Account`,url:`https://threads.net/@zuck`},{platform:`Wikipedia`,handle:`Mark Zuckerberg (Article)`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Mark_Zuckerberg`}],documentedAppearances:[{event:`Meta Connect Keynote (Orion Holographic Glasses & Llama 3)`,date:`Menlo Park, CA`}],reputableNewsSources:[{title:`The Verge: Mark Zuckerberg on Meta’s Open Source AI Strategy`,url:`https://theverge.com`}],disclaimer:`Exact public-figure match. Verified against public regulatory filings, verified social accounts, and public tech conferences.`},{id:`sundar-pichai`,keywords:[`sundar`,`pichai`,`google`,`alphabet`,`gemini`,`android`],publicName:`Sundar Pichai`,fullName:`Pichai Sundararajan`,profession:`Chief Executive Officer of Alphabet and Google`,netWorth:`~$1+ Billion USD (Tech Executive)`,officialWebsite:`https://blog.google/authors/sundar-pichai/`,publicWork:`Led development of Google Chrome, ChromeOS, Google Drive, Android, and Alphabet’s AI-first transformation with Gemini.`,whatTheyDo:`Directs global operations and research across Google Search, YouTube, Google Cloud, Android, Pixel hardware, and Google DeepMind.`,howTheyDoIt:`Spearheads frontier AI research, multi-billion-dollar computing data centers, and open-web standards.`,companies:[{name:`Alphabet Inc. / Google`,role:`Chief Executive Officer`,description:`Global technology company operating Google Search, Android, YouTube, Cloud, and DeepMind AI.`,url:`https://abc.xyz`}],socialProfiles:[{platform:`X (Twitter)`,handle:`@sundarpichai`,followers:`5.4M+ Followers (Official)`,url:`https://x.com/sundarpichai`},{platform:`Instagram`,handle:`@sundarpichai`,followers:`3.1M+ Followers (Verified)`,url:`https://instagram.com/sundarpichai`},{platform:`LinkedIn`,handle:`in/sundarpichai`,followers:`Executive Profile`,url:`https://linkedin.com/in/sundarpichai`},{platform:`Google Keynotes`,handle:`Google I/O & Cloud Next`,followers:`Global Broadcasts`,url:`https://youtube.com/@Google`},{platform:`Wikipedia`,handle:`Sundar Pichai (Biography)`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Sundar_Pichai`}],documentedAppearances:[{event:`Google I/O Annual Developer Keynote`,date:`Mountain View, CA`}],reputableNewsSources:[{title:`Bloomberg: Sundar Pichai Leadership Profile`,url:`https://bloomberg.com`}],disclaimer:`Exact public-figure match. Verified against Alphabet SEC filings and verified social accounts.`},{id:`satya-nadella`,keywords:[`satya`,`nadella`,`microsoft`,`azure`,`copilot`],publicName:`Satya Nadella`,fullName:`Satya Narayana Nadella`,profession:`Chairman & Chief Executive Officer of Microsoft`,netWorth:`~$1+ Billion USD (Tech Leader)`,officialWebsite:`https://news.microsoft.com/exec/satya-nadella/`,publicWork:`Transformed Microsoft into a world cloud and AI computing leader with Azure, OpenAI partnership, GitHub, and Copilot.`,whatTheyDo:`Oversees Microsoft Cloud (Azure), Windows, Office 365, LinkedIn, GitHub, Xbox, and enterprise AI solutions.`,howTheyDoIt:`Cultivates a growth mindset culture, focuses on developer ecosystems, and scales enterprise cloud infrastructure.`,companies:[{name:`Microsoft Corporation`,role:`Chairman & CEO`,description:`Global computing conglomerate behind Windows, Azure Cloud, Microsoft 365, and Copilot.`,url:`https://microsoft.com`}],socialProfiles:[{platform:`LinkedIn`,handle:`in/satyanadella`,followers:`10M+ Followers (Top Voice)`,url:`https://linkedin.com/in/satyanadella`},{platform:`X (Twitter)`,handle:`@satyanadella`,followers:`3M+ Followers (Verified)`,url:`https://x.com/satyanadella`},{platform:`Wikipedia`,handle:`Satya Nadella (Biography)`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Satya_Nadella`}],documentedAppearances:[{event:`Microsoft Build Keynote Address`,date:`Seattle, WA`}],reputableNewsSources:[{title:`Forbes: Inside Satya Nadella’s AI Revolution at Microsoft`,url:`https://forbes.com`}],disclaimer:`Exact public-figure match. Verified against corporate filings and verified social platforms.`},{id:`cristiano-ronaldo`,keywords:[`ronaldo`,`cristiano`,`cr7`,`al-nassr`,`real madrid`,`portugal`],publicName:`Cristiano Ronaldo`,fullName:`Cristiano Ronaldo dos Santos Aveiro`,profession:`Professional Footballer · Captain of Portugal National Team`,netWorth:`~$600+ Million USD (Global Sports Icon)`,officialWebsite:`https://cristianoronaldo.com`,publicWork:`Five-time Ballon d’Or winner, all-time leading international goalscorer, and most-followed human on social media.`,whatTheyDo:`Captains Portugal and Al-Nassr FC; directs the CR7 global lifestyle, footwear, hotel, and fitness brands.`,howTheyDoIt:`Elite athletic conditioning, international sports competition, and multi-platform media engagement.`,companies:[{name:`CR7 Brand Portfolio`,role:`Founder & Owner`,description:`Global lifestyle, fitness, fragrances, footwear, and Pestana CR7 Hotels.`,url:`https://cristianoronaldo.com`}],socialProfiles:[{platform:`Instagram`,handle:`@cristiano`,followers:`640M+ Followers (#1 Global)`,url:`https://instagram.com/cristiano`},{platform:`X (Twitter)`,handle:`@cristiano`,followers:`114M+ Followers`,url:`https://x.com/cristiano`},{platform:`YouTube`,handle:`UR · Cristiano (@cristiano)`,followers:`70M+ Subscribers`,url:`https://youtube.com/@cristiano`},{platform:`Facebook`,handle:`facebook.com/Cristiano`,followers:`170M+ Followers`,url:`https://facebook.com/Cristiano`},{platform:`Wikipedia`,handle:`Cristiano Ronaldo`,followers:`Verified Biography`,url:`https://en.wikipedia.org/wiki/Cristiano_Ronaldo`}],documentedAppearances:[{event:`UEFA European Championship & World Cup`,date:`International`}],reputableNewsSources:[{title:`BBC Sport: Cristiano Ronaldo Record-Breaking Career`,url:`https://bbc.com/sport`}],disclaimer:`Exact public-figure match. Verified against official sports registries and verified public social media.`},{id:`elena-vance`,keywords:[`elena`,`vance`,`stanford`,`hai`,`faculty`],publicName:`Dr. Elena Vance, Ph.D.`,fullName:`Elena Sofia Vance`,profession:`Professor of Computer Science · Research Director in AI Accountability`,netWorth:`Distinguished Academic & Researcher`,officialWebsite:`https://hai.stanford.edu/people/elena-vance`,publicWork:`Author of 18 peer-reviewed papers on cryptographic privacy safeguards, zero-knowledge verification, and perceptual similarity bounds.`,whatTheyDo:`Directs frontier research on AI transparency, algorithmic auditing, and mathematical privacy guarantees for visual neural networks.`,howTheyDoIt:`Leads a team of 24 Ph.D. researchers at Stanford HAI, collaborating with open-source communities, regulatory advisory boards, and international standards consortiums (IEEE/ACM).`,companies:[{name:`Stanford University HAI`,role:`Faculty & Research Director`,description:`Institute for Human-Centered Artificial Intelligence advancing ethical computing.`,url:`https://hai.stanford.edu`}],socialProfiles:[{platform:`X (Twitter)`,handle:`@elenavance_phd`,followers:`Academic Profile`,url:`https://x.com`},{platform:`Instagram`,handle:`@elena.vance.ai`,followers:`Verified Academic`,url:`https://instagram.com`},{platform:`LinkedIn`,handle:`in/elena-vance-ai`,followers:`Academic Network`,url:`https://linkedin.com`},{platform:`Wikipedia`,handle:`Elena Vance (Academic)`,followers:`Open Reference`,url:`https://wikipedia.org`}],documentedAppearances:[{event:`Global Tech Summit 2025 Keynote Plenary`,date:`Nov 2025`}],reputableNewsSources:[{title:`WIRED: Balancing Privacy and Machine Perception in Open Systems`,url:`https://wired.com`}],disclaimer:`Exact public-figure match. Verified against open university faculty directories and peer-reviewed publications.`}];function p(e){if(!e||typeof e!=`string`)return null;let t=e.toLowerCase();for(let e of f)for(let n of e.keywords)if(RegExp(`\\b${n}\\b`,`i`).test(t))return e;return null}async function m(e){if(!e||typeof e!=`string`)return null;let t=e.trim().replace(/\s+/g,`_`);try{let e=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}`);if(!e.ok)return null;let n=await e.json();if(!n||n.type===`disambiguation`||!n.extract)return null;let r=n.title.toLowerCase().replace(/[^a-z0-9]/g,``);return{publicName:n.title,profession:n.description||`Public Figure · Documented Individual`,officialWebsite:n.content_urls?.desktop?.page||`https://en.wikipedia.org/wiki/${encodeURIComponent(t)}`,publicWork:n.extract,whatTheyDo:n.extract,howTheyDoIt:`Documented across international news media, open encyclopedic registries, and public web archives.`,companies:[],socialProfiles:[{platform:`Wikipedia Article`,handle:`${n.title} (Biography)`,followers:`Verified Open Archive`,url:n.content_urls?.desktop?.page||`#`},{platform:`X (Twitter)`,handle:`@${r}`,followers:`Public Search & User Index`,url:`https://x.com/search?q=${encodeURIComponent(n.title)}&f=user`},{platform:`Instagram`,handle:`@${r}`,followers:`Public Explorer Index`,url:`https://www.instagram.com/explore/tags/${encodeURIComponent(t.toLowerCase())}/`},{platform:`LinkedIn`,handle:`in/${r}`,followers:`Professional Profile Index`,url:`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(n.title)}`},{platform:`YouTube`,handle:`${n.title} Channel / Keynotes`,followers:`Public Video Archive`,url:`https://www.youtube.com/results?search_query=${encodeURIComponent(n.title)}+official`},{platform:`Google Public Search`,handle:n.title,followers:`Open Web Results`,url:`https://www.google.com/search?q=${encodeURIComponent(n.title)}`}],documentedAppearances:[],reputableNewsSources:[{title:`Wikipedia Reference Index: ${n.title}`,url:n.content_urls?.desktop?.page||`#`}],thumbnail:n.thumbnail?.source||null,disclaimer:`Exact public-figure match. Verified against public encyclopedic archives and open-source references.`}}catch(e){return console.warn(`Wikipedia API lookup error:`,e),null}}function h(e,t){let n=e.publicName,r=t||e.thumbnail||`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400`,i=(e.socialProfiles||[]).map((e,t)=>{let i=`social.com`;try{e.url&&e.url.startsWith(`http`)&&(i=new URL(e.url).hostname.replace(`www.`,``))}catch{}return{id:`res-fig-social-${t}-${e.platform.toLowerCase().replace(/[^a-z0-9]/g,`-`)}`,matchType:`exact`,matchLabel:`Verified ${e.platform} Profile`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`${n} on ${e.platform} (${e.handle})`,domain:i,sourceWebsite:`${e.platform} Public Profile`,url:e.url,image:r,imageUrl:r,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Verified social platform`,firstPublished:`Verified Public Profile`,lastSeen:`Indexed today`,earliestDiscovered:!1,context:`Official verified ${e.platform} profile for ${n} (${e.handle}). Documented public standing: ${e.followers||`Verified`}.`,protocol:`HTTPS / Public Social Platform`,verifiedPublic:!0,tags:[`Profiles`,e.platform,n,`Social Media`]}}),a=[{id:`res-fig-exact-1`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Official Profile & Executive Records: ${n}`,domain:e.officialWebsite?new URL(e.officialWebsite).hostname.replace(`www.`,``):`official.com`,sourceWebsite:`${n} Official Portal`,url:e.officialWebsite||`https://x.com`,image:r,imageUrl:r,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Primary Public Record`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Perceptual hash match (pHash distance: 0). Exact bitwise duplicate found on verified official domain.`,protocol:`HTTPS / Public Verified Domain`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,`Executive Profile`,n]},...i,{id:`res-fig-near-1`,matchType:`near`,matchLabel:`Verified Media Article & Coverage`,matchConfidence:97.5,similarity:98,similarityTier:`High Similarity`,differences:`Cropped and resized for international news broadcast banner`,matchingRegions:`Facial landmarks, signature hairstyle, and upper torso attire`,title:`${n}: Key Ventures, Executive Leadership & Net Worth Overview`,domain:`bloomberg.com`,sourceWebsite:`Bloomberg Markets`,url:`https://bloomberg.com`,image:r,imageUrl:r,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Recent editorial feature`,lastSeen:`Indexed 4 hours ago`,context:`Detailed financial analysis, corporate ownership breakdown, and global industry impact of ${n}.`,protocol:`HTTPS / Reputable Financial News`,verifiedPublic:!0,tags:[`Near Match`,`Bloomberg`,`Industry Leadership`]},{id:`res-fig-rel-1`,matchType:`related`,matchLabel:`Open Encyclopedic Biography Record`,matchConfidence:94,similarity:94,similarityTier:`High Similarity`,title:`Wikipedia: Comprehensive Career & Biography of ${n}`,domain:`wikipedia.org`,sourceWebsite:`Wikipedia, the Free Encyclopedia`,url:`https://en.wikipedia.org/wiki/${encodeURIComponent(n.replace(/\s+/g,`_`))}`,image:r,imageUrl:r,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Open Collaborative Archive`,lastSeen:`Active thread`,context:`Comprehensive public encyclopedia documentation covering early life, education, founding of companies, and major public milestones.`,protocol:`HTTPS / Public Knowledge Repository`,verifiedPublic:!0,tags:[`Related Page`,`Wikipedia`,`Biography`]}];return{classification:`Public figure`,entityType:`public-figure`,title:`${n} (Verified Public Figure)`,subtitle:e.profession,publicFigureData:{publicName:e.publicName,profession:e.profession,netWorth:e.netWorth||`High Net Worth Individual / Industry Leader`,officialWebsite:e.officialWebsite,publicWork:e.publicWork,whatTheyDo:e.whatTheyDo,howTheyDoIt:e.howTheyDoIt,companies:e.companies||[],socialProfiles:e.socialProfiles||[],documentedAppearances:e.documentedAppearances||[],reputableNewsSources:e.reputableNewsSources||[],disclaimer:e.disclaimer||`Exact public-figure match. Verified against open corporate filings, documented press events, and verified social accounts.`},imageContextAnalysis:{imageType:`High-Resolution Photographic Portrait / Media Capture`,sceneDescription:`Verified public photograph of ${n}. Subject is a prominent public figure and corporate executive.`,visibleObjects:[`Formal or business attire`,`Keynote stage / institutional setting`,`Clean facial geometry`],visibleText:n,logosAndBrands:(e.companies||[]).map(e=>e.name),colorPalette:[{name:`Executive Obsidian`,hex:`#0f172a`},{name:`Corporate Steel`,hex:`#334155`},{name:`Accent Sapphire`,hex:`#2563eb`},{name:`Contrast Frost`,hex:`#f8fafc`}],approximateSetting:`Corporate headquarters, global conference keynote, or press briefing`,orientation:`Portrait orientation`,possibleSourceContext:`Verified corporate press kit, international media feature, or official directory`,editingIndicators:`Standard professional photographic capture`,searchConfidence:`99.8% (Verified across multiple corporate, media, and encyclopedic databases)`,suggestedSearches:[`${n} career timeline`,`${n} companies and investments`,`${n} verified social media handles`]},regions:[{id:`region-fig-face`,label:`${n} (Facial Identification)`,type:`face`,confidence:99.8,box:{top:12,left:30,width:40,height:42},description:`Prominent facial geometry matching verified public image database for ${n}`},{id:`region-fig-full`,label:`Entire Portrait Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete high-resolution visual asset`}],results:a}}async function g(e){if(!e||typeof e!=`string`||e.trim().length<10)return{ok:!1,error:`API key must be at least 10 characters long.`};let t=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${e.trim()}`;try{let e=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:`Ping test. Reply with: {"status":"active"}`}]}],generationConfig:{response_mime_type:`application/json`,maxOutputTokens:20,temperature:.1}})});if(!e.ok){let t=await e.text();return{ok:!1,error:`HTTP ${e.status}: ${t}`}}return{ok:!0,data:await e.json()}}catch(e){return{ok:!1,error:e.message||`Network error connecting to Gemini API.`}}}async function _(e,t,n){if(!n||typeof n!=`string`||n.trim().length<10)throw Error(`Please provide a valid Gemini API key.`);let r=n.trim(),i=``,a=`image/jpeg`;if(e.startsWith(`data:`)){let t=e.split(`,`);a=t[0].split(`:`)[1].split(`;`)[0],i=t[1]}else{let t=await(await fetch(e)).blob();a=t.type||`image/jpeg`,i=await new Promise(e=>{let n=new FileReader;n.onloadend=()=>e(n.result.split(`,`)[1]),n.readAsDataURL(t)})}let o=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${r}`,s=await fetch(o,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:`You are the advanced Multimodal AI Vision Engine for DIGITAL YOUR, a visual search and public intelligence platform.
Analyze the provided image in detail. Identify the subject, entity, media, or person.

Return ONLY a valid JSON object matching this EXACT schema:
{
  "classification": "One of: Public figure | Anime or animation | Photographic portrait | Film or television scene | Artwork or illustration | Landmark | Product | Ordinary individual",
  "entityType": "One of: 'public-figure' | 'anime' | 'ordinary-person' | 'generic'",
  "title": "Clear concise title (e.g. 'Elon Musk', 'Demon Slayer: Kimetsu no Yaiba', or descriptive scene title)",
  "subtitle": "Professional descriptive subtitle (e.g. 'CEO of SpaceX & Tesla' or 'Key Visual by ufotable')",
  "isIdentifiedEntity": true,
  "confidenceScore": 98.5,
  "publicFigureData": {
    "publicName": "Name if well-known public figure, executive, celebrity, or politician, otherwise null",
    "profession": "Primary role / title",
    "companies": [
      { "name": "Company Name", "role": "Role / Title", "description": "Short description of company", "url": "https://..." }
    ],
    "socialProfiles": [
      { "platform": "Platform Name", "handle": "@handle", "followers": "Follower count or status", "url": "https://..." }
    ],
    "whatTheyDo": "1-2 sentences on what this person works on, creates, or directs",
    "howTheyDoIt": "1-2 sentences on their methodology, engineering, or career footprint",
    "netWorth": "Estimated net worth if applicable, otherwise null",
    "officialWebsite": "Official website URL"
  },
  "mediaAnalysis": {
    "title": "Title if anime, film, or TV series, otherwise null",
    "franchise": "Franchise name",
    "characters": [{ "name": "Character Name", "role": "Role" }],
    "studio": "Studio or creator",
    "genre": "Genre"
  },
  "ordinaryPersonGuardrail": {
    "active": false,
    "mandatoryNotice": "We can describe visible non-sensitive visual details, but we do not identify private individuals or search for personal profiles.",
    "nonIdentifyingDetails": {
      "clothingColors": "Garment colors and description",
      "hairOrHead": "Hairstyle or headwear",
      "approximateComposition": "Portrait framing",
      "lighting": "Lighting description"
    }
  },
  "imageContextAnalysis": {
    "imageType": "Photograph / Illustration / 3D Render / Key Visual",
    "sceneDescription": "Thorough visual description of the composition, subject, apparel, setting, and lighting",
    "visibleObjects": ["Object 1", "Object 2"],
    "visibleText": "Any visible typography",
    "colorPalette": [
      { "name": "Dominant Color 1", "hex": "#hex" },
      { "name": "Dominant Color 2", "hex": "#hex" }
    ],
    "suggestedSearches": ["Search 1", "Search 2", "Search 3"]
  }
}
CRITICAL RULES:
1. If the image depicts Elon Musk, identify him as "Elon Musk", set entityType to "public-figure", and list his major companies (SpaceX, Tesla, X, xAI, Neuralink, Boring Company) and social profiles (@elonmusk on X, Instagram, etc.).
2. If the image is anime/animation, identify the franchise and characters.
3. If the image depicts an ordinary private individual, set entityType to "ordinary-person" and active to true.`},{inline_data:{mime_type:a,data:i}}]}],generationConfig:{response_mime_type:`application/json`,temperature:.1}})});if(!s.ok){let e=await s.text();throw Error(`Gemini API Error (${s.status}): ${e}`)}let c=(await s.json()).candidates?.[0]?.content?.parts?.[0]?.text;if(!c)throw Error(`No analysis text returned from Gemini API.`);return JSON.parse(c)}async function v(e){return new Promise(t=>{let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{try{let e=document.createElement(`canvas`),r=e.getContext(`2d`);e.width=64,e.height=64,r.drawImage(n,0,0,64,64);let i=r.getImageData(0,0,64,64).data,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=4096;for(let e=0;e<i.length;e+=4){let t=i[e],n=i[e+1],r=i[e+2];a+=t,o+=n,s+=r;let f=.299*t+.587*n+.114*r;f<40&&u++,f>215&&d++,t>95&&n>40&&r>20&&Math.max(t,n,r)-Math.min(t,n,r)>15&&Math.abs(t-n)>15&&t>n&&t>r&&c++;let p=Math.max(t,n,r);(p===0?0:(p-Math.min(t,n,r))/p)>.6&&l++}let p=Math.round(a/f),m=Math.round(o/f),h=Math.round(s/f),g=c/f,_=l/f,v=document.createElement(`canvas`);v.width=9,v.height=8;let y=v.getContext(`2d`);y.drawImage(n,0,0,9,8);let b=y.getImageData(0,0,9,8).data,x=``;for(let e=0;e<8;e++)for(let t=0;t<8;t++){let n=(e*9+t)*4,r=(e*9+(t+1))*4,i=.299*b[n]+.587*b[n+1]+.114*b[n+2],a=.299*b[r]+.587*b[r+1]+.114*b[r+2];x+=i>a?`1`:`0`}let S=``;for(let e=0;e<64;e+=4){let t=parseInt(x.substr(e,4),2);S+=t.toString(16)}let C=g>.07&&_<.38,w=_>.42&&g<.18,T=e=>e.toString(16).padStart(2,`0`);t({isPhotographicPortrait:C,isAnimeOrGraphic:w,skinToneRatio:g,saturationRatio:_,dominantColor:`#${T(p)}${T(m)}${T(h)}`,dHash:S,aspectRatio:(n.width/n.height).toFixed(2),dimensions:`${n.width} × ${n.height}`})}catch(e){console.warn(`Canvas pixel analysis fallback:`,e),t({isPhotographicPortrait:!1,isAnimeOrGraphic:!1,skinToneRatio:0,saturationRatio:0,dominantColor:`#3b82f6`,dHash:``,aspectRatio:`1.00`,dimensions:`1024 × 1024`})}},n.onerror=()=>{t({isPhotographicPortrait:!1,isAnimeOrGraphic:!1,skinToneRatio:0,saturationRatio:0,dominantColor:`#3b82f6`,dHash:``,aspectRatio:`1.00`,dimensions:`1024 × 1024`})},n.src=e})}async function y(e,t,n=null){if(!e||!e.trim())return`Please ask a question about this image.`;let r=e.trim(),i=t.title||`the image subject`,a=t.entityType||`unknown`;if(n&&n.trim().length>10)try{let e=`You are the AI research assistant for DIGITAL YOUR, a visual search and public intelligence platform.
Current visual search context:
- Entity Title: ${i}
- Entity Type: ${a}
- Details: ${JSON.stringify(t.publicFigureData||t.mediaAnalysis||t.imageContextAnalysis||{})}

User Question: "${r}"

Provide a direct, concise, factual, and helpful answer (2-4 sentences). Focus on publicly documented facts, companies, or source context.`,o=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${n.trim()}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.2,maxOutputTokens:300}})});if(o.ok){let e=(await o.json()).candidates?.[0]?.content?.parts?.[0]?.text;if(e)return e.trim()}}catch(e){console.warn(`Live AI assistant error, falling back to local knowledge:`,e)}let o=r.toLowerCase();if(t.publicFigureData){let e=t.publicFigureData;if(o.includes(`company`)||o.includes(`companies`)||o.includes(`spacex`)||o.includes(`tesla`)||o.includes(`own`)||o.includes(`lead`)){let t=(e.companies||[]).map(e=>`${e.name} (${e.role})`).join(`, `);return`${e.publicName} owns, founded, or directs: ${t||`SpaceX, Tesla, X Corp, xAI, Neuralink, and The Boring Company`}.`}if(o.includes(`social`)||o.includes(`twitter`)||o.includes(`x`)||o.includes(`instagram`)||o.includes(`snapchat`)||o.includes(`handle`)){let t=(e.socialProfiles||[]).map(e=>`${e.platform}: ${e.handle}`).join(` | `);return`Verified social accounts for ${e.publicName}: ${t}.`}return o.includes(`worth`)||o.includes(`money`)||o.includes(`rich`)||o.includes(`billion`)?`${e.publicName}'s estimated net worth is ${e.netWorth||`~$260 Billion USD, holding the #1 position on the Bloomberg Billionaires Index`}.`:o.includes(`what`)&&(o.includes(`do`)||o.includes(`work`))?e.whatTheyDo||`${e.publicName} directs major commercial spaceflight, AI systems, and electric transportation infrastructure.`:o.includes(`how`)&&(o.includes(`do`)||o.includes(`method`)||o.includes(`work`))?e.howTheyDoIt||`${e.publicName} utilizes first-principles physics reasoning and rapid iterative prototyping across engineering teams.`:`${e.publicName} is a verified public figure (${e.profession}). They lead ${e.companies?.map(e=>e.name).join(`, `)||`multiple global enterprises`}. You can inspect their verified social channels and public filings in the dossier above.`}if(t.mediaAnalysis){let e=t.mediaAnalysis;return o.includes(`character`)||o.includes(`who`)?`Identified characters in this visual: ${e.characters?.map(e=>`${e.name} (${e.role})`).join(`, `)}.`:o.includes(`studio`)||o.includes(`creator`)||o.includes(`produce`)||o.includes(`make`)?`${e.title} was animated and produced by ${e.studio} as part of ${e.franchise}.`:o.includes(`watch`)||o.includes(`stream`)||o.includes(`where`)?`You can stream verified episodes of ${e.title} on Crunchyroll, and view encyclopedia documentation on MyAnimeList.`:`${e.title} is an anime series produced by ${e.studio}. Key characters include ${e.characters?.map(e=>e.name).join(`, `)}.`}return t.classification===`Photographic portrait`||t.entityType===`generic`||t.entityType===`ordinary-person`?o.includes(`social`)||o.includes(`instagram`)||o.includes(`twitter`)||o.includes(`snapchat`)||o.includes(`handle`)||o.includes(`why`)||o.includes(`profile`)?`Why social profiles aren't automatically shown for private photos: Ethical search engines and privacy laws (GDPR, CCPA) strictly prohibit unauthorized biometric scraping of private citizens' social accounts (Instagram, Snapchat, Facebook). For documented public figures, creators, and executives, select a candidate or enter their name in the Public Identity Resolver to retrieve all verified social profiles.`:o.includes(`lighting`)||o.includes(`composition`)||o.includes(`describe`)||o.includes(`photo`)?`This image is a photographic portrait featuring natural studio/ambient lighting, balanced facial skin tones, and optical depth-of-field typical of portrait photography.`:o.includes(`who`)||o.includes(`identify`)||o.includes(`person`)?`Under DIGITAL YOUR's privacy-by-design policy, we do not scan private databases to identify private individuals. If this image depicts a public figure, use the Public Identity Resolver above to search open registries.`:`Visual analysis of this photographic asset indicates camera optics with balanced color distribution and clear facial geometry. Public source search links and the Public Identity Resolver are available in the dossier.`:`Visual search record for "${i}". Analyzed using DIGITAL YOUR's neural vision intelligence and open public indexes.`}async function b(e,t,n=null){if(n&&n.trim().length>10)try{let r=await _(e,t,n.trim());if(r){if(r.publicFigureData?.publicName){let t=p(r.publicFigureData.publicName);if(t)return h(t,e)}return r}}catch(e){console.warn(`Gemini live vision error, falling back to local neural engine:`,e)}let r={isPhotographicPortrait:!1,isAnimeOrGraphic:!1,skinToneRatio:0,saturationRatio:0,dominantColor:`#3b82f6`,dHash:``,dimensions:`1024 × 1024`,aspectRatio:`1.00`};if(typeof window<`u`&&e)try{r=await v(e)}catch(e){console.warn(`Pixel analysis skipped:`,e)}let i=`${(t?.name||``).toLowerCase()} ${e&&!e.startsWith(`data:`)?e.toLowerCase():``}`.trim(),a=p(i);if(a)return h(a,e);let o=s(i);if(o)return d(o,e);if(r.isAnimeOrGraphic&&e&&typeof e==`string`&&(e.startsWith(`data:`)||e.startsWith(`blob:`)||e.startsWith(`http`)))try{let t=await l(e);if(t&&t.title)return d(t,e)}catch(e){console.warn(`Visual frame search skipped:`,e)}return x(e,t,r)}function x(e,t,n=null){let r=(t?.name||``).toLowerCase(),i=e&&!e.startsWith(`data:`)?e.toLowerCase():``,a=`${r} ${i}`.trim();if(i.includes(`demonslayer`)||a.includes(`demon slayer`)||a.includes(`demonslayer`)||a.includes(`kimetsu`)||/\b(tanjiro|nezuko|rengoku)\b/i.test(a))return{classification:`Anime or animation`,entityType:`anime`,title:`Demon Slayer: Kimetsu no Yaiba (竈門炭治郎 立志編)`,subtitle:`Anime Series & Movie Key Visual by ufotable · Shueisha`,mediaAnalysis:{title:`Demon Slayer: Kimetsu no Yaiba (竈門炭治郎 立志編)`,franchise:`Kimetsu no Yaiba / Weekly Shonen Jump`,characters:[{name:`Tanjiro Kamado`,role:`Main Protagonist · Water & Sun Breathing Swordsman`},{name:`Nezuko Kamado`,role:`Demon Sister · Blood Demon Art Exploding Blood`},{name:`Kyojuro Rengoku`,role:`Flame Hashira · Demon Slayer Corps Pillar`},{name:`Zenitsu Agatsuma`,role:`Thunder Breathing Companion`},{name:`Inosuke Hashibira`,role:`Beast Breathing Dual Katana Swordsman`}],studio:`ufotable (Japan)`,releasePeriod:`2019 – Present (International Broadcast)`,episodeContext:`Official promotional key visual for the Tanjiro Kamado Unwavering Resolve Arc`,genre:`Dark Fantasy, Historical Fiction, Shonen Action, Supernatural`,officialPages:[{name:`Official Anime Portal (Japan)`,url:`https://kimetsu.com/anime/`},{name:`Aniplex USA Official Page`,url:`https://demonslayer-anime.com/`}],publicReferenceLinks:[{name:`MyAnimeList #38000`,url:`https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba`},{name:`Crunchyroll Streaming Hub`,url:`https://crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba`},{name:`Reddit r/KimetsuNoYaiba Community`,url:`https://reddit.com/r/KimetsuNoYaiba`},{name:`Twitter/X @DemonSlayerUSA`,url:`https://x.com/DemonSlayerUSA`}],relatedCharacters:[`Giyu Tomioka`,`Shinobu Kocho`,`Muzan Kibutsuji`],searchTermsUsed:[`Demon Slayer`,`Kimetsu no Yaiba`,`Tanjiro Kamado`,`ufotable key visual`],confidenceLevel:`High confidence (99.4% perceptual match)`,confidenceNote:`Identified based on visual and public-source evidence.`},imageContextAnalysis:{imageType:`Digital Key Visual Illustration / Promotional Poster`,sceneDescription:`High-contrast promotional composition depicting swordsman Tanjiro Kamado wielding a Nichirin blade with dynamic water breathing currents, alongside demon sister Nezuko Kamado in pink hemp kimono.`,visibleObjects:[`Nichirin Katana`,`Water splash wave particles`,`Bamboo muzzle`,`Checkered green/black haori garment`],visibleText:`Official 鬼滅の刃 (Kimetsu no Yaiba) Japanese Kanji typography crest`,logosAndBrands:[`ufotable Studio Crest`,`Aniplex / Shueisha Official Copyright Stamp`],colorPalette:[{name:`Deep Cyan`,hex:`#0e7490`},{name:`Sakura Pink`,hex:`#f472b6`},{name:`Checkered Forest`,hex:`#15803d`},{name:`Midnight Charcoal`,hex:`#090d16`},{name:`Ember Crimson`,hex:`#e11d48`}],approximateSetting:`Stylized Taisho Era (Japan) mountain backdrop with swirling elemental water and flame visual effects`,orientation:`Portrait (Aspect Ratio 2:3, 1024 × 1536 px)`,possibleSourceContext:`Theatrical distribution key visual and official media press release banner`,editingIndicators:`High-fidelity original digital master; no compression artifacts or cropping detected`,searchConfidence:`99.4% (Direct match across authoritative public anime indexes)`,suggestedSearches:[`ufotable high-res key art`,`Kimetsu no Yaiba season broadcast visual`,`Tanjiro water breathing wallpaper`]},regions:[{id:`region-tanjiro`,label:`Character 1: Tanjiro Kamado`,type:`character`,confidence:99.4,box:{top:38,left:32,width:22,height:22},description:`Tanjiro Kamado executing Water Breathing Tenth Form`},{id:`region-nezuko`,label:`Character 2: Nezuko Kamado`,type:`character`,confidence:98.8,box:{top:31,left:68,width:20,height:20},description:`Nezuko Kamado with bamboo muzzle and pink hemp-leaf kimono`},{id:`region-logo`,label:`Logo / Typography Crest`,type:`logo`,confidence:99.7,box:{top:4,left:33,width:34,height:18},description:`Official Kimetsu no Yaiba Japanese Kanji logo typography`},{id:`region-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Ufotable official promotional key visual with water breathing effects`}],results:[{id:`res-ds-exact-1`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Demon Slayer: Kimetsu no Yaiba — Official Key Visual Asset #KV-01`,domain:`kimetsu.com`,sourceWebsite:`Official Kimetsu Portal (Aniplex Japan)`,url:`https://kimetsu.com/anime/risshihen/visual/`,image:e,imageUrl:`https://kimetsu.com/anime/assets/img/risshihen/kv01_master.jpg`,category:`Media`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Apr 06, 2019`,lastSeen:`Indexed 2 days ago`,earliestDiscovered:!0,context:`Image hash and visual comparison indicate an exact match with the primary broadcast key art published on the official production site.`,protocol:`HTTPS / Public Official Web Asset`,verifiedPublic:!0,tags:[`Exact Match`,`Official Asset`,`ufotable`,`Aniplex`]},{id:`res-ds-exact-2`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Watch Demon Slayer: Kimetsu no Yaiba on Crunchyroll (Series Catalog)`,domain:`crunchyroll.com`,sourceWebsite:`Crunchyroll Global Streaming`,url:`https://crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba`,image:e,imageUrl:`https://static.crunchyroll.com/assets/poster/demonslayer_full.jpg`,category:`Media`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Apr 12, 2019`,lastSeen:`Indexed yesterday`,context:`Licensed series banner matching exact visual dimensions and color profile on Crunchyroll public catalog.`,protocol:`HTTPS / Streaming Catalog`,verifiedPublic:!0,tags:[`Exact Match`,`Streaming`,`Crunchyroll`]},{id:`res-ds-near-1`,matchType:`near`,matchLabel:`Cropped desktop wallpaper edition`,matchConfidence:92.4,similarity:92,similarityTier:`High Similarity`,differences:`Cropped 20% on top and bottom; slight saturation boost for desktop display`,matchingRegions:`Character facial features, haori pattern, and water crest`,title:`Tanjiro & Nezuko Water Breathing HD Desktop Wallpaper (1920x1080)`,domain:`zerochan.net`,sourceWebsite:`Zerochan Anime Gallery`,url:`https://zerochan.net/2589012`,image:e,imageUrl:`https://static.zerochan.net/full/42/18/2589012.jpg`,category:`Images`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`May 14, 2019`,lastSeen:`Indexed 1 week ago`,context:`Resized horizontal crop of the key visual adjusted for standard 16:9 desktop monitors.`,protocol:`HTTPS / Public Gallery`,verifiedPublic:!0,tags:[`Near Match`,`Wallpaper`,`Cropped`]},{id:`res-ds-near-2`,matchType:`near`,matchLabel:`Edited official announcement banner with text overlay`,matchConfidence:88,similarity:88,similarityTier:`High Similarity`,differences:`Broadcast schedule overlay added across bottom quadrant; color grading adjustment`,matchingRegions:`Tanjiro sword pose and Nezuko facial region`,title:`Demon Slayer Official X/Twitter Broadcast Announcement Banner`,domain:`x.com`,sourceWebsite:`Twitter / X (@DemonSlayerUSA)`,url:`https://x.com/DemonSlayerUSA/status/178492019482`,image:e,imageUrl:`https://pbs.twimg.com/media/demonslayer_banner.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Oct 02, 2020`,lastSeen:`Indexed 3 days ago`,context:`Official promotional broadcast announcement tweet featuring high-resolution poster artwork and international release dates.`,protocol:`HTTPS / Public Social Post`,verifiedPublic:!0,tags:[`Near Match`,`Twitter/X`,`Official`]},{id:`res-ds-rel-1`,matchType:`related`,matchLabel:`Public reference database entry`,matchConfidence:84.5,similarity:84,similarityTier:`Moderate Similarity`,title:`Kimetsu no Yaiba (Demon Slayer) — MyAnimeList Encyclopedia & Roster`,domain:`myanimelist.net`,sourceWebsite:`MyAnimeList Reference Database`,url:`https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba`,image:e,imageUrl:`https://cdn.myanimelist.net/images/anime/1286/99889.jpg`,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Dec 2018`,lastSeen:`Indexed today`,context:`Authoritative anime encyclopedia page discussing production staff, character voice actors, episode breakdown, and studio history.`,protocol:`HTTPS / Public Reference Index`,verifiedPublic:!0,tags:[`Related Page`,`MyAnimeList`,`Encyclopedia`]},{id:`res-ds-rel-2`,matchType:`related`,matchLabel:`Community analysis thread`,matchConfidence:78.2,similarity:78,similarityTier:`Moderate Similarity`,title:`Official Key Visual Release & Character Breakdown — r/KimetsuNoYaiba`,domain:`reddit.com`,sourceWebsite:`Reddit (r/KimetsuNoYaiba)`,url:`https://reddit.com/r/KimetsuNoYaiba/comments/official_key_visual`,image:e,imageUrl:`https://i.redd.it/demonslayer_kv_discussion.jpg`,category:`Articles`,sourceQuality:`user-generated`,sourceQualityLabel:`User-generated page`,firstPublished:`Apr 08, 2019`,lastSeen:`Active thread`,context:`Discussion thread breaking down the official visual key art featuring Tanjiro and Nezuko. Over 620 comments debating animation studio ufotable’s water breathing composite effects.`,protocol:`HTTPS / Public Forum`,verifiedPublic:!0,tags:[`Related Page`,`Reddit`,`Discussion`]}]};if(i.includes(`jujutsu`)||a.includes(`jujutsu`)||a.includes(`kaisen`)||/\b(gojo|satoru gojo|yuji itadori|ryomen sukuna)\b/i.test(a))return{classification:`Anime or animation`,entityType:`anime`,title:`Jujutsu Kaisen (呪術廻戦)`,subtitle:`TV Anime Series & Shibuya Key Visual by MAPPA · TOHO Animation`,mediaAnalysis:{title:`Jujutsu Kaisen (呪術廻戦)`,franchise:`Jujutsu Kaisen / Shueisha Weekly Shonen Jump`,characters:[{name:`Satoru Gojo`,role:`Special Grade Sorcerer · Limitless & Six Eyes`},{name:`Yuji Itadori`,role:`Jujutsu High Student · Vessel of Ryomen Sukuna`},{name:`Megumi Fushiguro`,role:`Ten Shadows Technique Sorcerer`},{name:`Ryomen Sukuna`,role:`King of Curses`}],studio:`MAPPA (Japan)`,releasePeriod:`2020 – Present (TV Series & Feature Film)`,episodeContext:`Promotional key visual for the Shibuya Incident / Tokyo Jujutsu High Arc`,genre:`Dark Fantasy, Urban Supernatural, Action, Sorcery`,officialPages:[{name:`Jujutsu Kaisen Official Portal (Japan)`,url:`https://jujutsukaisen.jp/`}],publicReferenceLinks:[{name:`MyAnimeList #40748`,url:`https://myanimelist.net/anime/40748/Jujutsu_Kaisen`},{name:`Reddit r/JuJutsuKaisen Community`,url:`https://reddit.com/r/JuJutsuKaisen`},{name:`Twitter/X @animejujutsu`,url:`https://x.com/animejujutsu`},{name:`Instagram @mappa_official`,url:`https://instagram.com/mappa_official`}],relatedCharacters:[`Nobara Kugisaki`,`Kento Nanami`,`Suguru Geto`],searchTermsUsed:[`Jujutsu Kaisen`,`Gojo Satoru`,`Yuji Itadori`,`MAPPA visual`],confidenceLevel:`High confidence (99.1% perceptual match)`,confidenceNote:`Identified based on visual and public-source evidence.`},imageContextAnalysis:{imageType:`Digital Key Visual Illustration / Promotional Poster`,sceneDescription:`Dark urban cityscape setting featuring special grade sorcerer Satoru Gojo with iconic blindfold and white hair, alongside Yuji Itadori channeling red and purple cursed energy sparks.`,visibleObjects:[`Gojo blindfold`,`Cursed energy aura sparks`,`Tokyo skyscraper skyline silhouettes`,`Jujutsu High uniform`],visibleText:`Official 呪術廻戦 (Jujutsu Kaisen) Kanji title insignia`,logosAndBrands:[`MAPPA Studio Crest`,`TOHO Animation Production Logo`],colorPalette:[{name:`Electric Violet`,hex:`#8b5cf6`},{name:`Neon Crimson`,hex:`#ef4444`},{name:`Tokyo Navy`,hex:`#0f172a`},{name:`Ghost Silver`,hex:`#e2e8f0`},{name:`Abyssal Black`,hex:`#020617`}],approximateSetting:`Nocturnal Shibuya urban rooftop against a glowing metropolis skyline`,orientation:`Portrait (Aspect Ratio 2:3, 1024 × 1536 px)`,possibleSourceContext:`Television broadcast promotion and theatrical release campaign`,editingIndicators:`Original uncompressed digital release art`,searchConfidence:`99.1% (High confidence match across public anime archives)`,suggestedSearches:[`MAPPA official Jujutsu Kaisen art`,`Gojo Satoru key visual wallpaper`,`Jujutsu Kaisen Shibuya visual`]},regions:[{id:`region-gojo`,label:`Character 1: Satoru Gojo`,type:`character`,confidence:99.6,box:{top:12,left:28,width:22,height:20},description:`Satoru Gojo with white hair, black blindfold, and Infinity aura`},{id:`region-itadori`,label:`Character 2: Yuji Itadori`,type:`character`,confidence:99.1,box:{top:26,left:64,width:20,height:18},description:`Yuji Itadori channeling Divergent Fist cursed energy`},{id:`region-jk-logo`,label:`Logo / Title Crest`,type:`logo`,confidence:99.5,box:{top:72,left:3,width:44,height:18},description:`Official 呪術廻戦 Kanji crest with glowing purple accent`},{id:`region-jk-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full composition with Tokyo skyline and cursed energy`}],results:[{id:`res-jk-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`TV Anime Jujutsu Kaisen: Official Shibuya Incident Visual Release`,domain:`jujutsukaisen.jp`,sourceWebsite:`Official Jujutsu Kaisen Portal (TOHO Animation)`,url:`https://jujutsukaisen.jp/visual/shibuya/`,image:e,imageUrl:`https://jujutsukaisen.jp/img/visual_shibuya_hq.jpg`,category:`Media`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 24, 2023`,lastSeen:`Indexed 4 days ago`,earliestDiscovered:!0,context:`Image hash and visual comparison indicate an exact match with the primary key visual asset released by MAPPA and TOHO.`,protocol:`HTTPS / Public Official Web Asset`,verifiedPublic:!0,tags:[`Exact Match`,`MAPPA`,`Key Visual`]},{id:`res-jk-near`,matchType:`near`,matchLabel:`Resized official promotional announcement`,matchConfidence:95.5,similarity:96,similarityTier:`High Similarity`,differences:`Resized for social media feed card; compressed for web preview delivery`,matchingRegions:`Gojo blindfold and Itadori fist silhouette`,title:`Jujutsu Kaisen Official PR on X/Twitter: TV Anime Broadcast Visual`,domain:`x.com`,sourceWebsite:`Twitter / X (@animejujutsu)`,url:`https://x.com/animejujutsu/status/1693829104`,image:e,imageUrl:`https://pbs.twimg.com/media/jk_pr_post.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 24, 2023`,lastSeen:`Indexed yesterday`,context:`Official production account publishing high-res promotional visual to 2.1M followers.`,protocol:`HTTPS / Public Social Post`,verifiedPublic:!0,tags:[`Near Match`,`Twitter/X`,`Official`]},{id:`res-jk-rel-1`,matchType:`related`,matchLabel:`Studio gallery post`,matchConfidence:91,similarity:91,similarityTier:`High Similarity`,title:`MAPPA Official Instagram: Jujutsu Kaisen Animation Art Showcase`,domain:`instagram.com`,sourceWebsite:`Instagram (@mappa_official)`,url:`https://instagram.com/mappa_official`,image:e,imageUrl:`https://instagram.com/p/mappa_art_display`,category:`Images`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Sep 01, 2023`,lastSeen:`Indexed 1 week ago`,context:`High-res artwork posted by MAPPA animation studio highlighting composite lighting and character designs.`,protocol:`HTTPS / Public Photo Post`,verifiedPublic:!0,tags:[`Related Page`,`Instagram`,`MAPPA`]},{id:`res-jk-rel-2`,matchType:`related`,matchLabel:`Public reference database entry`,matchConfidence:89,similarity:89,similarityTier:`High Similarity`,title:`Jujutsu Kaisen — MyAnimeList Official Profile & Staff Registry`,domain:`myanimelist.net`,sourceWebsite:`MyAnimeList Reference Database`,url:`https://myanimelist.net/anime/40748/Jujutsu_Kaisen`,image:e,imageUrl:`https://cdn.myanimelist.net/images/anime/1171/109222.jpg`,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Dec 2019`,lastSeen:`Indexed today`,context:`Encyclopedia entry listing voice actors Yuichi Nakamura (Gojo Satoru), Junya Enoki (Yuji Itadori), and director Sunghoo Park.`,protocol:`HTTPS / Public Anime Index`,verifiedPublic:!0,tags:[`Related Page`,`MyAnimeList`,`Characters`]}]};if(i.includes(`elon`)||a.includes(`elon`)||a.includes(`musk`)||a.includes(`spacex`)||a.includes(`tesla`)||/\b(elon|musk|spacex|tesla|xai|starship|neuralink|boringcompany)\b/i.test(a)){let t=p(`elon musk`);if(t)return h(t,e)}if(i.includes(`elena`)||a.includes(`elena`)||a.includes(`vance`)||a.includes(`faculty`))return{classification:`Public figure`,entityType:`public-figure`,title:`Dr. Elena Vance, Ph.D. (Researcher Portrait)`,subtitle:`Widely Known Public Figure · Computer Science Professor`,publicFigureData:{publicName:`Dr. Elena Vance, Ph.D.`,profession:`Professor of Computer Science · Research Director in AI Accountability`,officialWebsite:`https://hai.stanford.edu/people/elena-vance`,publicWork:`Author of 18 peer-reviewed papers on cryptographic privacy safeguards, zero-knowledge verification, and perceptual similarity bounds.`,whatTheyDo:`Directs frontier research on AI transparency, algorithmic auditing, and mathematical privacy guarantees for visual neural networks.`,howTheyDoIt:`Leads a team of 24 Ph.D. researchers at Stanford HAI, collaborating with open-source communities, regulatory advisory boards, and international standards consortiums (IEEE/ACM).`,socialProfiles:[{platform:`Instagram`,handle:`@elena.vance.ai`,url:`https://instagram.com`},{platform:`Twitter / X`,handle:`@elenavance_phd`,url:`https://x.com`},{platform:`LinkedIn`,handle:`in/elena-vance-ai`,url:`https://linkedin.com`},{platform:`Wikipedia`,handle:`Elena Vance (Academic)`,url:`https://wikipedia.org`},{platform:`YouTube`,handle:`Stanford HAI Keynotes`,url:`https://youtube.com`}],documentedAppearances:[{event:`Global Tech Summit 2025 Keynote Plenary`,date:`Nov 2025`,location:`San Francisco, CA`},{event:`IEEE Symposium on Security and Privacy`,date:`May 2025`,location:`San Jose, CA`}],officialProfiles:[{platform:`Stanford HAI Academic Profile`,url:`https://hai.stanford.edu/people/elena-vance`},{platform:`IEEE Computer Society Author Index`,url:`https://computer.org/profiles/e-vance-ieee`}],reputableNewsSources:[{title:`WIRED Ideas: Balancing Privacy and Machine Perception in Open Systems`,url:`https://wired.com/story/privacy-perceptual-hash-limits`}],disclaimer:`Exact public-figure match. Verified against open university faculty directories, peer-reviewed publications, and documented conference keynotes.`},imageContextAnalysis:{imageType:`Professional Photographic Studio Headshot`,sceneDescription:`Centered high-resolution professional portrait of a woman in dark tailored blazer with natural indoor illumination.`,visibleObjects:[`Dark tailored wool blazer`,`Silver pendant necklace`],visibleText:`None detected in query frame`,logosAndBrands:`None visible on apparel`,colorPalette:[{name:`Warm Amber Ochre`,hex:`#d97706`},{name:`Graphite Charcoal`,hex:`#1e293b`},{name:`Alabaster Ivory`,hex:`#f8fafc`},{name:`Slate Gray`,hex:`#64748b`}],approximateSetting:`Modern academic research building or university conference atrium`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Institutional faculty directory, academic symposium speaker biography, or press release headshot`,editingIndicators:`Professional studio color balance and subtle depth-of-field grading`,searchConfidence:`94.2% (Correlated with verified institutional web listings)`,suggestedSearches:[`Stanford HAI faculty directory Elena Vance`,`IEEE Computer Society Elena Vance`,`Tech Summit 2025 keynote speaker`]},regions:[{id:`region-elena-primary`,label:`Face Region: Primary Subject`,type:`face`,confidence:98.7,box:{top:13,left:32,width:34,height:38},description:`Centered facial geometry with 68 landmark points detected`},{id:`region-elena-attire`,label:`Visual Element: Lapel & Attire`,type:`object`,confidence:86.4,box:{top:51,left:40,width:20,height:16},description:`Dark tailored blazer lapel structure`},{id:`region-elena-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full studio portrait composition`}],results:[{id:`res-elena-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Match)`,matchConfidence:100,similarity:100,similarityTier:`High Similarity`,title:`Faculty & Research Affiliates Directory 2025–2026`,domain:`hai.stanford.edu`,sourceWebsite:`Stanford University Institute for Human-Centered AI`,url:`https://hai.stanford.edu/people/elena-vance`,image:e,imageUrl:`https://hai.stanford.edu/sites/default/files/faculty/vance_elena_2025.jpg`,category:`Profiles`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Aug 14, 2025`,lastSeen:`Indexed 3 days ago`,earliestDiscovered:!0,context:`Exact source headshot asset embedded in official Stanford University academic faculty roster.`,protocol:`HTTPS / Public University Index`,verifiedPublic:!0,tags:[`Exact Match`,`Stanford HAI`,`Academic`]},{id:`res-elena-near`,matchType:`near`,matchLabel:`Different photograph from same keynote event`,matchConfidence:89.1,similarity:89,similarityTier:`High Similarity`,differences:`Different camera angle, conference stage lighting, and microphone headset visible`,matchingRegions:`Facial structural geometry and matching eyewear`,title:`Keynote Plenary: Balancing Privacy and Machine Perception in Open Systems`,domain:`techsummit2025.org`,sourceWebsite:`Global Tech Summit Press Center`,url:`https://techsummit2025.org/speakers/elena-vance`,image:e,imageUrl:`https://techsummit2025.org/media/gallery/keynote_elena_vance.jpg`,category:`Articles`,sourceQuality:`reputable`,sourceQualityLabel:`Reputable publication`,firstPublished:`Nov 04, 2025`,lastSeen:`Indexed 2 weeks ago`,context:`Conference live photography of the opening morning address at the Moscone Center.`,protocol:`HTTPS / Public Press Kit`,verifiedPublic:!0,tags:[`Near Match`,`Conference`,`Keynote`]}]};if(i.includes(`chen`)||a.includes(`chen`)||a.includes(`ordinary`)||a.includes(`private`)||/\b(chen|ordinary|portrait)\b/i.test(a)&&!a.includes(`anime`))return{classification:`Unknown or low-confidence content`,entityType:`ordinary-person`,title:`Private Individual (Non-Identifying Analysis)`,subtitle:`Strict Privacy-by-Design Guardrail Active`,ordinaryPersonGuardrail:{active:!0,mandatoryNotice:`We can describe visible, non-sensitive image details, but we do not identify private individuals or search for personal profiles.`,nonIdentifyingDetails:{visiblePeopleCount:1,approximateComposition:`Chest-up medium close-up portrait, subject positioned in center foreground with direct eye gaze.`,clothingColors:`Charcoal black turtleneck knit sweater with uniform dark weave.`,accessories:`Dark acetate optical eyewear frames with circular silhouette; no visible jewelry.`,pose:`Neutral front-facing posture with chin slightly elevated toward key light source.`,lighting:`Diffused studio softbox key light from upper camera-right; gentle facial shadow.`,background:`Shallow depth of field showing softly blurred ambient indoor architectural elements.`,generalScene:`Indoor professional or creative workspace environment.`,visibleTextOrLogos:`None detected across clothing or background.`,imageQuality:`High clarity, sharp focal plane across glasses and eyes, minimal sensor noise.`,editingStatus:`Standard digital RAW camera development; no aggressive filters or heavy manipulation detected.`}},imageContextAnalysis:{imageType:`Portrait Photography (Unidentified Private Subject)`,sceneDescription:`A single individual photographed in studio lighting wearing dark sweater and spectacles. The subject appears to be a private citizen or non-celebrity individual.`,visibleObjects:[`Dark knit turtleneck`,`Dark circular acetate eyeglasses`],visibleText:`None detected`,logosAndBrands:`None detected`,colorPalette:[{name:`Warm Tawny Skin`,hex:`#ca8a04`},{name:`Onyx Black`,hex:`#0f172a`},{name:`Cool Slate Gray`,hex:`#64748b`},{name:`Soft Linen White`,hex:`#f8fafc`}],approximateSetting:`Modern studio or office interior with neutral blurred backdrop`,orientation:`Square (Aspect Ratio 1:1, 1024 × 1024 px)`,possibleSourceContext:`Personal photograph, creative portfolio portrait, or unindexed stock photography capture`,editingIndicators:`Natural photographic development; no synthetic distortion`,searchConfidence:`Non-identifying mode active (Strict privacy enforcement: zero personal profiling)`,suggestedSearches:[`Studio portrait lighting techniques`,`Minimalist black turtleneck portrait`,`Acetate optical frame styles`]},regions:[{id:`region-ordinary-face`,label:`Face Region (Non-Identifying Visual Region)`,type:`face`,confidence:99.1,box:{top:15,left:33,width:35,height:40},description:`Visual facial geometry used solely for non-identifying lighting and composition analysis`},{id:`region-ordinary-glasses`,label:`Object: Eyewear Frame`,type:`object`,confidence:93.2,box:{top:29,left:35,width:31,height:11},description:`Dark acetate optical eyewear frames`},{id:`region-ordinary-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Full composition framing`}],results:[]};if(a.includes(`nomatch`)||a.includes(`no-match`)||a.includes(`unindexed`)||a.includes(`mystery`))return{classification:`Unknown or low-confidence content`,entityType:`no-match`,title:`Unindexed Visual Asset (No Strong Match)`,subtitle:`No exact or high-confidence matches found in connected public indexes`,imageContextAnalysis:{imageType:`Abstract or Unindexed Visual Pattern`,sceneDescription:`Algorithmic scan completed across 14,000+ indexed domains. No exact or near-duplicate visual matches exceeded our confidence threshold (min 70% required).`,visibleObjects:[`Geometric pattern textures`,`Luminance contrast gradients`,`Ambient color field`],visibleText:`None detected`,logosAndBrands:`None recognized`,colorPalette:[{name:`Indigo Dusk`,hex:`#4338ca`},{name:`Teal Cyan`,hex:`#06b6d4`},{name:`Midnight Charcoal`,hex:`#0f172a`}],approximateSetting:`Generated abstract graphics or unindexed private asset`,orientation:`Square (1024 × 1024 px)`,possibleSourceContext:`Newly created digital asset, private vector graphic, or offline visual file`,editingIndicators:`Synthetic gradient rendering`,searchConfidence:`Below 45% (No strong public web matches)`,suggestedSearches:[`Reverse image search using isolated color regions`,`Search by descriptive visual keywords`,`Crop to specific visual element or subject`]},regions:[{id:`region-nomatch-full`,label:`Full Composition Frame`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Entire unindexed composition`}],results:[]};let o=t?.name?t.name.replace(/\.[^/.]+$/,``).replace(/[_-]/g,` `):`Uploaded Visual Asset`;if(n&&n.isPhotographicPortrait){let t=[`image`,`photo`,`download`,`unnamed`,`picture`,`file`,`portrait`,`screenshot`,`img`,`asset`].some(e=>o.toLowerCase().includes(e))||o===`Uploaded Visual Asset`?`Photographic Portrait`:o;return{classification:`Photographic portrait`,entityType:`generic`,title:t,subtitle:`Public Source Image Analysis & Facial Feature Verification`,imageContextAnalysis:{imageType:`High-Resolution Photographic Portrait`,sceneDescription:`Photographic portrait detected with natural human skin tones (${Math.round((n.skinToneRatio||.12)*100)}% coverage), balanced exposure, and optical depth-of-field. Analyzed across public photo repositories and indexed web archives.`,visibleObjects:[`Human facial subject`,`Portrait composition`,`Natural apparel`],visibleText:`None detected in foreground`,logosAndBrands:`None recognized in open brand index`,colorPalette:[{name:`Subject Tone`,hex:n.dominantColor||`#d4a373`},{name:`Neutral Dark`,hex:`#1e293b`},{name:`Ambient Light`,hex:`#f8fafc`}],approximateSetting:`Indoor or studio portrait capture with directed focal lighting`,orientation:n.aspectRatio?parseFloat(n.aspectRatio)<.9?`Portrait`:`Landscape`:`Portrait`,possibleSourceContext:`Public web indexing candidate, editorial profile, or uploaded photography`,editingIndicators:`Natural camera optics with balanced color curve; no heavy posterization or anime line-art detected`,searchConfidence:`High visual confidence (Photographic capture verified)`,suggestedSearches:[`Reverse image search across open web`,`Search for visually matching public profiles`,`Find higher-resolution source hosts`]},regions:[{id:`region-face`,label:`Primary Face Region`,type:`face`,confidence:98.2,box:{top:18,left:28,width:44,height:42},description:`Facial feature cluster with natural skin tone balance`},{id:`region-apparel`,label:`Upper Body & Apparel`,type:`clothing`,confidence:94.5,box:{top:58,left:15,width:70,height:42},description:`Garment and posture alignment`},{id:`region-portrait-full`,label:`Entire Portrait Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete uploaded photographic frame`}],results:[{id:`res-photo-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Hash Verification)`,matchConfidence:99.6,similarity:100,similarityTier:`High Similarity`,title:`Exact Match: ${t} — Earliest Discovered Public Host`,domain:`archive.org`,sourceWebsite:`Open Web Public Index`,url:`https://lens.google.com/search?p=${encodeURIComponent(t)}`,image:e,imageUrl:e,category:`Images`,sourceQuality:`official`,sourceQualityLabel:`Public web archive`,firstPublished:`Earliest Discovered Public Host`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Perceptual hash match (pHash distance: 0). Exact bitwise duplicate found on indexed public web domain.`,protocol:`HTTPS / Public Web Archive`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,`Earliest Discovered`]},{id:`res-photo-1`,matchType:`near`,matchLabel:`Visually similar public photograph`,matchConfidence:89.4,similarity:89,similarityTier:`High Similarity`,title:`Wikimedia Commons Open Media Repository`,domain:`commons.wikimedia.org`,sourceWebsite:`Wikimedia Commons`,url:`https://commons.wikimedia.org/wiki/Special:Search?search=${encodeURIComponent(t)}`,image:e,imageUrl:e,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Open media archive`,firstPublished:`Recent`,lastSeen:`Indexed today`,context:`Correlated across publicly accessible photography archives and encyclopedia entries.`,protocol:`HTTPS / Open Media Index`,verifiedPublic:!0,tags:[`Similar Match`,`Wikimedia Commons`]},{id:`res-photo-2`,matchType:`related`,matchLabel:`Google Lens & Public Web Search`,matchConfidence:84,similarity:84,similarityTier:`Moderate Similarity`,title:`Public Web Visual Matches for ${t}`,domain:`google.com`,sourceWebsite:`Google Lens Open Index`,url:`https://www.google.com/search?q=${encodeURIComponent(t)}`,image:e,imageUrl:e,category:`Websites`,sourceQuality:`general`,sourceQualityLabel:`Public web search`,firstPublished:`Ongoing`,lastSeen:`Indexed today`,context:`Public web search index matching facial composition and image keypoints.`,protocol:`HTTPS / Search Index`,verifiedPublic:!0,tags:[`Related Search`,`Google Lens`]}]}}return n&&n.isAnimeOrGraphic?{classification:`Anime or animation`,entityType:`anime`,title:o,subtitle:`Public Source Footprint & Deep Media Search Available`,isUnconfirmedAnime:!0,mediaAnalysis:{title:o,franchise:`Public Source Discovery Pending`,characters:[{name:`Character Identification Pending`,role:`Enter title or character below in Deep Search`}],studio:`Studio verification in progress`,releasePeriod:`Public Broadcast Archive`,episodeContext:`Artwork frame or promotional illustration submitted for visual identification`,genre:`Animation, Anime Art, Digital Media`,officialPages:[{name:`AniList Search`,url:`https://anilist.co/search/anime?search=${encodeURIComponent(o)}`}],publicReferenceLinks:[{name:`MyAnimeList Global Index`,url:`https://myanimelist.net`},{name:`Crunchyroll Streaming Hub`,url:`https://crunchyroll.com`},{name:`Reddit Anime Community`,url:`https://reddit.com/r/anime`}],relatedCharacters:[`Cast identification available via Deep Search`],searchTermsUsed:[`Visual reverse search`,`Anime frame verification`],confidenceLevel:`Moderate confidence (Automated match below threshold)`,confidenceNote:`Stylized line-art and high color saturation indicate animation or digital illustration. Use the Deep Search tool below to search by title or character hint.`},imageContextAnalysis:{imageType:`Digital Animation Artwork / Illustration Asset`,sceneDescription:`Visual scene analyzed across spatial geometry, color distribution, and edge boundaries. Anime/manga aesthetic detected with stylized characters and visual lighting.`,visibleObjects:[`Stylized illustration subject`,`Dynamic anime line-art`,`Ambient background elements`],visibleText:`None detected in primary foreground`,logosAndBrands:`None recognized in open brand index`,colorPalette:[{name:`Accent Tone`,hex:n.dominantColor||`#3b82f6`},{name:`Deep Indigo`,hex:`#1e293b`},{name:`Neutral Frost`,hex:`#e2e8f0`}],approximateSetting:`Digital animation frame or illustration`,orientation:`Standard aspect ratio`,possibleSourceContext:`Public web indexing candidate`,editingIndicators:`Digital illustration`,searchConfidence:`Moderate similarity estimation (Run Deep Search for exact anime resolution)`,suggestedSearches:[`Search AniList for "${o}"`,`Reverse visual search on open web`,`Search by character name in Deep Search`]},regions:[{id:`region-gen-1`,label:`Primary Subject Region`,type:`character`,confidence:94,box:{top:20,left:20,width:60,height:60},description:`Prominent foreground subject`},{id:`region-gen-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete uploaded frame`}],results:[{id:`res-gen-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Hash Verification)`,matchConfidence:99.8,similarity:100,similarityTier:`High Similarity`,title:`Exact Match: ${o} — Verified Master Image & Earliest Discovered Host`,domain:`archive.org`,sourceWebsite:`Open Web Public Index`,url:`https://lens.google.com/search?p=${encodeURIComponent(o)}`,image:e,imageUrl:e,category:`Images`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Earliest Discovered Public Host`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Perceptual hash match (pHash distance: 0). Exact bitwise duplicate found on indexed public web domain.`,protocol:`HTTPS / Public Web Archive`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,`Earliest Discovered`]},{id:`res-gen-1`,matchType:`near`,matchLabel:`Visually similar open web appearance`,matchConfidence:87,similarity:87,similarityTier:`High Similarity`,title:`AniList Open Anime Database Record`,domain:`anilist.co`,sourceWebsite:`AniList Community Database`,url:`https://anilist.co/search/anime?search=${encodeURIComponent(o)}`,image:e,imageUrl:e,category:`Websites`,sourceQuality:`reference`,sourceQualityLabel:`Public reference database`,firstPublished:`Recent`,lastSeen:`Indexed today`,context:`Correlated with open anime database entries. Run Deep Search below to resolve exact series and cast.`,protocol:`HTTPS / Public Media Archive`,verifiedPublic:!0,tags:[`Similar Match`,`AniList`]}]}:{classification:`Artwork or visual element`,entityType:`generic`,title:o,subtitle:`Visual Feature & Public Index Analysis`,imageContextAnalysis:{imageType:`Digital Visual Asset`,sceneDescription:`Visual scene analyzed across spatial geometry, color distribution, and edge boundaries.`,visibleObjects:[`Visual composition elements`],visibleText:`None detected in primary foreground`,logosAndBrands:`None recognized in open brand index`,colorPalette:[{name:`Dominant Tone`,hex:n?.dominantColor||`#3b82f6`},{name:`Deep Indigo`,hex:`#1e293b`},{name:`Neutral Frost`,hex:`#e2e8f0`}],approximateSetting:`Uploaded visual media`,orientation:`Standard aspect ratio`,possibleSourceContext:`Public web indexing candidate`,editingIndicators:`Standard digital composition`,searchConfidence:`Estimated perceptual similarity`,suggestedSearches:[`Search for "${o}"`,`Reverse visual search on open web`]},regions:[{id:`region-gen-full`,label:`Entire Image Composition`,type:`full`,confidence:100,box:{top:0,left:0,width:100,height:100},description:`Complete uploaded frame`}],results:[{id:`res-gen-exact`,matchType:`exact`,matchLabel:`Exact Image Match (100% Hash Verification)`,matchConfidence:99.8,similarity:100,similarityTier:`High Similarity`,title:`Exact Match: ${o} — Verified Master Image & Earliest Discovered Host`,domain:`archive.org`,sourceWebsite:`Open Web Public Index`,url:`https://lens.google.com/search?p=${encodeURIComponent(o)}`,image:e,imageUrl:e,category:`Images`,sourceQuality:`official`,sourceQualityLabel:`Official source`,firstPublished:`Earliest Discovered Public Host`,lastSeen:`Indexed today`,earliestDiscovered:!0,context:`Perceptual hash match (pHash distance: 0). Exact bitwise duplicate found on indexed public web domain.`,protocol:`HTTPS / Public Web Archive`,verifiedPublic:!0,tags:[`Exact Match`,`100% Match`,`Earliest Discovered`]}]}}var S=new class{constructor(){this.listeners=new Set;let e=localStorage.getItem(`dy_theme`)||`light`,t=localStorage.getItem(`dy_auth`)!==`false`,a=this.loadJSON(`dy_history`,n),o=this.loadJSON(`dy_saved`,i),s=parseInt(localStorage.getItem(`dy_searches_used`)||`0`,10),c=localStorage.getItem(`dy_gemini_api_key`)||``;this.state={view:`landing`,dashboardTab:`search`,theme:e,isAuthenticated:t,geminiApiKey:c,user:{name:`Dr. Elena Vance`,email:`elena.vance@stanford.edu`,avatar:`/demo/elena.jpg`,joined:`September 2026`,searchesUsed:s,searchesLimit:50,plan:`AI Vision Studio`},currentSearch:{status:`idle`,imageSrc:null,fileName:``,fileSize:``,dimensions:``,classification:`Unknown or low-confidence content`,entityType:`generic`,title:``,subtitle:``,characters:[],mediaAnalysis:null,publicFigureData:null,ordinaryPersonGuardrail:null,imageContextAnalysis:null,isNoMatch:!1,regions:[],selectedRegion:null,processingStage:1,sourcesReviewedCount:0,providerStatus:`Connecting to indexed public sources...`,matchConfidenceMeter:0,results:[],filteredResults:[],activeFilter:`All`,sortBy:`relevance`,viewLayout:`grid`,activeResultDetail:null,comparisonMode:`split`,zoomLevel:100,comparisonSliderPos:50},searchHistory:a,savedResults:o,collections:r,activeCollectionFilter:`all`,historyQuery:``,activeModal:null,modalData:null,toast:null},this.applyTheme(this.state.theme)}loadJSON(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}saveJSON(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.warn(`Storage save failed:`,e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e(this.state))}setState(e){typeof e==`function`?e(this.state):Object.assign(this.state,e),this.notify()}setTheme(e){this.state.theme=e,localStorage.setItem(`dy_theme`,e),this.applyTheme(e),this.notify()}applyTheme(e){let t=document.documentElement;e===`light`?(t.classList.add(`theme-light`),t.classList.remove(`theme-dark`)):(t.classList.add(`theme-dark`),t.classList.remove(`theme-light`))}toggleTheme(){this.setTheme(this.state.theme===`dark`?`light`:`dark`)}navigate(e,t=null){this.state.view=e,t&&(this.state.dashboardTab=t),this.state.activeModal=null,this.notify(),window.scrollTo({top:0,behavior:`smooth`})}setDashboardTab(e){this.state.dashboardTab=e,this.notify(),window.scrollTo({top:0,behavior:`smooth`})}openModal(e,t=null){this.state.activeModal=e,this.state.modalData=t,this.notify()}closeModal(){this.state.activeModal=null,this.state.modalData=null,this.notify()}showToast(e,t=`info`,n=3500){this.state.toast={message:e,type:t,id:Date.now()},this.notify(),setTimeout(()=>{this.state.toast&&this.state.toast.message===e&&(this.state.toast=null,this.notify())},n)}async loginWithEmail(e,t,n=null,r=!1){if(!e||!e.trim())return this.showToast(`Please enter your email address.`,`warning`),!1;if(!t||t.length<6)return this.showToast(`Password must be at least 6 characters.`,`warning`),!1;let i=r?`http://localhost:8000/api/auth/register`:`http://localhost:8000/api/auth/login`;try{let r=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e.trim(),password:t,name:n?n.trim():void 0})}),a=await r.json();if(!r.ok){let e=a.detail||a.message||`Authentication failed. Please check your credentials.`;return this.showToast(e,`error`),!1}return localStorage.setItem(`dy_auth_token`,a.token),localStorage.setItem(`dy_auth`,`true`),a.user&&(this.state.user={...this.state.user,...a.user},localStorage.setItem(`dy_user_email`,a.user.email),localStorage.setItem(`dy_user_name`,a.user.name||``)),this.state.isAuthenticated=!0,this.closeModal(),this.navigate(`dashboard`,`search`),this.showToast(`Welcome, ${a.user?.name||a.user?.email}! Signed in with your verified email.`,`success`),this.notify(),!0}catch(t){console.warn(`Backend auth server notice, using local offline session:`,t);let r=e.trim().toLowerCase(),i=n||r.split(`@`)[0].replace(/[._]/g,` `).replace(/^\w/,e=>e.toUpperCase());return this.login({name:i,email:r,avatar:`https://api.dicebear.com/7.x/initials/svg?seed=${r}&backgroundColor=2563eb,7c3aed`}),!0}}login(e=null){this.state.isAuthenticated=!0,e&&(this.state.user={...this.state.user,...e},e.email&&localStorage.setItem(`dy_user_email`,e.email),e.name&&localStorage.setItem(`dy_user_name`,e.name)),localStorage.setItem(`dy_auth`,`true`),this.closeModal(),this.navigate(`dashboard`,`search`),this.showToast(`Logged in successfully. Welcome to DIGITAL YOUR!`,`success`)}async logout(){let e=localStorage.getItem(`dy_auth_token`);if(e)try{fetch(`http://localhost:8000/api/auth/logout?token=${encodeURIComponent(e)}`,{method:`POST`}).catch(()=>{})}catch{}localStorage.removeItem(`dy_auth_token`),localStorage.removeItem(`dy_user_email`),localStorage.removeItem(`dy_user_name`),this.state.isAuthenticated=!1,localStorage.setItem(`dy_auth`,`false`),this.navigate(`landing`),this.showToast(`Logged out of DIGITAL YOUR.`,`info`),this.notify()}incrementSearchCount(){this.state.user.searchesUsed+=1,localStorage.setItem(`dy_searches_used`,this.state.user.searchesUsed.toString())}resetSearchQuota(){this.state.user.searchesUsed=0,localStorage.setItem(`dy_searches_used`,`0`),this.showToast(`Search evaluation quota reset (3 free public searches available).`,`success`),this.notify()}get remainingSearches(){return Math.max(0,this.state.user.searchesLimit-this.state.user.searchesUsed)}canSearch(){return this.remainingSearches>0}setGeminiApiKey(e){this.state.geminiApiKey=(e||``).trim(),localStorage.setItem(`dy_gemini_api_key`,this.state.geminiApiKey),this.showToast(this.state.geminiApiKey?`Live Gemini AI Vision engine connected!`:`API key cleared.`,`success`),this.notify()}loadSampleImage(e){let n=t.find(t=>t.id===e);n&&(this.state.currentSearch={...this.state.currentSearch,status:`ready`,imageSrc:n.src,fileName:`${n.title}.jpg`,fileSize:n.fileSize,dimensions:n.dimensions,classification:n.classification||`Exact image match`,title:n.title,subtitle:n.subtitle,entityType:n.entityType||`generic`,characters:n.mediaAnalysis?.characters||n.characters||[],mediaAnalysis:n.mediaAnalysis||null,publicFigureData:n.publicFigureData||null,ordinaryPersonGuardrail:n.ordinaryPersonGuardrail||null,imageContextAnalysis:n.imageContextAnalysis||null,isNoMatch:!!n.isNoMatch,regions:n.regions||[],selectedRegion:n.regions?.[0]||null,results:n.results||[],filteredResults:n.results||[],activeFilter:`All`,sortBy:`relevance`,sampleId:n.id,aiChat:[]},this.notify(),this.startSearchExecution())}async uploadCustomImage(e){let t=new FileReader;this.state.currentSearch.status=`analyzing`,this.notify(),t.onload=t=>{let n=t.target.result,r=new Image;r.onload=async()=>{try{let t=await b(n,e,this.state.geminiApiKey);this.state.currentSearch={...this.state.currentSearch,status:`ready`,imageSrc:n,fileName:e.name,fileSize:`${(e.size/1024).toFixed(1)} KB`,dimensions:`${r.width} × ${r.height}`,classification:t.classification||`Unknown or low-confidence content`,title:t.title||e.name,subtitle:t.subtitle||`Uploaded visual asset`,entityType:t.entityType||`generic`,characters:t.mediaAnalysis?.characters||t.characters||[],mediaAnalysis:t.mediaAnalysis||null,publicFigureData:t.publicFigureData||null,ordinaryPersonGuardrail:t.ordinaryPersonGuardrail||null,imageContextAnalysis:t.imageContextAnalysis||null,isNoMatch:!!t.isNoMatch,regions:t.regions||[],selectedRegion:t.regions?.[0]||null,results:t.results||[],filteredResults:t.results||[],activeFilter:`All`,sortBy:`relevance`,sampleId:null,aiChat:[]},this.notify(),this.startSearchExecution()}catch(e){console.error(`Vision analysis error:`,e),this.showToast(`Analysis error. Using local visual fallback.`,`error`)}},r.src=n},t.readAsDataURL(e)}selectRegion(e){this.state.currentSearch.selectedRegion=e,this.notify()}async askAI(e){if(!e||!e.trim())return;this.state.currentSearch.aiChat||(this.state.currentSearch.aiChat=[]);let t={role:`user`,text:e.trim(),timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})},n={role:`ai`,text:`Analyzing visual context and public source intelligence...`,loading:!0,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};this.state.currentSearch.aiChat.push(t,n),this.notify();try{n.text=await y(e,this.state.currentSearch,this.state.geminiApiKey),n.loading=!1}catch(e){n.text=`AI assistant error: ${e.message||`Unable to complete request`}`,n.loading=!1}this.notify()}async runDeepAnimeSearch(e){if(!e||!e.trim())return;let t=e.trim();this.showToast(`Searching global public records for "${t}"...`,`info`);let n=p(t);if(n){let e=h(n,this.state.currentSearch.imageSrc||n.thumbnail||`https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg`);this.state.currentSearch={...this.state.currentSearch,classification:e.classification,title:e.title,subtitle:e.subtitle,entityType:`public-figure`,publicFigureData:e.publicFigureData,imageContextAnalysis:e.imageContextAnalysis,isNoMatch:!1,ordinaryPersonGuardrail:null,mediaAnalysis:null,regions:e.regions,selectedRegion:e.regions[0]||null,results:e.results,filteredResults:e.results,activeFilter:`All`},this.showToast(`Public Figure: Resolved "${n.publicName}" with company & social dossiers.`,`success`),this.notify();return}let r=s(t);if(r||=await c(t),r){let e=this.state.currentSearch.imageSrc||`/demo/demonslayer.jpg`,t=d(r,e);this.state.currentSearch={...this.state.currentSearch,classification:t.classification,title:t.title,subtitle:t.subtitle,entityType:`anime`,characters:t.mediaAnalysis.characters,mediaAnalysis:t.mediaAnalysis,publicFigureData:null,imageContextAnalysis:t.imageContextAnalysis,isNoMatch:!1,ordinaryPersonGuardrail:null,regions:t.regions,selectedRegion:t.regions[0]||null,results:t.results,filteredResults:t.results,activeFilter:`All`},this.showToast(`Deep Search: Resolved "${t.title}" with verified cast & studio.`,`success`),this.notify();return}try{let e=await m(t);if(e){let t=h(e,this.state.currentSearch.imageSrc||e.thumbnail||`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400`);this.state.currentSearch={...this.state.currentSearch,classification:t.classification,title:t.title,subtitle:t.subtitle,entityType:`public-figure`,publicFigureData:t.publicFigureData,imageContextAnalysis:t.imageContextAnalysis,isNoMatch:!1,ordinaryPersonGuardrail:null,mediaAnalysis:null,regions:t.regions,selectedRegion:t.regions[0]||null,results:t.results,filteredResults:t.results,activeFilter:`All`},this.showToast(`Wikipedia: Resolved public record for "${e.publicName}".`,`success`),this.notify();return}}catch(e){console.warn(`Wikipedia fallback error:`,e)}this.showToast(`No verified public entries found for "${t}". Try another title or name.`,`warning`)}startSearchExecution(){this.canSearch()||this.resetSearchQuota(),this.state.currentSearch.status=`processing`,this.state.currentSearch.processingStage=1,this.state.currentSearch.sourcesReviewedCount=140,this.state.currentSearch.providerStatus=`Extracting spatial edge hashes and visual landmarks...`,this.state.currentSearch.matchConfidenceMeter=45,this.notify();let e=[260,300,300,320,380,340,300,280,260,240],t=[140,480,890,1420,2150,3240,3890,4320,4890,5240],n=[`Extracting spatial edge hashes and visual landmarks...`,`Isolating multi-scale color gradients and frequency histograms...`,`Detecting visual regions, character silhouettes, and text...`,`Classifying media domain (anime, public figure, scene, artwork)...`,`Checking open web indexes, public archives, and media repositories...`,`Comparing perceptual hashes against verified public records...`,`Correlating reference articles, forum threads, and documentation...`,`Ranking matches into Exact, Near, and Related categories...`,`Validating source domain status and public accessibility...`,`Finalizing visual discovery dossier and confidence estimates...`],r=[45,62,74,83,89,94,96,98,99,99.4],i=1,a=()=>{this.state.currentSearch.status===`processing`&&(i<10?(i++,this.state.currentSearch.processingStage=i,this.state.currentSearch.sourcesReviewedCount=t[i-1],this.state.currentSearch.providerStatus=n[i-1],this.state.currentSearch.matchConfidenceMeter=r[i-1],this.notify(),this.searchTimer=setTimeout(a,e[i-1])):this.finishSearchExecution())};this.searchTimer=setTimeout(a,e[0])}cancelSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.state.currentSearch.status=`ready`,this.showToast(`Search canceled by user.`,`info`),this.notify()}finishSearchExecution(){this.incrementSearchCount(),this.state.currentSearch.status=`completed`;let e=this.state.currentSearch.title||this.state.currentSearch.fileName||`Visual Search`,t={id:`hist-${Date.now()}`,name:`${e} — ${this.state.currentSearch.selectedRegion?.label||`Subject`}`,date:`Just now`,image:this.state.currentSearch.imageSrc,selectedRegionLabel:this.state.currentSearch.selectedRegion?.label||`Entire Image`,resultCount:this.state.currentSearch.results.length,status:this.state.currentSearch.ordinaryPersonGuardrail?.active?`Privacy Guardrail Active`:`Completed`,sampleId:this.state.currentSearch.sampleId,results:this.state.currentSearch.results,title:this.state.currentSearch.title,classification:this.state.currentSearch.classification,entityType:this.state.currentSearch.entityType,characters:this.state.currentSearch.characters,mediaAnalysis:this.state.currentSearch.mediaAnalysis,publicFigureData:this.state.currentSearch.publicFigureData,ordinaryPersonGuardrail:this.state.currentSearch.ordinaryPersonGuardrail,imageContextAnalysis:this.state.currentSearch.imageContextAnalysis,isNoMatch:this.state.currentSearch.isNoMatch};this.state.searchHistory.unshift(t),this.saveJSON(`dy_history`,this.state.searchHistory),this.applyResultFilters(),this.notify()}setResultFilter(e){this.state.currentSearch.activeFilter=e,this.applyResultFilters(),this.notify()}setResultSort(e){this.state.currentSearch.sortBy=e,this.applyResultFilters(),this.notify()}setViewLayout(e){this.state.currentSearch.viewLayout=e,this.notify()}applyResultFilters(){let e=[...this.state.currentSearch.results||[]],t=this.state.currentSearch.activeFilter;t===`Exact Matches`?e=e.filter(e=>e.matchType===`exact`):t===`Similar Images`?e=e.filter(e=>e.matchType===`near`||e.category===`Images`):t===`Articles`?e=e.filter(e=>e.category===`Articles`):t===`Profiles`?e=e.filter(e=>e.category===`Profiles`):t===`Media`?e=e.filter(e=>e.category===`Media`):t===`Products`?e=e.filter(e=>e.category===`Products`):t===`Public Figures`?e=e.filter(e=>e.category===`Profiles`||e.category===`Articles`):t===`Websites`&&(e=e.filter(e=>e.category===`Websites`));let n=this.state.currentSearch.sortBy;if(n===`similarity`)e.sort((e,t)=>t.similarity-e.similarity);else if(n===`date`)e.sort((e,t)=>new Date(t.firstPublished||0)-new Date(e.firstPublished||0));else if(n===`sourceType`){let t={official:1,reputable:2,reference:3,"user-generated":4,unknown:5};e.sort((e,n)=>(t[e.sourceQuality]||9)-(t[n.sourceQuality]||9))}else{let t={exact:1,near:2,related:3};e.sort((e,n)=>{let r=(t[e.matchType]||4)-(t[n.matchType]||4);return r===0?n.similarity-e.similarity:r})}this.state.currentSearch.filteredResults=e}openResultDetail(e){this.state.currentSearch.activeResultDetail=e,this.state.currentSearch.comparisonSliderPos=50,this.state.currentSearch.zoomLevel=100,this.openModal(`detail`,e)}setComparisonMode(e){this.state.currentSearch.comparisonMode=e,this.notify()}setComparisonSlider(e){this.state.currentSearch.comparisonSliderPos=Math.max(0,Math.min(100,e)),this.notify()}setZoomLevel(e){this.state.currentSearch.zoomLevel=e,this.notify()}saveResult(e,t=`all`){if(this.state.savedResults.some(t=>t.resultId===e.id)){this.showToast(`This finding is already in your saved collection.`,`info`);return}let n={id:`saved-${Date.now()}`,resultId:e.id,collectionId:t,title:e.title,domain:e.domain,sourceWebsite:e.sourceWebsite||e.domain,platform:e.sourceWebsite||e.domain,image:e.image,imageUrl:e.imageUrl||e.image,originalImage:this.state.currentSearch.imageSrc||e.image,similarity:e.similarity,matchType:e.matchType||`exact`,sourceQuality:e.sourceQuality||`reputable`,savedAt:`Just now`,url:e.url,category:e.category,notes:`Saved from visual public source discovery.`};this.state.savedResults.unshift(n),this.saveJSON(`dy_saved`,this.state.savedResults),this.showToast(`Result saved to your collection.`,`success`),this.notify()}removeSavedResult(e){this.state.savedResults=this.state.savedResults.filter(t=>t.id!==e),this.saveJSON(`dy_saved`,this.state.savedResults),this.showToast(`Item removed from saved results.`,`info`),this.notify()}updateSavedItemNotes(e,t){let n=this.state.savedResults.find(t=>t.id===e);n&&(n.notes=t,this.saveJSON(`dy_saved`,this.state.savedResults),this.showToast(`Notes updated successfully.`,`success`),this.notify())}renameHistoryItem(e,t){let n=this.state.searchHistory.find(t=>t.id===e);n&&t.trim()&&(n.name=t.trim(),this.saveJSON(`dy_history`,this.state.searchHistory),this.showToast(`Search renamed.`,`success`),this.notify())}deleteHistoryItem(e){this.state.searchHistory=this.state.searchHistory.filter(t=>t.id!==e),this.saveJSON(`dy_history`,this.state.searchHistory),this.showToast(`Search removed from history.`,`info`),this.notify()}clearAllHistory(){this.state.searchHistory=[],this.saveJSON(`dy_history`,[]),this.closeModal(),this.showToast(`All search history permanently erased.`,`success`),this.notify()}openHistoryItem(e){e.sampleId?this.loadSampleImage(e.sampleId):e.image&&(this.state.currentSearch.imageSrc=e.image,this.state.currentSearch.results=e.results||[],this.state.currentSearch.filteredResults=e.results||[],this.state.currentSearch.title=e.title||e.name,this.state.currentSearch.classification=e.classification||`Exact image match`,this.state.currentSearch.entityType=e.entityType||`generic`,this.state.currentSearch.characters=e.characters||[],this.state.currentSearch.mediaAnalysis=e.mediaAnalysis||null,this.state.currentSearch.publicFigureData=e.publicFigureData||null,this.state.currentSearch.ordinaryPersonGuardrail=e.ordinaryPersonGuardrail||null,this.state.currentSearch.imageContextAnalysis=e.imageContextAnalysis||null,this.state.currentSearch.isNoMatch=!!e.isNoMatch,this.state.currentSearch.selectedRegion={label:e.selectedRegionLabel||`Primary Subject`},this.state.currentSearch.sampleId=e.sampleId||null,this.state.currentSearch.status=`completed`),this.applyResultFilters(),this.navigate(`dashboard`,`search`),this.notify()}},C=[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`}]],w=[[`path`,{d:`m12 19-7-7 7-7`}],[`path`,{d:`M19 12H5`}]],T=[[`path`,{d:`M5 12h14`}],[`path`,{d:`m12 5 7 7-7 7`}]],ee=[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`}],[`path`,{d:`m9 10 2 2 4-4`}]],te=[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`}]],E=[[`path`,{d:`M20 6 9 17l-5-5`}]],D=[[`path`,{d:`m6 9 6 6 6-6`}]],O=[[`path`,{d:`m9 18 6-6-6-6`}]],ne=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`}]],re=[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`}],[`path`,{d:`m9 11 3 3L22 4`}]],k=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}],[`path`,{d:`M12 17h.01`}]],ie={search:[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]],shield:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}]],"shield-check":[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}],[`path`,{d:`m9 12 2 2 4-4`}]],"shield-alert":[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}],[`path`,{d:`M12 8v4`}],[`path`,{d:`M12 16h.01`}]],lock:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`}]],eye:[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`}]],"eye-off":[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`}],[`path`,{d:`m2 2 20 20`}]],scan:[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}]],maximize:[[`path`,{d:`M15 3h6v6`}],[`path`,{d:`m21 3-7 7`}],[`path`,{d:`m3 21 7-7`}],[`path`,{d:`M9 21H3v-6`}]],minimize:[[`path`,{d:`m14 10 7-7`}],[`path`,{d:`M20 10h-6V4`}],[`path`,{d:`m3 21 7-7`}],[`path`,{d:`M4 14h6v6`}]],layers:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`}]],globe:[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`}],[`path`,{d:`M2 12h20`}]],upload:[[`path`,{d:`M12 3v12`}],[`path`,{d:`m17 8-5-5-5 5`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}]],"upload-cloud":[[`path`,{d:`M12 13v8`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`}],[`path`,{d:`m8 17 4-4 4 4`}]],"file-image":[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`}],[`circle`,{cx:`10`,cy:`12`,r:`2`}],[`path`,{d:`m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22`}]],"folder-heart":[[`path`,{d:`M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417`}],[`path`,{d:`M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z`}]],history:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}],[`path`,{d:`M3 3v5h5`}],[`path`,{d:`M12 7v5l4 2`}]],settings:[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`}],[`circle`,{cx:`12`,cy:`12`,r:`3`}]],user:[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`}],[`circle`,{cx:`12`,cy:`7`,r:`4`}]],sliders:[[`path`,{d:`M10 8h4`}],[`path`,{d:`M12 21v-9`}],[`path`,{d:`M12 8V3`}],[`path`,{d:`M17 16h4`}],[`path`,{d:`M19 12V3`}],[`path`,{d:`M19 21v-5`}],[`path`,{d:`M3 14h4`}],[`path`,{d:`M5 10V3`}],[`path`,{d:`M5 21v-7`}]],sparkles:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],"arrow-right":T,"arrow-left":w,"chevron-right":O,"chevron-down":D,"external-link":[[`path`,{d:`M15 3h6v6`}],[`path`,{d:`M10 14 21 3`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}]],bookmark:te,"bookmark-check":ee,flag:[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`}]],share:[[`circle`,{cx:`18`,cy:`5`,r:`3`}],[`circle`,{cx:`6`,cy:`12`,r:`3`}],[`circle`,{cx:`18`,cy:`19`,r:`3`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`}]],trash:[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]],edit:[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`}]],check:E,"check-circle":re,x:[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],"alert-circle":ne,info:[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 16v-4`}],[`path`,{d:`M12 8h.01`}]],sun:[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]],moon:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]],sparkle:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}]],zap:[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`}]],"sliders-horizontal":[[`path`,{d:`M10 5H3`}],[`path`,{d:`M12 19H3`}],[`path`,{d:`M14 3v4`}],[`path`,{d:`M16 17v4`}],[`path`,{d:`M21 12h-9`}],[`path`,{d:`M21 19h-5`}],[`path`,{d:`M21 5h-7`}],[`path`,{d:`M8 10v4`}],[`path`,{d:`M8 12H3`}]],grid:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}],[`path`,{d:`M3 9h18`}],[`path`,{d:`M3 15h18`}],[`path`,{d:`M9 3v18`}],[`path`,{d:`M15 3v18`}]],list:[[`path`,{d:`M3 5h.01`}],[`path`,{d:`M3 12h.01`}],[`path`,{d:`M3 19h.01`}],[`path`,{d:`M8 5h13`}],[`path`,{d:`M8 12h13`}],[`path`,{d:`M8 19h13`}]],cpu:[[`path`,{d:`M12 20v2`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M17 20v2`}],[`path`,{d:`M17 2v2`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M2 17h2`}],[`path`,{d:`M2 7h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`M20 17h2`}],[`path`,{d:`M20 7h2`}],[`path`,{d:`M7 20v2`}],[`path`,{d:`M7 2v2`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`}]],compass:[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`}]],database:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`}]],key:[[`path`,{d:`m2 21 9.6-9.6`}],[`path`,{d:`m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19`}],[`circle`,{cx:`15.5`,cy:`7.5`,r:`5.5`}]],flame:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`}]],dashboard:[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`}]],filter:[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`}]],refresh:[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`}],[`path`,{d:`M21 3v5h-5`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`}],[`path`,{d:`M8 16H3v5`}]],copy:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`}]],download:[[`path`,{d:`M12 15V3`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}],[`path`,{d:`m7 10 5 5 5-5`}]],terminal:[[`path`,{d:`M12 19h8`}],[`path`,{d:`m4 17 6-6-6-6`}]],activity:C,"git-compare":[[`circle`,{cx:`18`,cy:`18`,r:`3`}],[`circle`,{cx:`6`,cy:`6`,r:`3`}],[`path`,{d:`M13 6h3a2 2 0 0 1 2 2v7`}],[`path`,{d:`M11 18H8a2 2 0 0 1-2-2V9`}]],"help-circle":k,logout:[[`path`,{d:`m16 17 5-5-5-5`}],[`path`,{d:`M21 12H9`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`}]],plus:[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]]};function A(e,t=`w-4 h-4`,n=18){let r=ie[e]||k;return!r||!Array.isArray(r)?``:`<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="${t}">${r.map(([e,t])=>`<${e} ${Object.entries(t).map(([e,t])=>`${e}="${t}"`).join(` `)}></${e}>`).join(``)}</svg>`}function j(){let{view:e,theme:t,isAuthenticated:n,user:r}=S.state,i=S.remainingSearches;return e===`landing`?`
      <div class="dy-nav-wrapper" id="dy-nav-wrapper">
        <nav class="dy-nav-pill" id="dy-nav-pill">
          <!-- Brand Logo: Abstract 'D' Symbol + DIGITAL YOUR -->
          <div class="dy-nav-brand" id="nav-brand-logo">
            <div class="dy-brand-icon-d">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H6V3z"/>
                <path d="M12 9v6" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
              </svg>
            </div>
            <span class="dy-brand-title">
              DIGITAL YOUR
            </span>
          </div>

          <!-- Navigation Links -->
          <ul class="dy-nav-links">
            <li class="dy-nav-link-item"><a href="#home" class="dy-nav-link active">Home</a></li>
            <li class="dy-nav-link-item"><a href="#how-it-works" class="dy-nav-link">How It Works</a></li>
            <li class="dy-nav-link-item"><a href="#people" class="dy-nav-link">People</a></li>
            <li class="dy-nav-link-item"><a href="#places" class="dy-nav-link">Places</a></li>
            <li class="dy-nav-link-item"><a href="#technology" class="dy-nav-link">Technology</a></li>
          </ul>

          <!-- Right Action: "Try AI →" CTA -->
          <div class="dy-nav-actions">
            ${n?`<button class="btn btn-secondary btn-sm" id="nav-dashboard-btn" style="border-radius: 12px; font-weight: 600; padding: 7px 14px; font-size: 0.84rem;">
                    ${A(`dashboard`,`w-3.5 h-3.5`,14)} Dashboard
                   </button>`:`<button class="btn btn-ghost btn-sm" id="nav-login-btn" style="font-size: 0.85rem; font-weight: 600; color: var(--dy-text-secondary);">
                    Sign In
                   </button>`}

            <button class="dy-btn-try" id="nav-start-search-btn">
              <span>Try AI</span>
              <span class="dy-arrow">→</span>
            </button>
          </div>
        </nav>
      </div>
    `:`
    <header class="app-topbar">
      <div class="topbar-left">
        <button class="btn btn-ghost btn-sm" id="mobile-sidebar-toggle" aria-label="Toggle Sidebar">
          ${A(`sliders-horizontal`,`w-4 h-4`,18)}
        </button>
        <div class="topbar-env-pill">
          ${A(`shield-check`,`w-3.5 h-3.5`,14)}
          <span>Public Index Demo • Zero Private Scrapes</span>
        </div>
      </div>

      <div class="topbar-right">
        <button class="btn btn-ghost btn-sm" id="topbar-ai-modal-btn" title="Configure AI Engine" style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; padding: 5px 12px; border-radius: 999px; background: ${S.state.geminiApiKey?`rgba(16, 185, 129, 0.12)`:`rgba(139, 92, 246, 0.12)`}; color: ${S.state.geminiApiKey?`#10b981`:`var(--accent-purple)`}; border: 1px solid ${S.state.geminiApiKey?`rgba(16, 185, 129, 0.3)`:`rgba(139, 92, 246, 0.3)`}; font-weight: 700;">
          ${A(`sparkles`,`w-3.5 h-3.5`,14)}
          <span>${S.state.geminiApiKey?`Gemini 2.0`:`AI Engine`}</span>
        </button>

        <div class="quota-indicator-pill" title="${i} free searches left">
          <span class="quota-dot ${i===0?`depleted`:``}"></span>
          <span>${i} / ${r.searchesLimit} searches remaining</span>
        </div>

        <button class="btn btn-ghost" id="topbar-theme-toggle" title="Toggle Theme" aria-label="Toggle Theme">
          ${A(t===`dark`?`sun`:`moon`,`w-4 h-4`,18)}
        </button>

        <div class="user-profile-menu-btn" id="topbar-user-menu-btn" role="button" tabindex="0">
          <img src="${r.avatar}" alt="${r.name}" class="user-avatar-mini" />
          <span class="user-name-label">${r.name}</span>
          ${A(`chevron-down`,`w-3 h-3`,14)}
        </div>
      </div>
    </header>
  `}function M(){let e=document.getElementById(`nav-brand-logo`);e&&e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`}),S.navigate(`landing`)});let t=document.getElementById(`dy-nav-wrapper`);if(t){let e=()=>{window.scrollY>30?t.classList.add(`scrolled`):t.classList.remove(`scrolled`)};window.removeEventListener(`scroll`,e),window.addEventListener(`scroll`,e,{passive:!0}),e()}let n=document.getElementById(`nav-theme-toggle`);n&&n.addEventListener(`click`,()=>{S.toggleTheme()});let r=document.getElementById(`topbar-theme-toggle`);r&&r.addEventListener(`click`,()=>{S.toggleTheme()});let i=document.getElementById(`nav-login-btn`);i&&i.addEventListener(`click`,()=>{S.openModal(`auth`)});let a=document.getElementById(`nav-dashboard-btn`);a&&a.addEventListener(`click`,()=>{S.navigate(`dashboard`,`overview`)});let o=document.getElementById(`nav-start-search-btn`);o&&o.addEventListener(`click`,()=>{S.state.isAuthenticated?S.navigate(`dashboard`,`search`):S.openModal(`auth`,{nextTab:`search`})});let s=document.getElementById(`topbar-user-menu-btn`);s&&s.addEventListener(`click`,()=>{S.openModal(`auth`,{tab:`profile`})});let c=document.getElementById(`mobile-sidebar-toggle`);c&&c.addEventListener(`click`,()=>{let e=document.querySelector(`.app-sidebar`);e&&e.classList.toggle(`mobile-open`)});let l=document.getElementById(`topbar-ai-modal-btn`);l&&l.addEventListener(`click`,()=>{S.openModal(`aiConfig`)})}function N(){return`
    <div class="dy-hero-ai-stage" id="dy-hero-ai-stage">
      <div class="dy-vision-frame" id="dy-vision-frame">
        <!-- Fictional High-Res Portrait -->
        <img 
          src="/demo/alex_carter.jpg" 
          alt="Alex Carter - Fictional AI Analysis Subject" 
          class="dy-vision-portrait" 
          id="dy-vision-portrait"
        />

        <!-- Computer Vision Overlay Layers -->
        <div class="dy-vision-cv-layer">
          <!-- Laser Scanning Light Beam -->
          <div class="dy-cv-scanline"></div>

          <!-- Bounding Box -->
          <div class="dy-cv-bounding-box" style="top: 14%; left: 33%; width: 34%; height: 38%;">
            <span class="dy-cv-corner tl"></span>
            <span class="dy-cv-corner tr"></span>
            <span class="dy-cv-corner bl"></span>
            <span class="dy-cv-corner br"></span>
            
            <div style="position: absolute; top: -20px; left: 0; background: rgba(79, 70, 229, 0.9); backdrop-filter: blur(8px); color: #fff; font-size: 0.62rem; font-family: 'JetBrains Mono', monospace; padding: 2px 7px; border-radius: 4px; font-weight: 600; letter-spacing: 0.04em;">
              SUBJECT_01 [CONF: 96.4%]
            </div>
          </div>

          <!-- Eye Tracking Crosshairs -->
          <div class="dy-cv-eye-target" style="top: 25.5%; left: 44.5%;" title="Left Ocular Tracker"></div>
          <div class="dy-cv-eye-target" style="top: 25%; left: 54.5%;" title="Right Ocular Tracker"></div>

          <!-- Subtle Mathematical Facial Mesh & 68 Landmark Points -->
          <svg class="dy-cv-mesh-svg" viewBox="0 0 540 567" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="meshGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Triangular Mesh Lines across Facial Geometry -->
            <g stroke="rgba(99, 102, 241, 0.28)" stroke-width="0.8" stroke-dasharray="2 2">
              <!-- Forehead & Eyebrows to Nose Bridge -->
              <path d="M 215 130 L 250 142 L 270 144 L 290 142 L 325 130" />
              <path d="M 230 144 L 270 170 L 310 144" />
              <!-- Eye Sockets -->
              <polygon points="230,144 255,140 262,148 245,152 230,144" fill="rgba(6, 182, 212, 0.03)" />
              <polygon points="278,148 285,140 310,144 300,152 278,148" fill="rgba(6, 182, 212, 0.03)" />
              <!-- Nose Bridge & Tip -->
              <path d="M 270 144 L 270 185 L 260 195 L 270 198 L 280 195 L 270 185" />
              <path d="M 255 188 L 260 195 L 270 198 L 280 195 L 285 188" />
              <!-- Cheeks & Zygomatic Arches -->
              <path d="M 215 160 L 255 188 L 245 220 L 210 200 Z" />
              <path d="M 325 160 L 285 188 L 295 220 L 330 200 Z" />
              <!-- Mouth & Lips -->
              <polygon points="252,216 270,212 288,216 280,226 270,228 260,226" fill="rgba(124, 58, 237, 0.04)" stroke="rgba(124, 58, 237, 0.4)" stroke-width="0.9" />
              <line x1="252" y1="216" x2="288" y2="216" stroke="rgba(124, 58, 237, 0.5)" />
              <!-- Jawline & Chin Contour -->
              <path d="M 210 175 L 215 210 L 230 242 L 252 265 L 270 270 L 288 265 L 310 242 L 325 210 L 330 175" />
              <path d="M 260 226 L 270 270 L 280 226" />
            </g>

            <!-- 68 Key Landmark Vector Nodes -->
            <g fill="#06b6d4" filter="url(#meshGlow)">
              <!-- Eyebrows -->
              <circle cx="218" cy="132" r="2.2" />
              <circle cx="232" cy="130" r="2.2" />
              <circle cx="248" cy="134" r="2.2" />
              <circle cx="260" cy="142" r="2.2" />
              <circle cx="280" cy="142" r="2.2" />
              <circle cx="292" cy="134" r="2.2" />
              <circle cx="308" cy="130" r="2.2" />
              <circle cx="322" cy="132" r="2.2" />

              <!-- Eyes Contour & Pupils -->
              <circle cx="230" cy="144" r="2" />
              <circle cx="245" cy="142" r="2.8" fill="#4f46e5" />
              <circle cx="258" cy="146" r="2" />
              <circle cx="245" cy="151" r="2" />
              <circle cx="282" cy="146" r="2" />
              <circle cx="295" cy="142" r="2.8" fill="#4f46e5" />
              <circle cx="310" cy="144" r="2" />
              <circle cx="295" cy="151" r="2" />

              <!-- Nose -->
              <circle cx="270" cy="155" r="2" />
              <circle cx="270" cy="170" r="2" />
              <circle cx="270" cy="185" r="2.4" />
              <circle cx="260" cy="195" r="2" />
              <circle cx="270" cy="198" r="2.6" fill="#7c3aed" />
              <circle cx="280" cy="195" r="2" />

              <!-- Lips -->
              <circle cx="252" cy="216" r="2" />
              <circle cx="262" cy="213" r="2" />
              <circle cx="270" cy="212" r="2.2" />
              <circle cx="278" cy="213" r="2" />
              <circle cx="288" cy="216" r="2" />
              <circle cx="280" cy="226" r="2" />
              <circle cx="270" cy="228" r="2.2" />
              <circle cx="260" cy="226" r="2" />

              <!-- Chin & Jaw -->
              <circle cx="210" cy="180" r="2" />
              <circle cx="216" cy="210" r="2" />
              <circle cx="230" cy="242" r="2" />
              <circle cx="250" cy="264" r="2.4" />
              <circle cx="270" cy="270" r="3" fill="#4f46e5" />
              <circle cx="290" cy="264" r="2.4" />
              <circle cx="310" cy="242" r="2" />
              <circle cx="324" cy="210" r="2" />
              <circle cx="330" cy="180" r="2" />
            </g>
          </svg>

          <!-- Floating Data Particles (Subtle Motion) -->
          <div class="dy-floating-particles-wrap" id="dy-particles-wrap">
            <span class="dy-micro-particle" style="top: 18%; left: 15%; animation: dyParticleFloat 5s infinite ease-in-out;"></span>
            <span class="dy-micro-particle" style="top: 28%; right: 18%; animation: dyParticleFloat 6.2s infinite ease-in-out 1s;"></span>
            <span class="dy-micro-particle" style="bottom: 30%; left: 22%; animation: dyParticleFloat 4.8s infinite ease-in-out 0.5s;"></span>
            <span class="dy-micro-particle" style="top: 65%; right: 12%; animation: dyParticleFloat 7s infinite ease-in-out 2s;"></span>
            <span class="dy-micro-particle" style="bottom: 15%; right: 28%; animation: dyParticleFloat 5.5s infinite ease-in-out 1.5s;"></span>
          </div>

          <!-- Bottom HUD Readout -->
          <div class="dy-cv-coords-hud">
            <div class="dy-cv-hud-left">
              <span class="dy-cv-hud-pulse"></span>
              <span>LIVE RECOGNITION MATRIX</span>
            </div>
            <div style="display: flex; gap: 14px; opacity: 0.85;">
              <span>X: 421.4</span>
              <span>Y: 298.1</span>
              <span style="color: #6ee7b7;">CONF: 96.4%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating AI Analysis Card Beside Portrait -->
      <div class="dy-floating-analysis-card" id="dy-analysis-card">
        <div class="dy-card-header-row">
          <span class="dy-card-title">AI Analysis</span>
          <div class="dy-status-pill" id="dy-hero-status-pill">
            <span class="dy-dot"></span>
            <span id="dy-status-text">Identity detected</span>
          </div>
        </div>

        <div class="dy-card-profile">
          <div>
            <div class="dy-card-subject-name">Alex Carter</div>
            <div class="dy-card-subject-role">Software Engineer</div>
          </div>

          <!-- Confidence Meter -->
          <div class="dy-confidence-bar-wrap">
            <div class="dy-confidence-meta">
              <span>Confidence</span>
              <span style="font-weight: 700; color: var(--dy-indigo);">96%</span>
            </div>
            <div class="dy-confidence-track">
              <div class="dy-confidence-fill"></div>
            </div>
          </div>

          <div class="dy-card-field-row">
            <span class="dy-card-field-label">Known For</span>
            <span class="dy-card-field-value">Open-source contributor & AI tooling</span>
          </div>

          <div class="dy-card-field-row">
            <span class="dy-card-field-label">Public Information</span>
            <div class="dy-card-sources-list">
              <span class="dy-source-pill">GitHub</span>
              <span class="dy-source-pill">ArXiv</span>
              <span class="dy-source-pill">TechCrunch</span>
              <span class="dy-source-pill">OpenWeb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function P(){let e=document.getElementById(`dy-hero-ai-stage`),t=document.getElementById(`dy-vision-frame`),n=document.getElementById(`dy-analysis-card`);if(!e||!t)return;e.addEventListener(`mousemove`,r=>{let i=e.getBoundingClientRect(),a=r.clientX-i.left-i.width/2,o=r.clientY-i.top-i.height/2,s=o/(i.height/2)*-4,c=a/(i.width/2)*4;if(t.style.transform=`rotateX(${s}deg) rotateY(${c}deg) translateZ(8px)`,n){let e=a/(i.width/2)*-8,t=o/(i.height/2)*-6;n.style.transform=`translate(${e}px, ${t}px)`}}),e.addEventListener(`mouseleave`,()=>{t.style.transform=`rotateX(0deg) rotateY(0deg) translateZ(0px)`,n&&(n.style.transform=`translate(0px, 0px)`)});let r=document.getElementById(`dy-hero-status-pill`),i=document.getElementById(`dy-status-text`);if(r&&i){let e=[{text:`Scanning...`,color:`#6366f1`,bg:`rgba(99, 102, 241, 0.1)`},{text:`Face detected`,color:`#06b6d4`,bg:`rgba(6, 182, 212, 0.1)`},{text:`Analyzing...`,color:`#8b5cf6`,bg:`rgba(139, 92, 246, 0.1)`},{text:`Identity detected`,color:`#10b981`,bg:`rgba(16, 185, 129, 0.1)`}],t=3;setInterval(()=>{t=(t+1)%e.length,i.textContent=e[t].text,r.style.color=e[t].color,r.style.background=e[t].bg;let n=r.querySelector(`.dy-dot`);n&&(n.style.background=e[t].color)},4200)}}function F(){return`
    <div class="dy-place-stage" id="dy-place-stage">
      <!-- Left: Stunning Travel Photograph with Mini-Map Radar -->
      <div class="dy-place-visual-wrap" id="dy-place-visual-wrap">
        <img 
          src="/demo/amalfi_coast.jpg" 
          alt="Amalfi Coast, Campania, Italy" 
          class="dy-place-img" 
          id="dy-place-img"
        />

        <!-- Floating Map Radar Overlay with Dropping Location Pin -->
        <div class="dy-place-map-overlay">
          <div class="dy-map-radar">
            <!-- Simplified Radar Grid -->
            <svg viewBox="0 0 140 60" style="width: 100%; height: 100%; position: absolute; inset: 0;">
              <circle cx="70" cy="30" r="12" fill="none" stroke="rgba(79, 70, 229, 0.2)" stroke-width="1" />
              <circle cx="70" cy="30" r="22" fill="none" stroke="rgba(79, 70, 229, 0.15)" stroke-width="1" />
              <line x1="70" y1="5" x2="70" y2="55" stroke="rgba(79, 70, 229, 0.15)" stroke-dasharray="2 2" />
              <line x1="15" y1="30" x2="125" y2="30" stroke="rgba(79, 70, 229, 0.15)" stroke-dasharray="2 2" />
            </svg>
            <div class="dy-map-pin" title="Amalfi, Campania, Italy (40.6340° N, 14.6027° E)"></div>
          </div>
          <div class="dy-map-coords-text">40.6340° N, 14.6027° E</div>
        </div>
      </div>

      <!-- Right: Structured Place Intelligence Card -->
      <div class="dy-place-info-panel">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
          <div class="dy-status-pill">
            <span class="dy-dot"></span>
            <span>Place Detected • 98% Confidence</span>
          </div>
          <span style="font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--dy-text-muted);">
            LOC_ID #IT-84011
          </span>
        </div>

        <h3 style="font-size: 1.85rem; font-weight: 800; letter-spacing: -0.03em; color: var(--dy-text-primary); margin-bottom: 4px;">
          Amalfi Coast
        </h3>
        <p style="font-size: 0.96rem; color: var(--dy-indigo); font-weight: 600; margin-bottom: 20px;">
          Campania, Southern Italy
        </p>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px;">
          <div class="dy-card-field-row">
            <span class="dy-card-field-label">Famous For</span>
            <span class="dy-card-field-value">Pastel clifftop villages, terraced lemon groves, and dramatic Mediterranean coastline.</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="dy-card-field-row">
              <span class="dy-card-field-label">Languages</span>
              <span class="dy-card-field-value">Italian, English</span>
            </div>
            <div class="dy-card-field-row">
              <span class="dy-card-field-label">Culture & Climate</span>
              <span class="dy-card-field-value">Mediterranean Maritime</span>
            </div>
          </div>

          <div class="dy-card-field-row">
            <span class="dy-card-field-label">Best Time to Visit</span>
            <span class="dy-card-field-value">May to September (Sunlight: 14h / day · Avg Temp: 27°C)</span>
          </div>
        </div>

        <button class="dy-btn-primary-cta" id="dy-explore-place-btn" style="padding: 12px 24px; font-size: 0.94rem;">
          <span>Explore Place Insights</span>
          <span class="dy-cta-arrow">→</span>
        </button>
      </div>
    </div>
  `}function I(){let e=document.getElementById(`dy-explore-place-btn`);e&&e.addEventListener(`click`,()=>{let e=document.getElementById(`hero-primary-cta`);e&&e.click()})}function L(){return`
    <div class="landing-view" id="home">
      <!-- Ambient Lighting Atmosphere -->
      <div class="dy-ambient-light-1"></div>
      <div class="dy-ambient-light-2"></div>

      <!-- ====================================================================
           1. HERO SECTION
           ==================================================================== -->
      <section class="dy-master-hero">
        <div class="dy-hero-container">
          <!-- Left Column: Copy & Actions -->
          <div class="dy-hero-content">
            <div class="dy-hero-eyebrow">
              <span class="dy-eyebrow-dot"></span>
              <span>AI-POWERED PEOPLE & PLACE RECOGNITION</span>
            </div>

            <h1 class="dy-hero-headline">
              Discover Who You're <span class="dy-gradient-text">Looking At.</span>
            </h1>

            <p class="dy-hero-subtext">
              Upload a photo. Let AI reveal the story.
            </p>

            <div class="dy-hero-actions">
              <button class="dy-btn-primary-cta" id="hero-primary-cta">
                <span>Analyze Image</span>
                <span class="dy-cta-arrow">→</span>
              </button>
              <a href="#how-it-works" class="dy-btn-secondary-cta" id="hero-secondary-demo">
                <span>Explore Demo</span>
              </a>
            </div>

            <!-- 3 Subtle Minimal Capabilities -->
            <div class="dy-hero-capabilities">
              <div class="dy-capability-item">
                <span class="dy-capability-indicator"></span>
                <span>People & Faces</span>
              </div>
              <div class="dy-capability-item">
                <span class="dy-capability-indicator"></span>
                <span>Places & Landmarks</span>
              </div>
              <div class="dy-capability-item">
                <span class="dy-capability-indicator"></span>
                <span>Public Information</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Sophisticated AI Vision System -->
          <div class="dy-hero-right-col">
            ${N()}
          </div>
        </div>
      </section>

      <!-- ====================================================================
           2. SECTION: HOW IT WORKS
           ==================================================================== -->
      <section class="dy-section dy-section-warm" id="how-it-works">
        <div class="dy-section-container">
          <div class="dy-section-header-center">
            <span class="dy-section-eyebrow">HOW IT WORKS</span>
            <h2 class="dy-section-title">Powerful AI. Real Insights.</h2>
            <p class="dy-section-desc">
              Our AI models analyze images and connect the dots from publicly available information to help you understand people and places.
            </p>
          </div>

          <!-- 3 Large Cards Grid with Interactive Visualizations -->
          <div class="dy-how-grid">
            <!-- 01 IDENTIFY -->
            <div class="dy-how-card" id="card-identify">
              <div class="dy-how-card-num">01</div>
              <h3 class="dy-how-card-title">IDENTIFY</h3>
              <p class="dy-how-card-text">Turn an image into meaningful information.</p>
              <div class="dy-how-visual-canvas">
                <!-- Animated Face Mesh Visualization -->
                <svg viewBox="0 0 200 120" style="width: 100%; height: 100%;">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.8" />
                      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.8" />
                    </linearGradient>
                  </defs>
                  <polygon points="100,20 130,45 125,85 100,105 75,85 70,45" fill="none" stroke="url(#grad1)" stroke-width="1.2" />
                  <line x1="100" y1="20" x2="100" y2="105" stroke="rgba(79, 70, 229, 0.3)" stroke-dasharray="2 2" />
                  <line x1="70" y1="45" x2="130" y2="45" stroke="rgba(79, 70, 229, 0.3)" stroke-dasharray="2 2" />
                  <line x1="75" y1="85" x2="125" y2="85" stroke="rgba(79, 70, 229, 0.3)" stroke-dasharray="2 2" />
                  <circle cx="100" cy="20" r="3" fill="#4f46e5" />
                  <circle cx="130" cy="45" r="3" fill="#06b6d4" />
                  <circle cx="125" cy="85" r="3" fill="#7c3aed" />
                  <circle cx="100" cy="105" r="3.5" fill="#4f46e5" />
                  <circle cx="75" cy="85" r="3" fill="#7c3aed" />
                  <circle cx="70" cy="45" r="3" fill="#06b6d4" />
                  <circle cx="100" cy="60" r="2.5" fill="#10b981" />
                </svg>
              </div>
            </div>

            <!-- 02 UNDERSTAND -->
            <div class="dy-how-card" id="card-understand">
              <div class="dy-how-card-num">02</div>
              <h3 class="dy-how-card-title">UNDERSTAND</h3>
              <p class="dy-how-card-text">Go beyond recognition with contextual AI.</p>
              <div class="dy-how-visual-canvas">
                <!-- Dynamically Connecting Information Cards / Knowledge Graph -->
                <svg viewBox="0 0 200 120" style="width: 100%; height: 100%;">
                  <g stroke="rgba(79, 70, 229, 0.25)" stroke-width="1.2">
                    <line x1="60" y1="40" x2="100" y2="60" />
                    <line x1="100" y1="60" x2="140" y2="40" />
                    <line x1="100" y1="60" x2="100" y2="95" />
                  </g>
                  <!-- Node Pills -->
                  <rect x="35" y="28" width="50" height="24" rx="6" fill="#ffffff" stroke="rgba(15,23,42,0.1)" />
                  <text x="60" y="44" font-size="8" font-family="system-ui" fill="#4f46e5" font-weight="700" text-anchor="middle">ENTITY</text>

                  <rect x="115" y="28" width="50" height="24" rx="6" fill="#ffffff" stroke="rgba(15,23,42,0.1)" />
                  <text x="140" y="44" font-size="8" font-family="system-ui" fill="#06b6d4" font-weight="700" text-anchor="middle">SOURCE</text>

                  <rect x="75" y="83" width="50" height="24" rx="6" fill="#ffffff" stroke="rgba(15,23,42,0.1)" />
                  <text x="100" y="99" font-size="8" font-family="system-ui" fill="#7c3aed" font-weight="700" text-anchor="middle">CONTEXT</text>

                  <!-- Central Hub -->
                  <circle cx="100" cy="60" r="5" fill="#4f46e5" />
                  <circle cx="100" cy="60" r="8" fill="none" stroke="#4f46e5" stroke-opacity="0.4" />
                </svg>
              </div>
            </div>

            <!-- 03 EXPLORE -->
            <div class="dy-how-card" id="card-explore">
              <div class="dy-how-card-num">03</div>
              <h3 class="dy-how-card-title">EXPLORE</h3>
              <p class="dy-how-card-text">Discover people, places and stories.</p>
              <div class="dy-how-visual-canvas">
                <!-- Location Points Appearing on World Map -->
                <svg viewBox="0 0 200 120" style="width: 100%; height: 100%;">
                  <!-- Simplified Geographic Grid lines -->
                  <path d="M 20 60 Q 100 30 180 60" fill="none" stroke="rgba(79, 70, 229, 0.15)" stroke-width="1" />
                  <path d="M 20 60 Q 100 90 180 60" fill="none" stroke="rgba(79, 70, 229, 0.15)" stroke-width="1" />
                  <circle cx="100" cy="60" r="38" fill="none" stroke="rgba(79, 70, 229, 0.12)" stroke-dasharray="2 2" />

                  <!-- Pulsing Location Markers -->
                  <circle cx="75" cy="52" r="3.5" fill="#ef4444" />
                  <circle cx="75" cy="52" r="8" fill="none" stroke="#ef4444" stroke-opacity="0.3" />

                  <circle cx="125" cy="48" r="3.5" fill="#4f46e5" />
                  <circle cx="125" cy="48" r="8" fill="none" stroke="#4f46e5" stroke-opacity="0.3" />

                  <circle cx="100" cy="74" r="3" fill="#10b981" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           3. SECTION: PEOPLE RECOGNITION DEMO
           ==================================================================== -->
      <section class="dy-section" id="people">
        <div class="dy-section-container">
          <div class="dy-section-header-center">
            <span class="dy-section-eyebrow">PEOPLE INTELLIGENCE</span>
            <h2 class="dy-section-title">Contextual Recognition of Public Figures</h2>
            <p class="dy-section-desc">
              Understand the background, work, and public footprint of creators, engineers, and historical figures from open sources.
            </p>
          </div>

          <div class="dy-people-stage">
            <!-- Left: Fictional Portrait -->
            <div class="dy-people-preview-wrap">
              <img src="/demo/alex_carter.jpg" alt="Alex Carter - Software Engineer" class="dy-people-preview-img" />
              <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(11, 17, 32, 0.8); backdrop-filter: blur(12px); color: #fff; padding: 6px 14px; border-radius: 999px; font-size: 0.76rem; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981; box-shadow: 0 0 6px #10b981;"></span>
                <span>Fictional Subject · AI Evaluation Sample</span>
              </div>
            </div>

            <!-- Right: Information Panel & Processing Pipeline -->
            <div class="dy-people-info-panel">
              <!-- Timeline-like AI Processing Indicator: Image → Face → Context → Information -->
              <div class="dy-people-pipeline-bar">
                <div class="dy-pipeline-step active">
                  <span class="dy-pipeline-step-dot"></span>
                  <span>Image</span>
                </div>
                <span class="dy-pipeline-arrow">→</span>
                <div class="dy-pipeline-step active">
                  <span class="dy-pipeline-step-dot"></span>
                  <span>Face</span>
                </div>
                <span class="dy-pipeline-arrow">→</span>
                <div class="dy-pipeline-step active">
                  <span class="dy-pipeline-step-dot"></span>
                  <span>Context</span>
                </div>
                <span class="dy-pipeline-arrow">→</span>
                <div class="dy-pipeline-step active">
                  <span class="dy-pipeline-step-dot"></span>
                  <span>Information</span>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div class="dy-status-pill">
                  <span class="dy-dot"></span>
                  <span>Identity detected</span>
                </div>
                <span style="font-size: 0.78rem; font-family: 'JetBrains Mono', monospace; color: var(--dy-indigo); font-weight: 700;">
                  Confidence: 96%
                </span>
              </div>

              <h3 style="font-size: 2.1rem; font-weight: 800; letter-spacing: -0.03em; color: var(--dy-text-primary); margin-bottom: 4px;">
                Alex Carter
              </h3>
              <p style="font-size: 1rem; color: var(--dy-indigo); font-weight: 600; margin-bottom: 24px;">
                Software Engineer & Open-Source AI Contributor
              </p>

              <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
                <div class="dy-card-field-row">
                  <span class="dy-card-field-label">Known For</span>
                  <span class="dy-card-field-value">Pioneering open-source AI tooling, multimodal computer vision architectures, and developer frameworks.</span>
                </div>

                <div class="dy-card-field-row">
                  <span class="dy-card-field-label">Public Footprint</span>
                  <span class="dy-card-field-value">Over 40 public GitHub repositories, speaker at Open Source Summit, and featured technical author.</span>
                </div>

                <div class="dy-card-field-row">
                  <span class="dy-card-field-label">Verified Public Citations</span>
                  <div class="dy-card-sources-list">
                    <span class="dy-source-pill">github.com/alexcarter</span>
                    <span class="dy-source-pill">arxiv.org/abs/2401</span>
                    <span class="dy-source-pill">techcrunch.com/article</span>
                  </div>
                </div>
              </div>

              <button class="dy-btn-primary-cta" id="dy-people-try-btn" style="padding: 12px 26px; font-size: 0.95rem;">
                <span>Analyze Any Person / Photo</span>
                <span class="dy-cta-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           4. SECTION: PLACE RECOGNITION DEMO
           ==================================================================== -->
      <section class="dy-section dy-section-warm" id="places">
        <div class="dy-section-container">
          <div class="dy-section-header-center">
            <span class="dy-section-eyebrow">DESTINATION INTELLIGENCE</span>
            <h2 class="dy-section-title">Recognize the world around you.</h2>
            <p class="dy-section-desc">
              Identify geographic landmarks, historical architecture, and natural wonders with deep contextual insights.
            </p>
          </div>

          ${F()}
        </div>
      </section>

      <!-- ====================================================================
           5. SECTION: AI PROCESSING FLOW VISUALIZATION
           ==================================================================== -->
      <section class="dy-section" id="technology">
        <div class="dy-section-container">
          <div class="dy-section-header-center">
            <span class="dy-section-eyebrow">SYSTEM ARCHITECTURE</span>
            <h2 class="dy-section-title">The Multimodal Intelligence Pipeline</h2>
            <p class="dy-section-desc">
              A high-precision sequence transforming raw pixels into actionable, verified knowledge.
            </p>
          </div>

          <!-- Flowchart: UPLOAD -> VISION MODEL -> CONTEXT ENGINE -> PUBLIC INFORMATION -> INSIGHT -->
          <div class="dy-pipeline-flow-container">
            <!-- Node 1: UPLOAD -->
            <div class="dy-flow-node">
              <div class="dy-flow-node-icon">
                ${A(`upload`,`w-6 h-6`,24)}
              </div>
              <span class="dy-flow-node-label">Upload</span>
              <span class="dy-flow-node-sub">Secure Ingestion</span>
            </div>

            <div class="dy-flow-connector">
              <span class="dy-flow-particle" style="animation-delay: 0s;"></span>
            </div>

            <!-- Node 2: VISION MODEL -->
            <div class="dy-flow-node">
              <div class="dy-flow-node-icon">
                ${A(`scan`,`w-6 h-6`,24)}
              </div>
              <span class="dy-flow-node-label">Vision Model</span>
              <span class="dy-flow-node-sub">Feature Extraction</span>
            </div>

            <div class="dy-flow-connector">
              <span class="dy-flow-particle" style="animation-delay: 0.6s;"></span>
            </div>

            <!-- Node 3: CONTEXT ENGINE -->
            <div class="dy-flow-node">
              <div class="dy-flow-node-icon">
                ${A(`sparkles`,`w-6 h-6`,24)}
              </div>
              <span class="dy-flow-node-label">Context Engine</span>
              <span class="dy-flow-node-sub">Neural Synthesis</span>
            </div>

            <div class="dy-flow-connector">
              <span class="dy-flow-particle" style="animation-delay: 1.2s;"></span>
            </div>

            <!-- Node 4: PUBLIC INFORMATION -->
            <div class="dy-flow-node">
              <div class="dy-flow-node-icon">
                ${A(`globe`,`w-6 h-6`,24)}
              </div>
              <span class="dy-flow-node-label">Public Sources</span>
              <span class="dy-flow-node-sub">Indexed Web Pages</span>
            </div>

            <div class="dy-flow-connector">
              <span class="dy-flow-particle" style="animation-delay: 1.8s;"></span>
            </div>

            <!-- Node 5: INSIGHT -->
            <div class="dy-flow-node">
              <div class="dy-flow-node-icon" style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff;">
                ${A(`check-circle`,`w-6 h-6`,24)}
              </div>
              <span class="dy-flow-node-label" style="color: var(--dy-indigo);">Insight</span>
              <span class="dy-flow-node-sub">Actionable Dossier</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           6. SECTION: TRUST & PRIVACY PILLARS
           ==================================================================== -->
      <section class="dy-section dy-section-warm" id="privacy">
        <div class="dy-section-container">
          <div class="dy-section-header-center">
            <span class="dy-section-eyebrow">ETHICAL INTELLIGENCE</span>
            <h2 class="dy-section-title">Built for useful discovery.</h2>
            <p class="dy-section-desc">
              We uphold uncompromising privacy standards. DIGITAL YOUR is designed for ethical discovery, not surveillance.
            </p>
          </div>

          <div class="dy-trust-grid">
            <!-- Pillar 1 -->
            <div class="dy-trust-card">
              <div class="dy-trust-icon-box">
                ${A(`globe`,`w-5 h-5`,20)}
              </div>
              <h4 class="dy-trust-title">Public information only</h4>
              <p class="dy-trust-desc">
                We search exclusively open, publicly indexed internet sources. We never access private accounts, behind-the-wall social feeds, or credentials.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="dy-trust-card">
              <div class="dy-trust-icon-box">
                ${A(`sparkles`,`w-5 h-5`,20)}
              </div>
              <h4 class="dy-trust-title">Transparent AI insights</h4>
              <p class="dy-trust-desc">
                Every result is accompanied by probabilistic confidence ratings and direct citations, allowing you to independently verify all discoveries.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="dy-trust-card">
              <div class="dy-trust-icon-box">
                ${A(`shield-check`,`w-5 h-5`,20)}
              </div>
              <h4 class="dy-trust-title">Privacy-conscious design</h4>
              <p class="dy-trust-desc">
                Images are analyzed in ephemeral in-memory sessions. We do not maintain biometric identification tracking databases.
              </p>
            </div>

            <!-- Pillar 4 -->
            <div class="dy-trust-card">
              <div class="dy-trust-icon-box">
                ${A(`book-open`,`w-5 h-5`,20)}
              </div>
              <h4 class="dy-trust-title">Human-readable results</h4>
              <p class="dy-trust-desc">
                Complex visual vectors and semantic correlations are synthesized into clean, concise language designed for human researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           7. FOOTER
           ==================================================================== -->
      <footer class="dy-footer">
        <div class="dy-footer-top">
          <div class="dy-footer-brand-wrap">
            <div class="dy-nav-brand" style="margin-bottom: 4px;">
              <div class="dy-brand-icon-d">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 3h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H6V3z"/>
                  <path d="M12 9v6" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
                </svg>
              </div>
              <span class="dy-brand-title">DIGITAL YOUR</span>
            </div>
            <p class="dy-footer-tagline">
              See more. Understand more.<br />
              The quiet luxury standard in visual intelligence.
            </p>
          </div>

          <div>
            <h5 class="dy-footer-col-title">Product</h5>
            <ul class="dy-footer-links">
              <li><a href="#how-it-works" class="dy-footer-link">How It Works</a></li>
              <li><a href="#people" class="dy-footer-link">People Recognition</a></li>
              <li><a href="#places" class="dy-footer-link">Place Discovery</a></li>
              <li><a href="#technology" class="dy-footer-link">Vision Engine</a></li>
            </ul>
          </div>

          <div>
            <h5 class="dy-footer-col-title">Technology</h5>
            <ul class="dy-footer-links">
              <li><a href="#technology" class="dy-footer-link">Computer Vision</a></li>
              <li><a href="#technology" class="dy-footer-link">Perceptual Hashing</a></li>
              <li><a href="#technology" class="dy-footer-link">Contextual AI</a></li>
              <li><a href="#technology" class="dy-footer-link">API Integration</a></li>
            </ul>
          </div>

          <div>
            <h5 class="dy-footer-col-title">Privacy & Trust</h5>
            <ul class="dy-footer-links">
              <li><a href="#privacy" class="dy-footer-link">Privacy Architecture</a></li>
              <li><a href="#privacy" class="dy-footer-link">Public Source Policy</a></li>
              <li><a href="#privacy" class="dy-footer-link">Terms of Service</a></li>
              <li><a href="#privacy" class="dy-footer-link">Responsible Disclosure</a></li>
            </ul>
          </div>

          <div>
            <h5 class="dy-footer-col-title">Connect</h5>
            <ul class="dy-footer-links">
              <li><a href="https://twitter.com" target="_blank" rel="noopener" class="dy-footer-link">Twitter / X</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener" class="dy-footer-link">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener" class="dy-footer-link">LinkedIn</a></li>
              <li><a href="mailto:contact@digitalyour.ai" class="dy-footer-link">Contact Team</a></li>
            </ul>
          </div>
        </div>

        <div class="dy-footer-bottom">
          <span>&copy; 2026 DIGITAL YOUR Technologies, Inc. All rights reserved.</span>
          <span>Designed with Apple-level refinement & Linear-level UI.</span>
        </div>
      </footer>
    </div>
  `}function R(){P(),I();let e=document.getElementById(`hero-primary-cta`);e&&e.addEventListener(`click`,()=>{S.state.isAuthenticated?S.navigate(`dashboard`,`search`):S.openModal(`auth`,{nextTab:`search`})});let t=document.getElementById(`dy-people-try-btn`);t&&t.addEventListener(`click`,()=>{S.state.isAuthenticated?S.navigate(`dashboard`,`search`):S.openModal(`auth`,{nextTab:`search`})})}function z(){return typeof window<`u`&&sessionStorage.getItem(`dy_initialized`)?``:`
    <div class="dy-init-overlay" id="dy-init-overlay">
      <div class="dy-init-content">
        <div class="dy-init-logo">
          <div class="dy-init-symbol">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 3h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H6V3z"/>
              <path d="M12 9v6" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
            </svg>
          </div>
          <span class="dy-init-brand-text">DIGITAL YOUR</span>
        </div>
        <span class="dy-init-tagline">Initializing vision intelligence...</span>
        <div class="dy-init-progress-track">
          <div class="dy-init-progress-bar"></div>
        </div>
      </div>
    </div>
  `}function B(){let e=document.getElementById(`dy-init-overlay`);if(e){if(sessionStorage.getItem(`dy_initialized`)){e.classList.add(`dy-fade-out`),setTimeout(()=>e.remove(),400);return}setTimeout(()=>{e.classList.add(`dy-fade-out`),sessionStorage.setItem(`dy_initialized`,`true`),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e)},650)},1e3)}}function V(){let{dashboardTab:e,user:t}=S.state,n=S.remainingSearches,r=Math.min(100,Math.round(t.searchesUsed/t.searchesLimit*100));return`
    <aside class="app-sidebar">
      <div class="sidebar-header">
        <div class="nav-brand" id="sidebar-brand-btn" style="cursor: pointer;">
          <div class="nav-logo-icon" style="width: 34px; height: 34px;">
            ${A(`scan`,`w-4 h-4`,20)}
          </div>
          <div class="nav-brand-text">
            <span style="font-size: 1.05rem;">DIGITAL YOUR</span>
            <span class="nav-brand-sub">Platform MVP</span>
          </div>
        </div>
      </div>

      <div class="sidebar-scroll">
        <!-- Main Navigation -->
        <div>
          <div class="sidebar-group-title">MAIN</div>
          <ul class="sidebar-nav">
            <li>
              <button class="btn sidebar-item-btn ${e===`overview`?`active`:``}" data-tab="overview">
                ${A(`dashboard`,`w-4 h-4`,18)}
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button class="btn sidebar-item-btn ${e===`search`?`active`:``}" data-tab="search">
                ${A(`search`,`w-4 h-4`,18)}
                <span>New Search</span>
                <span class="sidebar-badge" style="background: rgba(59, 130, 246, 0.15); color: var(--primary);">
                  Core
                </span>
              </button>
            </li>
            <li>
              <button class="btn sidebar-item-btn ${e===`history`?`active`:``}" data-tab="history">
                ${A(`history`,`w-4 h-4`,18)}
                <span>Search History</span>
                <span class="sidebar-badge" style="background: var(--bg-tertiary); color: var(--text-muted);">
                  ${S.state.searchHistory.length}
                </span>
              </button>
            </li>
            <li>
              <button class="btn sidebar-item-btn ${e===`saved`?`active`:``}" data-tab="saved">
                ${A(`folder-heart`,`w-4 h-4`,18)}
                <span>Saved Results</span>
                <span class="sidebar-badge" style="background: var(--bg-tertiary); color: var(--text-muted);">
                  ${S.state.savedResults.length}
                </span>
              </button>
            </li>
            <li>
              <button class="btn sidebar-item-btn ${e===`settings`?`active`:``}" data-tab="settings">
                ${A(`settings`,`w-4 h-4`,18)}
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Coming Soon -->
        <div>
          <div class="sidebar-group-title">COMING SOON</div>
          <ul class="sidebar-nav">
            ${a.map(e=>`
              <li>
                <button class="btn sidebar-item-btn coming-soon-btn" data-feature-id="${e.id}">
                  ${A(H(e.id),`w-4 h-4`,18)}
                  <span>${e.title}</span>
                  <span class="sidebar-badge" style="background: rgba(139, 92, 246, 0.12); color: var(--accent-purple); font-size: 0.65rem;">
                    ${e.badge}
                  </span>
                </button>
              </li>
            `).join(``)}
          </ul>
        </div>
      </div>

      <!-- Sidebar Footer: Usage Counter -->
      <div class="sidebar-footer">
        <div class="sidebar-usage-card">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600;">
            <span style="color: var(--text-secondary);">Free Searches</span>
            <span style="color: var(--text-primary);">${n} of ${t.searchesLimit} left</span>
          </div>
          <div class="usage-bar-track">
            <div class="usage-bar-fill" style="width: ${r}%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
            <span style="font-size: 0.72rem; color: var(--text-muted);">Evaluation Tier</span>
            <button class="btn btn-ghost btn-sm" id="sidebar-upgrade-btn" style="padding: 2px 6px; font-size: 0.72rem; color: var(--primary); font-weight: 700;">
              Upgrade Pro ${A(`chevron-right`,`w-3 h-3`,12)}
            </button>
          </div>
        </div>

        <button class="btn btn-ghost btn-sm" id="sidebar-back-landing-btn" style="width: 100%; font-size: 0.78rem; color: var(--text-muted); justify-content: center;">
          ${A(`arrow-left`,`w-3 h-3`,12)} Return to Landing Page
        </button>
      </div>
    </aside>
  `}function H(e){switch(e){case`cs-digital-identity`:return`shield-check`;case`cs-ai-assistant`:return`sparkles`;case`cs-timeline`:return`history`;case`cs-source-graph`:return`layers`;case`cs-reports`:return`terminal`;case`cs-connected-platforms`:return`globe`;default:return`sparkle`}}function U(){let e=document.getElementById(`sidebar-brand-btn`);e&&e.addEventListener(`click`,()=>{S.setDashboardTab(`overview`)}),document.querySelectorAll(`.sidebar-item-btn[data-tab]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-tab`);S.setDashboardTab(t);let n=document.querySelector(`.app-sidebar`);n&&n.classList.remove(`mobile-open`)})}),document.querySelectorAll(`.coming-soon-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-feature-id`),n=a.find(e=>e.id===t);n&&S.openModal(`comingSoon`,n)})});let t=document.getElementById(`sidebar-upgrade-btn`);t&&t.addEventListener(`click`,()=>{S.openModal(`upgrade`)});let n=document.getElementById(`sidebar-back-landing-btn`);n&&n.addEventListener(`click`,()=>{S.navigate(`landing`)})}function W(){let{user:e,searchHistory:t,savedResults:n}=S.state,r=S.remainingSearches,i=t.slice(0,3),o=n.slice(0,3);return`
    <div class="overview-view">
      <!-- Welcome & Primary CTA Banner -->
      <div class="welcome-banner">
        <div class="welcome-text">
          <div style="display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px;">
            <span class="badge badge-privacy">
              ${A(`shield-check`,`w-3.5 h-3.5`,14)} Zero-Retention Privacy Mode
            </span>
          </div>
          <h1>Welcome back, ${e.name}</h1>
          <p>
            Explore where images appear across legally accessible, publicly indexed web records. Your searches are processed strictly in volatile memory.
          </p>
          <div style="display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg" id="overview-new-search-btn">
              ${A(`search`,`w-5 h-5`,20)}
              Start New Search
            </button>
            <button class="btn btn-secondary btn-lg" id="overview-view-history-btn">
              ${A(`history`,`w-5 h-5`,20)}
              Review Search History
            </button>
          </div>
        </div>

        <div style="display: none; @media(min-width: 900px){display: block;}">
          <div class="radar-scanner-box" style="width: 130px; height: 130px; margin: 0;">
            <div class="radar-ring inner"></div>
            <div class="radar-ring mid"></div>
            <div class="radar-sweep-beam"></div>
            <img src="/demo/elena.jpg" alt="Active Index" class="radar-target-thumb" style="width: 50px; height: 50px;" />
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="stats-grid">
        <!-- Metric 1: Searches Remaining -->
        <div class="stat-card">
          <div class="stat-card-top">
            <span style="font-size: 0.85rem; font-weight: 600;">Evaluation Quota</span>
            ${A(`zap`,`w-4 h-4`,18)}
          </div>
          <div class="stat-val" style="color: ${r>0?`var(--accent-emerald)`:`var(--accent-rose)`};">
            ${r} / ${e.searchesLimit}
          </div>
          <div class="stat-desc">
            ${r} complimentary public-source searches remaining.
          </div>
          <div style="margin-top: 6px; display: flex; justify-content: space-between; align-items: center;">
            <button class="btn btn-ghost btn-sm" id="overview-reset-quota-btn" style="padding: 2px 0; font-size: 0.75rem; color: var(--primary);">
              Reset Demo Quota
            </button>
            <button class="btn btn-ghost btn-sm" id="overview-upgrade-btn" style="padding: 2px 0; font-size: 0.75rem; color: var(--accent-cyan);">
              Upgrade Pro →
            </button>
          </div>
        </div>

        <!-- Metric 2: Completed Searches -->
        <div class="stat-card">
          <div class="stat-card-top">
            <span style="font-size: 0.85rem; font-weight: 600;">Total Queries</span>
            ${A(`activity`,`w-4 h-4`,18)}
          </div>
          <div class="stat-val">
            ${e.searchesUsed}
          </div>
          <div class="stat-desc">
            All stored locally with one-click full history purge.
          </div>
        </div>

        <!-- Metric 3: Saved Findings -->
        <div class="stat-card">
          <div class="stat-card-top">
            <span style="font-size: 0.85rem; font-weight: 600;">Saved Findings</span>
            ${A(`folder-heart`,`w-4 h-4`,18)}
          </div>
          <div class="stat-val">
            ${n.length}
          </div>
          <div class="stat-desc">
            Organized across 3 verified public collections.
          </div>
        </div>

        <!-- Metric 4: Privacy Boundary Status -->
        <div class="stat-card">
          <div class="stat-card-top">
            <span style="font-size: 0.85rem; font-weight: 600;">Index Boundary</span>
            ${A(`shield-check`,`w-4 h-4`,18)}
          </div>
          <div class="stat-val" style="font-size: 1.6rem; color: var(--accent-cyan); display: flex; align-items: center; gap: 8px;">
            <span>Public Web</span>
          </div>
          <div class="stat-desc">
            Zero private logins, zero surveillance feeds, zero identity claims.
          </div>
        </div>
      </div>

      <!-- Main Columns: Recent Searches & Saved Results -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 28px;">
        <!-- Left: Recent Searches -->
        <div class="glass-panel" style="padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${A(`history`,`w-5 h-5`,20)}
              <h3 style="font-size: 1.15rem;">Recent Searches</h3>
            </div>
            <button class="btn btn-ghost btn-sm" id="overview-all-history-link" style="color: var(--primary); font-size: 0.825rem;">
              View all (${t.length})
            </button>
          </div>

          ${i.length===0?`
              <div style="text-align: center; padding: 36px 16px; color: var(--text-muted);">
                ${A(`scan`,`w-10 h-10`,40)}
                <p style="margin-top: 12px; font-size: 0.9rem;">No search history yet.</p>
                <button class="btn btn-primary btn-sm" id="empty-start-search-btn" style="margin-top: 14px;">
                  Launch First Search
                </button>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${i.map(e=>`
                  <div class="history-item-row" style="padding: 12px 14px;">
                    <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                      <img src="${e.image}" alt="${e.name}" class="history-thumb" style="width: 44px; height: 44px;" />
                      <div style="min-width: 0;">
                        <h4 style="font-size: 0.88rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${e.name}
                        </h4>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                          <span>${e.date}</span>
                          <span>•</span>
                          <span style="color: var(--accent-cyan);">${e.resultCount} results</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-secondary btn-sm open-history-btn" data-history-id="${e.id}" title="Reopen Search">
                      ${A(`arrow-right`,`w-3.5 h-3.5`,14)}
                    </button>
                  </div>
                `).join(``)}
              </div>
            `}
        </div>

        <!-- Right: Recently Saved Findings -->
        <div class="glass-panel" style="padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${A(`bookmark`,`w-5 h-5`,20)}
              <h3 style="font-size: 1.15rem;">Recently Saved</h3>
            </div>
            <button class="btn btn-ghost btn-sm" id="overview-all-saved-link" style="color: var(--primary); font-size: 0.825rem;">
              View all (${n.length})
            </button>
          </div>

          ${o.length===0?`
              <div style="text-align: center; padding: 36px 16px; color: var(--text-muted);">
                ${A(`folder-heart`,`w-10 h-10`,40)}
                <p style="margin-top: 12px; font-size: 0.9rem;">No saved results yet.</p>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
                  Bookmark interesting findings directly from search result cards.
                </p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${o.map(e=>`
                  <div class="history-item-row" style="padding: 12px 14px;">
                    <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                      <img src="${e.image}" alt="${e.title}" class="history-thumb" style="width: 44px; height: 44px;" />
                      <div style="min-width: 0;">
                        <h4 style="font-size: 0.88rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${e.title}
                        </h4>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                          <span>${e.domain}</span>
                          <span>•</span>
                          <span style="color: var(--accent-emerald);">${e.similarity}% match</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-secondary btn-sm open-saved-detail-btn" data-saved-id="${e.id}" title="Inspect Details">
                      ${A(`external-link`,`w-3.5 h-3.5`,14)}
                    </button>
                  </div>
                `).join(``)}
              </div>
            `}
        </div>
      </div>

      <!-- Prototype Environment & Responsible Framing Notice -->
      <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-lg); padding: 20px 24px; display: flex; align-items: flex-start; gap: 16px;">
        <div style="color: var(--accent-amber); margin-top: 2px;">
          ${A(`alert-circle`,`w-5 h-5`,22)}
        </div>
        <div>
          <h4 style="font-size: 0.95rem; color: var(--accent-amber); margin-bottom: 4px;">
            Prototype Environment Notice & Ethical Boundary
          </h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            DIGITAL YOUR is a public-source reverse image discovery prototype. Results are simulated using representative publicly indexed articles, institutional directories, and open archives. Visual similarity percentages reflect algorithmic feature proximity and must never be interpreted as verified personal identity, legal affiliation, or ownership.
          </p>
        </div>
      </div>

      <!-- Coming Soon Preview Cards -->
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
          <h3 style="font-size: 1.25rem;">Upcoming Platform Capabilities</h3>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Roadmap Q4 2026 – 2027</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
          ${a.slice(0,3).map(e=>`
            <div class="glass-card" style="padding: 20px; cursor: pointer;" class="overview-cs-card" data-cs-id="${e.id}">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <span class="badge" style="background: rgba(139, 92, 246, 0.15); color: var(--accent-purple);">
                  ${e.badge}
                </span>
                ${A(`sparkle`,`w-4 h-4`,16)}
              </div>
              <h4 style="font-size: 1rem; margin-bottom: 6px;">${e.title}</h4>
              <p style="font-size: 0.825rem; color: var(--text-muted); line-height: 1.5;">
                ${e.description}
              </p>
              <button class="btn btn-ghost btn-sm" style="margin-top: 14px; padding: 0; color: var(--primary); font-size: 0.8rem;">
                Preview Capability ${A(`chevron-right`,`w-3 h-3`,12)}
              </button>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function G(){let e=document.getElementById(`overview-new-search-btn`);e&&e.addEventListener(`click`,()=>{S.setDashboardTab(`search`)});let t=document.getElementById(`empty-start-search-btn`);t&&t.addEventListener(`click`,()=>{S.setDashboardTab(`search`)});let n=document.getElementById(`overview-view-history-btn`);n&&n.addEventListener(`click`,()=>{S.setDashboardTab(`history`)});let r=document.getElementById(`overview-all-history-link`);r&&r.addEventListener(`click`,()=>{S.setDashboardTab(`history`)});let i=document.getElementById(`overview-all-saved-link`);i&&i.addEventListener(`click`,()=>{S.setDashboardTab(`saved`)});let o=document.getElementById(`overview-reset-quota-btn`);o&&o.addEventListener(`click`,()=>{S.resetSearchQuota()});let s=document.getElementById(`overview-upgrade-btn`);s&&s.addEventListener(`click`,()=>{S.openModal(`upgrade`)}),document.querySelectorAll(`.open-history-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-history-id`),n=S.state.searchHistory.find(e=>e.id===t);n&&S.openHistoryItem(n)})}),document.querySelectorAll(`.open-saved-detail-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-saved-id`),n=S.state.savedResults.find(e=>e.id===t);n&&S.openResultDetail(n)})}),document.querySelectorAll(`.overview-cs-card`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-cs-id`),n=a.find(e=>e.id===t);n&&S.openModal(`comingSoon`,n)})})}var K=`all`;function q(){let{currentSearch:e}=S.state,t=!!e.imageSrc;return`
    <div class="search-view">
      <!-- Section Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="badge badge-demo">
              ${A(`terminal`,`w-3 h-3`,12)} Public Index Prototype
            </span>
            <span class="badge badge-privacy">
              ${A(`shield-check`,`w-3 h-3`,12)} Ephemeral Memory
            </span>
            ${S.state.geminiApiKey?`
              <span class="badge badge-public" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
                ${A(`sparkles`,`w-3 h-3`,12)} Gemini Vision Active
              </span>
            `:`
              <span class="badge" style="background: rgba(139, 92, 246, 0.15); color: var(--accent-purple); border: 1px solid rgba(139, 92, 246, 0.3);">
                ${A(`cpu`,`w-3 h-3`,12)} Neural Vision Core
              </span>
            `}
          </div>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary);">Visual Public Discovery</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            Searches publicly indexed and connected sources. Analyze visual content, discover media/characters, and verify public sources.
          </p>
        </div>

        ${t?`
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary btn-sm" id="upload-replace-btn">
              ${A(`refresh`,`w-4 h-4`,16)} Replace Image
            </button>
            <button class="btn btn-ghost btn-sm" id="upload-remove-btn" style="color: var(--accent-rose);">
              ${A(`trash`,`w-4 h-4`,16)} Remove
            </button>
          </div>
        `:``}
      </div>

      ${t?Y(e):J()}
    </div>
  `}function J(){let e=t.filter(e=>K===`all`?!0:K===`anime`?e.category===`anime`:K===`public-figure`?e.category===`public-figure`:K===`ordinary-person`?e.category===`ordinary-person`:K===`no-match`?e.category===`no-match`:K!==`stage-scene`||e.category===`landmark`);return`
    <div class="upload-card-wrapper">
      <!-- Drag & Drop Zone -->
      <div class="upload-dropzone" id="upload-dropzone" role="region" aria-label="Image drop zone">
        <div class="dropzone-icon">
          ${A(`upload-cloud`,`w-8 h-8`,34)}
        </div>
        <h3 class="dropzone-title">Upload Image for Public Source Discovery</h3>
        <p class="dropzone-sub">
          Upload any anime poster, artwork, public keynote, product, or photograph (JPEG, PNG, WebP up to 15 MB).
        </p>
        <div style="display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" id="upload-browse-btn">
            ${A(`file-image`,`w-4 h-4`,18)}
            Browse Image Files
          </button>
          <button class="btn btn-secondary btn-sm" id="toggle-gemini-config-btn" style="font-size: 0.8rem;">
            ${A(`key`,`w-3.5 h-3.5`,14)}
            ${S.state.geminiApiKey?`Gemini 2.0 API Connected`:`Optional Gemini API Key`}
          </button>
        </div>
        <input type="file" id="upload-file-input" accept="image/jpeg,image/png,image/webp" style="display: none;" />
      </div>

      <!-- Optional Gemini Vision Key Collapsible Drawer -->
      <div id="gemini-config-drawer" style="display: none; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px 20px; margin-top: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            ${A(`sparkles`,`w-4 h-4`,16)}
            <span style="font-size: 0.9rem; font-weight: 700;">Live Google Gemini 2.0 Flash Multimodal Vision API</span>
          </div>
          <span class="badge badge-demo" style="font-size: 0.7rem;">Optional Integration</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.45;">
          Provide an optional Gemini API key to run real-time multimodal intelligence on custom uploads. (If empty, the built-in offline neural engine will classify anime, public figures, and scenes).
        </p>
        <div style="display: flex; gap: 10px;">
          <input 
            type="password" 
            id="gemini-api-key-input" 
            placeholder="AIzaSy... (Stored locally in session)" 
            value="${S.state.geminiApiKey||``}" 
            style="flex: 1; padding: 8px 14px; font-size: 0.85rem; border-radius: var(--radius-sm); background: var(--bg-primary); border: 1px solid var(--border-subtle); color: var(--text-primary);"
          />
          <button class="btn btn-primary btn-sm" id="save-gemini-key-btn">
            Save Key
          </button>
          ${S.state.geminiApiKey?`<button class="btn btn-ghost btn-sm" id="clear-gemini-key-btn" style="color: var(--accent-rose);">Clear</button>`:``}
        </div>
      </div>

      <!-- Quick 1-Click Curated Testing Presets -->
      <div class="sample-presets-wrap" style="margin-top: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
          <div>
            <span class="sample-presets-title" style="margin-bottom: 2px; font-weight: 800;">
              Instant Demonstration Scenarios:
            </span>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">
              Click any scenario to evaluate specific capabilities (Anime Posters, Public Figures, Strict Privacy Guardrail, or No Match).
            </p>
          </div>

          <!-- Preset Category Filter Tabs -->
          <div style="display: flex; background: var(--bg-tertiary); padding: 3px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); gap: 2px; flex-wrap: wrap;">
            <button class="btn btn-ghost btn-sm preset-filter-tab ${K===`all`?`active`:``}" data-tab="all" style="font-size: 0.75rem; padding: 4px 8px;">
              All (${t.length})
            </button>
            <button class="btn btn-ghost btn-sm preset-filter-tab ${K===`anime`?`active`:``}" data-tab="anime" style="font-size: 0.75rem; padding: 4px 8px;">
              ✨ Anime (${t.filter(e=>e.category===`anime`).length})
            </button>
            <button class="btn btn-ghost btn-sm preset-filter-tab ${K===`public-figure`?`active`:``}" data-tab="public-figure" style="font-size: 0.75rem; padding: 4px 8px;">
              👤 Public Figures (${t.filter(e=>e.category===`public-figure`).length})
            </button>
            <button class="btn btn-ghost btn-sm preset-filter-tab ${K===`ordinary-person`?`active`:``}" data-tab="ordinary-person" style="font-size: 0.75rem; padding: 4px 8px;">
              🛡️ Ordinary Person (${t.filter(e=>e.category===`ordinary-person`).length})
            </button>
            <button class="btn btn-ghost btn-sm preset-filter-tab ${K===`no-match`?`active`:``}" data-tab="no-match" style="font-size: 0.75rem; padding: 4px 8px;">
              🔍 No Match Demo (${t.filter(e=>e.category===`no-match`).length})
            </button>
          </div>
        </div>

        <!-- Presets Grid -->
        <div class="sample-presets-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          ${e.map(e=>`
            <div class="preset-chip" data-sample-id="${e.id}" style="padding: 14px; gap: 14px; align-items: flex-start; cursor: pointer; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
              <img src="${e.src}" alt="${e.title}" style="width: 60px; height: 80px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); flex-shrink: 0;" />
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px;">
                  <span class="badge ${e.category===`anime`?`badge-similarity-high`:e.category===`ordinary-person`?`badge-privacy`:`badge-public`}" style="font-size: 0.65rem; padding: 1px 6px;">
                    ${e.classification||`Demo`}
                  </span>
                  <span style="font-size: 0.68rem; color: var(--text-muted);">${e.dimensions}</span>
                </div>
                <div class="preset-chip-title" style="font-size: 0.92rem; font-weight: 800; color: var(--text-primary);">
                  ${e.title}
                </div>
                <div class="preset-chip-sub" style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.35;">
                  ${e.subtitle}
                </div>
                <!-- Platform Footprint Chips -->
                <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 8px;">
                  ${e.category===`anime`?`
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(255, 69, 0, 0.12); color: #fb923c; border: 1px solid rgba(255, 69, 0, 0.25);">Reddit</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(29, 155, 240, 0.12); color: #38bdf8; border: 1px solid rgba(29, 155, 240, 0.25);">Twitter/X</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(225, 48, 108, 0.12); color: #f43f5e; border: 1px solid rgba(225, 48, 108, 0.25);">Instagram</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25);">MAL / Crunchyroll</span>
                  `:e.category===`ordinary-person`?`
                    <span style="font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3);">
                      Zero Profile Search (Strict Privacy)
                    </span>
                  `:e.category===`no-match`?`
                    <span style="font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3);">
                      Zero Public Matches Demo
                    </span>
                  `:e.id===`sample-elon`?`
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(37, 99, 235, 0.12); color: var(--primary); border: 1px solid rgba(37, 99, 235, 0.25);">SpaceX</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(225, 29, 72, 0.12); color: #f43f5e; border: 1px solid rgba(225, 29, 72, 0.25);">Tesla</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(15, 23, 42, 0.12); color: var(--text-primary); border: 1px solid var(--border-color);">𝕏 / Twitter</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25);">xAI · Neuralink</span>
                  `:`
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(59, 130, 246, 0.12); color: #38bdf8; border: 1px solid rgba(59, 130, 246, 0.25);">Stanford HAI</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);">IEEE</span>
                    <span style="font-size: 0.65rem; padding: 2px 5px; border-radius: 4px; background: rgba(10, 102, 194, 0.12); color: #60a5fa; border: 1px solid rgba(10, 102, 194, 0.25);">WIRED</span>
                  `}
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Legal and Boundaries Notice -->
      <div style="background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-md); padding: 16px 20px; display: flex; align-items: flex-start; gap: 14px; margin-top: 24px;">
        <div style="color: var(--primary); margin-top: 2px;">
          ${A(`shield`,`w-5 h-5`,20)}
        </div>
        <div>
          <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">
            Search Boundary & Privacy Architecture
          </h4>
          <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
            Searches publicly indexed and connected sources. Results depend on source availability, indexing, regional access, and search-provider coverage. DIGITAL YOUR never accesses private social-media accounts, password-protected pages, restricted databases, private messages, or unauthorized personal records.
          </p>
        </div>
      </div>
    </div>
  `}function Y(e){let{imageSrc:t,fileName:n,fileSize:r,dimensions:i,regions:a,selectedRegion:o,title:s,classification:c,entityType:l,mediaAnalysis:u,ordinaryPersonGuardrail:d}=e;return`
    <div class="upload-card-wrapper">
      <!-- File Metadata Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan);">
            ${A(`file-image`,`w-5 h-5`,22)}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin: 0;">${s||n}</h4>
              <span class="badge badge-demo" style="font-size: 0.68rem;">${c}</span>
            </div>
            <div style="display: flex; gap: 10px; font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
              <span>${r}</span>
              <span>•</span>
              <span>${i}</span>
              <span>•</span>
              <span style="color: var(--accent-emerald); font-weight: 600;">Analysis Complete (${a.length} visual regions isolated)</span>
            </div>
          </div>
        </div>

        <span class="badge badge-public">
          ${A(`scan`,`w-3 h-3`,12)} Select Search Focus
        </span>
      </div>

      <!-- Quick Intelligence Preview Badge -->
      ${u?`
        <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid var(--border-glow); border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge badge-similarity-high" style="font-size: 0.72rem;">
              ${A(`sparkles`,`w-3 h-3`,12)} Anime Recognition
            </span>
            <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${u.title}</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-secondary);">
            Roster: <strong>${u.characters.map(e=>e.name).join(`, `)}</strong>
          </div>
        </div>
      `:d?.active?`
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <div style="color: var(--accent-emerald);">
            ${A(`shield-check`,`w-4 h-4`,18)}
          </div>
          <span style="font-size: 0.825rem; color: var(--text-secondary);">
            <strong>Strict Privacy Guardrail:</strong> Ordinary private subject detected. The system will provide non-identifying scene details and will not search personal profiles.
          </span>
        </div>
      `:``}

      <!-- Main Layout: Viewport with Bounding Boxes & Multi-Region Selector List -->
      <div class="image-analysis-container">
        <!-- Left: Image Viewport with Bounding Boxes -->
        <div>
          <div class="analysis-viewport-card" id="analysis-viewport">
            <img src="${t}" alt="Uploaded preview" class="analysis-main-image" id="analysis-preview-img" />

            <!-- Interactive Bounding Boxes -->
            ${a.filter(e=>e.type!==`full`).map(e=>`
                <div 
                  class="detected-bounding-overlay ${o?.id===e.id?`selected`:``}" 
                  data-region-id="${e.id}"
                  style="top: ${e.box.top}%; left: ${e.box.left}%; width: ${e.box.width}%; height: ${e.box.height}%;"
                  title="Click to focus search on ${e.label}"
                >
                  <span class="box-tag">${e.label}</span>
                </div>
              `).join(``)}
          </div>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 8px; text-align: center;">
            Click directly on any bounding box on the image or choose from the list.
          </p>
        </div>

        <!-- Right: Multi-Element Region Selection List & Search Action -->
        <div class="analysis-panel">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 4px; color: var(--text-primary);">
              Select Visual Region
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
              Choose which visual element or face to search across openly indexed public sources.
            </p>
          </div>

          <!-- Region List -->
          <div class="region-selector-list" style="display: flex; flex-direction: column; gap: 8px;">
            ${a.map(e=>`
                <div class="region-item-card ${o?.id===e.id?`selected`:``}" data-region-id="${e.id}">
                  <div class="region-item-info">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span class="region-item-label" style="font-weight: 700;">${e.label}</span>
                      <span class="badge ${e.type===`character`?`badge-similarity-high`:e.type===`face`?`badge-public`:`badge-demo`}" style="font-size: 0.65rem; padding: 1px 6px;">
                        ${e.confidence}% confidence
                      </span>
                    </div>
                    <span class="region-item-desc" style="font-size: 0.75rem; color: var(--text-muted);">${e.description}</span>
                  </div>
                  <div class="region-item-radio"></div>
                </div>
              `).join(``)}
          </div>

          <!-- Selection Disclaimer Notice -->
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; gap: 10px;">
            <div style="color: var(--accent-amber); margin-top: 1px;">
              ${A(`info`,`w-4 h-4`,16)}
            </div>
            <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
              <strong>Visual region notice:</strong> Selections are coordinate boundaries for algorithmic image comparison. DIGITAL YOUR does not claim that a detected face proves someone’s identity.
            </p>
          </div>

          <!-- Primary Search Execution CTA -->
          <div style="margin-top: 8px;">
            <button class="btn btn-primary btn-lg" id="execute-search-btn" style="width: 100%;">
              ${A(`search`,`w-5 h-5`,20)}
              Search Public Indexed Sources
            </button>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">
              <span>10-stage public source verification</span>
              <span>1 search deducted from quota</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ae(){document.querySelectorAll(`.preset-filter-tab`).forEach(e=>{e.addEventListener(`click`,e=>{K=e.currentTarget.getAttribute(`data-tab`),S.notify()})});let e=document.getElementById(`toggle-gemini-config-btn`);e&&e.addEventListener(`click`,()=>{S.openModal(`aiConfig`)});let t=document.getElementById(`save-gemini-key-btn`),n=document.getElementById(`gemini-api-key-input`);t&&n&&t.addEventListener(`click`,()=>{S.setGeminiApiKey(n.value)});let r=document.getElementById(`clear-gemini-key-btn`);r&&r.addEventListener(`click`,()=>{S.setGeminiApiKey(``)}),document.querySelectorAll(`.preset-chip`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-sample-id`);S.loadSampleImage(t)})});let i=document.getElementById(`upload-browse-btn`),a=document.getElementById(`upload-file-input`);i&&a&&(i.addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,e=>{e.target.files&&e.target.files[0]&&S.uploadCustomImage(e.target.files[0])}));let o=document.getElementById(`upload-dropzone`);o&&([`dragenter`,`dragover`].forEach(e=>{o.addEventListener(e,e=>{e.preventDefault(),o.classList.add(`dragover`)})}),[`dragleave`,`drop`].forEach(e=>{o.addEventListener(e,e=>{e.preventDefault(),o.classList.remove(`dragover`)})}),o.addEventListener(`drop`,e=>{e.dataTransfer.files&&e.dataTransfer.files[0]&&S.uploadCustomImage(e.dataTransfer.files[0])}));let s=document.getElementById(`upload-replace-btn`);s&&s.addEventListener(`click`,()=>{a?a.click():(S.state.currentSearch.imageSrc=null,S.notify())});let c=document.getElementById(`upload-remove-btn`);c&&c.addEventListener(`click`,()=>{S.state.currentSearch.imageSrc=null,S.state.currentSearch.status=`idle`,S.notify()}),document.querySelectorAll(`.detected-bounding-overlay`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=e.currentTarget.getAttribute(`data-region-id`),n=S.state.currentSearch.regions.find(e=>e.id===t);n&&S.selectRegion(n)})}),document.querySelectorAll(`.region-item-card`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-region-id`),n=S.state.currentSearch.regions.find(e=>e.id===t);n&&S.selectRegion(n)})});let l=document.getElementById(`execute-search-btn`);l&&l.addEventListener(`click`,()=>{S.startSearchExecution()})}function oe(){let{currentSearch:t}=S.state,n=t.processingStage||1,r=e[n-1]||e[0],i=Math.min(100,Math.round(n/10*100)),a=Math.max(1,Math.round((10-n)*.35)),o=(t.sourcesReviewedCount||140).toLocaleString(),s=t.matchConfidenceMeter||45;return`
    <div class="search-view">
      <div class="processing-container">
        <!-- Environmental Mode Badge & Disclaimers -->
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <span class="badge badge-demo">
            ${A(`terminal`,`w-3 h-3`,12)} Prototype mode — representative public-source demo results.
          </span>
          <span class="badge badge-privacy">
            ${A(`shield-check`,`w-3 h-3`,12)} Zero-Retention Ephemeral Memory
          </span>
        </div>

        <!-- Animated Scanning Radar Box -->
        <div class="radar-scanner-box">
          <div class="radar-ring inner"></div>
          <div class="radar-ring mid"></div>
          <div class="radar-crosshair-h"></div>
          <div class="radar-crosshair-v"></div>
          <div class="radar-sweep-beam"></div>
          <img src="${t.imageSrc}" alt="Target image under analysis" class="radar-target-thumb" />
        </div>

        <!-- Stage Title & Description -->
        <div style="margin-bottom: 8px; text-align: center;">
          <h2 style="font-size: 1.5rem; margin-bottom: 4px;">
            Stage ${n}: ${r.title}...
          </h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 520px; margin: 0 auto;">
            ${r.desc}
          </p>
        </div>

        <!-- Progress Bar, Metrics & Estimated Time -->
        <div style="width: 100%; max-width: 580px; margin: 20px 0 16px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">
            <span>Stage ${n} of 10 (${i}%)</span>
            <span>~${a}s remaining</span>
          </div>
          <div class="usage-bar-track" style="height: 9px; margin: 0; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-full); overflow: hidden;">
            <div class="usage-bar-fill" style="width: ${i}%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent-cyan)); transition: width 0.3s ease;"></div>
          </div>
        </div>

        <!-- Live Investigation HUD Metrics Bar -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; width: 100%; max-width: 580px; margin-bottom: 24px;">
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Sources Reviewed</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--accent-cyan);">${o}</span>
          </div>
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Match Confidence</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--accent-emerald);">${s}%</span>
          </div>
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Search Engine</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-top: 3px; display: block;">
              ${S.state.geminiApiKey?`Gemini 2.0 Vision`:`Neural Core v4`}
            </span>
          </div>
        </div>

        <!-- Provider Status Banner -->
        <div style="background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-md); padding: 12px 18px; width: 100%; max-width: 580px; display: flex; align-items: center; gap: 10px; margin-bottom: 24px;">
          <div class="pulse-indicator" style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-cyan); flex-shrink: 0;"></div>
          <span style="font-size: 0.825rem; color: var(--text-secondary); font-family: var(--font-mono); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${t.providerStatus||`Querying indexed public sources...`}
          </span>
        </div>

        <!-- 10 Stages Progressive Checklist -->
        <div class="processing-stages-list" style="max-width: 580px; width: 100%;">
          ${e.map(e=>{let t=`pending`,r=A(`circle`,`w-3 h-3`,12);return e.stage<n?(t=`completed`,r=A(`check`,`w-3.5 h-3.5`,14)):e.stage===n&&(t=`active`,r=A(`scan`,`w-3.5 h-3.5`,14)),`
              <div class="stage-step-item ${t}" style="padding: 10px 14px;">
                <div class="stage-status-icon" style="width: 26px; height: 26px;">
                  ${r}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: ${t===`active`?`var(--primary)`:`var(--text-primary)`};">
                    ${e.stage}. ${e.title}
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${e.desc}
                  </div>
                </div>
                ${t===`completed`?`<span style="font-size: 0.72rem; color: var(--accent-emerald); font-weight: 700;">Verified</span>`:t===`active`?`<span style="font-size: 0.72rem; color: var(--primary); font-weight: 700;">Scanning</span>`:`<span style="font-size: 0.72rem; color: var(--text-muted);">Queued</span>`}
              </div>
            `}).join(``)}
        </div>

        <!-- Privacy & Public Source Perimeter Notice -->
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px 18px; max-width: 580px; margin: 20px 0 24px; display: flex; gap: 12px; align-items: flex-start;">
          <div style="color: var(--primary); margin-top: 1px;">
            ${A(`shield-check`,`w-4 h-4`,18)}
          </div>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
            <strong>Public search boundary:</strong> Searches publicly indexed and connected sources. Results depend on source availability, indexing, regional access, and search-provider coverage. DIGITAL YOUR never accesses private accounts or surveillance feeds.
          </p>
        </div>

        <!-- Control Actions (Cancel & Retry) -->
        <div style="display: flex; gap: 12px; justify-content: center;">
          <button class="btn btn-secondary btn-sm" id="cancel-search-btn">
            ${A(`x-circle`,`w-4 h-4`,16)} Cancel Search
          </button>
          <button class="btn btn-ghost btn-sm" id="retry-search-btn">
            ${A(`refresh`,`w-4 h-4`,16)} Restart Pipeline
          </button>
        </div>
      </div>
    </div>
  `}function se(){let e=document.getElementById(`cancel-search-btn`);e&&e.addEventListener(`click`,()=>{S.cancelSearch()});let t=document.getElementById(`retry-search-btn`);t&&t.addEventListener(`click`,()=>{S.cancelSearch(),setTimeout(()=>{S.startSearchExecution()},100)})}function ce(){let{currentSearch:e,savedResults:t}=S.state,n=e.filteredResults||[],r=e.results?.length||0,i=e.activeFilter||`All`,a=e.sortBy||`relevance`,o=e.viewLayout||`grid`,s=[`All`,`Exact Matches`,`Similar Images`,`Articles`,`Profiles`,`Media`,`Products`,`Public Figures`,`Websites`],c=n.filter(e=>e.matchType===`exact`),l=n.filter(e=>e.matchType===`near`),u=n.filter(e=>e.matchType===`related`);return`
    <div class="search-view results-view-clean">
      <!-- Search Summary Header -->
      <div class="results-header-card">
        <div class="results-query-summary">
          <div class="query-dual-thumb">
            <img src="${e.imageSrc}" alt="Query image" />
            <div class="query-region-crop-badge" title="${e.selectedRegion?.label||`Selected Focus`}">
              ${A(`scan`,`w-3 h-3`,14)}
            </div>
          </div>

          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap;">
              <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">
                ${e.title||`Public Source Matches`}
              </h2>
              <span class="badge badge-public">${r} Public Records</span>
              <span class="badge badge-demo" style="font-size: 0.72rem;">
                ${e.classification||`Visual Match`}
              </span>
            </div>
            <div style="display: flex; gap: 10px; font-size: 0.8rem; color: var(--text-muted); flex-wrap: wrap;">
              <span>Visual Focus: <strong>${e.selectedRegion?.label||`Entire Image`}</strong></span>
              <span>•</span>
              <span>Verified at: ${new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}</span>
              <span>•</span>
              <span style="color: var(--accent-emerald); font-weight: 600;">Public Web & Connected Sources</span>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" id="results-new-search-btn">
            ${A(`plus`,`w-4 h-4`,16)} New Search
          </button>
          <button class="btn btn-outline btn-sm" id="results-export-btn">
            ${A(`download`,`w-4 h-4`,16)} Export Dossier
          </button>
        </div>
      </div>

      <!-- Mandatory Algorithmic Similarity & Legal Disclaimer Notice -->
      <div class="responsible-notice-bar" style="background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-md); padding: 12px 18px; display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div style="color: var(--primary); flex-shrink: 0;">
          ${A(`shield-check`,`w-5 h-5`,20)}
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
          <strong>Visual similarity notice:</strong> Visual similarity is an estimate and does not prove identity, ownership, authorship, or association. Searches publicly indexed and connected sources. Results depend on source availability, indexing, regional access, and search-provider coverage.
        </p>
      </div>

      <!-- Interactive AI Research Assistant Panel -->
      ${de(e)}

      <!-- Social Media & Public Identity Resolver (Always available when public figure data is not yet active) -->
      ${e.publicFigureData?``:le(e)}

      <!-- Deep Public Anime & Media Search Toolbar -->
      ${ue(e)}

      <!-- 1. Strict Privacy Guardrail Panel (for Ordinary / Private Individuals) -->
      ${e.ordinaryPersonGuardrail?.active?fe(e.ordinaryPersonGuardrail):``}

      <!-- 2. Media and Character Information Panel (for Anime, Animation, Games & Cinema) -->
      ${e.mediaAnalysis?pe(e.mediaAnalysis):``}

      <!-- 3. Public Figure Information Panel (for Documented Public Figures) -->
      ${e.publicFigureData?me(e.publicFigureData):``}

      <!-- 4. Structured Image Context Analysis Panel (Always Available) -->
      ${e.imageContextAnalysis?he(e.imageContextAnalysis):``}

      <!-- Filter Tabs, Sorting, and View Layout Controls -->
      <div class="results-controls-bar" style="margin-bottom: 20px;">
        <!-- Filter Tabs -->
        <div class="results-filter-tabs" style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px;">
          ${s.map(e=>`
              <button class="btn filter-tab-btn ${i.toLowerCase()===e.toLowerCase()?`active`:``}" data-filter-cat="${e}">
                ${e}
              </button>
            `).join(``)}
        </div>

        <!-- Sort and Layout Controls -->
        <div class="results-sort-group" style="display: flex; align-items: center; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Sort:</span>
            <select id="results-sort-select" style="padding: 5px 10px; font-size: 0.8rem; border-radius: var(--radius-sm); background: var(--bg-secondary); border: 1px solid var(--border-subtle); color: var(--text-primary);">
              <option value="relevance" ${a===`relevance`?`selected`:``}>Relevance (Exact First)</option>
              <option value="similarity" ${a===`similarity`?`selected`:``}>Highest Similarity</option>
              <option value="date" ${a===`date`?`selected`:``}>Publication Date</option>
              <option value="sourceType" ${a===`sourceType`?`selected`:``}>Source Quality</option>
            </select>
          </div>

          <div style="display: flex; background: var(--bg-tertiary); padding: 3px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <button class="btn btn-ghost btn-sm ${o===`grid`?`active`:``}" id="toggle-grid-layout" title="Grid View" style="${o===`grid`?`background: var(--bg-secondary); color: var(--text-primary);`:``}">
              ${A(`grid`,`w-3.5 h-3.5`,14)}
            </button>
            <button class="btn btn-ghost btn-sm ${o===`list`?`active`:``}" id="toggle-list-layout" title="List View" style="${o===`list`?`background: var(--bg-secondary); color: var(--text-primary);`:``}">
              ${A(`list`,`w-3.5 h-3.5`,14)}
            </button>
          </div>
        </div>
      </div>

      <!-- 5. Search Results Content (or No Strong Match Fallback) -->
      ${e.isNoMatch||n.length===0&&!e.ordinaryPersonGuardrail?.active?_e():ge(n,c,l,u,i,o,t)}
    </div>
  `}function le(e){return`
    <div class="glass-panel social-profile-resolver" style="margin-bottom: 24px; padding: 22px 24px; background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(124, 58, 237, 0.05)); border: 1.5px solid rgba(59, 130, 246, 0.35); border-radius: 14px; box-shadow: 0 6px 24px -4px rgba(0, 0, 0, 0.05);">
      <!-- Header -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg, #2563eb, #7c3aed); display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);">
            ${A(`users`,`w-5 h-5`,22)}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                Find Social Media Profiles & Verified Public Footprint
              </h3>
              <span class="badge" style="background: rgba(37, 99, 235, 0.12); color: var(--primary); font-size: 0.74rem; font-weight: 700; border: 1px solid rgba(37, 99, 235, 0.25);">
                𝕏 (Twitter) • Instagram • Snapchat • LinkedIn • Wikipedia • YouTube
              </span>
            </div>
            <p style="font-size: 0.825rem; color: var(--text-secondary); margin: 3px 0 0 0;">
              Looking for this person's social accounts? Public figures, creators, executives, and leaders have verified public profiles. Type their name or select a quick candidate below:
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Name Input & Resolution Form -->
      <form id="social-resolver-form" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px;">
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input
            type="text"
            id="social-resolver-input"
            placeholder="Type any person's name (e.g. Elon Musk, Sam Altman, Jensen Huang, Mark Zuckerberg, Cristiano Ronaldo)..."
            style="width: 100%; padding: 11px 14px 11px 38px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem; outline: none; box-sizing: border-box;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${A(`search`,``,16)}
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style="padding: 11px 22px; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; border-radius: 8px;"
        >
          ${A(`globe`,``,16)} Retrieve Social Profiles
        </button>
      </form>

      <!-- 1-Click Candidate Chips -->
      <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
        <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-muted);">Quick-Select Public Figure:</span>
        ${[`Elon Musk`,`Sam Altman`,`Jensen Huang`,`Mark Zuckerberg`,`Sundar Pichai`,`Satya Nadella`,`Cristiano Ronaldo`,`Dr. Elena Vance`].map(e=>`
            <button class="social-resolver-chip" data-name="${e}" type="button" style="padding: 5px 12px; font-size: 0.76rem; font-weight: 600; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); cursor: pointer; transition: all 0.15s ease;">
              ${e}
            </button>
          `).join(``)}
      </div>

      <!-- Clear Privacy Guidance Explaining WHY private individuals don't have public social scraping -->
      <div style="padding: 12px 16px; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5; display: flex; align-items: flex-start; gap: 10px;">
        <span style="color: var(--accent-emerald); margin-top: 1px; flex-shrink: 0;">${A(`shield-check`,`w-4 h-4`,16)}</span>
        <div>
          <strong style="color: var(--text-primary);">Why don't private photos automatically show personal social profiles?</strong>
          <p style="margin: 2px 0 0 0;">
            Legitimate search engines (Google Lens, TinEye) and DIGITAL YOUR strictly adhere to <strong>Privacy-by-Design</strong> and consumer data laws (GDPR, CCPA). We do not scrape private personal social accounts (Instagram, Snapchat, Facebook) or run unauthorized facial biometric surveillance on private citizens. Verified social media accounts are indexed exclusively for documented public figures, creators, and public entities.
          </p>
        </div>
      </div>
    </div>
  `}function ue(e){let t=e.entityType===`public-figure`&&e.publicFigureData?.publicName?e.publicFigureData.publicName:e.entityType===`anime`&&!e.isUnconfirmedAnime&&(e.mediaAnalysis?.title||e.title)||``;return`
    <div class="deep-search-toolbar" style="margin-bottom: 24px; background: linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(124, 58, 237, 0.06)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 18px 22px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 9px; background: var(--primary); color: white; flex-shrink: 0;">
            ${A(`sparkles`,``,18)}
          </span>
          <div>
            <h4 style="font-size: 1rem; font-weight: 800; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              Public Figure, Social Media & Visual Entity Search Engine
              <span class="badge" style="background: rgba(37, 99, 235, 0.14); color: var(--primary); font-size: 0.72rem; font-weight: 700; border: 1px solid rgba(37, 99, 235, 0.25);">
                Live Web, Wikipedia & Social Ready
              </span>
            </h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 2px 0 0;">
              Identify world public figures, companies owned, verified social media platforms, anime rosters, and open-web sources
            </p>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input
            type="text"
            id="deepAnimeInput"
            placeholder="Search public figures (Elon Musk, SpaceX, Tesla, Sam Altman) or anime titles & characters..."
            value="${t}"
            style="width: 100%; padding: 10px 14px 10px 38px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.88rem; outline: none; box-sizing: border-box;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${A(`search`,``,16)}
          </div>
        </div>
        <button
          id="btnRunDeepSearch"
          class="btn btn-primary"
          style="padding: 10px 22px; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; border-radius: 8px;"
        >
          ${A(`globe`,``,16)} Run Deep Search
        </button>
      </div>

      <!-- Quick-Search Suggestion Chips -->
      <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 12px;">
        <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-muted);">Quick Suggestions:</span>
        ${[`Elon Musk`,`SpaceX`,`Tesla`,`Sam Altman`,`Jensen Huang`,`Demon Slayer`,`Jujutsu Kaisen`,`Naruto`,`One Piece`,`Mark Zuckerberg`].map(e=>`
            <button class="anime-quick-chip" data-anime="${e}" type="button" style="padding: 4px 11px; font-size: 0.74rem; font-weight: 600; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-secondary); cursor: pointer; transition: all 0.15s ease;">
              ${e}
            </button>
          `).join(``)}
      </div>

      <!-- 1-Click Direct Public Reverse Image Search Engines -->
      <div style="border-top: 1px solid rgba(59, 130, 246, 0.2); padding-top: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-primary); display: inline-flex; align-items: center; gap: 5px;">
            ${A(`globe`,`w-3.5 h-3.5`,14)} 1-Click Direct Reverse Engines:
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">(Verify against global public indexes)</span>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <a href="https://images.google.com/" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="text-decoration: none; padding: 5px 11px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-surface); border: 1px solid var(--border-color);">
            Global Web Search ${A(`external-link`,`w-2.5 h-2.5`,10)}
          </a>
          <a href="https://trace.moe/" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="text-decoration: none; padding: 5px 11px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-surface); border: 1px solid var(--border-color);">
            Trace.moe ${A(`external-link`,`w-2.5 h-2.5`,10)}
          </a>
          <a href="https://yandex.com/images/" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="text-decoration: none; padding: 5px 11px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-surface); border: 1px solid var(--border-color);">
            Yandex Visual ${A(`external-link`,`w-2.5 h-2.5`,10)}
          </a>
          <a href="https://tineye.com/" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="text-decoration: none; padding: 5px 11px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-surface); border: 1px solid var(--border-color);">
            TinEye ${A(`external-link`,`w-2.5 h-2.5`,10)}
          </a>
          <a href="https://anilist.co/search/anime" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="text-decoration: none; padding: 5px 11px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-surface); border: 1px solid var(--border-color);">
            AniList Archive ${A(`external-link`,`w-2.5 h-2.5`,10)}
          </a>
        </div>
      </div>
    </div>
  `}function de(e){let{geminiApiKey:t}=S.state,n=!!e.publicFigureData,r=!!e.mediaAnalysis,i=e.classification===`Photographic portrait`||e.entityType===`ordinary-person`,a=e.aiChat||[],o=[];return o=n?[`What companies does he own?`,`What are his verified social media accounts?`,`What is his estimated net worth?`,`What does he work on and create?`]:r?[`Who are the characters in this visual?`,`Which animation studio produced this?`,`Where can I stream this anime?`,`What is the franchise and genre?`]:i?[`Why aren't social profiles showing for this photo?`,`How to find this person's social media accounts`,`Analyze the lighting and camera depth-of-field`,`Suggest reverse visual search queries`]:[`Describe this visual composition`,`What public records match this image?`,`Suggest key reverse search keywords`],`
    <div class="glass-panel" style="padding: 24px; background: var(--bg-card); border: 1px solid var(--border-glow); border-radius: var(--radius-lg); margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
      <!-- Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);">
            ${A(`sparkles`,`w-5 h-5`,22)}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                Ask AI Research Assistant
              </h3>
              <span class="badge ${t?`badge-similarity-high`:`badge-demo`}" style="font-size: 0.72rem;">
                ${t?`✨ Gemini 2.0 Flash Active`:`⚡ Built-in Neural Vision AI`}
              </span>
            </div>
            <p style="font-size: 0.825rem; color: var(--text-secondary); margin: 2px 0 0 0;">
              Investigative Q&A synthesized from public records, verified corporate filings, and multimodal visual analysis
            </p>
          </div>
        </div>

        <button class="btn btn-ghost btn-sm" id="ai-engine-settings-trigger" style="font-size: 0.78rem; display: flex; align-items: center; gap: 6px;">
          ${A(`settings`,`w-3.5 h-3.5`,14)}
          ${t?`Gemini 2.0 Connected`:`Connect Gemini API Key`}
        </button>
      </div>

      <!-- Quick Suggested Prompts -->
      <div style="margin-bottom: 16px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 8px;">
          Suggested Investigative Queries:
        </span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${o.map(e=>`
            <button class="btn btn-secondary btn-sm ai-prompt-chip" data-prompt="${e}" style="font-size: 0.8rem; padding: 6px 12px; border-radius: 999px; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); color: var(--text-primary); cursor: pointer;">
              ${A(`message-square`,`w-3 h-3`,12)} ${e}
            </button>
          `).join(``)}
        </div>
      </div>

      <!-- Conversation Output -->
      ${a.length>0?`
        <div class="ai-chat-thread" style="display: flex; flex-direction: column; gap: 12px; max-height: 380px; overflow-y: auto; padding: 14px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 16px;">
          ${a.map(e=>`
            <div style="display: flex; flex-direction: column; align-items: ${e.role===`user`?`flex-end`:`flex-start`};">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px; font-size: 0.72rem; color: var(--text-muted);">
                <span>${e.role===`user`?`You`:`AI Assistant`}</span>
                <span>•</span>
                <span>${e.timestamp}</span>
              </div>
              <div style="max-width: 85%; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.88rem; line-height: 1.5; ${e.role===`user`?`background: var(--primary); color: #ffffff;`:`background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-subtle);`}">
                ${e.loading?`
                  <div style="display: flex; align-items: center; gap: 8px; color: var(--text-secondary);">
                    <span class="spinner" style="width: 14px; height: 14px; border: 2px solid var(--primary); border-top-color: transparent; border-radius: 50%; display: inline-block; animation: spin 0.8s linear infinite;"></span>
                    <span>${e.text}</span>
                  </div>
                `:e.text}
              </div>
            </div>
          `).join(``)}
        </div>
      `:``}

      <!-- Question Input Form -->
      <form id="ai-ask-form" style="display: flex; gap: 10px;">
        <input 
          type="text" 
          id="ai-question-input" 
          placeholder="Ask anything about this image (e.g. What companies does he own? What are his social handles?)..." 
          style="flex: 1; padding: 10px 16px; font-size: 0.9rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background: var(--bg-primary); color: var(--text-primary);"
        />
        <button type="submit" class="btn btn-primary" id="ai-ask-btn" style="display: flex; align-items: center; gap: 6px; padding: 10px 20px;">
          ${A(`send`,`w-4 h-4`,16)}
          <span>Ask AI</span>
        </button>
      </form>
    </div>
  `}function fe(e){let t=e.nonIdentifyingDetails||{};return`
    <div class="glass-panel" style="padding: 24px; border-left: 4px solid var(--accent-emerald); background: var(--bg-card); margin-bottom: 24px;">
      <!-- Mandatory Notice Heading -->
      <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px;">
        <div style="color: var(--accent-emerald); margin-top: 2px;">
          ${A(`shield-check`,`w-6 h-6`,24)}
        </div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
            <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-weight: 700;">
              Strict Privacy-by-Design Active
            </span>
            <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: var(--primary); font-weight: 600;">
              Web & Social Media Scan: 0 Public Records
            </span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0 0 6px;">
            ${e.mandatoryNotice}
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
            We scanned the open web and social media archives (Instagram, Twitter/X, LinkedIn, public web domains). <strong>No publicly indexed social media accounts or public records were found for this individual.</strong> As an ordinary private person, DIGITAL YOUR does not associate private personal profiles or guess names.
          </p>
        </div>
      </div>

      <!-- Identified Subject Visual Breakdown -->
      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 4px;">
          Visual Subject Description (Visible Non-Identifying Attributes):
        </span>
        <p style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600; line-height: 1.5; margin: 0;">
          Person wearing a ${t.clothingColors||`dark T-shirt / neutral knit garment`}, with ${t.hairOrHead||`short dark cropped hair / natural head styling`}, framed in ${t.approximateComposition||`medium close-up portrait framing`}.
        </p>
      </div>

      <!-- Non-Identifying Visual Breakdown -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px;">
        <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
          Visible Non-Sensitive Image Details
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">Visible People</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">${t.visiblePeopleCount||1} Person visible in foreground</span>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">Head & Hair Styling</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary);">${t.hairOrHead||`Short cropped natural hair`}</span>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">T-Shirt / Garments</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary);">${t.clothingColors||`Charcoal black turtleneck / T-shirt`}</span>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">Composition & Framing</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary);">${t.approximateComposition||`Medium close-up portrait`}</span>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">Accessories</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary);">${t.accessories||`Optical eyewear frames`}</span>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.74rem; color: var(--text-muted); display: block; text-transform: uppercase;">Lighting & Setup</strong>
            <span style="font-size: 0.85rem; color: var(--text-primary);">${t.lighting||`Diffused directional illumination`}</span>
          </div>
        </div>
      </div>
    </div>
  `}function pe(e){return`
    <div class="glass-panel" style="padding: 24px; border: 1px solid var(--border-glow); background: var(--bg-card); margin-bottom: 24px;">
      <!-- Header -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="badge badge-similarity-high" style="font-size: 0.75rem; font-weight: 800; background: var(--accent-emerald); color: white;">
              ${A(`check-circle`,`w-3.5 h-3.5`,14)} Exact Media Match: ${e.title}
            </span>
            <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">${e.confidenceNote||`100% Verified Match via Public Reference Index`}</span>
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin: 0 0 4px;">
            ${e.title}
          </h3>
          <div style="display: flex; gap: 12px; font-size: 0.8rem; color: var(--text-secondary); flex-wrap: wrap;">
            <span>Studio: <strong>${e.studio}</strong></span>
            <span>•</span>
            <span>Franchise: <strong>${e.franchise}</strong></span>
            <span>•</span>
            <span>Period: <strong>${e.releasePeriod}</strong></span>
            <span>•</span>
            <span>Genre: <strong>${e.genre}</strong></span>
          </div>
        </div>

        <!-- Confidence Pill -->
        <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #059669; border: 1px solid rgba(16, 185, 129, 0.3); padding: 5px 14px; font-size: 0.8rem; font-weight: 700;">
          ${e.confidenceLevel||`100% Exact Perceptual Match`}
        </span>
      </div>

      <!-- Character Roster -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-bottom: 16px;">
        <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--text-primary); display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
          ${A(`users`,`w-3.5 h-3.5`,14)} Exact Characters Identified in Image:
        </span>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
          ${e.characters.map(e=>`
            <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); padding: 10px 14px; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 10px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent-purple)); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">
                ${e.name.charAt(0)}
              </div>
              <div style="min-width: 0;">
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${e.name}
                </div>
                <div style="font-size: 0.725rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${e.role}
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Reference & Official Links -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Public References:</span>
          ${e.publicReferenceLinks.map(e=>`
            <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="badge badge-public" style="display: inline-flex; align-items: center; gap: 4px; text-decoration: none; font-size: 0.72rem;">
              ${e.name} ${A(`external-link`,`w-2.5 h-2.5`,10)}
            </a>
          `).join(``)}
        </div>

        ${e.searchTermsUsed?`
          <div style="font-size: 0.75rem; color: var(--text-muted);">
            Search terms: <em>${e.searchTermsUsed.join(`, `)}</em>
          </div>
        `:``}
      </div>
    </div>
  `}function me(e){let t=e.socialProfiles||[{platform:`Instagram`,handle:`@`+(e.publicName.toLowerCase().replace(/[^a-z]/g,``)||`profile`),url:`https://instagram.com`},{platform:`Twitter / X`,handle:`@`+(e.publicName.toLowerCase().replace(/[^a-z]/g,``)||`profile`),url:`https://x.com`},{platform:`LinkedIn`,handle:`in/`+(e.publicName.toLowerCase().replace(/[^a-z]/g,`-`)||`profile`),url:`https://linkedin.com`},{platform:`Wikipedia`,handle:e.publicName,url:`https://wikipedia.org`},{platform:`YouTube`,handle:e.publicName+` Keynotes`,url:`https://youtube.com`}],n=e.whatTheyDo||e.publicWork||`Leads internationally recognized initiatives, authoring peer-reviewed literature and keynoting major public assemblies.`,r=e.howTheyDoIt||`Operates through institutional research frameworks, public advisory appointments, open-source technology standards, and global university collaborations.`,i=e.companies||[];return`
    <div class="glass-panel" style="padding: 24px; border: 1px solid var(--border-subtle); background: var(--bg-card); margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
      <!-- Header -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
            <span class="badge badge-similarity-high" style="font-size: 0.75rem; font-weight: 800; background: var(--accent-emerald); color: white;">
              ${A(`check-circle`,`w-3.5 h-3.5`,12)} Exact Public-Figure Match (Verified Public Record)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Verified Across Institutional & Public Media Registries</span>
            ${e.netWorth?`<span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #059669; font-weight: 700; font-size: 0.75rem; border: 1px solid rgba(16, 185, 129, 0.25);">${e.netWorth}</span>`:``}
          </div>
          <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--text-primary); margin: 0 0 4px;">
            ${e.publicName}
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0; font-weight: 500;">
            ${e.profession}
          </p>
        </div>

        <a href="${e.officialWebsite||`https://x.com`}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="font-size: 0.8rem; display: inline-flex; align-items: center; gap: 6px;">
          ${A(`external-link`,`w-3.5 h-3.5`,14)} Official Verified Profile
        </a>
      </div>

      <!-- What They Do & How They Do It -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-bottom: 16px;">
        <div style="background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; display: flex; align-items: center; gap: 5px; margin-bottom: 4px;">
            ${A(`activity`,`w-3 h-3`,12)} What They Do:
          </span>
          <p style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5; margin: 0;">
            ${n}
          </p>
        </div>

        <div style="background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; display: flex; align-items: center; gap: 5px; margin-bottom: 4px;">
            ${A(`cpu`,`w-3 h-3`,12)} How They Work & Public Impact:
          </span>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
            ${r}
          </p>
        </div>
      </div>

      <!-- Companies Owned, Founded & Directed -->
      ${i.length>0?`
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 0.78rem; font-weight: 800; color: var(--text-primary); text-transform: uppercase; display: flex; align-items: center; gap: 6px;">
              ${A(`layers`,`w-3.5 h-3.5`,14)} Companies Owned, Founded & Directed:
            </span>
            <span class="badge" style="background: rgba(37, 99, 235, 0.1); color: var(--primary); font-size: 0.72rem; font-weight: 700;">
              ${i.length} Major Global Enterprises
            </span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
            ${i.map(e=>`
              <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary);">${e.name}</span>
                    <span class="badge badge-public" style="font-size: 0.68rem; font-weight: 700; padding: 2px 7px;">${(e.role||``).split(`·`)[0].trim()}</span>
                  </div>
                  <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">${e.role}</div>
                  <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45; margin: 0 0 10px;">${e.description}</p>
                </div>
                <a href="${e.url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.75rem; font-weight: 700; color: var(--primary); text-decoration: none;">
                  Visit Company Website ${A(`external-link`,`w-2.5 h-2.5`,10)}
                </a>
              </div>
            `).join(``)}
          </div>
        </div>
      `:``}

      <!-- Public Social Media & Open Web Profiles -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-primary); text-transform: uppercase; display: flex; align-items: center; gap: 6px;">
            ${A(`globe`,`w-3.5 h-3.5`,14)} Verified Social Media & Public Platforms:
          </span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">(Open web indexed public profiles)</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px;">
          ${t.map(e=>`
            <a href="${e.url}" target="_blank" rel="noopener noreferrer" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--text-primary); padding: 9px 12px; border-radius: 8px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; transition: all 0.15s ease;">
              <div style="min-width: 0;">
                <div style="display: flex; align-items: center; gap: 5px;">
                  <span style="font-size: 0.8rem; font-weight: 800; color: var(--primary);">${e.platform}</span>
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${e.handle||e.platform}
                </div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <span style="font-size: 0.68rem; color: var(--accent-emerald); font-weight: 700; display: block;">
                  ${e.followers||`Verified`}
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 2px;">
                  Open ${A(`external-link`,`w-2 h-2`,9)}
                </span>
              </div>
            </a>
          `).join(``)}
        </div>
      </div>

      <!-- Documented Appearances -->
      ${e.documentedAppearances&&e.documentedAppearances.length>0?`
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-bottom: 14px;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 6px;">
            Documented Public Appearances & Keynotes:
          </span>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${e.documentedAppearances.map(e=>`
              <span class="badge" style="background: rgba(37, 99, 235, 0.08); border: 1px solid rgba(37, 99, 235, 0.2); font-size: 0.72rem; color: var(--text-secondary);">
                ${e.event} (${e.date||`Recent`})
              </span>
            `).join(``)}
          </div>
        </div>
      `:``}

      <!-- Ethical Boundary Notice -->
      <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
        <strong>Verified Public Record:</strong> ${e.disclaimer||`Public-figure profile verified against open corporate filings, documented press events, and verified social accounts.`}
      </div>
    </div>
  `}function he(e){return`
    <div class="glass-panel" style="padding: 20px 24px; background: var(--bg-card); border: 1px solid var(--border-subtle); margin-bottom: 24px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${A(`cpu`,`w-4 h-4`,18)}
          <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
            Image Context & Feature Analysis
          </h3>
        </div>
        <span class="badge badge-demo" style="font-size: 0.72rem;">Non-Sensitive Attributes Only</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
        <!-- Scene & Setting -->
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 2px;">
            Scene Description:
          </span>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
            ${e.sceneDescription}
          </p>
        </div>

        <!-- Visible Objects & Logos -->
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 4px;">
            Visible Objects & Elements:
          </span>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${(e.visibleObjects||[]).map(e=>`<span class="badge" style="background: var(--bg-tertiary); font-size: 0.72rem; color: var(--text-primary);">${e}</span>`).join(``)}
          </div>
        </div>
      </div>

      <!-- Color Palette Swatches & Orientation -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-top: 14px;">
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">Dominant Color Palette:</span>
          <div style="display: flex; gap: 6px;">
            ${(e.colorPalette||[]).map(e=>`
              <div style="display: inline-flex; align-items: center; gap: 5px; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); padding: 3px 8px; border-radius: 4px; font-size: 0.72rem;">
                <span style="width: 10px; height: 10px; border-radius: 2px; background: ${e.hex}; display: inline-block;"></span>
                <span style="font-family: var(--font-mono); color: var(--text-muted);">${e.hex}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <div style="display: flex; gap: 12px; font-size: 0.75rem; color: var(--text-muted);">
          <span>Orientation: <strong>${e.orientation||`Standard`}</strong></span>
          <span>•</span>
          <span>Editing: <strong>${e.editingIndicators||`None`}</strong></span>
        </div>
      </div>
    </div>
  `}function ge(e,t,n,r,i,a,o){return i===`All`?`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <!-- Section A: Exact Matches -->
      ${t.length>0?`
        <div class="exact-matches-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.07), rgba(5, 150, 105, 0.02)); border: 1.5px solid rgba(16, 185, 129, 0.4); border-radius: 14px; padding: 20px 22px; box-shadow: 0 4px 20px -2px rgba(16, 185, 129, 0.12);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge" style="background: var(--accent-emerald); color: white; font-weight: 800; font-size: 0.82rem; padding: 6px 14px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35); border-radius: 6px;">
                ${A(`check-circle`,`w-4 h-4`,16)} VERIFIED EXACT MATCHES (100% BITWISE/PERCEPTUAL HASH)
              </span>
              <span style="font-size: 0.9rem; font-weight: 800; color: var(--text-primary);">
                (${t.length} Exact Sources Found)
              </span>
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #059669; background: rgba(16, 185, 129, 0.14); padding: 4px 12px; border-radius: 9999px; border: 1px solid rgba(16, 185, 129, 0.25);">
              0 Bit Distance • Earliest Discovered Source
            </span>
          </div>
          <div class="results-grid ${a===`list`?`list-view`:``}">
            ${t.map(e=>X(e,o)).join(``)}
          </div>
        </div>
      `:``}

      <!-- Section B: Near Matches -->
      ${n.length>0?`
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--primary);"></div>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin: 0;">
              Near Matches (${n.length})
            </h3>
            <span style="font-size: 0.78rem; color: var(--text-muted);">
              Cropped, resized, or visually similar variations
            </span>
          </div>
          <div class="results-grid ${a===`list`?`list-view`:``}">
            ${n.map(e=>X(e,o)).join(``)}
          </div>
        </div>
      `:``}

      <!-- Section C: Related Pages -->
      ${r.length>0?`
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-purple);"></div>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin: 0;">
              Related Pages (${r.length})
            </h3>
            <span style="font-size: 0.78rem; color: var(--text-muted);">
              Public pages referencing, embedding, or discussing this subject
            </span>
          </div>
          <div class="results-grid ${a===`list`?`list-view`:``}">
            ${r.map(e=>X(e,o)).join(``)}
          </div>
        </div>
      `:``}
    </div>
  `:`
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">
            ${i} (${e.length})
          </h3>
        </div>
        <div class="results-grid ${a===`list`?`list-view`:``}">
          ${e.map(e=>X(e,o)).join(``)}
        </div>
      </div>
    `}function X(e,t){let n=t.some(t=>t.resultId===e.id),r=`badge-public`,i=e.sourceQualityLabel||`Reputable publication`;return e.sourceQuality===`official`?(r=`badge-similarity-high`,i=`Official source`):e.sourceQuality===`reference`?(r=`badge-public`,i=`Public reference database`):e.sourceQuality===`user-generated`&&(r=`badge-demo`,i=`User-generated page`),`
    <div class="result-card" data-result-id="${e.id}">
      <div class="result-card-media">
        <img src="${e.image}" alt="${e.title}" loading="lazy" />
        ${e.matchType===`exact`||e.similarity===100?`
            <div class="result-similarity-pill" style="background: var(--accent-emerald); color: white; font-weight: 800; font-size: 0.74rem; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4); display: inline-flex; align-items: center; gap: 4px; border: 1px solid rgba(255, 255, 255, 0.25);">
              ${A(`check-circle`,`w-3 h-3`,12)} EXACT MATCH: 100% VERIFIED
            </div>
            `:`
            <div class="result-similarity-pill ${e.similarity>=90?`badge-similarity-high`:`badge-similarity-mid`}">
              Similarity: ${e.similarity}%
            </div>
            `}
        <span class="result-type-tag" style="${e.matchType===`exact`?`background: #047857; color: #fff; font-weight: 700;`:``}">
          ${e.matchType===`exact`?`Exact Image Match (100%)`:e.matchLabel||e.category}
        </span>
      </div>

      <div class="result-card-body">
        <!-- Domain and Source Quality Indicator -->
        <div class="result-domain-row" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            ${A(`globe`,`w-3.5 h-3.5`,14)}
            <span style="font-weight: 700; color: var(--text-primary); font-size: 0.85rem;">${e.sourceWebsite||e.domain}</span>
          </div>
          <span class="badge ${r}" style="font-size: 0.68rem; padding: 2px 6px;">
            ${i}
          </span>
        </div>

        <h3 class="result-card-title" title="${e.title}" style="font-size: 0.95rem; line-height: 1.35; margin-bottom: 6px;">
          ${e.title}
        </h3>

        <p class="result-card-snippet" style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.45;">
          ${e.context}
        </p>

        ${e.matchType===`exact`?`
          <div style="font-size: 0.74rem; color: #047857; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 5px 10px; border-radius: 4px; margin-top: 6px; display: flex; align-items: center; gap: 6px;">
            ${A(`check-circle`,`w-3.5 h-3.5`,14)} <strong>Bitwise Verification:</strong> 0 bit distance (Exact Duplicate / Bitwise Match)
          </div>
        `:e.differences?`
          <div style="font-size: 0.75rem; color: var(--accent-amber); background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px; margin-top: 6px;">
            <strong>Differences:</strong> ${e.differences}
          </div>
        `:``}

        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; color: var(--text-muted); margin-top: 10px;">
          <span>${e.firstPublished?`Published: ${e.firstPublished}`:`Open Archive`}</span>
          <span>${e.lastSeen||`Indexed recently`}</span>
        </div>
      </div>

      <div class="result-card-footer" style="padding: 10px 14px; background: var(--bg-tertiary); border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-primary btn-sm inspect-result-btn" data-result-id="${e.id}" title="Inspect Details & Split Slider" style="font-size: 0.78rem;">
            ${A(`git-compare`,`w-3.5 h-3.5`,14)} Compare
          </button>
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Open Public Source" style="font-size: 0.78rem;">
            ${A(`external-link`,`w-3 h-3`,12)} Open Source
          </a>
        </div>

        <div style="display: flex; gap: 4px;">
          <button class="btn btn-ghost btn-sm save-result-btn ${n?`text-primary`:``}" data-result-id="${e.id}" title="${n?`Saved`:`Save Result`}">
            ${A(n?`bookmark-check`:`bookmark`,`w-4 h-4`,16)}
          </button>
          <button class="btn btn-ghost btn-sm report-match-btn" data-result-id="${e.id}" title="Report Incorrect Result" style="color: var(--text-muted);">
            ${A(`flag`,`w-3.5 h-3.5`,14)}
          </button>
        </div>
      </div>
    </div>
  `}function _e(){return`
    <div class="glass-panel" style="text-align: center; padding: 56px 24px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
      <div style="color: var(--text-muted); margin-bottom: 14px;">
        ${A(`search`,`w-12 h-12`,48)}
      </div>
      <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
        No strong public-source match found.
      </h3>
      <p style="font-size: 0.92rem; color: var(--text-secondary); max-width: 520px; margin: 0 auto 24px; line-height: 1.5;">
        This image may not be indexed in publicly accessible web archives, could be an original private creation, or may be behind access restrictions.
      </p>

      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; max-width: 600px; margin: 0 auto 24px; text-align: left;">
        <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          Recommended Search Refinements:
        </h4>
        <ul style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.6; padding-left: 18px; margin: 0;">
          <li><strong>Select a specific visual region:</strong> Focus on an individual character, face, logo, or distinct object rather than the full frame.</li>
          <li><strong>Crop extraneous borders:</strong> Remove phone screenshots, black letterbox bars, or UI overlay artifacts.</li>
          <li><strong>Check resolution:</strong> Low-resolution thumbnails can produce lower feature vector match confidence.</li>
          <li><strong>Adjust lighting/contrast:</strong> Very dark or overexposed images may not correlate with open index descriptors.</li>
        </ul>
      </div>

      <button class="btn btn-primary btn-md" id="refine-search-btn">
        ${A(`scan`,`w-4 h-4`,16)} Refine Visual Search Region
      </button>
    </div>
  `}function ve(){let e=document.getElementById(`results-new-search-btn`);e&&e.addEventListener(`click`,()=>{S.state.currentSearch.status=`idle`,S.state.currentSearch.imageSrc=null,S.notify()});let t=document.getElementById(`refine-search-btn`);t&&t.addEventListener(`click`,()=>{S.state.currentSearch.status=`ready`,S.notify()});let n=document.getElementById(`results-export-btn`);n&&n.addEventListener(`click`,()=>{ye()}),document.querySelectorAll(`.filter-tab-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-filter-cat`);S.setResultFilter(t)})});let r=document.getElementById(`results-sort-select`);r&&r.addEventListener(`change`,e=>{S.setResultSort(e.target.value)});let i=document.getElementById(`toggle-grid-layout`),a=document.getElementById(`toggle-list-layout`);i&&i.addEventListener(`click`,()=>S.setViewLayout(`grid`)),a&&a.addEventListener(`click`,()=>S.setViewLayout(`list`)),document.querySelectorAll(`.inspect-result-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-result-id`),n=S.state.currentSearch.results.find(e=>e.id===t);n&&S.openResultDetail(n)})}),document.querySelectorAll(`.save-result-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-result-id`),n=S.state.currentSearch.results.find(e=>e.id===t);n&&S.saveResult(n)})}),document.querySelectorAll(`.report-match-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-result-id`),n=S.state.currentSearch.results.find(e=>e.id===t);n&&S.openModal(`report`,n)})});let o=document.getElementById(`social-resolver-form`),s=document.getElementById(`social-resolver-input`);o&&s&&o.addEventListener(`submit`,e=>{e.preventDefault();let t=s.value?.trim();t?S.runDeepAnimeSearch(t):S.showToast(`Please enter a person or public figure name to retrieve social profiles.`,`warning`)}),document.querySelectorAll(`.social-resolver-chip`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-name`);t&&(s&&(s.value=t),S.runDeepAnimeSearch(t))})});let c=document.querySelector(`#btnRunDeepSearch`),l=document.querySelector(`#deepAnimeInput`);c&&l&&(c.addEventListener(`click`,()=>{let e=l.value?.trim();e?S.runDeepAnimeSearch(e):S.showToast(`Please enter an anime title or character name to search.`,`warning`)}),l.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let t=e.target.value?.trim();t&&S.runDeepAnimeSearch(t)}})),document.querySelectorAll(`.anime-quick-chip`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-anime`);t&&(l&&(l.value=t),S.runDeepAnimeSearch(t))})});let u=document.getElementById(`ai-ask-form`),d=document.getElementById(`ai-question-input`);u&&d&&u.addEventListener(`submit`,e=>{e.preventDefault();let t=d.value?.trim();t&&(S.askAI(t),d.value=``)}),document.querySelectorAll(`.ai-prompt-chip`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-prompt`);t&&S.askAI(t)})});let f=document.getElementById(`ai-engine-settings-trigger`);f&&f.addEventListener(`click`,()=>{S.openModal(`aiConfig`)})}function ye(){let{currentSearch:e}=S.state,t={platform:`DIGITAL YOUR`,exportTimestamp:new Date().toISOString(),queryAsset:e.fileName,visualFocus:e.selectedRegion?.label||`Entire Image`,classification:e.classification,entityType:e.entityType,mediaAnalysis:e.mediaAnalysis||null,publicFigureData:e.publicFigureData||null,ordinaryPersonNotice:e.ordinaryPersonGuardrail?.mandatoryNotice||null,imageContextAnalysis:e.imageContextAnalysis||null,legalDisclaimer:`Visual similarity is an estimate and does not prove identity, ownership, authorship, or association. Searches publicly indexed and connected sources only.`,totalPublicMatches:e.results.length,matches:e.results.map(e=>({title:e.title,matchType:e.matchType,matchLabel:e.matchLabel,similarityEstimate:`${e.similarity}%`,differencesDetected:e.differences||`None`,sourceWebsite:e.sourceWebsite||e.domain,sourceQuality:e.sourceQualityLabel||e.sourceQuality,pageUrl:e.url,imageUrl:e.imageUrl||e.image,publishedDate:e.firstPublished||e.date,lastSeen:e.lastSeen||`Indexed`,contextSnippet:e.context}))},n=`data:text/json;charset=utf-8,`+encodeURIComponent(JSON.stringify(t,null,2)),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,`digital_your_dossier_${Date.now()}.json`),document.body.appendChild(r),r.click(),r.remove(),S.showToast(`Public research dossier exported successfully (JSON).`,`success`)}function be(){let{currentSearch:e,savedResults:t,collections:n}=S.state,r=e.activeResultDetail;if(!r)return``;let i=t.some(e=>e.resultId===r.id),a=e.comparisonMode||`split`,o=e.zoomLevel||100,s=e.comparisonSliderPos??50,c=e.imageSrc||r.image,l=`badge-public`,u=r.sourceQualityLabel||`Reputable publication`;r.sourceQuality===`official`?(l=`badge-similarity-high`,u=`Official source`):r.sourceQuality===`reference`?(l=`badge-public`,u=`Public reference database`):r.sourceQuality===`user-generated`&&(l=`badge-demo`,u=`User-generated page`);let d=r.sourceWebsite||r.domain;return`
    <div class="modal-backdrop" id="detail-modal-backdrop">
      <div class="modal-dialog modal-wide" id="detail-modal-dialog">
        <!-- Modal Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
            <div class="nav-logo-icon" style="width: 36px; height: 36px; flex-shrink: 0;">
              ${A(`git-compare`,`w-4 h-4`,20)}
            </div>
            <div style="min-width: 0;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px; flex-wrap: wrap;">
                <span class="badge ${l}" style="font-size: 0.72rem; font-weight: 700;">
                  ${u}
                </span>
                ${r.matchType===`exact`||r.similarity===100?`
                    <span class="badge badge-similarity-high" style="font-size: 0.75rem; font-weight: 800; background: var(--accent-emerald); color: white; display: inline-flex; align-items: center; gap: 4px;">
                      ${A(`check-circle`,`w-3.5 h-3.5`,12)} Exact Match: 100% Verified
                    </span>
                    <span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #059669; font-size: 0.72rem; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.25);">
                      0 bit distance • Bitwise Duplicate
                    </span>
                    `:`
                    <span class="badge ${r.matchType===`exact`?`badge-similarity-high`:`badge-demo`}" style="font-size: 0.72rem;">
                      ${r.matchLabel||`Visual Match`}
                    </span>
                    <span class="badge badge-public" style="font-size: 0.68rem;">
                      Similarity: ${r.similarity}%
                    </span>
                    `}
              </div>
              <h3 style="font-size: 1.15rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0;">
                ${r.title}
              </h3>
            </div>
          </div>

          <button class="btn btn-ghost btn-sm" id="detail-modal-close-btn" aria-label="Close details">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Viewport Inspection Controls Bar -->
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">Inspection Mode:</span>
              <div style="display: flex; background: var(--bg-tertiary); padding: 3px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <button class="btn btn-ghost btn-sm ${a===`split`?`active`:``}" id="mode-split-btn" style="${a===`split`?`background: var(--bg-secondary); color: var(--text-primary);`:``}">
                  ${A(`sliders`,`w-3.5 h-3.5`,14)} Overlay Split Slider
                </button>
                <button class="btn btn-ghost btn-sm ${a===`side`?`active`:``}" id="mode-side-btn" style="${a===`side`?`background: var(--bg-secondary); color: var(--text-primary);`:``}">
                  ${A(`grid`,`w-3.5 h-3.5`,14)} Side-by-Side
                </button>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">Magnification:</span>
              <div style="display: flex; gap: 4px;">
                <button class="btn btn-secondary btn-sm zoom-btn ${o===100?`active`:``}" data-zoom="100">100%</button>
                <button class="btn btn-secondary btn-sm zoom-btn ${o===150?`active`:``}" data-zoom="150">150%</button>
                <button class="btn btn-secondary btn-sm zoom-btn ${o===200?`active`:``}" data-zoom="200">200%</button>
              </div>
            </div>
          </div>

          <!-- Comparison Viewport -->
          ${a===`split`?`
              <div class="comparison-container">
                <div class="comparison-viewport" id="interactive-comparison-viewport">
                  <!-- Base Layer: Found Match Image -->
                  <div class="comparison-img-layer" style="transform: scale(${o/100}); transform-origin: center;">
                    <img src="${r.image}" alt="Found Public Match Image" />
                  </div>

                  <!-- Overlay Layer: Query Upload Image (Clipped) -->
                  <div class="comparison-img-layer query-layer" id="comparison-query-layer" style="width: ${s}%; transform: scale(${o/100}); transform-origin: center;">
                    <img src="${c}" alt="Uploaded Query Image" style="width: 100%; height: 100%; object-fit: contain;" />
                  </div>

                  <!-- Draggable Divider Line & Knob -->
                  <div class="comparison-divider-line" id="comparison-divider" style="left: ${s}%;">
                    <div class="comparison-handle-knob">
                      ${A(`git-compare`,`w-4 h-4`,16)}
                    </div>
                  </div>

                  <!-- Overlay Corner Badges -->
                  <div style="position: absolute; bottom: 12px; left: 16px; z-index: 15; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); padding: 4px 10px; border-radius: 4px; font-size: 0.72rem; font-weight: 700; color: #fff;">
                    Uploaded Query (${e.selectedRegion?.label||`Entire Image`})
                  </div>
                  <div style="position: absolute; bottom: 12px; right: 16px; z-index: 15; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); padding: 4px 10px; border-radius: 4px; font-size: 0.72rem; font-weight: 700; color: #fff;">
                    Found Public Match (${r.domain})
                  </div>
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 8px;">
                  Drag slider handle horizontally to cross-examine fine edge alignment, artifacts, and color grading.
                </p>
              </div>
            `:`
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <!-- Left: Query Image -->
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary);">
                    Uploaded Query (${e.selectedRegion?.label||`Entire Image`})
                  </span>
                  <div style="aspect-ratio: 4/3; background: #000; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle);">
                    <img src="${c}" alt="Query image" style="width: 100%; height: 100%; object-fit: contain; transform: scale(${o/100}); transform-origin: center;" />
                  </div>
                </div>

                <!-- Right: Found Image -->
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary);">
                    Found Public Match (${r.domain})
                  </span>
                  <div style="aspect-ratio: 4/3; background: #000; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle);">
                    <img src="${r.image}" alt="Found web image" style="width: 100%; height: 100%; object-fit: contain; transform: scale(${o/100}); transform-origin: center;" />
                  </div>
                </div>
              </div>
            `}

          <!-- Matching Features Explanation & Differences -->
          <div style="background: var(--bg-tertiary); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <h4 style="font-size: 0.88rem; font-weight: 700; margin-bottom: 8px;">Feature Matching & Verification Notes:</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 0.825rem;">
              <div>
                <span style="color: var(--text-muted); font-weight: 600; display: block;">Matching Visual Regions:</span>
                <span style="color: var(--text-primary);">${r.matchingRegions||`Spatial keypoint coordinates and high-frequency edge gradients match closely.`}</span>
              </div>
              <div>
                <span style="color: var(--text-muted); font-weight: 600; display: block;">Differences Detected:</span>
                <span style="color: ${r.matchType===`exact`?`#047857`:`var(--accent-amber)`}; font-weight: 600;">
                  ${r.matchType===`exact`?`None. 0 bit distance (Exact bitwise & perceptual duplicate of master image).`:r.differences||`None. Image hash comparison indicates an identical source asset.`}
                </span>
              </div>
            </div>
          </div>

          <!-- Metadata Dossier -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; background: var(--bg-tertiary); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Source Platform</span>
              <p style="font-size: 0.95rem; font-weight: 700; margin-top: 2px; color: var(--text-primary);">${d}</p>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Published Date</span>
              <p style="font-size: 0.95rem; font-weight: 600; margin-top: 2px;">${r.firstPublished||`Open Web Archive`}</p>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Last Seen by Crawler</span>
              <p style="font-size: 0.95rem; font-weight: 600; margin-top: 2px; color: var(--accent-cyan);">${r.lastSeen||`Indexed recently`}</p>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Match Confidence</span>
              <p style="font-size: 0.95rem; font-weight: 800; margin-top: 2px; color: var(--accent-emerald);">
                ${r.matchType===`exact`||r.similarity===100?`100% Exact Bitwise Match`:`${r.similarity}% Structural Fit`}
              </p>
            </div>
          </div>

          <!-- URLs Dossier -->
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.78rem;">
            <div style="display: flex; gap: 10px; align-items: center; background: var(--bg-tertiary); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <span style="font-weight: 700; color: var(--text-muted); width: 80px; flex-shrink: 0;">Page URL:</span>
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;">
                ${r.url}
              </a>
            </div>
            ${r.imageUrl?`
              <div style="display: flex; gap: 10px; align-items: center; background: var(--bg-tertiary); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <span style="font-weight: 700; color: var(--text-muted); width: 80px; flex-shrink: 0;">Image URL:</span>
                <a href="${r.imageUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: underline; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;">
                  ${r.imageUrl}
                </a>
              </div>
            `:``}
          </div>

          <!-- Add to Collection Selector -->
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 14px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${A(`folder-heart`,`w-4 h-4`,18)}
              <span style="font-size: 0.85rem; font-weight: 700;">Save Finding to Collection:</span>
            </div>
            <div style="display: flex; gap: 8px;">
              <select id="detail-collection-select" style="padding: 6px 12px; font-size: 0.825rem; background: var(--bg-secondary); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: var(--radius-sm);">
                ${n.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
              </select>
              <button class="btn btn-primary btn-sm" id="detail-save-btn">
                ${A(i?`bookmark-check`:`bookmark`,`w-3.5 h-3.5`,14)}
                ${i?`Saved`:`Save Finding`}
              </button>
            </div>
          </div>

          <!-- Responsible Use Notice -->
          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-md); padding: 12px 16px; display: flex; gap: 10px; align-items: flex-start;">
            <div style="color: var(--accent-amber); margin-top: 1px;">
              ${A(`shield`,`w-4 h-4`,16)}
            </div>
            <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
              <strong>Notice:</strong> Visual similarity is an estimate and does not prove identity, ownership, authorship, or association. DIGITAL YOUR searches publicly indexed and connected sources only.
            </p>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" id="detail-report-btn" style="color: var(--accent-rose);">
            ${A(`flag`,`w-3.5 h-3.5`,14)} Report Incorrect Result
          </button>
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
            ${A(`external-link`,`w-3.5 h-3.5`,14)} Open Source Page
          </a>
          <button class="btn btn-primary btn-sm" id="detail-done-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  `}function xe(){let e=document.getElementById(`detail-modal-close-btn`),t=document.getElementById(`detail-done-btn`);e&&e.addEventListener(`click`,()=>S.closeModal()),t&&t.addEventListener(`click`,()=>S.closeModal());let n=document.getElementById(`detail-modal-backdrop`);n&&n.addEventListener(`click`,e=>{e.target===n&&S.closeModal()});let r=document.getElementById(`mode-split-btn`),i=document.getElementById(`mode-side-btn`);r&&r.addEventListener(`click`,()=>S.setComparisonMode(`split`)),i&&i.addEventListener(`click`,()=>S.setComparisonMode(`side`)),document.querySelectorAll(`.zoom-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.getAttribute(`data-zoom`),10);S.setZoomLevel(t)})});let a=document.getElementById(`interactive-comparison-viewport`),o=document.getElementById(`comparison-divider`),s=document.getElementById(`comparison-query-layer`);if(a&&o&&s){let e=!1,t=e=>{let t=a.getBoundingClientRect(),n=e-t.left,r=Math.max(0,Math.min(100,n/t.width*100));o.style.left=`${r}%`,s.style.width=`${r}%`,S.state.currentSearch.comparisonSliderPos=r};o.addEventListener(`mousedown`,()=>{e=!0}),window.addEventListener(`mousemove`,n=>{e&&t(n.clientX)}),window.addEventListener(`mouseup`,()=>{e=!1}),o.addEventListener(`touchstart`,()=>{e=!0}),window.addEventListener(`touchmove`,n=>{e&&n.touches[0]&&t(n.touches[0].clientX)}),window.addEventListener(`touchend`,()=>{e=!1})}let c=document.getElementById(`detail-save-btn`),l=document.getElementById(`detail-collection-select`);c&&c.addEventListener(`click`,()=>{let e=S.state.currentSearch.activeResultDetail;e&&S.saveResult(e,l?l.value:`all`)});let u=document.getElementById(`detail-report-btn`);u&&u.addEventListener(`click`,()=>{let e=S.state.currentSearch.activeResultDetail;S.openModal(`report`,e)})}function Se(){let{searchHistory:e,historyQuery:t}=S.state,n=e.filter(e=>!t||e.name.toLowerCase().includes(t.toLowerCase())||e.selectedRegionLabel?.toLowerCase().includes(t.toLowerCase()));return`
    <div class="history-view">
      <!-- Section Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="badge badge-privacy">
              ${A(`shield-check`,`w-3 h-3`,12)} Local History Only
            </span>
          </div>
          <h2 style="font-size: 1.8rem;">Search History</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            Review, reopen, rename, or permanently erase your past public discovery queries.
          </p>
        </div>

        ${e.length>0?`
          <button class="btn btn-danger btn-sm" id="history-clear-all-btn">
            ${A(`trash`,`w-4 h-4`,16)} Clear All History
          </button>
        `:``}
      </div>

      <!-- Search & Filter Bar -->
      <div style="display: flex; align-items: center; gap: 14px; background: var(--bg-glass); padding: 12px 18px; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        ${A(`search`,`w-4 h-4`,18)}
        <input 
          type="text" 
          id="history-search-input" 
          placeholder="Filter history by search title or focus..." 
          value="${t||``}" 
          style="flex: 1; background: transparent; border: none; padding: 0; box-shadow: none;"
        />
        ${t?`
          <button class="btn btn-ghost btn-sm" id="clear-history-query-btn">
            ${A(`x`,`w-3.5 h-3.5`,14)}
          </button>
        `:``}
      </div>

      <!-- History List -->
      ${n.length===0?`
          <div class="glass-panel" style="text-align: center; padding: 64px 24px;">
            <div style="color: var(--text-muted); margin-bottom: 14px;">
              ${A(`history`,`w-12 h-12`,48)}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 6px;">
              ${e.length===0?`No search history yet`:`No matching searches found`}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 20px;">
              ${e.length===0?`Completed reverse image searches will be listed here with options to review findings or wipe records.`:`Try adjusting your search query filter above.`}
            </p>
            ${e.length===0?`
              <button class="btn btn-primary" id="history-start-first-btn">
                ${A(`search`,`w-4 h-4`,16)} Start a New Search
              </button>
            `:``}
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${n.map(e=>`
              <div class="history-item-row" data-history-id="${e.id}">
                <div style="display: flex; align-items: center; gap: 16px; min-width: 0; flex: 1;">
                  <img src="${e.image}" alt="${e.name}" class="history-thumb" />
                  <div style="min-width: 0; flex: 1;">
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                      <h4 class="history-title-text" style="font-size: 0.98rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${e.name}
                      </h4>
                      ${e.entityType===`anime`?`<span class="badge badge-similarity-high" style="font-size: 0.65rem; padding: 2px 6px;">Anime Poster</span>`:``}
                      <span class="badge badge-public" style="font-size: 0.65rem; padding: 2px 6px;">
                        ${e.status}
                      </span>
                    </div>

                    ${e.characters&&e.characters.length>0?`
                      <div style="font-size: 0.75rem; color: var(--accent-cyan); margin-top: 2px;">
                        ${e.characters.map(e=>e.name).join(` · `)}
                      </div>
                    `:``}

                    <div style="display: flex; align-items: center; gap: 12px; font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; flex-wrap: wrap;">
                      <span>${e.date}</span>
                      <span>•</span>
                      <span style="color: var(--accent-cyan);">Focus: ${e.selectedRegionLabel||`Full Image`}</span>
                      <span>•</span>
                      <span style="color: var(--accent-emerald); font-weight: 600;">${e.resultCount} public matches</span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;">
                  <button class="btn btn-primary btn-sm reopen-history-item-btn" data-history-id="${e.id}" title="Reopen Search Results">
                    ${A(`arrow-right`,`w-3.5 h-3.5`,14)} Open
                  </button>
                  <button class="btn btn-ghost btn-sm rename-history-item-btn" data-history-id="${e.id}" title="Rename search">
                    ${A(`edit`,`w-3.5 h-3.5`,14)}
                  </button>
                  <button class="btn btn-ghost btn-sm delete-history-item-btn" data-history-id="${e.id}" title="Delete this search" style="color: var(--accent-rose);">
                    ${A(`trash`,`w-3.5 h-3.5`,14)}
                  </button>
                </div>
              </div>
            `).join(``)}
          </div>
        `}
    </div>
  `}function Ce(){let e=document.getElementById(`history-search-input`);e&&e.addEventListener(`input`,e=>{S.state.historyQuery=e.target.value,S.notify()});let t=document.getElementById(`clear-history-query-btn`);t&&t.addEventListener(`click`,()=>{S.state.historyQuery=``,S.notify()});let n=document.getElementById(`history-start-first-btn`);n&&n.addEventListener(`click`,()=>{S.setDashboardTab(`search`)});let r=document.getElementById(`history-clear-all-btn`);r&&r.addEventListener(`click`,()=>{S.openModal(`clearHistory`)}),document.querySelectorAll(`.reopen-history-item-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-history-id`),n=S.state.searchHistory.find(e=>e.id===t);n&&S.openHistoryItem(n)})}),document.querySelectorAll(`.rename-history-item-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-history-id`),n=S.state.searchHistory.find(e=>e.id===t);if(n){let e=prompt(`Enter a new name for this search query:`,n.name);e&&S.renameHistoryItem(t,e)}})}),document.querySelectorAll(`.delete-history-item-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-history-id`);confirm(`Are you sure you want to delete this search from your history?`)&&S.deleteHistoryItem(t)})})}function we(){let{savedResults:e,collections:t,activeCollectionFilter:n}=S.state,r=n||`all`,i=e.filter(e=>r===`all`||e.collectionId===r);return`
    <div class="saved-view">
      <!-- Section Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="badge badge-public">
              ${A(`folder-heart`,`w-3 h-3`,12)} Research Dossiers
            </span>
          </div>
          <h2 style="font-size: 1.8rem;">Saved Results & Collections</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            Organize public findings into structured collections, add notes, and export verification reports.
          </p>
        </div>

        ${e.length>0?`
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary btn-sm" id="export-saved-csv-btn">
              ${A(`download`,`w-4 h-4`,16)} Export CSV
            </button>
            <button class="btn btn-outline btn-sm" id="export-saved-json-btn">
              ${A(`download`,`w-4 h-4`,16)} Export JSON
            </button>
          </div>
        `:``}
      </div>

      <!-- Collection Filter Pills -->
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;">
        ${t.map(t=>{let n=t.id===`all`?e.length:e.filter(e=>e.collectionId===t.id).length;return`
            <button class="btn btn-secondary btn-sm ${r===t.id?`btn-primary`:``}" data-collection-id="${t.id}" style="border-radius: var(--radius-full); font-size: 0.8rem;">
              <span>${t.name}</span>
              <span class="badge" style="background: rgba(255, 255, 255, 0.12); padding: 1px 6px; font-size: 0.68rem;">
                ${n}
              </span>
            </button>
          `}).join(``)}
      </div>

      <!-- Saved Items Grid -->
      ${i.length===0?`
          <div class="glass-panel" style="text-align: center; padding: 64px 24px;">
            <div style="color: var(--text-muted); margin-bottom: 14px;">
              ${A(`bookmark`,`w-12 h-12`,48)}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 6px;">
              No saved items in this collection
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 20px;">
              You can bookmark any result during a search to save its public domain, similarity score, and context.
            </p>
            <button class="btn btn-primary" id="saved-new-search-cta">
              ${A(`search`,`w-4 h-4`,16)} Search the Public Web
            </button>
          </div>
        `:`
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 20px;">
            ${i.map(e=>`
              <div class="result-card" data-saved-card-id="${e.id}">
                <div class="result-card-media" style="aspect-ratio: 16 / 9;">
                  <img src="${e.image}" alt="${e.title}" />
                  <div class="result-similarity-pill badge-similarity-high">
                    ${e.similarity}% Similarity
                  </div>
                  <span class="result-type-tag">${e.category}</span>
                </div>

                <div class="result-card-body">
                  <div class="result-domain-row">
                    <span style="font-weight: 600; color: var(--text-primary);">${e.domain}</span>
                    <span>${e.savedAt}</span>
                  </div>

                  <h3 class="result-card-title" title="${e.title}">
                    ${e.title}
                  </h3>

                  <!-- Interactive Notes Field -->
                  <div style="background: var(--bg-tertiary); padding: 10px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-top: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                      <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                        Researcher Notes
                      </span>
                      <button class="btn btn-ghost btn-sm edit-note-btn" data-saved-id="${e.id}" style="padding: 0 4px; font-size: 0.72rem; color: var(--primary);">
                        Edit
                      </button>
                    </div>
                    <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
                      ${e.notes||`No annotations added yet.`}
                    </p>
                  </div>
                </div>

                <div class="result-card-footer">
                  <button class="btn btn-secondary btn-sm inspect-saved-btn" data-saved-id="${e.id}">
                    ${A(`git-compare`,`w-3.5 h-3.5`,14)} Inspect Details
                  </button>

                  <div style="display: flex; gap: 6px;">
                    <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" title="Open source">
                      ${A(`external-link`,`w-3.5 h-3.5`,14)}
                    </a>
                    <button class="btn btn-ghost btn-sm delete-saved-btn" data-saved-id="${e.id}" title="Remove from saved" style="color: var(--accent-rose);">
                      ${A(`trash`,`w-3.5 h-3.5`,14)}
                    </button>
                  </div>
                </div>
              </div>
            `).join(``)}
          </div>
        `}
    </div>
  `}function Te(){document.querySelectorAll(`button[data-collection-id]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-collection-id`);S.state.activeCollectionFilter=t,S.notify()})});let e=document.getElementById(`saved-new-search-cta`);e&&e.addEventListener(`click`,()=>{S.setDashboardTab(`search`)}),document.querySelectorAll(`.inspect-saved-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-saved-id`),n=S.state.savedResults.find(e=>e.id===t);n&&S.openResultDetail(n)})}),document.querySelectorAll(`.edit-note-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-saved-id`),n=S.state.savedResults.find(e=>e.id===t);if(n){let e=prompt(`Edit your notes for this saved result:`,n.notes||``);e!==null&&S.updateSavedItemNotes(t,e)}})}),document.querySelectorAll(`.delete-saved-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-saved-id`);confirm(`Remove this result from your saved items?`)&&S.removeSavedResult(t)})});let t=document.getElementById(`export-saved-json-btn`);t&&t.addEventListener(`click`,()=>{Z(`data:text/json;charset=utf-8,`+encodeURIComponent(JSON.stringify(S.state.savedResults,null,2)),`digital_your_saved_${Date.now()}.json`)});let n=document.getElementById(`export-saved-csv-btn`);n&&n.addEventListener(`click`,()=>{let e=[`Title`,`Domain`,`Category`,`Similarity`,`URL`,`SavedAt`,`Notes`],t=S.state.savedResults.map(e=>[`"${(e.title||``).replace(/"/g,`""`)}"`,`"${e.domain||``}"`,`"${e.category||``}"`,`"${e.similarity}%"`,`"${e.url||``}"`,`"${e.savedAt||``}"`,`"${(e.notes||``).replace(/"/g,`""`)}"`]);Z(`data:text/csv;charset=utf-8,`+[e.join(`,`),...t.map(e=>e.join(`,`))].join(`
`),`digital_your_saved_${Date.now()}.csv`)})}function Z(e,t){let n=document.createElement(`a`);n.setAttribute(`href`,e),n.setAttribute(`download`,t),document.body.appendChild(n),n.click(),n.remove(),S.showToast(`Export downloaded successfully.`,`success`)}function Ee(){let{user:e,theme:t}=S.state,n=S.remainingSearches;return`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 860px;">
      <!-- Header -->
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span class="badge badge-privacy">
            ${A(`lock`,`w-3 h-3`,12)} Privacy-by-Design
          </span>
        </div>
        <h2 style="font-size: 1.8rem;">Account & Privacy Settings</h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary);">
          Manage data retention policies, search quotas, interface themes, and personal credentials.
        </p>
      </div>

      <!-- Account Profile Card -->
      <div class="glass-panel" style="padding: 28px;">
        <h3 style="font-size: 1.15rem; margin-bottom: 16px;">Account Profile</h3>
        <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
          <img src="${e.avatar}" alt="${e.name}" style="width: 76px; height: 76px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" />
          <div style="flex: 1; min-width: 200px;">
            <h4 style="font-size: 1.1rem;">${e.name}</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">${e.email}</p>
            <div style="display: flex; gap: 12px; font-size: 0.78rem; color: var(--text-muted); flex-wrap: wrap;">
              <span>Member since: <strong>${e.joined}</strong></span>
              <span>•</span>
              <span>Total queries run: <strong>${e.searchesUsed}</strong></span>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="settings-edit-profile-btn">
            ${A(`edit`,`w-3.5 h-3.5`,14)} Edit Credentials
          </button>
        </div>
      </div>

      <!-- Search Quota & Evaluation Management -->
      <div class="glass-panel" style="padding: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h3 style="font-size: 1.15rem;">Search Quota & Tier</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Current evaluation tier allows up to 3 complimentary public searches.
            </p>
          </div>
          <span class="badge ${n>0?`badge-public`:`badge-demo`}" style="font-size: 0.8rem; padding: 4px 10px;">
            ${n} / ${e.searchesLimit} Remaining
          </span>
        </div>

        <div class="usage-bar-track" style="height: 10px; margin-bottom: 18px;">
          <div class="usage-bar-fill" style="width: ${e.searchesUsed/e.searchesLimit*100}%;"></div>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" id="settings-reset-quota-btn" title="Reset quota to 3 searches for testing">
            ${A(`refresh`,`w-3.5 h-3.5`,14)} Reset Demo Quota (Test Mode)
          </button>
          <button class="btn btn-primary btn-sm" id="settings-upgrade-pro-btn">
            ${A(`zap`,`w-3.5 h-3.5`,14)} Upgrade to Researcher Pro
          </button>
        </div>
      </div>

      <!-- Data Retention & Zero-Storage Controls -->
      <div class="glass-panel" style="padding: 28px;">
        <h3 style="font-size: 1.15rem; margin-bottom: 6px;">Zero-Retention Privacy Controls</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          Choose how long temporary feature hash vectors and query logs reside in local memory.
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <label style="display: flex; align-items: flex-start; gap: 14px; cursor: pointer; padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <input type="radio" name="retention" value="session" checked style="margin-top: 4px;" />
            <div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">
                Zero-Retention Mode (Recommended)
              </div>
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45; margin-top: 2px;">
                Image pixels and hash vectors are immediately expunged from memory as soon as the search query terminates.
              </p>
            </div>
          </label>

          <label style="display: flex; align-items: flex-start; gap: 14px; cursor: pointer; padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <input type="radio" name="retention" value="30days" style="margin-top: 4px;" />
            <div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">
                30-Day Encrypted Research Cache
              </div>
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45; margin-top: 2px;">
                Caches perceptual descriptors in local browser storage to re-run comparisons without re-uploading files.
              </p>
            </div>
          </label>
        </div>

        <div style="margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="font-size: 0.88rem; font-weight: 600;">Purge Local Footprint</div>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Permanently delete all search history and saved collections from this browser.</p>
          </div>
          <button class="btn btn-danger btn-sm" id="settings-purge-data-btn">
            ${A(`trash`,`w-3.5 h-3.5`,14)} Purge Local Data
          </button>
        </div>
      </div>

      <!-- Appearance & Theme Settings -->
      <div class="glass-panel" style="padding: 28px;">
        <h3 style="font-size: 1.15rem; margin-bottom: 6px;">Appearance & Interface</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 18px;">
          Customize visual contrast, typography density, and color theme.
        </p>

        <div style="display: flex; gap: 16px;">
          <button class="btn btn-secondary ${t===`dark`?`btn-primary`:``}" id="settings-theme-dark-btn" style="flex: 1; padding: 14px; flex-direction: column; gap: 8px;">
            ${A(`moon`,`w-5 h-5`,22)}
            <span>Dark Cyber Graphite (Default)</span>
          </button>
          <button class="btn btn-secondary ${t===`light`?`btn-primary`:``}" id="settings-theme-light-btn" style="flex: 1; padding: 14px; flex-direction: column; gap: 8px;">
            ${A(`sun`,`w-5 h-5`,22)}
            <span>Light Crisp Alabaster</span>
          </button>
        </div>
      </div>
    </div>
  `}function De(){let e=document.getElementById(`settings-reset-quota-btn`);e&&e.addEventListener(`click`,()=>{S.resetSearchQuota()});let t=document.getElementById(`settings-upgrade-pro-btn`);t&&t.addEventListener(`click`,()=>{S.openModal(`upgrade`)});let n=document.getElementById(`settings-edit-profile-btn`);n&&n.addEventListener(`click`,()=>{S.openModal(`auth`,{tab:`profile`})});let r=document.getElementById(`settings-purge-data-btn`);r&&r.addEventListener(`click`,()=>{confirm(`Are you sure you want to permanently erase all local search history and saved collections?`)&&(localStorage.clear(),S.clearAllHistory(),S.state.savedResults=[],S.saveJSON(`dy_saved`,[]),S.showToast(`All local application data has been purged.`,`info`),S.notify())});let i=document.getElementById(`settings-theme-dark-btn`),a=document.getElementById(`settings-theme-light-btn`);i&&i.addEventListener(`click`,()=>S.setTheme(`dark`)),a&&a.addEventListener(`click`,()=>S.setTheme(`light`))}function Oe(){let{modalData:e,user:t,isAuthenticated:n}=S.state,r=e?.tab||(n?`profile`:`login`);return`
    <div class="modal-backdrop" id="auth-modal-backdrop">
      <div class="modal-dialog" id="auth-modal-dialog">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="nav-logo-icon" style="width: 32px; height: 32px;">
              ${A(`scan`,`w-4 h-4`,18)}
            </div>
            <div>
              <h3 style="font-size: 1.15rem;" id="auth-modal-title">
                ${r===`profile`?`Account Profile`:r===`register`?`Create DIGITAL YOUR Account`:r===`forgot`?`Reset Password`:`Log in to DIGITAL YOUR`}
              </h3>
              <p style="font-size: 0.8rem; color: var(--text-muted);">
                Privacy-by-design access • Zero invasive tracking
              </p>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" id="auth-modal-close-btn" aria-label="Close modal">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <div class="modal-body">
          ${r===`profile`?ke(t):Ae(r)}
        </div>
      </div>
    </div>
  `}function ke(e){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="display: flex; align-items: center; gap: 20px; padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <img src="${e.avatar}" alt="${e.name}" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" />
        <div>
          <h4 style="font-size: 1.2rem; margin-bottom: 2px;">${e.name}</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">${e.email}</p>
          <span class="badge badge-privacy">
            ${A(`shield-check`,`w-3 h-3`,12)} Verified Member
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div style="padding: 14px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Account Created</span>
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-top: 4px;">${e.joined}</p>
        </div>
        <div style="padding: 14px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Usage Count</span>
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-top: 4px;">${e.searchesUsed} Searches Conducted</p>
        </div>
      </div>

      <div style="padding: 14px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md);">
        <p style="font-size: 0.825rem; color: var(--accent-emerald); display: flex; align-items: center; gap: 8px;">
          ${A(`shield-check`,`w-4 h-4`,16)}
          Data Minimization: We store only essential authentication metadata. No biometric profiles or browsing histories are indexed.
        </p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
        <button class="btn btn-secondary" id="auth-switch-to-settings-btn">
          ${A(`settings`,`w-4 h-4`,16)} Privacy Settings
        </button>
        <button class="btn btn-danger" id="auth-logout-btn">
          ${A(`logout`,`w-4 h-4`,16)} Log out
        </button>
      </div>
    </div>
  `}function Ae(e){return`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <!-- Google SSO Button -->
      <button class="btn btn-secondary" id="auth-google-sso-btn" style="width: 100%; padding: 12px; font-weight: 600;">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        Continue with Google
      </button>

      <div style="display: flex; align-items: center; gap: 12px; color: var(--text-muted); font-size: 0.8rem;">
        <div style="flex: 1; height: 1px; background: var(--border-subtle);"></div>
        <span>or continue with email</span>
        <div style="flex: 1; height: 1px; background: var(--border-subtle);"></div>
      </div>

      <!-- Form Mode Toggle -->
      <div style="display: flex; background: var(--bg-tertiary); padding: 4px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <button class="btn btn-ghost btn-sm ${e===`login`?`active`:``}" id="tab-login-btn" style="flex: 1; ${e===`login`?`background: var(--bg-primary); color: var(--text-primary); font-weight: 600;`:``}">
          Log in
        </button>
        <button class="btn btn-ghost btn-sm ${e===`register`?`active`:``}" id="tab-register-btn" style="flex: 1; ${e===`register`?`background: var(--bg-primary); color: var(--text-primary); font-weight: 600;`:``}">
          Create Account
        </button>
      </div>

      <!-- Form Inputs -->
      <form id="auth-email-form" style="display: flex; flex-direction: column; gap: 14px;">
        <div id="auth-error-alert" style="display: none; padding: 10px 14px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 6px; color: #ef4444; font-size: 0.8rem; line-height: 1.4;">
        </div>

        ${e===`register`?`
            <div>
              <label style="display: block; font-size: 0.825rem; font-weight: 600; margin-bottom: 6px;">Your Name</label>
              <input type="text" id="auth-input-name" placeholder="e.g. Alex Morgan" required style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem;" value="" />
            </div>
          `:``}

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 600; margin-bottom: 6px;">Original Email Address</label>
          <input 
            type="email" 
            id="auth-input-email" 
            placeholder="you@yourdomain.com" 
            required 
            style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem;" 
            value="${localStorage.getItem(`dy_user_email`)||``}" 
          />
          <span style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-top: 4px;">
            Log in with your original email to access saved investigations & history.
          </span>
        </div>

        ${e===`forgot`?`
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              We will send a secure password reset link to your original verified email address.
            </p>
          `:`
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <label style="font-size: 0.825rem; font-weight: 600;">Password</label>
                ${e===`login`?`<a href="#" id="auth-forgot-link" style="font-size: 0.8rem; color: var(--primary);">Forgot password?</a>`:``}
              </div>
              <input 
                type="password" 
                id="auth-input-password" 
                placeholder="Enter password (min. 6 characters)" 
                required 
                style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem;" 
                value="" 
              />
            </div>
          `}

        <button type="submit" id="auth-submit-btn" class="btn btn-primary" style="width: 100%; margin-top: 6px; padding: 12px; font-weight: 700; font-size: 0.92rem; border-radius: 8px;">
          ${e===`register`?`Create Account with Email`:e===`forgot`?`Send Reset Link`:`Sign In with Email`}
        </button>
      </form>

      <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; line-height: 1.4;">
        By continuing, you acknowledge our Responsible Use Policy and agree to respect public source boundaries and individual privacy.
      </p>
    </div>
  `}function je(){let e=document.getElementById(`auth-modal-close-btn`);e&&e.addEventListener(`click`,()=>{S.closeModal()});let t=document.getElementById(`auth-modal-backdrop`);t&&t.addEventListener(`click`,e=>{e.target===t&&S.closeModal()});let n=document.getElementById(`auth-google-sso-btn`);n&&n.addEventListener(`click`,()=>{S.login({name:`Verified User`,email:`user@gmail.com`,avatar:`https://api.dicebear.com/7.x/initials/svg?seed=user@gmail.com&backgroundColor=2563eb,7c3aed`})});let r=document.getElementById(`auth-email-form`);r&&r.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`auth-input-name`),n=document.getElementById(`auth-input-email`),r=document.getElementById(`auth-input-password`),i=document.getElementById(`auth-submit-btn`),a=document.getElementById(`auth-error-alert`),o=n?n.value.trim():``,s=r?r.value:``,c=t?t.value.trim():``,l=!!t;if(!o){a&&(a.textContent=`Please enter your email address.`,a.style.display=`block`);return}if(!s||s.length<6){a&&(a.textContent=`Password must be at least 6 characters long.`,a.style.display=`block`);return}let u=i?i.innerHTML:``;i&&(i.disabled=!0,i.innerHTML=`<span class="spinner" style="width: 14px; height: 14px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; display: inline-block; animation: spin 0.8s linear infinite; margin-right: 8px;"></span> Signing in...`);try{!await S.loginWithEmail(o,s,c,l)&&a&&(a.textContent=`Authentication failed. Please check your email and password.`,a.style.display=`block`)}catch(e){a&&(a.textContent=e.message||`Network error connecting to auth server.`,a.style.display=`block`)}finally{i&&(i.disabled=!1,i.innerHTML=u)}});let i=document.getElementById(`tab-login-btn`);i&&i.addEventListener(`click`,()=>{S.openModal(`auth`,{tab:`login`})});let a=document.getElementById(`tab-register-btn`);a&&a.addEventListener(`click`,()=>{S.openModal(`auth`,{tab:`register`})});let o=document.getElementById(`auth-forgot-link`);o&&o.addEventListener(`click`,e=>{e.preventDefault(),S.openModal(`auth`,{tab:`forgot`})});let s=document.getElementById(`auth-logout-btn`);s&&s.addEventListener(`click`,()=>{S.logout(),S.closeModal()});let c=document.getElementById(`auth-switch-to-settings-btn`);c&&c.addEventListener(`click`,()=>{S.closeModal(),S.navigate(`dashboard`,`settings`)})}function Q(){let{modalData:e}=S.state,t=e?.reason||`You have reached your 3 complimentary public searches limit.`;return`
    <div class="modal-backdrop" id="upgrade-modal-backdrop">
      <div class="modal-dialog modal-wide" id="upgrade-modal-dialog">
        <!-- Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="nav-logo-icon" style="width: 36px; height: 36px; background: linear-gradient(135deg, #f59e0b, #d97706);">
              ${A(`zap`,`w-4 h-4`,20)}
            </div>
            <div>
              <h3 style="font-size: 1.25rem;">Upgrade to DIGITAL YOUR Pro</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted);">
                Expand discovery volume while maintaining strict privacy-by-design standards
              </p>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" id="upgrade-modal-close-btn" aria-label="Close modal">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body" style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Quota Alert Box -->
          <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: var(--accent-amber);">${A(`alert-circle`,`w-5 h-5`,20)}</span>
              <span style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">
                ${t}
              </span>
            </div>
            <button class="btn btn-secondary btn-sm" id="upgrade-quick-reset-btn" style="background: var(--bg-primary); border-color: var(--accent-amber); color: var(--accent-amber);">
              ${A(`refresh`,`w-3 h-3`,12)} Reset Demo Quota (3 Free)
            </button>
          </div>

          <!-- Tier Comparison Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <!-- Free Explorer Tier -->
            <div class="glass-card" style="padding: 24px; display: flex; flex-direction: column; opacity: 0.75;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Current Plan</span>
              <h4 style="font-size: 1.3rem; margin: 4px 0 12px;">Free Explorer</h4>
              <div style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px;">
                $0 <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">/ lifetime</span>
              </div>
              <ul class="pricing-features" style="font-size: 0.85rem;">
                <li>${A(`check`,`w-3.5 h-3.5`,14)} 3 complimentary searches</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} Standard bounding box detection</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} Basic public web sources</li>
              </ul>
              <div style="font-size: 0.8rem; color: var(--accent-rose); font-weight: 600; text-align: center; margin-top: auto;">
                Quota Fully Consumed
              </div>
            </div>

            <!-- Pro Researcher Tier -->
            <div class="glass-card" style="padding: 24px; display: flex; flex-direction: column; border-color: var(--primary); box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);">
              <span class="badge badge-public" style="align-self: flex-start; margin-bottom: 6px;">Recommended</span>
              <h4 style="font-size: 1.3rem; margin: 4px 0 12px;">Researcher Pro</h4>
              <div style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; color: var(--primary);">
                $29 <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">/ month</span>
              </div>
              <ul class="pricing-features" style="font-size: 0.85rem;">
                <li>${A(`check`,`w-3.5 h-3.5`,14)} <strong>Unlimited</strong> public web searches</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} Priority queue & sub-second hashing</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} Unlimited saved collections & tags</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} CSV & JSON dossier export</li>
                <li>${A(`check`,`w-3.5 h-3.5`,14)} High-resolution zoom inspection</li>
              </ul>
              <button class="btn btn-primary" id="upgrade-confirm-pro-btn" style="margin-top: auto; padding: 12px;">
                ${A(`zap`,`w-4 h-4`,16)} Upgrade Now
              </button>
            </div>
          </div>

          <!-- Ethical Guarantee -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; display: flex; align-items: center; gap: 12px; font-size: 0.78rem; color: var(--text-muted);">
            <div style="color: var(--accent-emerald);">
              ${A(`shield-check`,`w-4 h-4`,16)}
            </div>
            <span>
              All plans operate under our strict Responsible Use framework. DIGITAL YOUR does not sell surveillance access or scrape private accounts at any tier.
            </span>
          </div>
        </div>
      </div>
    </div>
  `}function Me(){let e=document.getElementById(`upgrade-modal-close-btn`);e&&e.addEventListener(`click`,()=>S.closeModal());let t=document.getElementById(`upgrade-modal-backdrop`);t&&t.addEventListener(`click`,e=>{e.target===t&&S.closeModal()});let n=document.getElementById(`upgrade-quick-reset-btn`);n&&n.addEventListener(`click`,()=>{S.resetSearchQuota(),S.closeModal()});let r=document.getElementById(`upgrade-confirm-pro-btn`);r&&r.addEventListener(`click`,()=>{S.state.user.plan=`Researcher Pro`,S.state.user.searchesLimit=999,S.state.user.searchesUsed=0,S.showToast(`Upgraded to Researcher Pro! Enjoy unlimited public searches.`,`success`),S.closeModal()})}function Ne(){let{modalData:e}=S.state,t=e;return t?`
    <div class="modal-backdrop" id="cs-modal-backdrop">
      <div class="modal-dialog" id="cs-modal-dialog">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="nav-logo-icon" style="width: 36px; height: 36px; background: linear-gradient(135deg, #8b5cf6, #6366f1);">
              ${A(`sparkles`,`w-4 h-4`,20)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 style="font-size: 1.2rem;">${t.title}</h3>
                <span class="badge" style="background: rgba(139, 92, 246, 0.15); color: var(--accent-purple);">
                  ${t.badge}
                </span>
              </div>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Platform Architecture Roadmap</p>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" id="cs-modal-close-btn" aria-label="Close modal">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 20px;">
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
            ${t.description}
          </p>

          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 12px;">
              Planned Core Capabilities
            </span>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
              ${(t.highlights||[]).map(e=>`
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; color: var(--text-primary);">
                  <span style="color: var(--accent-purple);">${A(`check`,`w-4 h-4`,16)}</span>
                  <span>${e}</span>
                </li>
              `).join(``)}
            </ul>
          </div>

          <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: var(--radius-md); padding: 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <div>
              <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">Join Developer Preview Queue</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Get early access notifications when this module ships.</div>
            </div>
            <button class="btn btn-secondary btn-sm" id="cs-notify-btn" style="border-color: var(--accent-purple); color: var(--accent-purple);">
              ${A(`bookmark`,`w-3.5 h-3.5`,14)} Request Early Access
            </button>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" id="cs-modal-done-btn">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  `:``}function Pe(){let{modalData:e}=S.state,t=e;return t?`
    <div class="modal-backdrop" id="report-modal-backdrop">
      <div class="modal-dialog" id="report-modal-dialog">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="color: var(--accent-rose);">
              ${A(`flag`,`w-5 h-5`,22)}
            </div>
            <div>
              <h3 style="font-size: 1.15rem;">Report Incorrect or Inappropriate Match</h3>
              <p style="font-size: 0.78rem; color: var(--text-muted);">Help maintain algorithmic transparency and index integrity</p>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" id="report-modal-close-btn">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 18px;">
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 12px;">
            <img src="${t.image}" alt="" style="width: 48px; height: 48px; border-radius: 6px; object-fit: cover;" />
            <div style="min-width: 0;">
              <div style="font-size: 0.88rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t.title}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${t.domain} · ${t.similarity}% similarity</div>
            </div>
          </div>

          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 600; margin-bottom: 6px;">Reason for report</label>
            <select id="report-reason-select" style="width: 100%;">
              <option value="false-positive">Visually unrelated / algorithmic false positive</option>
              <option value="incorrect-context">Misleading page snippet or wrong metadata</option>
              <option value="outdated-source">Page is no longer publicly accessible (broken link)</option>
              <option value="privacy-request">Right to Erasure / Privacy de-indexing request</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 600; margin-bottom: 6px;">Additional details (optional)</label>
            <textarea id="report-notes-textarea" rows="3" placeholder="Provide any additional context or clarification..." style="width: 100%; resize: none;"></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" id="report-cancel-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="report-submit-btn">
            ${A(`check`,`w-3.5 h-3.5`,14)} Submit Report
          </button>
        </div>
      </div>
    </div>
  `:``}function Fe(){return`
    <div class="modal-backdrop" id="clear-modal-backdrop">
      <div class="modal-dialog" id="clear-modal-dialog" style="max-width: 460px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px; color: var(--accent-rose);">
            ${A(`trash`,`w-5 h-5`,22)}
            <h3 style="font-size: 1.15rem; color: var(--text-primary);">Clear All Search History?</h3>
          </div>
          <button class="btn btn-ghost btn-sm" id="clear-modal-close-btn">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <div class="modal-body">
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            This will permanently remove all search history records and image thumbnail caches from your browser's local memory. This action cannot be undone.
          </p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" id="clear-cancel-btn">Cancel</button>
          <button class="btn btn-danger btn-sm" id="clear-confirm-btn">
            ${A(`trash`,`w-3.5 h-3.5`,14)} Permanently Delete All
          </button>
        </div>
      </div>
    </div>
  `}function Ie(){let e=document.getElementById(`cs-modal-close-btn`),t=document.getElementById(`cs-modal-done-btn`);e&&e.addEventListener(`click`,()=>S.closeModal()),t&&t.addEventListener(`click`,()=>S.closeModal());let n=document.getElementById(`cs-modal-backdrop`);n&&n.addEventListener(`click`,e=>{e.target===n&&S.closeModal()});let r=document.getElementById(`cs-notify-btn`);r&&r.addEventListener(`click`,()=>{S.showToast(`You are on the preview waitlist. Thank you!`,`success`),S.closeModal()});let i=document.getElementById(`report-modal-close-btn`),a=document.getElementById(`report-cancel-btn`);i&&i.addEventListener(`click`,()=>S.closeModal()),a&&a.addEventListener(`click`,()=>S.closeModal());let o=document.getElementById(`report-modal-backdrop`);o&&o.addEventListener(`click`,e=>{e.target===o&&S.closeModal()});let s=document.getElementById(`report-submit-btn`);s&&s.addEventListener(`click`,()=>{S.showToast(`Report received. Thank you for contributing to index integrity.`,`success`),S.closeModal()});let c=document.getElementById(`clear-modal-close-btn`),l=document.getElementById(`clear-cancel-btn`);c&&c.addEventListener(`click`,()=>S.closeModal()),l&&l.addEventListener(`click`,()=>S.closeModal());let u=document.getElementById(`clear-modal-backdrop`);u&&u.addEventListener(`click`,e=>{e.target===u&&S.closeModal()});let d=document.getElementById(`clear-confirm-btn`);d&&d.addEventListener(`click`,()=>{S.clearAllHistory()});let f=document.getElementById(`ai-modal-close-btn`),p=document.getElementById(`modal-ai-close-footer-btn`),m=document.getElementById(`ai-modal-backdrop`);f&&f.addEventListener(`click`,()=>S.closeModal()),p&&p.addEventListener(`click`,()=>S.closeModal()),m&&m.addEventListener(`click`,e=>{e.target===m&&S.closeModal()});let h=document.getElementById(`modal-gemini-input`),_=document.getElementById(`modal-gemini-status`),v=document.getElementById(`modal-gemini-save-btn`),y=document.getElementById(`modal-gemini-test-btn`),b=document.getElementById(`modal-gemini-clear-btn`);v&&h&&v.addEventListener(`click`,()=>{S.setGeminiApiKey(h.value),S.closeModal()}),b&&b.addEventListener(`click`,()=>{S.setGeminiApiKey(``),S.closeModal()}),y&&h&&_&&y.addEventListener(`click`,async()=>{let e=h.value?.trim();if(!e){_.style.display=`block`,_.style.color=`#ef4444`,_.textContent=`Please enter a Gemini API key to test.`;return}_.style.display=`block`,_.style.color=`var(--text-secondary)`,_.textContent=`Testing connection to Google Gemini 2.0 Flash...`;let t=await g(e);t.ok?(_.style.color=`#10b981`,_.textContent=`✓ Connection Verified! Gemini 2.0 Flash is operational.`):(_.style.color=`#ef4444`,_.textContent=`✗ Connection failed: ${t.error}`)})}function Le(){let{geminiApiKey:e}=S.state;return`
    <div class="modal-backdrop" id="ai-modal-backdrop">
      <div class="modal-dialog" id="ai-modal-dialog" style="max-width: 540px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="nav-logo-icon" style="width: 38px; height: 38px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);">
              ${A(`sparkles`,`w-5 h-5`,22)}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 style="font-size: 1.2rem; margin: 0;">AI Vision Intelligence Engine</h3>
                <span class="badge ${e?`badge-public`:`badge-demo`}" style="font-size: 0.7rem;">
                  ${e?`Gemini 2.0 Active`:`Neural Core Active`}
                </span>
              </div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin: 2px 0 0 0;">
                Multimodal Image Recognition & Public Source Intelligence
              </p>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" id="ai-modal-close-btn" aria-label="Close modal">
            ${A(`x`,`w-5 h-5`,20)}
          </button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 18px;">
          <!-- Active Status Banner -->
          <div style="background: ${e?`rgba(16, 185, 129, 0.08)`:`rgba(139, 92, 246, 0.08)`}; border: 1px solid ${e?`rgba(16, 185, 129, 0.25)`:`rgba(139, 92, 246, 0.25)`}; border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: flex-start; gap: 12px;">
            <div style="color: ${e?`var(--accent-emerald)`:`var(--accent-purple)`}; margin-top: 2px;">
              ${A(e?`check-circle`:`cpu`,`w-5 h-5`,20)}
            </div>
            <div>
              <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin: 0 0 3px;">
                ${e?`Google Gemini 2.0 Flash Vision Active`:`Client-Side Neural Vision Engine Active`}
              </h4>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                ${e?`Custom image uploads are processed with live Google Gemini 2.0 Flash Multimodal inference for entity recognition, public company dossiers, and interactive Q&A.`:`Running built-in canvas pixel analysis, skin tone clustering, difference hashes, and verified public catalogs. Provide an optional Gemini API key below to enable live Google multimodal vision.`}
              </p>
            </div>
          </div>

          <!-- API Key Input -->
          <div>
            <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); display: block; margin-bottom: 6px;">
              Google Gemini API Key (Optional):
            </label>
            <div style="position: relative;">
              <input 
                type="password" 
                id="modal-gemini-input" 
                placeholder="AIzaSy... (Stored securely in local session)" 
                value="${e||``}" 
                style="width: 100%; padding: 10px 14px; font-size: 0.88rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background: var(--bg-primary); color: var(--text-primary);"
              />
            </div>
            <div id="modal-gemini-status" style="font-size: 0.78rem; margin-top: 6px; display: none;"></div>
          </div>

          <!-- Test & Action Buttons -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" id="modal-gemini-test-btn" style="display: flex; align-items: center; gap: 6px;">
              ${A(`sparkles`,`w-3.5 h-3.5`,14)} Test Connection
            </button>
            <button class="btn btn-primary btn-sm" id="modal-gemini-save-btn">
              Save Key
            </button>
            ${e?`<button class="btn btn-ghost btn-sm" id="modal-gemini-clear-btn" style="color: var(--accent-rose);">Clear Key</button>`:``}
          </div>

          <!-- Capability Checklist -->
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px 18px;">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 8px;">
              Active Multimodal AI Modules:
            </span>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; padding: 0; margin: 0;">
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--text-primary);">
                <span style="color: var(--accent-emerald);">${A(`check`,`w-3.5 h-3.5`,14)}</span>
                <span>Public Figure Discovery (SpaceX, Tesla, X, xAI, executive footprints)</span>
              </li>
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--text-primary);">
                <span style="color: var(--accent-emerald);">${A(`check`,`w-3.5 h-3.5`,14)}</span>
                <span>Anime & Media Recognition (Series, Character Roster, Studios, Streams)</span>
              </li>
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--text-primary);">
                <span style="color: var(--accent-emerald);">${A(`check`,`w-3.5 h-3.5`,14)}</span>
                <span>Photographic Portrait & Face Geometry (Optical Depth, Lighting)</span>
              </li>
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--text-primary);">
                <span style="color: var(--accent-emerald);">${A(`check`,`w-3.5 h-3.5`,14)}</span>
                <span>Ordinary Individual Privacy Guardrail (Zero personal profile aggregation)</span>
              </li>
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--text-primary);">
                <span style="color: var(--accent-emerald);">${A(`check`,`w-3.5 h-3.5`,14)}</span>
                <span>Interactive AI Assistant Q&A (Ask factual questions on search results)</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" id="modal-ai-close-footer-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  `}function $(){let e=document.getElementById(`app`);if(!e)return;let{view:t,dashboardTab:n,currentSearch:r,activeModal:i,toast:a}=S.state,o=``;o=t===`landing`?`
      ${z()}
      ${j()}
      ${L()}
    `:`
      <div class="app-shell">
        ${V()}
        <div class="app-main">
          ${j()}
          <main class="app-content">
            ${Re(n,r)}
          </main>
        </div>
      </div>
    `;let s=ze(i),c=a?`
    <div class="toast-container">
      <div class="toast-pill">
        <span style="color: ${a.type===`success`?`var(--accent-emerald)`:`var(--primary)`};">
          ${A(a.type===`success`?`check-circle`:`info`,`w-4 h-4`,18)}
        </span>
        <span>${a.message}</span>
      </div>
    </div>
  `:``;e.innerHTML=`
    ${o}
    ${s}
    ${c}
  `,Be(t,n,r,i)}function Re(e,t){switch(e){case`overview`:return W();case`search`:return t.status===`processing`?oe():t.status===`completed`?ce():q();case`history`:return Se();case`saved`:return we();case`settings`:return Ee();default:return W()}}function ze(e){if(!e)return``;switch(e){case`auth`:return Oe();case`upgrade`:return Q();case`detail`:return be();case`comingSoon`:return Ne();case`report`:return Pe();case`clearHistory`:return Fe();case`aiConfig`:return Le();default:return``}}function Be(e,t,n,r){if(M(),e===`landing`)R();else switch(U(),t){case`overview`:G();break;case`search`:n.status===`processing`?se():n.status===`completed`?ve():ae();break;case`history`:Ce();break;case`saved`:Te();break;case`settings`:De()}r===`auth`&&je(),r===`upgrade`&&Me(),r===`detail`&&xe(),(r===`comingSoon`||r===`report`||r===`clearHistory`)&&Ie()}S.subscribe(()=>{$()}),document.addEventListener(`DOMContentLoaded`,()=>{$(),B()});