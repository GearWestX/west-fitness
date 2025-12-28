# West Fitness - Fitness Website

A modern, responsive website built for my online coaching business with [Astro](https://astro.build), featuring a clean design and comprehensive information about my services, pricing, and more.


## 🌟 Features

- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Fast Performance**: Static site generation with Astro for optimal loading speeds
- **Comprehensive Content**:
  - Homepage with hero section, features, statistics, and testimonials
  - About page with gym history and trainer profiles
  - Classes page with detailed class information and schedules
  - Pricing page with membership plans
  - Contact page with form and location information
- **Responsive Layout**: Mobile-first design that works on all devices
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/west-fitness.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📜 Available Scripts

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with your static site ready for deployment.

### Deploy to Various Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Connect your repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

**GitHub Pages:**
- Update `astro.config.mjs` with your base URL
- Use GitHub Actions or deploy manually

**Other Platforms:**
- Any static hosting service (Cloudflare Pages, AWS S3, etc.)

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Web framework for building fast, content-focused websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Typed JavaScript
- **[Remix Icon](https://remixicon.com)** - Icon library

