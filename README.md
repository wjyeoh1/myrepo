# Inspirational Quotes App

A beautiful Next.js application that displays inspirational quotes with auto-refresh functionality.

## Features
- Random inspirational quotes
- Auto-refresh every 30 seconds  
- Manual refresh button
- Responsive design with Tailwind CSS
- Beautiful gradient background
- API endpoint for quote generation

## Tech Stack
- **Next.js 14.2.5** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Node.js 20.9.0** (required)

## Project Structure
```
myrepo/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       └── quote/
│   │           └── route.ts
│   └── lib/
│       └── quotes.ts
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── .nvmrc
```

## Prerequisites
- Node.js >= 20.9.0 (specified in `.nvmrc`)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/wjyeoh1/myrepo.git
cd myrepo
```

### 2. Use the correct Node.js version
```bash
# If you have nvm installed
nvm use

# Or install the required version if not available
nvm install
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000` (or the next available port).

## API Endpoints
- `GET /api/quote` - Returns a random inspirational quote

## Live Demo
Visit the live application at: [nextjs-boilerplate-ccd6qhdr9-jasons-projects-dbf2675c.vercel.app](https://nextjs-boilerplate-ccd6qhdr9-jasons-projects-dbf2675c.vercel.app)


Deployed on Sat 25 Oct 2025 16:57:08 +08


Deployment trigger: Sat 25 Oct 2025 17:11:41 +08
Fixed author email for Vercel deployment - Sat 25 Oct 2025 17:12:07 +08
Force redeploy: Sat 25 Oct 2025 17:22:01 +08
