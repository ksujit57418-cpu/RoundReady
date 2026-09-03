import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <a class="brand" href="#top" aria-label="RoundReady home"><span class="brand-mark">✦</span><span>Round<em>Ready</em></span></a>
      <div class="profile"><div class="avatar">AK</div><div><strong>Arjun Kumar</strong><small>Level 3 learner</small></div><span class="more">•••</span></div>
      <nav aria-label="Main navigation">
        <p class="nav-label">Workspace</p>
        <a class="nav-item active" href="#dashboard"><span>◈</span> Overview</a>
        <a class="nav-item" href="#interview"><span>◌</span> Mock interview <b>3</b></a>
        <a class="nav-item" href="#coach"><span>⌁</span> Concept coach</a>
        <a class="nav-item" href="#speak"><span>◉</span> Speak better</a>
        <p class="nav-label spaced">Your progress</p>
        <a class="nav-item" href="#history"><span>◷</span> Session history</a>
        <a class="nav-item" href="#goals"><span>◎</span> Goals</a>
      </nav>
      <div class="sidebar-bottom"><div class="open-source"><span>⌘</span><div><strong>Open source</strong><small>Built in public</small></div></div><a class="nav-item" href="#settings"><span>⚙</span> Settings</a></div>
    </aside>
    <main class="main-content" id="top">
      <header class="topbar"><div class="breadcrumb">Workspace <span>/</span> <strong>Overview</strong></div><div class="top-actions"><button class="icon-button" aria-label="Notifications">♢<i></i></button><button class="help-button">? <span>Help center</span></button></div></header>
      <div class="content-wrap" id="dashboard">
        <section class="welcome"><div><p class="eyebrow">TUESDAY, 02 SEPTEMBER 2026</p><h1>Good morning, Arjun <span>↗</span></h1><p class="intro">Small practice today. Stronger confidence tomorrow.</p></div><button class="primary-button" id="start-session">＋ Start a session</button></section>
        <section class="streak-row"><div class="streak-card"><div class="flame">✦</div><div><strong>7 day streak</strong><p>Keep your rhythm going</p></div><div class="week"><span class="done">M</span><span class="done">T</span><span class="done">W</span><span class="today">T</span><span>F</span><span>S</span><span>S</span></div></div><div class="quote-card"><span class="quote-mark">“</span><p>Clarity comes from practice,<br><strong>not perfection.</strong></p><span class="quote-by">— RoundReady</span></div></section>
        <section class="section-heading"><div><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h2>Your practice room</h2></div><a href="#history" class="text-link">View all activity <span>→</span></a></section>
        <section class="practice-grid">
          <article class="practice-card interview-card"><div class="card-top"><span class="pill coral">INTERVIEW PREP</span><button class="dots" aria-label="More interview options">•••</button></div><h3>Backend Developer<br>at a startup</h3><p>System design · Java · 30 min</p><div class="card-footer"><div class="progress-ring"><span>42%</span></div><div><small>Last practiced</small><strong>Yesterday, 6:40 PM</strong></div><button class="round-arrow" data-action="interview" aria-label="Continue interview">→</button></div></article>
          <article class="practice-card english-card"><div class="card-top"><span class="pill mint">SPEAK BETTER</span><button class="dots" aria-label="More speaking options">•••</button></div><h3>Introduce yourself<br>with confidence</h3><p>Fluency · Pronunciation · 10 min</p><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="card-footer"><div><small>Last practiced</small><strong>Monday, 8:15 PM</strong></div><button class="round-arrow" data-action="speak" aria-label="Continue speaking practice">→</button></div></article>
        </section>
        <section class="bottom-grid"><div class="section-heading compact"><div><p class="eyebrow">LEARN SOMETHING NEW</p><h2>Concept coach</h2></div><a href="#coach" class="text-link">Browse topics <span>→</span></a></div><div class="topics"><button class="topic active-topic" data-topic="Java"><span class="topic-icon java">☕</span><span><strong>Java essentials</strong><small>12 lessons · 68% done</small></span><span class="topic-arrow">↗</span></button><button class="topic" data-topic="System design"><span class="topic-icon system">⌘</span><span><strong>System design basics</strong><small>8 lessons · Not started</small></span><span class="topic-arrow">↗</span></button><button class="topic" data-topic="SQL"><span class="topic-icon sql">▦</span><span><strong>SQL for interviews</strong><small>10 lessons · 20% done</small></span><span class="topic-arrow">↗</span></button></div><aside class="tip-card"><span class="tip-icon">✧</span><p><strong>Today's nudge</strong><br><span id="tip-text">Try explaining one Java concept out loud. Teaching is the best test of understanding.</span></p><button id="tip-action" class="tip-button">Try it →</button></aside></section>
        <footer><span>Private by default · Your recordings stay on your device</span><span>Made for practice, not judgement <b>♥</b></span></footer>
      </div>
    </main>
  </div>
  <div class="toast" id="toast" role="status"></div>
`

const toast = document.querySelector('#toast')
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 3200) }
const requestMedia = async (kind) => {
  if (!navigator.mediaDevices?.getUserMedia) { showToast('Camera and microphone are not available in this browser.'); return }
  try { const stream = await navigator.mediaDevices.getUserMedia({ video: kind === 'camera', audio: kind === 'microphone' }); stream.getTracks().forEach((track) => track.stop()); showToast(`${kind === 'camera' ? 'Camera' : 'Microphone'} access is ready. Your device stays in control.`) } catch { showToast(`${kind === 'camera' ? 'Camera' : 'Microphone'} access was not granted. You can enable it when you start.`) }
}
document.querySelector('#start-session').addEventListener('click', () => { requestMedia('camera'); requestMedia('microphone'); showToast('Preparing your interview room...') })
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => { showToast(button.dataset.action === 'speak' ? 'Speaking practice is ready to begin.' : 'Interview room is ready to begin.') }))
document.querySelectorAll('.topic').forEach((topic) => topic.addEventListener('click', () => { document.querySelector('.active-topic').classList.remove('active-topic'); topic.classList.add('active-topic'); showToast(`${topic.dataset.topic} coach selected.`) }))
document.querySelector('#tip-action').addEventListener('click', () => { requestMedia('microphone'); showToast('Say it in your own words. RoundReady will listen for clarity.') })
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => { document.querySelector('.nav-item.active')?.classList.remove('active'); item.classList.add('active') }))
