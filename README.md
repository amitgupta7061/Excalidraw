✏️ Excalidraw + Turborepo
A scalable, high-performance Excalidraw setup powered by Turborepo for monorepo efficiency. Draw, collaborate, and prototype with ease — optimized for speed and developer experience.

🚀 Features
🧠 Turborepo-powered: Ultra-fast monorepo with remote caching and parallel builds.

📝 Excalidraw core: Visual whiteboarding with hand-drawn style.

⚙️ Modular architecture: Easily extend with custom packages (e.g., drawing tools, integrations).

🤝 Collaborative-ready: Structure ready for multiplayer support and real-time sync.

🛠️ Dev-friendly tooling: ESLint, Prettier, TypeScript, Husky, and more included.

📁 Monorepo Structure
bash
Copy
Edit
excalidraw-turbo/
├── apps/
│   └── excalidraw/         # Main drawing app
├── packages/
│   └── ui/                 # Shared UI components
│   └── utils/              # Utility functions
│   └── config/             # Shared config (eslint, tsconfig, etc.)
├── .github/                # GitHub workflows
├── turbo.json              # Turborepo config
└── package.json
🧑‍💻 Getting Started
Prerequisites
Node.js >= 18.x

PNPM or Yarn (preferred for workspace support)

Installation
bash
Copy
Edit
pnpm install
Development
bash
Copy
Edit
pnpm dev --filter=excalidraw
Build
bash
Copy
Edit
pnpm build
📸 Screenshots
Add some screenshots or a short demo GIF of your app in action.

🧩 Tech Stack
Frontend: React, Excalidraw

Monorepo: Turborepo

Tooling: TypeScript, ESLint, Prettier, Husky, Commitlint

🧪 Testing
bash
Copy
Edit
pnpm test
Replace with actual test framework usage if integrated (e.g., Vitest, Jest).

🧠 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

Fork the repo

Create your branch: git checkout -b feature/foo

Commit your changes
