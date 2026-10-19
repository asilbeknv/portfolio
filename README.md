# Asilbek Normuminov — Portfolio

Personal portfolio site: an introduction, a grid of selected projects, and a contact page.

**Live:** https://asilbeknv.lovable.app

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS v3
- shadcn/ui
- React Router

## Getting started

```sh
npm install
npm run dev
```

The site is then available at the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Produces the production bundle in `dist/` |
| `npm run preview` | Serves the built bundle locally |
| `npm run lint` | Runs ESLint |

## Project layout

```text
src/
  components/     Hero, project cards, navbar, footer, shared UI
  data/projects.ts  The project list: title, year, role, tags, link, images
  pages/          Index, About, Contact, ProjectDetail, NotFound
  index.css       Design tokens (colors, shadows) and global styles
```

Adding a project means adding one object to the array in `src/data/projects.ts`
and dropping its image into `src/assets/`.

## Notes

- Every project image is a real file in `src/assets/`, imported directly — no
  external CDN or hosting account is needed to build or run the site.
- `public/robots.txt` and `public/favicon.ico` are served as-is.

---

Built and iterated on in [Lovable](https://lovable.dev).
