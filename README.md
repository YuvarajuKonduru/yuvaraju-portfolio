# Yuvaraju Konduru — Portfolio

A sleek dark-themed portfolio built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Next.js 14** — App Router, SSR, metadata API
- **TypeScript** — fully typed components
- **Tailwind CSS** — utility-first styling
- **DM Sans + Syne** — typography pairing

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page (assembles sections)
│   └── globals.css       # Global styles + CSS variables
├── components/
│   ├── Navbar.tsx        # Sticky nav with smooth scroll
│   ├── Hero.tsx          # Hero section with stats
│   ├── About.tsx         # About + profile card
│   ├── Experience.tsx    # Timeline work history
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project cards
│   ├── Contact.tsx       # Contact form + links
│   └── Footer.tsx        # Footer with links
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Info
Update these files with your real details:

- **`components/Navbar.tsx`** — logo initials
- **`components/Hero.tsx`** — name, role, stats
- **`components/About.tsx`** — bio text, card details (email, location)
- **`components/Experience.tsx`** — `experiences` array — add your real companies, roles, descriptions
- **`components/Skills.tsx`** — `skillCategories` array — add/remove skills
- **`components/Projects.tsx`** — `projects` array — add real project links
- **`components/Contact.tsx`** — `contactLinks` array — update email, LinkedIn, GitHub URLs
- **`app/layout.tsx`** — update `metadata` with your name and description

### Contact Form
The form in `Contact.tsx` is wired to local state. Connect it to a service:
- **[Resend](https://resend.com)** — email API, works great with Next.js
- **[Formspree](https://formspree.io)** — no backend needed
- **[EmailJS](https://emailjs.com)** — client-side only

### Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```

## Color Palette
Defined as CSS variables in `app/globals.css`:
- `--accent`: `#6C63FF` (indigo)
- `--accent2`: `#00D4AA` (teal)
- `--bg`: `#0a0a0f` (dark base)
- `--card`: `#1a1a24` (card surface)
