# React.js Final Project

React.js SPA with JSON Server backend using Vite.

## Getting Started

### Prerequisites

```bash
nvm list
nvm install 20
nvm use 20
node --version
npm --version
```

### Setup

1. Clone and navigate to project
2. Setup React Client

   ```bash
   cd client
   npm create vite@latest . -- --template react
   npm install
   ```

3. Setup JSON Server

   ```bash
   cd ../server
   npm init -y
   npm install json-server
   ```

4. Environment Configuration

   ```bash
   cp .env.example .env.local
   ```

### Running

Start both services:

Access:

- React App: <http://localhost:5173>
- API: <http://localhost:3001>

### Scripts

Client:

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # ESLint
```

Server:

```bash
npm start        # Start JSON server
```

## Project Structure

```text
├── client/          # React.js application
├── server/          # JSON Server backend
├── .vscode/         # VS Code configuration
├── .env.example     # Environment template
└── README.md        # This file
```
