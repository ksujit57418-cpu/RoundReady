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
  <div class="interview-modal" id="interview-modal" aria-hidden="true">
    <div class="interview-room" role="dialog" aria-modal="true" aria-labelledby="room-title">
      <header class="room-header"><div><p class="eyebrow">MOCK INTERVIEW · BACKEND DEVELOPER</p><h2 id="room-title">Your interview room</h2></div><div class="room-meta"><span class="live-dot"></span><span id="timer">00:00</span><button class="close-room" id="close-room" aria-label="Close interview">×</button></div></header>
      <div class="room-layout">
        <section class="camera-panel"><div class="camera-preview" id="camera-preview"><div class="camera-placeholder"><span>◉</span><strong>Camera preview</strong><small>Your video will appear here</small></div><video id="video" autoplay muted playsinline></video><div class="camera-status" id="camera-status">Camera is off</div></div><div class="room-controls"><button class="room-control" id="camera-toggle">◉ <span>Camera</span></button><button class="room-control" id="mic-toggle">♩ <span>Microphone</span></button><button class="room-control" id="screen-toggle">▣ <span>Notes</span></button></div></section>
        <section class="question-panel"><div class="question-count">QUESTION 01 <span>OF 05</span></div><h3>Tell me about a backend project you are proud of.</h3><p>Take a moment to think. There is no perfect answer. Speak naturally and use a clear structure.</p><div class="answer-box"><div class="answer-label"><span>YOUR ANSWER</span><span id="answer-time">00:00</span></div><textarea id="answer" placeholder="Type your answer, or use the microphone to speak..."></textarea><div class="answer-bottom"><span class="recording-state" id="recording-state">● Ready when you are</span><button class="record-button" id="record-button">● Start answering</button></div></div><button class="next-question" id="next-question">Submit answer <span>→</span></button></section>
      </div>
    </div>
  </div>
  <div class="feedback-modal" id="feedback-modal" aria-hidden="true"><div class="feedback-card"><button class="close-room" id="close-feedback" aria-label="Close feedback">×</button><p class="eyebrow">SESSION COMPLETE</p><h2>Good work showing up.</h2><p class="feedback-copy">Your practice session is saved locally. AI feedback will appear here once the feedback service is connected.</p><div class="feedback-stats"><div><strong>01</strong><small>Question answered</small></div><div><strong>10 min</strong><small>Recommended practice</small></div><div><strong>Private</strong><small>Stored on this device</small></div></div><button class="primary-button" id="done-feedback">Back to overview</button></div></div>
  <div class="toast" id="toast" role="status"></div>
`

const toast = document.querySelector('#toast')
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 3200) }
const interviewModal = document.querySelector('#interview-modal')
const feedbackModal = document.querySelector('#feedback-modal')
const video = document.querySelector('#video')
let mediaStream
let sessionTimer
let seconds = 0
let sessionId
let questionNumber = 1
const apiUrl = 'http://localhost:8787/api'
const formatTime = (value) => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`
const updateQuestion = (question, number, total = 5) => { document.querySelector('.question-count').innerHTML = `QUESTION ${String(number).padStart(2, '0')} <span>OF ${String(total).padStart(2, '0')}</span>`; document.querySelector('.question-panel h3').textContent = question; document.querySelector('#answer').value = ''; document.querySelector('#recording-state').textContent = '● Ready when you are'; document.querySelector('#recording-state').classList.remove('is-recording'); document.querySelector('#record-button').textContent = '● Start answering' }
const openInterview = async () => {
  try { const response = await fetch(`${apiUrl}/interview/sessions`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role: 'Backend Developer', level: 'mid' }) }); if (response.ok) { const session = await response.json(); sessionId = session.sessionId; questionNumber = session.questionNumber; updateQuestion(session.question, session.questionNumber, session.totalQuestions) } else throw new Error('Session unavailable') } catch { sessionId = undefined; updateQuestion('Tell me about a backend project you are proud of.', 1); showToast('Backend is offline. You can still practice locally.') }
  interviewModal.classList.add('open'); interviewModal.setAttribute('aria-hidden', 'false'); seconds = 0; document.querySelector('#timer').textContent = '00:00'; sessionTimer = window.setInterval(() => { seconds += 1; document.querySelector('#timer').textContent = formatTime(seconds) }, 1000); await requestMedia('camera', true)
}
const closeInterview = () => { window.clearInterval(sessionTimer); mediaStream?.getTracks().forEach((track) => track.stop()); mediaStream = undefined; video.srcObject = null; interviewModal.classList.remove('open'); interviewModal.setAttribute('aria-hidden', 'true') }
const requestMedia = async (kind, keepStream = false) => {
  if (!navigator.mediaDevices?.getUserMedia) { showToast('Camera and microphone are not available in this browser.'); return }
  try { const stream = await navigator.mediaDevices.getUserMedia({ video: kind === 'camera', audio: kind === 'microphone' }); if (keepStream) { mediaStream = stream; video.srcObject = stream; document.querySelector('#camera-preview').classList.add('has-video'); document.querySelector('#camera-status').textContent = 'Camera is live' } else { stream.getTracks().forEach((track) => track.stop()) } showToast(`${kind === 'camera' ? 'Camera' : 'Microphone'} access is ready.`) } catch { showToast(`${kind === 'camera' ? 'Camera' : 'Microphone'} access was not granted.`) }
}
document.querySelector('#start-session').addEventListener('click', openInterview)
document.querySelector('#close-room').addEventListener('click', closeInterview)
document.querySelector('#camera-toggle').addEventListener('click', () => { if (mediaStream) { const track = mediaStream.getVideoTracks()[0]; track.enabled = !track.enabled; document.querySelector('#camera-status').textContent = track.enabled ? 'Camera is live' : 'Camera is off'; document.querySelector('#camera-toggle').classList.toggle('control-off', !track.enabled) } else requestMedia('camera', true) })
document.querySelector('#mic-toggle').addEventListener('click', async () => { if (mediaStream?.getAudioTracks().length) { const track = mediaStream.getAudioTracks()[0]; track.enabled = !track.enabled; document.querySelector('#mic-toggle').classList.toggle('control-off', !track.enabled); showToast(track.enabled ? 'Microphone is on.' : 'Microphone is muted.') } else await requestMedia('microphone') })
document.querySelector('#screen-toggle').addEventListener('click', () => showToast('Notes panel is ready for your interview outline.'))
document.querySelector('#record-button').addEventListener('click', () => { document.querySelector('#recording-state').textContent = '● Listening to your answer'; document.querySelector('#recording-state').classList.add('is-recording'); document.querySelector('#record-button').textContent = '■ Stop answering'; showToast('Take your time. RoundReady is listening.') })
document.querySelector('#next-question').addEventListener('click', async () => {
  const answer = document.querySelector('#answer').value.trim()
  if (!answer) { showToast('Please add an answer before submitting.'); return }
  if (!sessionId) { closeInterview(); feedbackModal.classList.add('open'); feedbackModal.setAttribute('aria-hidden', 'false'); return }
  const submitButton = document.querySelector('#next-question'); submitButton.disabled = true; submitButton.textContent = 'Saving answer...'
  try { const response = await fetch(`${apiUrl}/interview/sessions/${sessionId}/answers`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answer }) }); if (!response.ok) throw new Error('Answer could not be saved'); const result = await response.json(); if (result.nextQuestion) { questionNumber = result.questionNumber; updateQuestion(result.nextQuestion, result.questionNumber); showToast('Answer saved. Here is your next question.') } else { closeInterview(); feedbackModal.classList.add('open'); feedbackModal.setAttribute('aria-hidden', 'false') } } catch { showToast('Could not reach the backend. Your answer was not submitted.') } finally { submitButton.disabled = false; submitButton.innerHTML = 'Submit answer <span>→</span>' }
})
document.querySelector('#close-feedback').addEventListener('click', () => { feedbackModal.classList.remove('open'); feedbackModal.setAttribute('aria-hidden', 'true') })
document.querySelector('#done-feedback').addEventListener('click', () => { feedbackModal.classList.remove('open'); feedbackModal.setAttribute('aria-hidden', 'true') })
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => { showToast(button.dataset.action === 'speak' ? 'Speaking practice is ready to begin.' : 'Interview room is ready to begin.') }))
document.querySelectorAll('.topic').forEach((topic) => topic.addEventListener('click', () => { document.querySelector('.active-topic').classList.remove('active-topic'); topic.classList.add('active-topic'); showToast(`${topic.dataset.topic} coach selected.`) }))
document.querySelector('#tip-action').addEventListener('click', () => { requestMedia('microphone'); showToast('Say it in your own words. RoundReady will listen for clarity.') })
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => { document.querySelector('.nav-item.active')?.classList.remove('active'); item.classList.add('active') }))
