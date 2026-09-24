# Santhosh L — Developer Portfolio

A premium, dark-themed, single-page developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Before you deploy — fill these in

All editable content lives in **`src/data.js`**. Update:

- `profile.social.github`, `profile.social.linkedin`, `profile.social.email`
- `profile.resumeUrl` — see below
- `experience[0].company` and `.duration` (currently placeholders)
- Project `github` / `demo` links (currently `#`)

## Adding your resume

Drop your resume PDF at:

```
public/Santhosh_Resume.pdf
```

The "Resume" buttons in the navbar and hero already link to `/Santhosh_Resume.pdf` and will start working as soon as the file exists.

## Contact form

The contact form is **frontend-only** — it validates input and shows a success state, but does not send email yet. To make it functional, wire up a service such as:

- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Your own backend API route

The submit handler is in `src/components/Contact.jsx` (`handleSubmit`), with a comment marking exactly where to add the request.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── ScrollReveal.jsx   (shared scroll-in animation wrapper)
├── data.js                (all editable content in one place)
├── App.jsx
├── index.css
└── main.jsx
```
