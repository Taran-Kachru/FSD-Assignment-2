# Taran — Portfolio Website (React)

**Course:** Full Stack Development  
**Student:** Taran  
**Tech stack:** React 19 · React Router v7 · Vite · CSS3 (no UI framework)

---

## Setup & Run

```bash
cd portfolio-react
npm install
npm run dev          # starts dev server at http://localhost:5173
npm run build        # production build → dist/
npm run preview      # serve the production build locally
```

> The original static site (`index.html` + `style.css`) remains at the repo root and is untouched.

---

## Component Structure

```
src/
├── context/
│   └── ThemeContext.jsx       # dark/light theme state + localStorage
├── data/
│   └── projects.js            # array of 4 project objects
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx         # sticky header, NavLink active states, theme toggle
│   ├── Footer/
│   │   └── Footer.jsx         # footer nav with NavLink
│   ├── Layout/
│   │   └── Layout.jsx         # shared wrapper — <Navbar> + <Outlet> + <Footer>
│   ├── ProjectCard/
│   │   └── ProjectCard.jsx    # card driven entirely by props; owns showDetails state
│   ├── Skills/
│   │   └── Skills.jsx         # renders skill bars from a skills[] prop
│   └── ContactForm/
│       └── ContactForm.jsx    # fully controlled form with validation
├── pages/
│   ├── Home.jsx               # 1-second loading state on mount
│   ├── About.jsx              # passes skills[] down to Skills (prop drilling level 1→2)
│   ├── Projects.jsx           # maps projects[] → ProjectCard, passes theme prop
│   ├── ProjectDetail.jsx      # useParams() to look up project by ID
│   ├── Contact.jsx            # renders ContactForm + contact info
│   └── NotFound.jsx           # 404 catch-all
├── App.jsx                    # BrowserRouter + Routes tree
├── main.jsx                   # React root
└── index.css                  # all styles (original CSS preserved + light theme + extras)
```

---

## State Lifting & Prop Drilling

`theme` state lives in `ThemeContext` (managed at app level via `ThemeProvider`).  
`Projects.jsx` reads `theme` from context and passes it **down as a prop** to `ProjectCard`, which receives it as `{ project, theme }`. This creates a deliberate **2-level prop-drilling chain**:

```
ThemeContext → Projects (level 1) → ProjectCard (level 2)
```

`About.jsx` passes a `skills` array prop to `Skills.jsx`, another 2-level chain:

```
About (level 1) → Skills (level 2) — receives skills[]
```

---

## `useState` Usage

| Location | State | Purpose |
|---|---|---|
| `ThemeContext` | `theme` | Global dark/light mode; toggled via Navbar button |
| `ContactForm` | `fields` | Controlled inputs (name, email, subject, message) |
| `ContactForm` | `errors` | Validation error messages per field |
| `ContactForm` | `touched` | Tracks which fields have been blurred (show errors only after interaction) |
| `ContactForm` | `submitted` | Shows success message after valid submission |
| `ProjectCard` | `showDetails` | Toggles short ↔ long description independently per card |
| `Home` | `loading` | Shows loading dots for ~1 second on mount |

The submit button is `disabled` when any required field has an error **and** the user has touched at least one field, preventing premature disabling on first render.

---

## `useEffect` Usage

| Location | Effect | Cleanup |
|---|---|---|
| `ThemeContext` | Reads `localStorage` for saved theme on init (via `useState` initialiser); writes to `localStorage` and sets `document.documentElement.dataset.theme` whenever `theme` changes | N/A — no subscription |
| `Home` | `setTimeout` of 1 000 ms sets `loading → false` to simulate a page-load delay | `clearTimeout` is returned so the timer is cancelled if the component unmounts before it fires |

---

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` | → redirect | Redirects to `/home` |
| `/home` | `Home` | Hero section with 1-second loading screen |
| `/about` | `About` | Bio + skill bars |
| `/projects` | `Projects` | Data-driven card grid |
| `/projects/:projectId` | `ProjectDetail` | `useParams()` to find project; shows 404 fallback if ID unknown |
| `/contact` | `Contact` | Controlled form + contact info |
| `*` | `NotFound` | 404 page |

All navigation uses `<Link>` or `<NavLink>` — no plain `<a>` tags for internal routes.

---

## Design Notes

- The CSS from the original static site is reused **verbatim** with additions only for light-theme variables, the theme-toggle button, form error states, the loading animation, and the project-detail page.
- The light theme is applied by setting `data-theme="light"` on `<html>` and overriding CSS custom properties — no class-name juggling required.
- WCAG AA contrast is maintained in both themes; focus-visible outlines are preserved throughout.
