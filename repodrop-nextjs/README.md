# RepoDrop — Next.js conversion

RepoDrop has been moved into a Next.js App Router project while preserving the original UI, CSS, and existing browser-side interactions. The page includes the Upload, Repository, and Settings dock; GitHub token connection; repository listing/creation; file/folder selection; file security preflight; previews; upload progress; theme/menu interactions; and the animated background from the source HTML.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. Import that repository in Vercel.
3. Keep the default Next.js settings and deploy.

## Security note

The source HTML uses a GitHub Personal Access Token in the browser and sends requests directly to `api.github.com`. The token is not embedded in this project or placed in `.env`. Only enable “Remember token on this device” on a device you trust. For a production app used by other people, consider moving GitHub operations to protected server-side routes and avoiding local storage for long-lived tokens.

## Conversion note

The original interactions are initialized client-side after the page markup is mounted. This is a compatibility-oriented conversion to Next.js; the original DOM-driven GitHub upload logic is retained to minimize behavioral changes. The UI is now served through the Next.js App Router and can be extended into native React components incrementally.
