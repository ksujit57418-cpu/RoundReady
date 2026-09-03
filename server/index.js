import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'

const app = express()
const port = Number(process.env.PORT || 8787)
const sessions = new Map()

app.use(cors())
app.use(express.json({ limit: '100kb' }))

const questions = [
  'Tell me about a backend project you are proud of.',
  'How would you design a reliable URL shortener?',
  'What is the difference between an interface and an abstract class in Java?',
  'How do you investigate a slow API in production?',
  'Tell me about a time you learned from a difficult bug.'
]

const scoreAnswer = (answer) => {
  const words = answer.split(/\s+/).filter(Boolean)
  const sentences = answer.split(/[.!?]+/).filter((sentence) => sentence.trim()).length
  const hasStructure = /first|then|finally|because|result|impact|situation|task|action/i.test(answer)
  const detailScore = Math.min(5, Math.max(1, Math.ceil(words.length / 20)))
  const structureScore = hasStructure ? 5 : Math.min(4, Math.max(2, sentences))
  const clarityScore = words.length >= 35 ? 5 : words.length >= 18 ? 4 : words.length >= 8 ? 3 : 2
  return {
    clarity: clarityScore,
    structure: structureScore,
    detail: detailScore,
    summary: clarityScore >= 4 ? 'Clear response with a useful level of detail.' : 'Good start. Add a little more context and a concrete result.',
    nextTip: hasStructure ? 'Keep using a clear beginning, middle, and result.' : 'Try the STAR structure: situation, task, action, and result.'
  }
}

app.get('/', (_request, response) => {
  response.json({ service: 'RoundReady API', status: 'running', health: '/api/health' })
})

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'roundready-api' })
})

app.post('/api/interview/sessions', (request, response) => {
  const { role = 'Backend Developer', level = 'mid' } = request.body || {}
  const session = {
    id: crypto.randomUUID(),
    role,
    level,
    status: 'active',
    questionIndex: 0,
    answers: [],
    startedAt: new Date().toISOString()
  }
  sessions.set(session.id, session)
  response.status(201).json({ sessionId: session.id, question: questions[0], questionNumber: 1, totalQuestions: questions.length })
})

app.get('/api/interview/sessions/:sessionId', (request, response) => {
  const session = sessions.get(request.params.sessionId)
  if (!session) return response.status(404).json({ error: 'Interview session not found' })
  const questionIndex = Math.min(session.questionIndex, questions.length - 1)
  response.json({ sessionId: session.id, status: session.status, question: questions[questionIndex], questionNumber: questionIndex + 1, totalQuestions: questions.length, answers: session.answers })
})

app.post('/api/interview/sessions/:sessionId/answers', (request, response) => {
  const session = sessions.get(request.params.sessionId)
  const answer = typeof request.body?.answer === 'string' ? request.body.answer.trim() : ''
  if (!session) return response.status(404).json({ error: 'Interview session not found' })
  if (!answer) return response.status(400).json({ error: 'Answer is required' })
  session.answers.push({ question: questions[session.questionIndex], answer, submittedAt: new Date().toISOString() })
  session.questionIndex += 1
  const complete = session.questionIndex >= questions.length
  if (complete) session.status = 'complete'
  const nextQuestion = complete ? null : questions[session.questionIndex]
  response.json({ status: session.status, feedback: scoreAnswer(answer), nextQuestion, questionNumber: complete ? questions.length : session.questionIndex + 1 })
})

app.use((_request, response) => response.status(404).json({ error: 'Route not found' }))
app.use((error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({ error: 'Unexpected server error' })
})

app.listen(port, () => console.log(`RoundReady API running at http://localhost:${port}`))
