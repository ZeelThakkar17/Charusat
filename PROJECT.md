# Project Structure Documentation

## Overview
The **Charusat** project is a React + TypeScript web application built with Vite as the build tool. It's a modern frontend development setup with hot module replacement (HMR) for an efficient development experience.

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.2.0 | JavaScript library for building user interfaces |
| **TypeScript** | ~5.9.3 | Superset of JavaScript for type safety |
| **Vite** | ^7.3.1 | Next-generation frontend build tool |
| **ESLint** | ^9.39.1 | Code quality and linting tool |

---

## Project Structure

```
Charusat/
├── README.md                    # Project overview (currently minimal)
├── PROJECT.md                   # This file - detailed project documentation
└── funfacts/                    # Main project application folder
    ├── package.json             # Project dependencies and npm scripts
    ├── vite.config.ts           # Vite build configuration
    ├── eslint.config.js         # ESLint configuration for code quality
    ├── tsconfig.json            # TypeScript base configuration
    ├── tsconfig.app.json        # TypeScript configuration for app code
    ├── tsconfig.node.json       # TypeScript configuration for Node files
    ├── index.html               # Main HTML entry point
    ├── public/                  # Static public assets served directly
    ├── src/                     # Source code directory
    │   ├── main.tsx             # Application entry point
    │   ├── App.tsx              # Root React component
    │   ├── App.css              # Styles for App component
    │   ├── index.css            # Global styles
    │   └── assets/              # Component-level assets (SVGs, images, etc.)
    └── node_modules/            # Dependencies (not tracked in version control)
```

---

## Key Files Explained

### `funfacts/package.json`
Defines project metadata and dependencies:
- **Scripts:**
  - `npm run dev` - Start development server with hot reload
  - `npm run build` - Compile TypeScript and build for production
  - `npm run lint` - Run ESLint to check code quality
  - `npm run preview` - Preview production build locally

- **Dependencies:**
  - `react` - Core React library
  - `react-dom` - React DOM rendering

- **Dev Dependencies:**
  - Build tools: `@vitejs/plugin-react`, `vite`
  - Language: `typescript`
  - Linting: `eslint`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
  - Type definitions: `@types/react`, `@types/react-dom`, `@types/node`

### `funfacts/vite.config.ts`
Vite configuration file that:
- Enables React support via `@vitejs/plugin-react`
- Configures the build process for development and production

### `funfacts/src/main.tsx`
Application entry point that:
1. Imports React components and CSS
2. Creates a React root at `#root` in index.html
3. Renders the `App` component in StrictMode for development checks

### `funfacts/src/App.tsx`
Main React component currently displaying:
- Vite and React logos
- A counter button with state management
- Links to documentation

### `funfacts/index.html`
Main HTML file that:
- Contains the `<div id="root"></div>` where React mounts
- Links to the main.tsx script entry point
- Serves as the base template for the SPA

---

## Configuration Files

### TypeScript Configuration
- **tsconfig.json** - Root configuration with base compiler options
- **tsconfig.app.json** - Configuration for application source code
- **tsconfig.node.json** - Configuration for Node/build files (vite.config.ts, eslint.config.js)

### ESLint Configuration
**eslint.config.js** enforces code quality standards including:
- JavaScript best practices
- React/JSX best practices
- TypeScript type safety
- React Hooks rules

---

## Development Workflow

### Getting Started
```bash
cd funfacts
npm install              # Install dependencies
npm run dev              # Start development server
```

### Development
- Server runs with HMR (Hot Module Replacement) - changes auto-reload
- Edit files in `src/` and see changes immediately in browser
- Use TypeScript for type safety during development

### Build for Production
```bash
npm run build            # Compile and bundle for production
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run lint             # Check for linting errors
npm run lint -- --fix    # Automatically fix linting issues
```

---

## Project Purpose

Based on the current code structure, this appears to be:
- **A learning/starter project** using the Vite + React + TypeScript template
- **Foundation for a web application** that includes modern tooling and best practices
- **"Fun Facts" themed** (based on the folder name), possibly for displaying interesting facts or information

The current App.tsx shows a basic counter application that serves as a template for further development.

---

## Next Steps / Development Areas

1. **Feature Development** - Replace the counter with actual application features
2. **Component Structure** - Create reusable React components in `src/`
3. **State Management** - Consider adding state management as the app grows
4. **Styling** - Organize CSS files or consider CSS-in-JS solutions
5. **Testing** - Add test suite (Jest, Vitest, etc.)
6. **Routing** - Add routing if building a multi-page application (React Router)

---

## Resources

- **Vite Documentation**: https://vite.dev/
- **React Documentation**: https://react.dev/
- **TypeScript Documentation**: https://www.typescriptlang.org/
- **ESLint Documentation**: https://eslint.org/

---

*Last Updated: February 21, 2026*
