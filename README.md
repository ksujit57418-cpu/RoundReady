# RoundReady

RoundReady is an open-source practice room for people preparing for interviews, learning technical concepts, and building spoken English confidence.

## What is included

- Interview practice dashboard with role and topic progress
- Concept coach starting points for Java, system design, and SQL
- Spoken English practice space with a clear, low-pressure flow
- Browser camera and microphone permission flow
- Local-first privacy direction: recordings should remain on the user's device by default
- Responsive workspace layout for desktop and mobile

The repository now includes a small Express backend with an in-memory interview session API. AI feedback, speech-to-text, authentication, and persistent storage can be added behind these stable endpoints.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Run the backend

```bash
npm run server
```

The API runs at `http://localhost:8787`. Use `npm run dev:full` to start frontend and backend together. The health endpoint is `GET /api/health`.

### Interview API

- `POST /api/interview/sessions` starts a session.
- `GET /api/interview/sessions/:sessionId` returns session state.
- `POST /api/interview/sessions/:sessionId/answers` accepts `{ "answer": "..." }` and returns the next question.

Sessions are intentionally in memory for this first backend slice. Restarting the server clears them.

## Build

```bash
npm run build
```

## Contributing

1. Create a feature branch.
2. Keep changes focused and accessible.
3. Run `npm run build` before opening a pull request.
4. Explain the user problem and include screenshots for visual changes.

Please do not commit recordings, API keys, or personal data.

## License

MIT. See [LICENSE](LICENSE).
