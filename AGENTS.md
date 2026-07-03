# Portfolio — Opu Pal (Opurbo)

## Tech Stack
- **Next.js 14.1** (App Router, hybrid RSC/Client)
- **TypeScript 5**, **Tailwind CSS 3.3**, **shadcn/ui** (Radix primitives)
- **Framer Motion 11**, **Lucide React**
- **Nodemailer**, **Axios**

## Routes
| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `page.tsx` | Single-page: Hero, About, Skills, Projects (top 3), Contact |
| `/about` | `about/page.tsx` | Dedicated about page |
| `/project` | `project/page.tsx` | Full project gallery (21 projects from `data/project.json`) |
| `/contact` | `contact/page.tsx` | Dedicated contact page |
| `/api/contact` | `app/api/contact/route.ts` | POST — forwards message via Nodemailer |

## Key Architecture
- **Components** in `src/components/` (feature components) and `src/components/ui/` (shadcn primitives + Aceternity UI)
- **Data**: `src/data/project.json` — 21 projects with `{_id, name, description, stack, git, live?, imagePath}`
- **Layout**: Single root layout (`layout.tsx`) with Navbar, Footer, ThemeProvider, Toaster, BackToTop, AnimatedFavicon
- **`"use client"`** only on interactive components (Navbar, Contact, HeroSection, ProjectPage, 3dAvatar, BackToTop, AnimatedFavicon, ModeToggle, all Radix-based UI)
- **Hooks**: `useAnimatedFavicon` — canvas-based animated favicon + document title cycling
- **Theme**: `class`-based dark/light via `next-themes`, default dark, CSS variables in `globals.css`

## Environment Variables
- `MAIL`, `MAIL_PASS` — Gmail SMTP for Nodemailer

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Conventions
- Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for class merging
- Prefer server components; only add `"use client"` for interactivity/hooks
- Project data lives in `src/data/project.json`; skills are typed arrays in `Skill.tsx`
- Follow shadcn/ui patterns for UI components (forwardRef, displayName)
