# Pavan Bakal — Angular Portfolio

A modern, dark-themed developer portfolio built with Angular 17, showcasing full-stack Java expertise.

## ✨ Features

- **Animated Hero** — typewriter effect cycling through your roles, floating tech badges, spinning rings
- **About Section** — achievement metrics, education, language panel
- **Skills Section** — categorized skill groups + animated proficiency bars
- **Experience Section** — interactive tabbed timeline for both jobs
- **Projects Section** — featured project cards with highlights
- **Contact Section** — reactive form with validation
- **Fully Responsive** — mobile-first, works on all devices
- **Dark Theme** — deep navy + cyan accent palette

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Background | `#0a0e1a` |
| Accent Primary | `#00d4ff` (cyan) |
| Accent Secondary | `#7c3aed` (violet) |
| Font Display | Space Grotesk |
| Font Mono | JetBrains Mono |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:4200)
npm start

# Build for production
npm run build:prod
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/        # Sticky nav with scroll detection
│   │   ├── hero/          # Animated hero with typewriter
│   │   ├── about/         # Bio + achievement cards
│   │   ├── skills/        # Skill groups + proficiency bars
│   │   ├── experience/    # Tabbed work history
│   │   ├── projects/      # Project showcase cards
│   │   ├── contact/       # Reactive contact form
│   │   └── footer/        # Footer with back-to-top
│   ├── app.module.ts
│   ├── app.component.ts
│   └── app.component.html
├── index.html
├── main.ts
└── styles.css             # Global CSS variables & utilities
```

## 🔧 Customization

### Update personal info
Edit the TypeScript files in each component:
- `hero.component.ts` — roles array for typewriter
- `about.component.ts` — highlights and languages
- `skills.component.ts` — skill groups and proficiency levels
- `experience.component.ts` — job entries
- `projects.component.ts` — project cards
- `contact.component.ts` — contact info

### Change theme colors
Edit CSS variables in `src/styles.css`:
```css
:root {
  --accent-primary: #00d4ff;   /* change to any color */
  --accent-secondary: #7c3aed;
}
```

### Add GitHub link
Update `projects.component.html` to add a GitHub icon link per project.

## 📧 Contact Form
The form currently simulates a submission (setTimeout). To make it real:
1. Replace the `setTimeout` in `contact.component.ts` with an HTTP call
2. Use EmailJS, Formspree, or your own backend
3. Import `HttpClientModule` in `app.module.ts`

## 🌐 Deploy

### Netlify (recommended)
```bash
npm run build:prod
# Upload dist/pavan-bakal-portfolio to Netlify
```

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
npm run build:prod -- --base-href "https://<username>.github.io/<repo>/"
npx angular-cli-ghpages --dir=dist/pavan-bakal-portfolio
```

---
Built with ❤️ using Angular 17 + Space Grotesk + JetBrains Mono
