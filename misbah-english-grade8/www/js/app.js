/* =====================================================================
   Misbah English — App engine
   ===================================================================== */
"use strict";

/* ----------------------------- Store ----------------------------- */
const KEY = "misbah_grade8_v1";
const Store = {
  data: null,
  load() {
    try { this.data = JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { this.data = {}; }
    this.data.xp = this.data.xp || 0;
    this.data.lessons = this.data.lessons || {};   // lessonId -> {quiz, games:{mcq,fill,order,match,meaning}}
    this.data.units = this.data.units || {};       // unitId -> {bestPct, taken}
    this.data.weak = this.data.weak || {};         // "en" -> {ar, lesson, miss}
    this.data.streakDate = this.data.streakDate || null;
    this.data.streak = this.data.streak || 0;
    this.touchStreak();
    return this.data;
  },
  save() { localStorage.setItem(KEY, JSON.stringify(this.data)); },
  touchStreak() {
    const today = new Date().toDateString();
    const last = this.data.streakDate;
    if (last === today) return;
    if (last) {
      const diff = (new Date(today) - new Date(last)) / 86400000;
      this.data.streak = diff === 1 ? (this.data.streak + 1) : 1;
    } else this.data.streak = 1;
    this.data.streakDate = today;
    this.save();
  },
  addXP(n) { this.data.xp += n; this.save(); },
  lesson(id) { return (this.data.lessons[id] = this.data.lessons[id] || { quiz: 0, games: {} }); },
  setGame(id, game, pct) {
    const L = this.lesson(id);
    L.games[game] = Math.max(L.games[game] || 0, pct);
    this.save();
  },
  setQuiz(id, pct) { const L = this.lesson(id); L.quiz = Math.max(L.quiz || 0, pct); this.save(); },
  setUnit(uid, pct) {
    const U = (this.data.units[uid] = this.data.units[uid] || { bestPct: 0, taken: 0 });
    U.bestPct = Math.max(U.bestPct, pct); U.taken++; this.save();
  },
  addWeak(en, ar, lesson) {
    const w = (this.data.weak[en] = this.data.weak[en] || { ar, lesson, miss: 0 });
    w.miss++; this.save();
  },
  healWeak(en) { if (this.data.weak[en]) { delete this.data.weak[en]; this.save(); } },
  reset() { localStorage.removeItem(KEY); this.load(); }
};

/* --------------------------- Progress math --------------------------- */
function lessonProgress(lesson) {
  const L = Store.data.lessons[lesson.id];
  if (!L) return 0;
  // weighted: quiz 40%, four games 15% each (cap counts existence of >=60%)
  let parts = [];
  parts.push((L.quiz || 0) >= 60 ? 1 : (L.quiz || 0) / 60);
  ["mcq", "match", "fill", "order"].forEach(g => {
    const v = L.games[g] || 0;
    parts.push(v >= 60 ? 1 : v / 60);
  });
  const done = parts.reduce((a, b) => a + Math.min(1, b), 0) / parts.length;
  return Math.round(done * 100);
}
function unitProgress(unit) {
  const arr = unit.lessons.map(lessonProgress);
  const lp = arr.reduce((a, b) => a + b, 0) / arr.length;
  const test = (Store.data.units[unit.id] || {}).bestPct || 0;
  return Math.round(lp * 0.8 + test * 0.2);
}
function overallProgress() {
  const arr = COURSE.units.map(unitProgress);
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}
function level() {
  const xp = Store.data.xp;
  return { lvl: Math.floor(xp / 100) + 1, into: xp % 100, need: 100 };
}

/* ----------------------------- Helpers ----------------------------- */
const $ = sel => document.querySelector(sel);
const app = () => document.getElementById("app");
function h(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
// wrap latin runs so they render LTR inside RTL text
function bidi(s) { return esc(s).replace(/([A-Za-z0-9][A-Za-z0-9 '.,?!:;()/\-]*[A-Za-z0-9?.!)])/g, '<span class="en">$1</span>'); }

let toastTimer;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 1900);
}
function speak(text) {
  if (!("speechSynthesis" in window)) { toast("النطق غير متاح على هذا الجهاز"); return; }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.88; u.pitch = 1;
    window.speechSynthesis.speak(u);
  } catch (e) { toast("النطق غير متاح"); }
}
function confetti() {
  const colors = ["#E0962A", "#1F8A77", "#C25B57", "#1F4E79", "#4C8B3F", "#7A4FA3"];
  const box = h(`<div class="confetti"></div>`);
  for (let i = 0; i < 46; i++) {
    const c = document.createElement("i");
    c.style.left = Math.random() * 100 + "%";
    c.style.background = colors[(Math.random() * colors.length) | 0];
    c.style.animationDuration = (1.4 + Math.random() * 1.4) + "s";
    c.style.animationDelay = (Math.random() * 0.4) + "s";
    box.appendChild(c);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3000);
}

/* qamariya fanlight SVG (the brand signature) */
function qamariya(size, lit) {
  lit = lit == null ? 1 : lit; // 0..1 how many glass petals glow
  const glass = ["#E0962A", "#1F8A77", "#C25B57", "#9FC3D6", "#4C8B3F", "#D9A441", "#7A4FA3"];
  const petals = glass.length, R = 50, cx = 60, cy = 70;
  let segs = "";
  for (let i = 0; i < petals; i++) {
    const a0 = Math.PI + (i / petals) * Math.PI;
    const a1 = Math.PI + ((i + 1) / petals) * Math.PI;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    const on = (i / petals) < lit;
    const fill = on ? glass[i] : "#3a4f63";
    const op = on ? 0.92 : 0.5;
    segs += `<path d="M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${fill}" opacity="${op}" stroke="#F3EEE2" stroke-width="1.4"/>`;
  }
  return `<svg class="qamariya" viewBox="0 0 120 132" width="${size}" height="${size * 1.1}" xmlns="http://www.w3.org/2000/svg">
    <defs><clipPath id="arch"><path d="M10 130 L10 70 A50 50 0 0 1 110 70 L110 130 Z"/></clipPath></defs>
    <g clip-path="url(#arch)">
      <rect x="10" y="60" width="100" height="75" fill="#16273a"/>
      ${segs}
      <rect x="10" y="125" width="100" height="7" fill="#E0962A" opacity=".9"/>
    </g>
    <path d="M10 130 L10 70 A50 50 0 0 1 110 70 L110 130" fill="none" stroke="#F3EEE2" stroke-width="3"/>
    <line x1="60" y1="20" x2="60" y2="130" stroke="#F3EEE2" stroke-width="1.4" opacity=".7"/>
    <path d="M22 110 A40 40 0 0 1 98 110" fill="none" stroke="#F3EEE2" stroke-width="1.2" opacity=".6"/>
  </svg>`;
}

/* ----------------------------- Router ----------------------------- */
const Nav = {
  stack: [],
  go(view, params, replace) {
    if (!replace) this.stack.push({ view, params });
    else this.stack[this.stack.length - 1] = { view, params };
    window.scrollTo(0, 0);
    render();
  },
  back() {
    if (this.stack.length > 1) { this.stack.pop(); window.scrollTo(0, 0); render(); }
  },
  current() { return this.stack[this.stack.length - 1] || { view: "home" }; },
  tab(name) { document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.tab === name)); }
};

function setUnitColor(color) {
  document.documentElement.style.setProperty("--unit", color || "#1F4E79");
  document.documentElement.style.setProperty("--unit-soft", (color || "#1F4E79") + "16");
}

/* ----------------------------- Render ----------------------------- */
function render() {
  const { view, params } = Nav.current();
  if (view === "home") return renderHome();
  if (view === "unit") return renderUnit(params.uid);
  if (view === "lesson") return renderLesson(params.uid, params.lid, params.tab);
  if (view === "run") return renderRun(params);
  if (view === "progress") return renderProgress();
}

/* ----------------------------- Home ----------------------------- */
function renderHome() {
  setUnitColor("#1F4E79");
  Nav.tab("home");
  const lv = level();
  const totalLessons = COURSE.units.reduce((a, u) => a + u.lessons.length, 0);
  const doneLessons = COURSE.units.reduce((a, u) => a + u.lessons.filter(l => lessonProgress(l) >= 80).length, 0);
  const overall = overallProgress();

  const unitsHtml = COURSE.units.map(u => {
    const p = unitProgress(u);
    const wordCount = u.lessons.reduce((a, l) => a + l.vocab.length, 0);
    return `<button class="unit-card" style="--uc:${u.color}" data-uid="${u.id}">
      <div class="unit-badge">${u.id}</div>
      <div class="uc-body">
        <div class="uc-title">${esc(u.titleAr)}</div>
        <div class="uc-en">${esc(u.title)}</div>
        <div class="uc-sum">${esc(u.summary)}</div>
        <div class="uc-meta"><span><b>${u.lessons.length}</b> دروس</span><span><b>${wordCount}</b> كلمة</span><span><b>${p}%</b> إنجاز</span></div>
        <div class="uc-prog"><i style="width:${p}%"></i></div>
      </div>
      <div class="uc-chev">‹</div>
    </button>`;
  }).join("");

  app().innerHTML = `
    ${topbar(false)}
    <div class="view">
      <div class="hero no-select">
        ${qamariya(116, Math.max(0.14, overall / 100))}
        <h1>مصباح الإنجليزية</h1>
        <div class="ar-title">English Course for Yemen · Pupil's Book 2</div>
        <div class="greeting">المستوى ${lv.lvl} · سلسلة ${Store.data.streak} 🔥</div>
        <div class="sub">رحلتك لإتقان منهج الصف الثامن — درساً درساً</div>
      </div>

      <div class="progress-band">
        <div class="stat-card"><div class="num">${overall}%</div><div class="lbl">الإنجاز الكلّي</div></div>
        <div class="stat-card"><div class="num">${doneLessons}/${totalLessons}</div><div class="lbl">الدروس المكتملة</div></div>
        <div class="stat-card"><div class="num">${Store.data.xp}</div><div class="lbl">نقاط الخبرة</div></div>
      </div>

      <div class="section-h"><h2>الوحدات</h2><span class="rule"></span></div>
      <div class="units">${unitsHtml}</div>
    </div>
    ${bottomNav()}
  `;
  bindNav();
  app().querySelectorAll(".unit-card").forEach(c =>
    c.onclick = () => Nav.go("unit", { uid: +c.dataset.uid }));
}

/* ----------------------------- Unit ----------------------------- */
function renderUnit(uid) {
  const u = COURSE.units.find(x => x.id === uid);
  setUnitColor(u.color);
  Nav.tab("home");

  const lessons = u.lessons.map((l, i) => {
    const p = lessonProgress(l);
    const done = p >= 80;
    return `<button class="lesson-row" data-lid="${l.id}">
      <div class="lr-no">${i + 1}</div>
      <div class="lr-body">
        <div class="lr-title">${esc(l.titleAr)}</div>
        <div class="lr-en">${esc(l.title)}</div>
        <div class="lr-page">صفحة الكتاب: ${esc(l.page)} · ${l.vocab.length} كلمة · ${p}%</div>
      </div>
      ${done ? '<div class="done-tick">✓</div>' : '<div class="uc-chev">‹</div>'}
    </button>`;
  }).join("");

  const ut = Store.data.units[u.id];
  app().innerHTML = `
    ${topbar(true)}
    <div class="view">
      <div class="unit-hero">
        <div class="ribbon">${qamariya(120, 1)}</div>
        <div class="label">UNIT ${u.id}</div>
        <h2>${esc(u.titleAr)}</h2>
        <div class="en-t">${esc(u.title)}</div>
        <p>${esc(u.summary)}</p>
      </div>
      <div class="section-h"><h2>الدروس</h2><span class="rule"></span></div>
      <div class="lesson-list">${lessons}</div>
      <div class="unit-test-cta">
        <h3>الاختبار الشامل للوحدة 📝</h3>
        <p>${u.test.length} أسئلة تغطّي كل دروس الوحدة${ut ? ` · أفضل نتيجة: <b>${ut.bestPct}%</b>` : ""}</p>
        <button class="btn primary" id="unitTestBtn">ابدأ اختبار الوحدة</button>
      </div>
    </div>
    ${bottomNav()}
  `;
  bindNav();
  app().querySelectorAll(".lesson-row").forEach(r =>
    r.onclick = () => Nav.go("lesson", { uid, lid: r.dataset.lid }));
  $("#unitTestBtn").onclick = () => Nav.go("run", {
    kind: "unitTest", uid, title: "اختبار الوحدة " + u.id, color: u.color,
    questions: u.test, xpEach: 5
  });
}

/* ----------------------------- Lesson ----------------------------- */
function renderLesson(uid, lid, tab) {
  const u = COURSE.units.find(x => x.id === uid);
  const l = u.lessons.find(x => x.id === lid);
  setUnitColor(u.color);
  Nav.tab("home");
  tab = tab || "explain";

  const tabs = [
    ["explain", "📖 شرح"], ["vocab", "📝 مفردات"], ["flash", "🃏 بطاقات"],
    ["games", "🎮 ألعاب"], ["quiz", "✅ اختبار"]
  ];
  const tabsHtml = tabs.map(([k, t]) =>
    `<button class="tab ${k === tab ? "active" : ""}" data-tab="${k}">${t}</button>`).join("");

  app().innerHTML = `
    ${topbar(true)}
    <div class="view">
      <div class="lesson-title-bar">
        <div class="pill-tip">الدرس ${esc(l.id)} · صفحة ${esc(l.page)}</div>
        <h2>${esc(l.titleAr)}</h2>
        <div class="en">${esc(l.title)}</div>
      </div>
      <div class="tabs">${tabsHtml}</div>
      <div id="tabBody"></div>
    </div>
    ${bottomNav()}
  `;
  bindNav();
  app().querySelectorAll(".tab").forEach(t =>
    t.onclick = () => { Nav.go("lesson", { uid, lid, tab: t.dataset.tab }, true); });

  const body = $("#tabBody");
  if (tab === "explain") body.innerHTML = tabExplain(l);
  else if (tab === "vocab") { body.innerHTML = tabVocab(l); bindSpeak(body); }
  else if (tab === "flash") renderFlashcards(body, l);
  else if (tab === "games") body.innerHTML = tabGames(uid, lid, l), bindGames(uid, lid, l);
  else if (tab === "quiz") body.innerHTML = tabQuizIntro(uid, lid, l), bindQuizIntro(uid, lid, l);
}

function tabExplain(l) {
  const items = l.explain.map(e => `<div class="explain-item"><span class="dot"></span><div>${e}</div></div>`).join("");
  return `
    <div class="card intro-card"><div style="font-size:14.5px">${esc(l.intro)}</div></div>
    <div class="card">${items}</div>
    <div class="grammar-box">
      <div class="g-head"><span class="ic">💡</span>قاعدة: ${esc(l.grammar.title)}</div>
      <div style="font-size:14px">${esc(l.grammar.ar)}</div>
    </div>`;
}

function tabVocab(l) {
  const rows = l.vocab.map(v => `
    <div class="vocab-item">
      <div class="v-en">${esc(v.en)}</div>
      <div class="v-mid">
        <div class="v-ar">${esc(v.ar)}</div>
        <div class="v-ex">${esc(v.ex)}</div>
      </div>
      <button class="speak-btn" data-say="${esc(v.en)}">🔊</button>
    </div>`).join("");
  return `<div class="pill-tip">اضغط 🔊 لسماع نطق الكلمة</div><div class="vocab-grid">${rows}</div>`;
}
function bindSpeak(scope) {
  scope.querySelectorAll(".speak-btn").forEach(b => b.onclick = () => speak(b.dataset.say));
}

/* --------------------------- Flashcards --------------------------- */
function renderFlashcards(body, l) {
  let i = 0; let order = shuffle(l.vocab);
  body.innerHTML = `
    <div class="flash-wrap">
      <div class="flash-counter">بطاقة <span class="en" id="fcN">1</span> من <span class="en">${order.length}</span></div>
      <div class="flashcard" id="fc">
        <div class="inner">
          <div class="flash-face flash-front">
            <div class="word" id="fcWord"></div>
            <div class="hint">اضغط لرؤية المعنى · 🔊 للنطق</div>
          </div>
          <div class="flash-face flash-back">
            <div class="mean" id="fcMean"></div>
            <div class="ex" id="fcEx"></div>
          </div>
        </div>
      </div>
      <div class="flash-nav">
        <button id="fcPrev">السابق</button>
        <button id="fcSay">🔊 نطق</button>
        <button id="fcNext" class="primary">التالي</button>
      </div>
    </div>`;
  const card = $("#fc");
  function paint() {
    const v = order[i];
    $("#fcWord").textContent = v.en;
    $("#fcMean").textContent = v.ar;
    $("#fcEx").textContent = v.ex;
    $("#fcN").textContent = i + 1;
    card.classList.remove("flipped");
    $("#fcPrev").disabled = i === 0;
    $("#fcNext").textContent = i === order.length - 1 ? "إنهاء ✓" : "التالي";
  }
  card.onclick = () => card.classList.toggle("flipped");
  $("#fcSay").onclick = (e) => { e.stopPropagation(); speak(order[i].en); };
  $("#fcPrev").onclick = () => { if (i > 0) { i--; paint(); } };
  $("#fcNext").onclick = () => {
    if (i < order.length - 1) { i++; paint(); }
    else { Store.addXP(5); toast("أحسنت! +5 نقاط على البطاقات 🃏"); }
  };
  paint();
}

/* ----------------------------- Games menu ----------------------------- */
function tabGames(uid, lid, l) {
  const L = Store.data.lessons[lid] || { games: {} };
  const badge = g => L.games && L.games[g] ? `<span class="weak-tag" style="background:var(--good-bg);color:var(--good)">${L.games[g]}%</span>` : "";
  const tiles = [
    ["mcq", "🎯", "اختر الإجابة الصحيحة", "أسئلة اختيار من متعدّد على الدرس"],
    ["match", "🔗", "طابق الكلمة مع معناها", "وصّل كل كلمة إنجليزية بمعناها"],
    ["fill", "✏️", "أكمل الفراغ", "اكتب الكلمة الناقصة في الجملة"],
    ["order", "🔀", "رتّب الجملة", "أعد ترتيب الكلمات لجملة صحيحة"],
    ["meaning", "🧠", "تحدّي المعاني", "اختر المعنى العربي الصحيح للكلمة"]
  ];
  const html = tiles.map(([g, ic, t, d]) =>
    `<button class="game-tile" data-game="${g}">
      <div class="gt-ic" style="background:var(--unit-soft);color:var(--unit)">${ic}</div>
      <div class="gt-body"><div class="gt-title">${t} ${badge(g)}</div><div class="gt-desc">${d}</div></div>
      <div class="gt-chev">‹</div>
    </button>`).join("");
  return `<div class="pill-tip">٥ ألعاب لكل درس — العب وارفع نسبتك</div><div class="game-menu">${html}</div>`;
}
function bindGames(uid, lid, l) {
  $("#tabBody").querySelectorAll(".game-tile").forEach(t => {
    t.onclick = () => startGame(t.dataset.game, uid, lid, l);
  });
}
function startGame(game, uid, lid, l) {
  const u = COURSE.units.find(x => x.id === uid);
  if (game === "match") return Nav.go("run", { kind: "match", game, uid, lid, color: u.color, vocab: l.vocab, title: "طابق الكلمة مع معناها" });

  let questions, title;
  if (game === "mcq") { questions = l.ex.filter(e => e.type === "mcq"); title = "اختر الإجابة الصحيحة"; }
  else if (game === "fill") { questions = l.ex.filter(e => e.type === "fill"); title = "أكمل الفراغ"; }
  else if (game === "order") { questions = l.ex.filter(e => e.type === "order"); title = "رتّب الجملة"; }
  else if (game === "meaning") { questions = buildMeaningQuestions(l); title = "تحدّي المعاني"; }

  if (!questions || !questions.length) { toast("لا توجد أسئلة لهذه اللعبة"); return; }
  Nav.go("run", { kind: "game", game, uid, lid, title, color: u.color, questions, xpEach: 3, vocabRef: l.vocab });
}
function buildMeaningQuestions(l) {
  const pool = l.vocab;
  return shuffle(pool).map(v => {
    const others = shuffle(pool.filter(x => x.ar !== v.ar)).slice(0, 3).map(x => x.ar);
    const opts = shuffle([v.ar, ...others]);
    return { type: "meaning", en: v.en, q: v.en, options: opts, answer: opts.indexOf(v.ar), ar: "تذكّر: " + v.en + " = " + v.ar };
  });
}

/* --------------------------- Quiz intro --------------------------- */
function tabQuizIntro(uid, lid, l) {
  const L = Store.data.lessons[lid] || {};
  const best = L.quiz || 0;
  return `<div class="card" style="text-align:center">
    <div style="font-size:40px">✅</div>
    <h2 style="margin:8px 0 4px">اختبار قصير للدرس</h2>
    <p style="color:var(--muted);font-size:14px;margin:0 0 6px">${l.quiz.length} أسئلة سريعة لقياس فهمك للدرس</p>
    ${best ? `<div class="pill-tip">أفضل نتيجة سابقة: ${best}%</div>` : ""}
    <div style="margin-top:14px"><button class="btn primary" id="startQuiz">ابدأ الاختبار</button></div>
  </div>`;
}
function bindQuizIntro(uid, lid, l) {
  $("#startQuiz").onclick = () => Nav.go("run", {
    kind: "quiz", uid, lid, title: "اختبار: " + l.titleAr,
    color: COURSE.units.find(x => x.id === uid).color, questions: l.quiz, xpEach: 4, vocabRef: l.vocab
  });
}

/* ----------------------------- Run (quiz/test/game) ----------------------------- */
let RUN = null;
function renderRun(params) {
  setUnitColor(params.color);
  RUN = {
    params, i: 0, correct: 0, total: (params.questions || []).length,
    wrongList: [], answered: false
  };
  if (params.kind === "match") return renderMatch(params);
  paintQuestion();
}

function runShell(inner) {
  const p = RUN.params;
  app().innerHTML = `
    ${topbar(true)}
    <div class="view">
      <div class="lesson-title-bar"><h2 style="font-size:18px">${esc(p.title)}</h2></div>
      <div class="progressbar"><i id="runBar" style="width:${(RUN.i / RUN.total) * 100}%"></i></div>
      <div id="runBody">${inner}</div>
    </div>
  `;
  // back goes to lesson/unit, not previous question
  $(".back-btn").onclick = () => Nav.back();
}

function paintQuestion() {
  if (RUN.i >= RUN.total) return finishRun();
  const q = RUN.params.questions[RUN.i];
  RUN.answered = false;
  let inner = `<div class="q-card">
    <div class="q-meta">سؤال <span class="en">${RUN.i + 1}</span> / <span class="en">${RUN.total}</span></div>`;

  if (q.type === "mcq" || q.type === "meaning") {
    const qline = q.type === "meaning"
      ? `ما معنى: <span class="en">${esc(q.en)}</span> ؟`
      : bidi(q.q);
    inner += `<div class="q-text">${qline}</div><div class="options" id="opts">`;
    q.options.forEach((o, idx) => {
      inner += `<button class="opt" data-i="${idx}"><span class="mark"></span><span>${q.type === "meaning" ? esc(o) : esc(o)}</span></button>`;
    });
    inner += `</div>`;
  } else if (q.type === "fill") {
    inner += `<div class="q-text">${bidi(q.text.replace("___", "______"))}</div>
      <input class="fill-input" id="fillIn" placeholder="اكتب الكلمة هنا" autocomplete="off" autocapitalize="off" spellcheck="false" />
      <button class="check-btn" id="fillCheck">تحقّق</button>`;
  } else if (q.type === "order") {
    const words = shuffle(q.answer.split(" "));
    inner += `<div class="q-text" style="font-size:15px;color:var(--muted)">رتّب الكلمات لتكوين جملة صحيحة:</div>
      <div class="order-target" id="orderTarget"></div>
      <div class="order-bank" id="orderBank">${words.map((w, k) => `<button class="word-chip" data-w="${esc(w)}" data-k="${k}">${esc(w)}</button>`).join("")}</div>
      <button class="check-btn" id="orderCheck">تحقّق</button>`;
  }

  inner += `<div class="feedback" id="fb"></div>
    <button class="next-btn" id="nextBtn">${RUN.i === RUN.total - 1 ? "إنهاء وعرض النتيجة" : "السؤال التالي ←"}</button>
  </div>`;

  runShell(inner);
  $("#runBar").style.width = (RUN.i / RUN.total) * 100 + "%";

  if (q.type === "mcq" || q.type === "meaning") bindMCQ(q);
  else if (q.type === "fill") bindFill(q);
  else if (q.type === "order") bindOrder(q);
}

function showFeedback(ok, q) {
  const fb = $("#fb");
  fb.className = "feedback show " + (ok ? "ok" : "no");
  fb.innerHTML = `<b>${ok ? "إجابة صحيحة! 🎉" : "إجابة غير صحيحة"}</b>${q.ar ? esc(q.ar) : ""}`;
  $("#nextBtn").classList.add("show");
  RUN.answered = true;
}
function recordAnswer(ok, q) {
  if (ok) { RUN.correct++; if (q.en) Store.healWeak(q.en); }
  else {
    if (q.en) { const v = (RUN.params.vocabRef || []).find(x => x.en === q.en) || {}; Store.addWeak(q.en, v.ar || q.ar || "", RUN.params.lid || ""); }
    RUN.wrongList.push(q);
  }
}

function bindMCQ(q) {
  const opts = document.querySelectorAll("#opts .opt");
  opts.forEach(o => o.onclick = () => {
    if (RUN.answered) return;
    const i = +o.dataset.i, ok = i === q.answer;
    opts.forEach(x => x.classList.add("disabled"));
    o.classList.add(ok ? "correct" : "wrong");
    o.querySelector(".mark").textContent = ok ? "✓" : "✕";
    if (!ok) { opts[q.answer].classList.add("correct"); opts[q.answer].querySelector(".mark").textContent = "✓"; }
    recordAnswer(ok, q); showFeedback(ok, q);
    if (q.type === "meaning") speak(q.en);
  });
  bindNext();
}
function bindFill(q) {
  const inp = $("#fillIn");
  const submit = () => {
    if (RUN.answered) return;
    const val = inp.value.trim().toLowerCase().replace(/[.!?]$/, "");
    const ok = val === q.answer.toLowerCase();
    inp.style.borderColor = ok ? "var(--good)" : "var(--bad)";
    inp.style.background = ok ? "var(--good-bg)" : "var(--bad-bg)";
    inp.disabled = true; $("#fillCheck").style.display = "none";
    const fb = $("#fb");
    fb.className = "feedback show " + (ok ? "ok" : "no");
    fb.innerHTML = `<b>${ok ? "صحيح! 🎉" : "الإجابة الصحيحة: " + esc(q.answer)}</b>${esc(q.ar || "")}`;
    $("#nextBtn").classList.add("show"); RUN.answered = true;
    recordAnswer(ok, q);
  };
  $("#fillCheck").onclick = submit;
  inp.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
  setTimeout(() => inp.focus(), 100);
  bindNext();
}
function bindOrder(q) {
  const target = $("#orderTarget"), bank = $("#orderBank");
  bank.querySelectorAll(".word-chip").forEach(chip => chip.onclick = () => {
    if (RUN.answered) return;
    if (chip.parentElement === bank) target.appendChild(chip);
    else bank.appendChild(chip);
  });
  $("#orderCheck").onclick = () => {
    if (RUN.answered) return;
    const built = [...target.querySelectorAll(".word-chip")].map(c => c.dataset.w).join(" ");
    if (!built) { toast("اختر الكلمات أولاً"); return; }
    const ok = built.toLowerCase() === q.answer.toLowerCase();
    $("#orderCheck").style.display = "none";
    target.querySelectorAll(".word-chip").forEach(c => c.style.pointerEvents = "none");
    bank.querySelectorAll(".word-chip").forEach(c => c.style.pointerEvents = "none");
    const fb = $("#fb");
    fb.className = "feedback show " + (ok ? "ok" : "no");
    fb.innerHTML = `<b>${ok ? "ترتيب صحيح! 🎉" : "الترتيب الصحيح:"}</b>${ok ? "" : '<span class="en">' + esc(q.answer) + "</span>"}`;
    $("#nextBtn").classList.add("show"); RUN.answered = true;
    recordAnswer(ok, q);
    if (ok) speak(q.answer);
  };
  bindNext();
}
function bindNext() {
  $("#nextBtn").onclick = () => { RUN.i++; paintQuestion(); };
}

/* ----------------------------- Matching ----------------------------- */
function renderMatch(p) {
  const pairs = shuffle(p.vocab).slice(0, Math.min(5, p.vocab.length));
  RUN.total = pairs.length; RUN.correct = pairs.length; // matching success measured by accuracy below
  let matched = 0, sel = null, tries = 0, miss = 0;
  const left = shuffle(pairs), right = shuffle(pairs);
  const leftH = left.map((v, i) => `<button class="match-item en-side" data-id="${v.en}">${esc(v.en)}</button>`).join("");
  const rightH = right.map((v, i) => `<button class="match-item" data-id="${v.en}">${esc(v.ar)}</button>`).join("");

  runShell(`<div class="pill-tip">اختر كلمة ثم معناها لتوصيلهما</div>
    <div class="match-grid">
      <div class="match-col" id="mLeft">${leftH}</div>
      <div class="match-col" id="mRight">${rightH}</div>
    </div>`);
  $("#runBar").style.width = "0%";

  function clickItem(elm, side) {
    if (elm.classList.contains("matched")) return;
    if (!sel) { sel = { elm, side, id: elm.dataset.id }; elm.classList.add("selected"); return; }
    if (sel.side === side) { sel.elm.classList.remove("selected"); sel = { elm, side, id: elm.dataset.id }; elm.classList.add("selected"); return; }
    // compare
    tries++;
    const v = (p.vocab.find(x => x.en === elm.dataset.id)) || {};
    if (sel.id === elm.dataset.id) {
      elm.classList.add("matched"); sel.elm.classList.add("selected"); sel.elm.classList.add("matched"); sel.elm.classList.remove("selected");
      matched++; speak(elm.dataset.id);
      Store.healWeak(elm.dataset.id);
      $("#runBar").style.width = (matched / pairs.length) * 100 + "%";
      if (matched === pairs.length) {
        const pct = Math.round((pairs.length / tries) * 100);
        setTimeout(() => finishMatch(Math.min(100, pct), miss), 450);
      }
    } else {
      miss++;
      const a = elm, b = sel.elm;
      a.classList.add("miss"); b.classList.add("miss");
      const en = side === "L" ? elm.dataset.id : sel.id;
      const wv = p.vocab.find(x => x.en === en) || {};
      Store.addWeak(en, wv.ar || "", p.lid || "");
      setTimeout(() => { a.classList.remove("miss"); b.classList.remove("miss", "selected"); }, 450);
    }
    sel = null;
  }
  $("#mLeft").querySelectorAll(".match-item").forEach(e => e.onclick = () => clickItem(e, "L"));
  $("#mRight").querySelectorAll(".match-item").forEach(e => e.onclick = () => clickItem(e, "R"));
}
function finishMatch(pct, miss) {
  const p = RUN.params;
  Store.setGame(p.lid, "match", pct);
  Store.addXP(p.vocab.length);
  showResult(pct, RUN.total, RUN.total, [], { ...p, kind: "game" }, "match");
}

/* ----------------------------- Finish & Result ----------------------------- */
function finishRun() {
  const p = RUN.params;
  const pct = Math.round((RUN.correct / RUN.total) * 100);
  const xp = RUN.correct * (p.xpEach || 3);
  Store.addXP(xp);
  if (p.kind === "quiz") Store.setQuiz(p.lid, pct);
  else if (p.kind === "game") Store.setGame(p.lid, p.game, pct);
  else if (p.kind === "unitTest") Store.setUnit(p.uid, pct);
  showResult(pct, RUN.correct, RUN.total, RUN.wrongList, p, p.game);
}

function showResult(pct, correct, total, wrongList, p, game) {
  setUnitColor(p.color);
  const pass = pct >= 60, great = pct >= 90;
  const C = 2 * Math.PI * 70;
  const off = C * (1 - pct / 100);
  const color = pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)";
  let msg = great ? "أداء ممتاز! إتقان رائع 🌟" : pass ? "أحسنت! تقدّم جيّد، واصل 💪" : "لا بأس — المراجعة طريق الإتقان 📚";

  const wrongHtml = wrongList && wrongList.length ? `
    <div class="section-h" style="margin-top:18px"><h2 style="font-size:15px">راجع هذه:</h2><span class="rule"></span></div>
    ${wrongList.map(q => {
    const ans = q.type === "order" ? q.answer
      : q.type === "fill" ? q.answer
        : q.options[q.answer];
    const label = q.type === "meaning" ? q.en + " = " + q.options[q.answer] : ans;
    return `<div class="weak-item"><span class="wi-en">${esc(String(label))}</span><span class="weak-tag bad">راجِع</span></div>`;
  }).join("")}` : "";

  app().innerHTML = `
    ${topbar(true)}
    <div class="view">
      <div class="result">
        <div class="ring-wrap">
          <svg viewBox="0 0 160 160" width="168" height="168">
            <circle cx="80" cy="80" r="70" fill="none" stroke="var(--line)" stroke-width="14"/>
            <circle cx="80" cy="80" r="70" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round"
              stroke-dasharray="${C}" stroke-dashoffset="${C}" transform="rotate(-90 80 80)" id="ring"/>
          </svg>
          <div class="pct"><div><div class="big">${pct}%</div><div class="lbl">النتيجة</div></div></div>
        </div>
        <h2>${great ? "🏆 " : pass ? "🎉 " : "📚 "}${esc(p.title)}</h2>
        <div class="msg">${msg}</div>
        <div class="badge-line">
          <div class="mini-stat good"><div class="v">${correct}</div><div class="k">صحيحة</div></div>
          <div class="mini-stat bad"><div class="v">${total - correct}</div><div class="k">خاطئة</div></div>
          <div class="mini-stat"><div class="v">+${(game === "match") ? (p.vocab ? p.vocab.length : 0) : correct * (p.xpEach || 3)}</div><div class="k">نقاط</div></div>
        </div>
        ${wrongHtml}
        <div class="result-actions">
          <button class="btn primary" id="retryBtn">إعادة المحاولة 🔄</button>
          <button class="btn ghost" id="backLessonBtn">العودة</button>
        </div>
      </div>
    </div>
    ${bottomNav()}
  `;
  bindNav();
  setTimeout(() => { const r = $("#ring"); if (r) r.style.transition = "stroke-dashoffset 1s ease", r.style.strokeDashoffset = off; }, 60);
  if (great) confetti();

  $("#retryBtn").onclick = () => {
    if (p.kind === "match") renderRun(p);
    else Nav.go("run", p, true);
  };
  $("#backLessonBtn").onclick = () => Nav.back();
}

/* ----------------------------- Progress ----------------------------- */
function renderProgress() {
  setUnitColor("#1F4E79");
  Nav.tab("progress");
  const overall = overallProgress();
  const lv = level();
  const C = 2 * Math.PI * 64, off = C * (1 - overall / 100);

  const unitRows = COURSE.units.map(u => {
    const p = unitProgress(u);
    return `<div class="unit-prog-row">
      <span class="upr-dot" style="background:${u.color}"></span>
      <span class="upr-name">${esc(u.titleAr)}</span>
      <span class="upr-bar"><i style="width:${p}%;background:${u.color}"></i></span>
      <span class="upr-pct">${p}%</span>
    </div>`;
  }).join("");

  const weakWords = Object.entries(Store.data.weak).sort((a, b) => b[1].miss - a[1].miss).slice(0, 12);
  const weakHtml = weakWords.length ? weakWords.map(([en, w]) =>
    `<div class="weak-item">
      <div><div class="wi-en">${esc(en)}</div><div class="wi-ar">${esc(w.ar || "")}</div></div>
      <button class="speak-btn" data-say="${esc(en)}">🔊</button>
    </div>`).join("")
    : `<div class="empty-note">رائع! لا توجد كلمات صعبة مسجّلة بعد.<br>كل ما تخطئ في كلمة ستظهر هنا للمراجعة.</div>`;

  // weak lessons (started but < 60)
  const weakLessons = [];
  COURSE.units.forEach(u => u.lessons.forEach(l => {
    const lp = lessonProgress(l);
    if (lp > 0 && lp < 60) weakLessons.push({ l, u, lp });
  }));
  const weakLessonsHtml = weakLessons.length ? weakLessons.map(({ l, u, lp }) =>
    `<button class="weak-item" data-uid="${u.id}" data-lid="${l.id}" style="cursor:pointer;width:100%;text-align:right">
      <div><div class="wi-en" style="font-family:var(--ff);color:var(--ink)">${esc(l.titleAr)}</div><div class="wi-ar">الوحدة ${u.id} · ${lp}%</div></div>
      <span class="weak-tag bad">يحتاج تدريب</span>
    </button>`).join("") : `<div class="empty-note">لا توجد دروس تحتاج مراجعة حالياً 👍</div>`;

  app().innerHTML = `
    ${topbar(false)}
    <div class="view">
      <div class="section-h"><h2>تقدّمي</h2><span class="rule"></span></div>
      <div class="big-ring-card">
        <div class="ring-wrap" style="width:150px;height:150px;margin:0 auto 8px;position:relative">
          <svg viewBox="0 0 150 150" width="150" height="150">
            <circle cx="75" cy="75" r="64" fill="none" stroke="var(--line)" stroke-width="13"/>
            <circle cx="75" cy="75" r="64" fill="none" stroke="var(--primary)" stroke-width="13" stroke-linecap="round"
              stroke-dasharray="${C}" stroke-dashoffset="${off}" transform="rotate(-90 75 75)"/>
          </svg>
          <div class="pct" style="position:absolute;inset:0;display:grid;place-items:center">
            <div><div class="big" style="font-size:34px;font-weight:900;font-family:var(--en)">${overall}%</div><div class="lbl" style="font-size:11px;color:var(--muted)">الإنجاز الكلّي</div></div>
          </div>
        </div>
        <div class="badge-line" style="margin-top:6px">
          <div class="mini-stat"><div class="v">${lv.lvl}</div><div class="k">المستوى</div></div>
          <div class="mini-stat"><div class="v">${Store.data.xp}</div><div class="k">نقاط الخبرة</div></div>
          <div class="mini-stat"><div class="v">${Store.data.streak}🔥</div><div class="k">أيام متتالية</div></div>
        </div>
      </div>

      <div class="section-h"><h2 style="font-size:15px">تقدّم الوحدات</h2><span class="rule"></span></div>
      ${unitRows}

      <div class="section-h"><h2 style="font-size:15px">كلمات تحتاج مراجعة</h2><span class="rule"></span></div>
      ${weakHtml}

      <div class="section-h"><h2 style="font-size:15px">دروس تحتاج تدريب</h2><span class="rule"></span></div>
      ${weakLessonsHtml}

      <div style="margin-top:22px;text-align:center">
        <button class="btn ghost" id="resetBtn" style="display:inline-block;padding:10px 20px;color:var(--bad)">تصفير كل التقدّم</button>
      </div>
    </div>
    ${bottomNav()}
  `;
  bindNav();
  bindSpeak(app());
  app().querySelectorAll(".weak-item[data-lid]").forEach(b =>
    b.onclick = () => Nav.go("lesson", { uid: +b.dataset.uid, lid: b.dataset.lid, tab: "games" }));
  $("#resetBtn").onclick = () => {
    if (confirm("هل تريد تصفير كل تقدّمك ونقاطك؟ لا يمكن التراجع.")) {
      Store.reset(); toast("تم تصفير التقدّم"); Nav.stack = [{ view: "home" }]; render();
    }
  };
}

/* ----------------------------- Chrome ----------------------------- */
function topbar(back) {
  return `<div class="topbar">
    ${back ? `<button class="back-btn">›</button>` : `<div class="brand"><span class="logo">${qamariya(34, 1)}</span><div><b>مصباح</b><span>الإنجليزية · ثامن</span></div></div>`}
    <div class="spacer"></div>
    <div class="xp-pill"><span class="star">★</span> <span class="en">${Store.data.xp}</span></div>
  </div>`;
}
function bottomNav() {
  return `<div class="bottom-nav">
    <button class="nav-item" data-tab="home"><span class="ic">🏠</span>الرئيسية</button>
    <button class="nav-item" data-tab="progress"><span class="ic">📊</span>تقدّمي</button>
  </div>`;
}
function bindNav() {
  app().querySelectorAll(".back-btn").forEach(b => b.onclick = () => Nav.back());
  app().querySelectorAll(".nav-item").forEach(n => n.onclick = () => {
    const t = n.dataset.tab;
    if (t === "home") { Nav.stack = [{ view: "home" }]; render(); }
    else if (t === "progress") { Nav.go("progress"); }
  });
}

/* ----------------------------- Boot ----------------------------- */
Store.load();
Nav.stack = [{ view: "home" }];
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { }));
}
