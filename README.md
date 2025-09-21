# MiniProject Portal

This is a very simple portal built with Nuxt 3, Vue 3, and Nx workspace. The design is intentionally basic with minimal content. This project was made just to learn Nx workspace, Vue, and Nuxt.

## Features

- Login form and mock authentication (user: user@gmail.com, password: user)
- Dashboard with widget layout
- Sidebar navigation and top navigation bar
- Multiple dashboard widgets and sections

## Tools Used

- **Nuxt 3** (main app framework)
- **Vue 3** (UI framework)
- **Nx** (monorepo/workspace management)
- **Vite** (build tool)
- **Vitest** (unit testing; not yet used)
- **Playwright** (end-to-end testing; not yet used)
- **TypeScript**
- **Prettier**

## How to run locally

1. **Clone or fork the repository:**

   ```sh
   git clone <your-repo-url>
   cd mini-project
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npx nx serve mini-project
   ```

4. Open [http://localhost:4200](http://localhost:4200) or the provided URL when starting the dev server in your browser.

---

**Tech stack:** Nuxt 3, Vue 3, Nx, Vite, TypeScript

**Testing tools included:** Vitest, Playwright (not yet used)

**Purpose:**
This project was created to familiarize with:

- Nx monorepo workflows and best practices.
- Vue 3 and Nuxt application structure.
- Modern testing with Vitest and Playwright.
- Scalable frontend architecture in a monorepo.
- License
