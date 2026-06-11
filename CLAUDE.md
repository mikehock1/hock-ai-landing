# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the marketing landing page for **Hock AI Engineering Consultants**, an AI engineering
consulting practice. It's a single-page static site built with plain HTML, CSS, and JavaScript
(no build tooling or framework).

The page communicates the value proposition (years of expertise building production AI
applications), highlights services, and captures leads via an email signup form.

## Structure

- `index.html` — single-page landing site (header/nav, hero, why-us, services, about, signup, footer)
- `src/css/style.css` — global styles (navy + blue accent palette, responsive grid layout)
- `src/js/main.js` — smooth-scroll nav links and email signup form handling
- `src/js/validation.js` — shared `isValidEmail()` helper, used by `main.js` and unit tests
- `src/pages/` — reserved for additional page templates (currently empty)
- `src/assets/images/` — image assets (currently empty)
- `tests/` — unit tests (Node's built-in test runner)

## Email signup form

The signup form (`#signup-form` in `index.html`) posts to a Formspree endpoint. The current
`action` attribute is a placeholder (`https://formspree.io/f/yourFormID`) — to receive
submissions, sign up at https://formspree.io, create a form, and replace the placeholder ID.

Email addresses are validated client-side by `isValidEmail()` in `src/js/validation.js`, which
only accepts `.com`, `.org`, `.edu`, `.gov`, `.net`, and `.io` domain extensions.

## Testing

Run the unit tests for email validation with:

```bash
npm test
```

(equivalent to `node --test`, no dependencies required).

## Running locally

Open `index.html` directly in a browser, or serve the directory with a local static server, e.g.:

```bash
python3 -m http.server
```

For hot reload during design/content changes, use `npx live-server` (or the VS Code Live Server
extension) — no build tooling is needed for this project.
