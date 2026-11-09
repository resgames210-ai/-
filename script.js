// --- DATA STORE FROM PDF MEMORANDUM ---
const MEMORY_DATABASE = [
    // Terms
    { type: 'term', title: 'الثغور', desc: 'ثقوب صغيرة بنصل الورقة تسمح بخروج بخار الماء إلى الهواء وتبادل الغازات بين الورقة والوسط الخارجي[span_75](start_span)[span_75](end_span).', unit: 'unit1' },
    { type: 'term', title: 'الستروما (الحشوة)', desc: 'تراكيب بالبلاستيدة الخضراء يتم فيها مرحلة التفاعل اللاضوئي من عملية البناء الضوئي[span_76](start_span)[span_76](end_span).', unit: 'unit2' },
    { type: 'term', title: 'قانون الإنعزال (مندل 1)', desc: 'ينفصل كل زوج من الجينات عن بعضها أثناء الانقسام الميوزي لتتوزع بالجاميتات[span_77](start_span)[span_77](end_span)[span_78](start_span)[span_78](end_span).', unit: 'unit3' },
    { type: 'term', title: 'المهق (Albinism)', desc: 'صفة وراثية متنحية في الإنسان تتسبب في غياب صبغ الميلانين في الجلد والشعر والعينين[span_79](start_span)[span_79](end_span)[span_80](start_span)[span_80](end_span).', unit: 'unit4' },
    { type: 'term', title: 'العبور الوراثي', desc: 'ارتباط الأليلات على الكروماتيدات المتجاورة ثم كسرها وتبادل المادة الوراثية لتشكيل تركيبات جديدة[span_81](start_span)[span_81](end_span).', unit: 'unit4' },
    { type: 'term', title: 'الصفات المحددة بالجنس', desc: 'صفات لا تظهر إلا بوجود الهرمونات الجنسية وفي أحد الجنسين دون الآخر (مثل شعر الذقن للرجل والحليب للأنثى)[span_82](start_span)[span_82](end_span)[span_83](start_span)[span_83](end_span).', unit: 'unit5' },

    // Reasons (علل)
    { type: 'reason', title: 'تغليف السطح العلوي للأوراق بطبقة الكيوتيكل؟', desc: 'لتساعد في منع تسرب الماء إلى خارج الورقة أثناء النتح[span_84](start_span)[span_84](end_span).', unit: 'unit1' },
    { type: 'reason', title: 'تبدو معظم النباتات باللون الأخضر؟', desc: 'لأن أصباغ الكلوروفيل لا تمتص الضوء الأخضر من الطيف المرئي بل تعكسه لعيوننا[span_85](start_span)[span_85](end_span).', unit: 'unit2' },
    { type: 'reason', title: 'تنسخ الأنثى المصابة بعمى الألوان أو الهيموفيليا المرض لإصابة 100% من أطفالها الذكور؟', desc: 'لأن الأم المصابة تورث كروموسوم X الحامل للمرض لجميع أبنائها الذكور[span_86](start_span)[span_86](end_span).', unit: 'unit5' },
    { type: 'reason', title: 'انتشار صفة الصلع في الذكور دون الإناث؟', desc: 'لأن الهرمونات الجنسية الذكرية تجعل أليل الصلع سادئاً في الذكور بينما تجعله الهرمونات الأنثوية متنحياً في الإناث[span_87](start_span)[span_87](end_span).', unit: 'unit5' },
    { type: 'reason', title: 'خطورة زواج الأقارب وراثياً؟', desc: 'لأنه يتيح الفرصة لظهور تأثير الجينات الضارة المتنحية الموجودة في سلالة العائلة[span_88](start_span)[span_88](end_span).', unit: 'unit4' }
];

const QUIZ_QUESTIONS = [
    {
        q: "ما هي الأنسجة المسؤولة أساساً عن التبادل الغازي في ورقة النبات؟",
        options: ["النسيج العمادي", "النسيج الإسفنجي الفجوي", "بشرة الجذر", "أوعية الخشب"],
        answer: 1,
        explain: "النسيج الإسفنجي يحتوي خلايا غير منتظمة الشكل بينها فراغات هوائية تسمح بالتبادل الغازي[span_89](start_span)[span_89](end_span)."
    },
    {
        q: "أين تقع التفاعلات اللاضوئية (دورة كالفن) داخل البلاستيدة الخضراء؟",
        options: ["غشاء الثايلاكويد", "الجرانم", "الستروما (الحشوة)", "السطح الخارجي للبشرة"],
        answer: 2,
        explain: "تحدث التفاعلات اللاضوئية في الستروما حيث توجد الإنزيمات اللازمة لتثبيت ثاني أكسيد الكربون[span_90](start_span)[span_90](end_span)[span_91](start_span)[span_91](end_span)."
    },
    {
        q: "ما النسبة الظاهرية الناتجة في الجيل الثاني لتطبيق قانون مندل الثاني (التوزيع الحر)؟",
        options: ["1:3", "1:2:1", "9:3:3:1", "1:1"],
        answer: 2,
        explain: "قانون التوزيع الحر يعطي نسبة 9 سائد الصفتين : 3 سائد-متنحي : 3 متنحي-سائد : 1 متنحي الصفتين[span_92](start_span)[span_92](end_span)."
    },
    {
        q: "أي من الصفات التالية تعتبر صفة 'محددة بالجنس' في الإنسان؟",
        options: ["عمى الألوان", "مرض الهيموفيليا", "إنتاج الحليب وشعر الذقن", "الصلع المبكر"],
        answer: 2,
        explain: "الصفات المحددة بالجنس تظهر في جنس واحد فقط لوجود الهرمونات الخاصة به كإنتاج الحليب بالأنثى وشعر الذقن بالذكر[span_93](start_span)[span_93](end_span)[span_94](start_span)[span_94](end_span)."
    },
    {
        q: "ماذا يسمى موقع تبادل قطع المادة الوراثية بين الكروماتيدات أثناء العبور؟",
        options: ["السنترومير", "الكيازما", "الثايلاكويد", "العقدة"],
        answer: 1,
        explain: "الكيازما هي موقع تقاطع الكروماتيدات وتبادل الأليلات في عملية العبور الوراثي[span_95](start_span)[span_95](end_span)[span_96](start_span)[span_96](end_span)."
    }
];

// --- NAVIGATION CODE ---
function switchTab(tabId) {
    document.querySelectorAll('main > section').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById('tab-' + tabId).classList.remove('hidden');
    document.getElementById('btn-' + tabId).classList.add('active');

    if (tabId === 'flashcards') renderCards('reason');
    if (tabId === 'quiz') startQuiz();
}

function filterUnit(unitKey) {
    document.querySelectorAll('.unit-card').forEach(card => {
        if (unitKey === 'all' || card.dataset.unit === unitKey) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// --- DIAGRAM CODE ---
function showDiagram(type) {
    document.getElementById('diagram-leaf-container').classList.add('hidden');
    document.getElementById('diagram-chloroplast-container').classList.add('hidden');
    document.getElementById('diagram-crossing-container').classList.add('hidden');

    document.getElementById('diag-btn-leaf').className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-700";
    document.getElementById('diag-btn-chloroplast').className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-700";
    document.getElementById('diag-btn-crossing').className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-700";

    document.getElementById('diagram-' + type + '-container').classList.remove('hidden');
    document.getElementById('diag-btn-' + type).className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-600 text-white";
}

function inspectPart(name, desc) {
    document.getElementById('part-title').innerText = name;
    document.getElementById('part-desc').innerText = desc;
    document.getElementById('part-title-2').innerText = name;
    document.getElementById('part-desc-2').innerText = desc;
    document.getElementById('part-title-3').innerText = name;
    document.getElementById('part-desc-3').innerText = desc;
}

// --- FLASHCARDS CODE ---
function renderCards(filterType) {
    const container = document.getElementById('flashcardsGrid');
    container.innerHTML = '';

    const filtered = MEMORY_DATABASE.filter(item => filterType === 'reason' ? item.type === 'reason' : item.type === 'term');

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = "card-flip h-44 cursor-pointer";
        card.onclick = () => card.classList.toggle('flipped');
        
        card.innerHTML = `
            <div class="card-inner w-full h-full relative rounded-xl shadow-sm border border-slate-200">
                <div class="card-front absolute inset-0 bg-white p-4 rounded-xl flex flex-col justify-between items-center text-center">
                    <span class="text-xs font-bold px-2 py-0.5 rounded ${item.type === 'reason' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}">
                        ${item.type === 'reason' ? 'علل علماً' : 'مصطلح علمي'}
                    </span>
                    <h4 class="font-bold text-slate-800 text-sm sm:text-base">${item.title}</h4>
                    <span class="text-xs text-teal-600 font-semibold"><i class="fas fa-sync-alt ml-1"></i> انقر لإظهار الإجابة</span>
                </div>
                <div class="card-back absolute inset-0 bg-teal-800 text-white p-4 rounded-xl flex flex-col justify-center items-center text-center">
                    <p class="text-xs sm:text-sm leading-relaxed">${item.desc}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- QUIZ LOGIC ---
let currentQ = 0;
let score = 0;

function startQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById('quiz-body').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = QUIZ_QUESTIONS[currentQ];
    document.getElementById('quiz-progress').innerText = `سؤال ${currentQ + 1} من ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quiz-question').innerText = qData.q;
    
    const optsContainer = document.getElementById('quiz-options');
    optsContainer.innerHTML = '';
    
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('next-q-btn').classList.add('hidden');

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-right p-3 rounded-lg border border-slate-200 hover:bg-teal-50 text-xs sm:text-sm transition font-medium text-slate-700";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx);
        optsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIdx) {
    const qData = QUIZ_QUESTIONS[currentQ];
    const buttons = document.getElementById('quiz-options').children;
    
    for (let btn of buttons) {
        btn.disabled = true;
    }

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (selectedIdx === qData.answer) {
        score++;
        buttons[selectedIdx].className = "w-full text-right p-3 rounded-lg bg-emerald-600 text-white font-bold text-xs sm:text-sm";
        feedback.className = "mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold";
        feedback.innerHTML = `<i class="fas fa-check-circle ml-1"></i> إجابة صحيحة! ${qData.explain}`;
    } else {
        buttons[selectedIdx].className = "w-full text-right p-3 rounded-lg bg-red-600 text-white font-bold text-xs sm:text-sm";
        buttons[qData.answer].className = "w-full text-right p-3 rounded-lg bg-emerald-100 text-emerald-800 border-2 border-emerald-500 font-bold text-xs sm:text-sm";
        feedback.className = "mt-4 p-3 rounded-lg bg-red-50 text-red-800 border border-red-200 text-xs font-semibold";
        feedback.innerHTML = `<i class="fas fa-times-circle ml-1"></i> إجابة خاطئة! الإجابة الصحيحة هي: ${qData.options[qData.answer]}. ${qData.explain}`;
    }

    document.getElementById('next-q-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQ++;
    if (currentQ < QUIZ_QUESTIONS.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-body').classList.add('hidden');
        document.getElementById('quiz-results').classList.remove('hidden');
        document.getElementById('quiz-score-text').innerText = `حصلت على درجـة ${score} من أصل ${QUIZ_QUESTIONS.length}`;
    }
}

function restartQuiz() {
    startQuiz();
}

// --- SEARCH ENGINE ---
function handleSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const container = document.getElementById('searchContainer');
    const resultsDiv = document.getElementById('searchResults');

    if (query.length < 2) {
        container.classList.add('hidden');
        return;
    }

    const matches = MEMORY_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
    );

    resultsDiv.innerHTML = '';
    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-xs text-slate-500">لم يتم العثور على نتائج مطابقة لـ "${query}"</p>`;
    } else {
        matches.forEach(m => {
            resultsDiv.innerHTML += `
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <span class="font-bold text-teal-800">${m.title}</span>
                    <p class="text-slate-600 mt-1">${m.desc}</p>
                </div>
            `;
        });
    }
    container.classList.remove('hidden');
}

function closeSearch() {
    document.getElementById('searchContainer').classList.add('hidden');
    document.getElementById('searchInput').value = '';
}

// Initial setup
window.onload = () => {
    renderCards('reason');
};
