// ==========================================================================
// ✏️ [학생 실습 1: 내 프로젝트 데이터로 바꾸기]
// 아래의 projectsData 배열 안의 내용을 본인의 설계 과제나 관심 분야로 수정해보세요!
// (💡 AI 코딩 팁: "projectsData 1번을 내가 지난 학기에 한 주민센터 프로젝트로 바꿔줘"라고 프롬프트를 줘보세요)
// ==========================================================================
const projectsData = [
    {
        id: 1,
        title: "The Void Gallery : 비움의 미술관",
        category: "cultural",
        year: "2025.Fall (4학년 2학기)",
        location: "서울시 종로구 삼청동 일대",
        area: "연면적 2,450 ㎡ / 지하 1층, 지상 3층",
        structure: "철근콘크리트 구조 + 내후성 강판(Corten Steel)",
        concept: "도시의 복잡한 시각적 자극을 비워내고, 자연의 빛과 그림자만을 전시의 배경으로 삼는 도심형 갤러리입니다. 사괴석 담장으로 둘러싸인 침상형 중정(Sunken Courtyard)과 최상층 탑라이트(Top-light)를 통해 시간의 흐름에 따라 변화하는 빛의 궤적을 실내로 끌어들였습니다.",
        images: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: 2,
        title: "Vertical Nexus : 수직 입체 보행로 및 복합 도서관",
        category: "urban",
        year: "2025.Spring (4학년 1학기)",
        location: "서울시 용산구 철도차량기지 인근",
        area: "대지면적 12,000 ㎡ / 연면적 15,300 ㎡",
        structure: "강구조(Steel Truss) 트러스 브릿지 시스템",
        concept: "100년 넘게 도심을 동서로 갈라놓았던 지상 철도망 상부를 입체 보행 브릿지로 연결하고, 브릿지 내부에 시민들을 위한 개방형 계단식 도서관을 통합했습니다. 단절된 주거지와 상업지를 잇는 인프라스트럭처이자 입체 공원 역할을 수행합니다.",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: 3,
        title: "Courtyard In-between : 사유의 중정 주택",
        category: "residential",
        year: "2024.Fall (3학년 2학기)",
        location: "경기도 파주시 헤이리 예술마을",
        area: "연면적 320 ㎡ / 지상 2층",
        structure: "중목구조(Glulam) + 삼나무 탄화목 외벽",
        concept: "할아버지, 부모, 손자 3세대가 함께 거주하되 독립적인 프라이버시를 유지하도록 ㄷ자형 매스 배치를 적용했습니다. 중심의 비워진 중정을 매개로 시선은 교차하지만 물리적 동선은 층별로 완충 공간을 거쳐 자연과 호흡하도록 계획했습니다.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        ]
    }
];

// --- 1. Project Modal Logic ---
function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    const modalBody = document.getElementById('modal-content-body');
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <span style="color: var(--accent); font-size: 0.85rem; font-weight: 600;">${project.category.toUpperCase()} | ${project.year}</span>
            <h2 style="font-family: var(--font-heading); font-size: 2rem; margin: 0.4rem 0 1rem 0;">${project.title}</h2>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: rgba(0,0,0,0.3); padding: 1.2rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div><strong>대지위치:</strong> <span style="color: var(--text-secondary);">${project.location}</span></div>
            <div><strong>규모/면적:</strong> <span style="color: var(--text-secondary);">${project.area}</span></div>
            <div style="grid-column: span 2;"><strong>구조 및 재료:</strong> <span style="color: var(--text-secondary);">${project.structure}</span></div>
        </div>

        <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 0.5rem; color: var(--accent);">설계 개념 (Design Statement)</h4>
            <p style="color: var(--text-secondary); line-height: 1.8;">${project.concept}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.2rem;">
            <h4 style="margin-bottom: 0.2rem; color: var(--accent);">주요 렌더링 및 다이어그램</h4>
            ${project.images.map(img => `<img src="${img}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);" loading="lazy">`).join('')}
        </div>
        
        <div style="margin-top: 2rem; text-align: right;">
            <a href="#design-rationale" class="btn-secondary" onclick="closeProjectModal()" style="display: inline-flex; text-decoration: none;">
                <span class="sparkle">✦</span> 관점별 핵심 설계 해설 보기 ↗
            </a>
        </div>
    `;

    document.getElementById('project-modal').classList.add('show');
}

function closeProjectModal(e) {
    if (!e || e.target.id === 'project-modal' || e.target.classList.contains('btn-close') || e.target.tagName === 'A') {
        document.getElementById('project-modal').classList.remove('show');
    }
}

// --- 2. Filter Button Logic ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- 3. Three.js Interactive 3D Massing Viewer (13주차 MCP 연계 데모) ---
let scene, camera, renderer, controls, massGroup;
let isWireframe = false;
let isRotating = false;

function initThreeViewer() {
    const container = document.getElementById('three-canvas-wrap');
    if (!container) return;

    // Scene & Camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c10);

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(25, 20, 30);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Don't go below ground

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.3);
    dirLight2.position.set(-20, 10, -20);
    scene.add(dirLight2);

    // Architectural Ground Grid
    const gridHelper = new THREE.GridHelper(50, 50, 0x5eead4, 0x222a35);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Create Architectural Conceptual Masses (Simulation of Blender glTF export)
    massGroup = new THREE.Group();

    const clayMaterial = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.3,
        metalness: 0.1
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x5eead4,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        transmission: 0.6
    });

    // Mass 1: Main Podium
    const podium = new THREE.Mesh(new THREE.BoxGeometry(16, 3, 12), clayMaterial);
    podium.position.set(0, 1.5, 0);
    podium.castShadow = true;
    podium.receiveShadow = true;
    podium.name = 'podium';
    massGroup.add(podium);

    // Mass 2: Tower Block (Cantilever)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 8), clayMaterial);
    tower.position.set(-2, 8, 1);
    tower.castShadow = true;
    tower.name = 'tower';
    massGroup.add(tower);

    // Mass 3: Glass Atrium / Void Connector
    const atrium = new THREE.Mesh(new THREE.BoxGeometry(6, 7, 7), glassMaterial);
    atrium.position.set(4, 5, -1);
    atrium.name = 'atrium';
    massGroup.add(atrium);

    // Mass 4: Floating Roof Canopy
    const roof = new THREE.Mesh(new THREE.BoxGeometry(18, 0.4, 14), clayMaterial);
    roof.position.set(0, 13.2, 0);
    roof.name = 'roof';
    massGroup.add(roof);

    scene.add(massGroup);

    // Resize Handler
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animate Loop
    function animate() {
        requestAnimationFrame(animate);
        if (isRotating && massGroup) {
            massGroup.rotation.y += 0.005;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Button Events
    document.getElementById('btn-mode-wire').addEventListener('click', function () {
        isWireframe = !isWireframe;
        this.classList.toggle('active', isWireframe);
        massGroup.children.forEach(mesh => {
            mesh.material.wireframe = isWireframe;
        });
    });

    document.getElementById('btn-mode-rotate').addEventListener('click', function () {
        isRotating = !isRotating;
        this.classList.toggle('active', isRotating);
        this.innerText = isRotating ? 'Auto Rotate OFF' : 'Auto Rotate ON';
    });

    document.getElementById('btn-mode-reset').addEventListener('click', function () {
        camera.position.set(25, 20, 30);
        controls.target.set(0, 5, 0);
        if (massGroup) massGroup.rotation.y = 0;
        resetMassHighlight();
    });

    // Check if user has a custom gltf/glb file in models/ folder
    loadStaticGltfIfExists('models/building.glb');
}

// 4-1. GLTF / GLB Loader Logic
const gltfLoader = new THREE.GLTFLoader();

function loadStaticGltfIfExists(modelUrl) {
    gltfLoader.load(
        modelUrl,
        function (gltf) {
            console.log('Custom GLTF model loaded successfully:', modelUrl);
            applyLoadedModel(gltf.scene, '사용자 로컬 3D 모델 (building.glb)');
        },
        undefined,
        function (error) {
            // File doesn't exist yet, smoothly fallback to default conceptual mass
            console.log('No local models/building.glb found. Using procedural mass.');
        }
    );
}

function handleModelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    gltfLoader.load(
        fileUrl,
        function (gltf) {
            applyLoadedModel(gltf.scene, file.name);
            URL.revokeObjectURL(fileUrl);
        },
        function (xhr) {
            document.getElementById('anno-title').innerText = `3D 모델 로딩 중... (${Math.round((xhr.loaded / xhr.total) * 100)}%)`;
        },
        function (err) {
            console.error('GLTF Load Error:', err);
            alert('.glb 또는 .gltf 모델을 파싱하는 중 오류가 발생했습니다. 올바른 3D 파일인지 확인해주세요.');
        }
    );
}

function applyLoadedModel(modelScene, modelName) {
    if (massGroup) {
        scene.remove(massGroup);
    }

    // Auto-center and normalize scale for user model
    const box = new THREE.Box3().setFromObject(modelScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? (20 / maxDim) : 1;
    modelScene.scale.set(scale, scale, scale);

    // Center pivot
    modelScene.position.x = -center.x * scale;
    modelScene.position.y = -box.min.y * scale; // Sit on ground grid
    modelScene.position.z = -center.z * scale;

    massGroup = new THREE.Group();
    massGroup.add(modelScene);
    scene.add(massGroup);

    // Fit camera view
    camera.position.set(25, 20, 30);
    controls.target.set(0, 8, 0);

    document.getElementById('anno-title').innerText = `로드 완료: ${modelName}`;
    document.getElementById('anno-desc').innerText = `학생의 실제 3D 모델이 뷰어에 성공적으로 적용되었습니다. 마우스 드래그로 회전하거나 확대/축소하여 자유롭게 검토하세요.`;
}

// 3D Mass Highlight & Spatial Description
const partAnnotations = {
    podium: {
        title: "기단부 (Public Podium)",
        desc: "지상 1~2층에 위치하며 전면 보행 가로에 완전히 개방된 시민 커뮤니티 라운지 및 전시 홀입니다. 중량감 있는 석재 마감으로 도시 가로와 안정적인 접지면을 형성합니다."
    },
    tower: {
        title: "캔틸레버 매스 (Cantilever Tower)",
        desc: "하부 기단에서 4.5m 돌출된 캔틸레버 구조로 하부에 그늘진 진입 필로티를 형성하며, 상층부는 집중 연구 및 도서 열람실로 분리 배치하여 프라이버시를 확보했습니다."
    },
    atrium: {
        title: "유리 아트리움 (Light Void)",
        desc: "타워와 포디움을 관통하는 투명 유리 수직 코어로, 지하 선큰(Sunken) 공간까지 자연광을 굴절 투과시키고 공기의 부력 환기(Stack Effect)를 유도합니다."
    },
    roof: {
        title: "플로팅 캐노피 (Floating Roof Canopy)",
        desc: "수평성을 극대화한 경량 지붕으로 상부 일사열을 차단하고 옥상 테라스 정원에 조망형 쉼터를 제공합니다."
    }
};

function highlightPart(partName) {
    if (!massGroup) return;

    document.querySelectorAll('.part-btn').forEach(btn => btn.classList.remove('active'));
    event?.currentTarget?.classList.add('active');

    massGroup.children.forEach(mesh => {
        if (mesh.name === partName) {
            mesh.material = new THREE.MeshStandardMaterial({
                color: 0x5eead4,
                roughness: 0.2,
                metalness: 0.3,
                emissive: 0x134e4a,
                wireframe: isWireframe
            });
        } else {
            mesh.material = new THREE.MeshStandardMaterial({
                color: 0x475569,
                roughness: 0.6,
                transparent: true,
                opacity: 0.35,
                wireframe: isWireframe
            });
        }
    });

    const info = partAnnotations[partName];
    if (info) {
        document.getElementById('anno-title').innerText = info.title;
        document.getElementById('anno-desc').innerText = info.desc;
    }
}

function resetMassHighlight() {
    if (!massGroup) return;
    document.querySelectorAll('.part-btn').forEach(btn => btn.classList.remove('active'));

    const clayMaterial = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.3,
        metalness: 0.1,
        wireframe: isWireframe
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x5eead4,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        transmission: 0.6,
        wireframe: isWireframe
    });

    massGroup.children.forEach(mesh => {
        mesh.material = (mesh.name === 'atrium') ? glassMaterial : clayMaterial;
    });

    document.getElementById('anno-title').innerText = "전체 매스 (Overall Massing)";
    document.getElementById('anno-desc').innerText = "포디움과 타워, 유리 보이드의 중첩을 통해 도심 공공성과 내부 프로그램의 프라이버시를 동시에 확보한 입체 배치 계획입니다.";
}

// --- 4. Audience-Tailored 30-Sec Briefing Logic ---
const briefingData = {
    concept: {
        tag: "FORM & SPATIAL CONCEPT",
        title: "보이드(Void)와 자연광을 매개로 한 도심 속 비움의 미학",
        bullets: [
            "밀도 높은 도심 속에서 채우기보다는 의도적으로 '비워낸 공간(침상형 중정)'을 중심축으로 설정했습니다.",
            "천창(Top-light)을 타고 내려오는 자연광이 시간에 따라 벽면에 투영되어 전시의 일부가 되는 현상학적 공간을 의도했습니다.",
            "인공조명을 최소화하고 계절과 날씨의 변화를 실내로 고스란히 끌어들여 사용자에게 사유의 순간을 제공합니다."
        ]
    },
    urban: {
        tag: "URBAN & CIRCULATION",
        title: "단절된 도시 인프라를 봉합하는 입체 공공 보행축",
        bullets: [
            "100년간 동서로 단절되었던 철도 부지 상부를 12m 레벨의 입체 트러스 브릿지로 직결했습니다.",
            "단순 통로가 아닌 계단식 야외 도서관과 테라스 정원을 지그재그로 오르내리는 '경험적 연속 동선'을 구축했습니다.",
            "주변 주거지와 상업지를 자연스럽게 묶어 시민 누구나 머무를 수 있는 입체 도시 공원으로 기능합니다."
        ]
    },
    structure: {
        tag: "STRUCTURE & SUSTAINABILITY",
        title: "내후성 강판(Corten Steel)과 중목구조(Glulam)를 통한 지속가능성",
        bullets: [
            "시간이 지날수록 자연스럽게 산화 피막을 형성하여 별도의 도장 유지보수가 필요 없는 코르텐강을 주외장재로 채택했습니다.",
            "주거 프로젝트에는 탄소 저감 효과가 뛰어난 중목구조(Glulam)와 삼나무 탄화목을 결합하여 친환경성을 극대화했습니다.",
            "외피 단열 성능 강화 및 자연 환기용 아트리움 설계를 통해 연간 냉난방 부하를 약 18% 절감하도록 계획했습니다."
        ]
    },
    computational: {
        tag: "COMPUTATIONAL PROCESS & TECH",
        title: "알고리즘 기반 일조 분석 및 파라메트릭 매스 최적화",
        bullets: [
            "Rhino & Grasshopper 환경에서 주변 건물 그림자 간섭 데이터를 분석해 일조량이 가장 풍부한 각도로 매스를 분절했습니다.",
            "Ladybug 플러그인을 활용한 일사량 시뮬레이션을 통해 계절별 직사광을 효과적으로 차폐하는 루버 핀(Louver Fin) 간격을 산출했습니다.",
            "Blender 및 Three.js WebGL 파이프라인을 구축하여 3D 형태 스터디를 웹 브라우저에서 실시간으로 검토할 수 있도록 구현했습니다."
        ]
    }
};

function switchBriefing(type) {
    document.querySelectorAll('.r-tab').forEach(btn => btn.classList.remove('active'));
    event?.currentTarget?.classList.add('active');

    const data = briefingData[type];
    if (!data) return;

    const display = document.getElementById('briefing-display');
    display.innerHTML = `
        <div class="briefing-box">
            <span class="briefing-tag">${data.tag}</span>
            <h4 class="briefing-heading">${data.title}</h4>
            <ul class="briefing-list">
                ${data.bullets.map(b => `<li><span class="bullet-dot">▸</span> <span>${b}</span></li>`).join('')}
            </ul>
        </div>
    `;
}

// ==========================================================================
// 🤖 5. Floating AI Docent Chatbot Logic (하이브리드: 룰베이스 B + Gemini A)
// ==========================================================================

let userGeminiApiKey = localStorage.getItem('archi_gemini_key') || '';

// ==========================================================================
// ✏️ [학생 실습 3: 나만의 AI 도슨트 질문/답변 커스텀 (옵션 B 시나리오 모드)]
// API 키 없이도 방문자의 질문에 똑똑하게 답변하는 키워드-답변 데이터베이스입니다.
// 키워드(keywords)와 답변(answer)을 본인 설계 주제로 수정해보세요!
// (💡 AI 코딩 팁: "scenarioResponses에 내 주거 프로젝트 질문과 답변 2개를 추가해줘"라고 요청하세요)
// ==========================================================================
const scenarioResponses = [
    {
        keywords: ["채광", "빛", "미술관", "void", "보이드", "비움", "창", "자연광"],
        answer: "비움의 미술관(The Void Gallery)은 상부 탑라이트(Top-light)와 침상형 중정(Sunken Courtyard)을 통해 직사광 대신 부드러운 산란광을 내부로 끌어들이도록 계획했습니다. 시간의 흐름에 따라 변화하는 빛의 궤적 자체가 전시의 일부가 되는 현상학적 공간입니다."
    },
    {
        keywords: ["캔틸레버", "구조", "트러스", "기단", "지탱", "버티", "역학"],
        answer: "캔틸레버 타워는 하부 기단에서 4.5m 돌출되어 있습니다. 상부의 하중은 고장력 강재 트러스(Steel Truss)와 중심부 철근콘크리트 전단벽 코어가 일체화되어 지지하며, 돌출부 하부에는 시민들이 비를 피하거나 휴식할 수 있는 그늘진 필로티 진입 공간이 형성됩니다."
    },
    {
        keywords: ["친환경", "재료", "탄소", "목구조", "코르텐", "외장", "에너지"],
        answer: "지속가능성을 고려하여 두 가지 핵심 재료를 적용했습니다. 첫째, 자연 산화 피막으로 별도 화학 도장이 필요 없는 내후성 강판(Corten Steel), 둘째, 탄소 고정 효과가 뛰어난 중목구조(Glulam)와 삼나무 탄화목입니다. 자연 환기 아트리움과 결합하여 연간 냉난방 부하를 약 18% 절감하도록 설계했습니다."
    },
    {
        keywords: ["연락처", "이메일", "인스타", "sns", "커피챗", "문의", "메일", "전화"],
        answer: "김진우 학생의 작업에 관심을 가져주셔서 감사합니다! 📧 이메일: arch.jinwoo@example.ac.kr | 📸 인스타그램: @arch_jinwoo 로 연락 주시면 상세한 포트폴리오 질의응답이나 커피챗이 가능합니다."
    }
];

// 5-2. 챗봇 열기/닫기 토글
function toggleChatbot() {
    const windowEl = document.getElementById('chatbot-window');
    windowEl.classList.toggle('open');
    if (windowEl.classList.contains('open')) {
        document.getElementById('chatbot-input').focus();
    }
}

// 5-3. 추천 질문 칩 클릭 시 질문 자동 전송
function askChip(questionText) {
    appendChatMessage('user', questionText);
    processChatQuery(questionText);
}

// 5-4. 입력창 Submit 이벤트
function handleChatSubmit(e) {
    e.preventDefault();
    const inputEl = document.getElementById('chatbot-input');
    const text = inputEl.value.trim();
    if (!text) return;

    inputEl.value = '';
    appendChatMessage('user', text);
    processChatQuery(text);
}

// 5-5. 메시지 화면 렌더링
function appendChatMessage(role, text) {
    const messagesWrap = document.getElementById('chatbot-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `cb-msg ${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'cb-msg-bubble';
    bubble.innerHTML = text.replace(/\n/g, '<br>');

    msgDiv.appendChild(bubble);
    messagesWrap.appendChild(msgDiv);
    messagesWrap.scrollTop = messagesWrap.scrollHeight;
    return bubble;
}

// 5-6. 답변 처리 로직 (옵션 A Gemini API 또는 옵션 B 룰베이스)
async function processChatQuery(userQuery) {
    // 1) 옵션 A: Gemini API 키가 등록되어 있는 경우
    if (userGeminiApiKey) {
        const loadingBubble = appendChatMessage('bot', 'AI 도슨트가 생각 중입니다... 💭');
        try {
            const aiAnswer = await fetchGeminiAnswer(userQuery);
            loadingBubble.innerHTML = aiAnswer.replace(/\n/g, '<br>');
        } catch (err) {
            console.error('Gemini API Error:', err);
            loadingBubble.innerHTML = `⚠️ Gemini API 응답 중 오류가 발생했습니다.<br><small style="color:var(--text-muted);">${err.message}</small><br>상단 ⚙️ 설정에서 API 키를 재확인하거나 룰베이스 모드를 이용해주세요.`;
        }
        return;
    }

    // 2) 옵션 B: 룰베이스 시나리오 매칭 (키 없이 100% 안전)
    const lowerQuery = userQuery.toLowerCase();
    const matched = scenarioResponses.find(item =>
        item.keywords.some(k => lowerQuery.includes(k.toLowerCase()))
    );

    const botResponse = matched
        ? matched.answer
        : `좋은 질문 감사합니다! 😊<br><br>현재 <strong>[룰베이스 모드]</strong>로 운영 중입니다. 하단 추천 질문 칩(채광 원리, 캔틸레버 구조, 친환경 재료, 연락처)을 클릭하시면 정확한 해설을 확인하실 수 있습니다.<br><br><small style="color:var(--text-muted);">※ 상단 ⚙️ 아이콘에서 Google Gemini API 키를 등록하시면 자유로운 실시간 AI 대화가 활성화됩니다.</small>`;

    // 타이핑 지연 효과 (실제 응답 느낌 부여)
    const bubble = appendChatMessage('bot', '...');
    setTimeout(() => {
        bubble.innerHTML = botResponse;
        const messagesWrap = document.getElementById('chatbot-messages');
        messagesWrap.scrollTop = messagesWrap.scrollHeight;
    }, 350);
}

// 5-7. Google Gemini REST API 호출기 (자동 모델 탐색 및 스마트 폴백 내장)
// 💡 Auto-Context Injection: 학생이 입력한 projectsData 및 프로필 데이터를 AI에게 자동 주입
function buildArchitectureContext() {
    const studentName = document.querySelector('.f-name')?.innerText?.trim() || '건축학도';
    const heroTitle = document.querySelector('.hero-title')?.innerText?.replace(/\n/g, ' ') || '';
    const heroDesc = document.querySelector('.hero-desc')?.innerText?.trim() || '';

    const projectsSummary = projectsData.map((p, idx) => `
[프로젝트 ${idx + 1}: ${p.title}]
- 분야/학기: ${p.category} (${p.year})
- 대지 위치: ${p.location}
- 규모/연면적: ${p.area}
- 구조 및 주재료: ${p.structure}
- 설계 개념(Design Statement): ${p.concept}
`).join('\n');

    const partsSummary = Object.entries(partAnnotations || {}).map(([key, val]) => `
• ${val.title}: ${val.desc}`).join('');

    return {
        studentName,
        text: `
[학생 프로필]
- 작성자: ${studentName}
- 설계 철학 및 소개: ${heroTitle} / ${heroDesc}

[등록된 프로젝트 상세 데이터]
${projectsSummary}

[3D 매싱 공간 조닝 설명]
${partsSummary}
`
    };
}

async function resolveWorkingEndpoint(apiKey) {
    let cached = localStorage.getItem('archi_gemini_endpoint');
    if (cached) return cached;

    // 1) ListModels API를 통해 현재 키가 지원하는 최적 모델(3.5 lite 등) 동적 탐색
    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        if (res.ok) {
            const data = await res.json();
            const genModels = (data.models || []).filter(m => 
                m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')
            );
            // 3.5 lite, flash-lite, 2.0-flash 순서로 가볍고 빠른 모델 우선 선택
            const preferred = genModels.find(m => m.name.includes('3.5') && m.name.includes('lite'))
                           || genModels.find(m => m.name.includes('flash-lite'))
                           || genModels.find(m => m.name.includes('2.0-flash-lite'))
                           || genModels.find(m => m.name.includes('2.0-flash'))
                           || genModels.find(m => m.name.includes('flash'))
                           || genModels[0];
            if (preferred) {
                const endpoint = `https://generativelanguage.googleapis.com/v1beta/${preferred.name}:generateContent`;
                localStorage.setItem('archi_gemini_endpoint', endpoint);
                console.log('[Gemini] Optimal model detected:', preferred.name);
                return endpoint;
            }
        }
    } catch (e) {
        console.warn('[Gemini] ListModels query skipped:', e);
    }

    return "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent";
}

async function fetchGeminiAnswer(prompt) {
    // 💡 학생이 입력한 projectsData를 실시간으로 추출하여 프롬프트 컨텍스트에 자동 결합
    const ctx = buildArchitectureContext();
    const systemInstruction = `
당신은 건축학도 '${ctx.studentName}'의 포트폴리오를 대변하는 친절하고 전문적인 'AI 건축 도슨트'입니다.
다음은 학생이 웹사이트에 직접 등록한 공식 설계 데이터와 프로젝트 정보입니다:

${ctx.text}

[지침]:
1. 방문자의 질문에 대해 위 등록된 프로젝트 데이터 및 3D 매싱 정보를 최우선 근거로 활용하여 전문적이면서도 알기 쉽게 설명하세요.
2. 등록되지 않은 허위 사실을 지어내지 마시고, 데이터에 있는 실제 대지, 구조, 설계 의도(Concept)를 인용하세요.
3. 3~4문장 이내의 친절하고 명확한 한국어로 정중하게(해요체) 답변하세요.
`;

    const requestBody = {
        contents: [
            {
                role: "user",
                parts: [
                    { text: `${systemInstruction}\n\n[방문자 질문]: ${prompt}` }
                ]
            }
        ]
    };

    // 지원 모델 후보군 (Gemini 3.5 Lite / Flash-Lite / 2.0 Flash 계열 우선 순회)
    const candidates = [
        localStorage.getItem('archi_gemini_endpoint'),
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent",
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent"
    ].filter(Boolean);

    const uniqueCandidates = [...new Set(candidates)];
    let lastError = null;

    for (const baseEndpoint of uniqueCandidates) {
        try {
            const url = `${baseEndpoint}?key=${userGeminiApiKey}`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            });

            if (res.ok) {
                const data = await res.json();
                if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                    localStorage.setItem('archi_gemini_endpoint', baseEndpoint);
                    return data.candidates[0].content.parts[0].text;
                }
            } else {
                const errJson = await res.json().catch(() => ({}));
                lastError = new Error(errJson.error?.message || `HTTP ${res.status}`);
                if (res.status === 404 || errJson.error?.message?.includes('not found') || errJson.error?.message?.includes('not supported')) {
                    continue;
                } else {
                    throw lastError;
                }
            }
        } catch (err) {
            lastError = err;
            if (err.message?.includes('not found') || err.message?.includes('not supported') || err.message?.includes('404')) {
                continue;
            }
            throw err;
        }
    }

    throw lastError || new Error("지원되는 Gemini 모델을 찾을 수 없습니다.");
}

// 5-8. API 설정 오버레이 제어
function openChatConfig() {
    document.getElementById('cfg-gemini-key').value = userGeminiApiKey;
    document.getElementById('cb-config-overlay').classList.add('show');
}

function closeChatConfig() {
    document.getElementById('cb-config-overlay').classList.remove('show');
}

async function saveApiKey() {
    const key = document.getElementById('cfg-gemini-key').value.trim();
    if (!key) {
        alert('API Key를 입력해주세요. 키가 없으시면 [룰베이스 모드로 초기화]를 선택하세요.');
        return;
    }
    userGeminiApiKey = key;
    localStorage.setItem('archi_gemini_key', key);
    localStorage.removeItem('archi_gemini_endpoint');
    
    // 키 유효성 및 최적 모델 사전 검색
    await resolveWorkingEndpoint(key);
    
    updateModeBadge();
    closeChatConfig();
    appendChatMessage('bot', '✨ <strong>Gemini AI 연동 완료!</strong><br>이제 자유롭게 무엇이든 질문해 보세요. 포트폴리오 도슨트가 실시간으로 분석하여 답해드립니다.');
}

function resetToRuleMode() {
    userGeminiApiKey = '';
    localStorage.removeItem('archi_gemini_key');
    localStorage.removeItem('archi_gemini_endpoint');
    document.getElementById('cfg-gemini-key').value = '';
    updateModeBadge();
    closeChatConfig();
    appendChatMessage('bot', '🔄 <strong>룰베이스 모드로 전환되었습니다.</strong><br>API 키 없이도 주요 추천 질문 칩에 대한 사전 검증된 설계 해설을 언제든 확인하실 수 있습니다.');
}

function updateModeBadge() {
    const badge = document.getElementById('cb-mode-badge');
    if (!badge) return;
    if (userGeminiApiKey) {
        badge.className = 'cb-status ai-mode';
        badge.innerText = '✨ Gemini AI 모드';
    } else {
        badge.className = 'cb-status rule-mode';
        badge.innerText = '🟢 룰베이스 모드';
    }
}

// Init everything once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initThreeViewer();
    switchBriefing('concept');
    updateModeBadge();
});
