# Umar Tanwar: portfolio

Next.js (App Router) and TypeScript, using the "Midnight Minimal" design system. Includes dark and light themes, project case studies, a live GitHub repo count and a contact API with validation, a honeypot and rate limiting.

## Run

    npm install
    cp .env.example .env.local
    npm run dev

## Edit content

Profile, skills and experience live in `lib/content.ts`, and projects live in `lib/projects.ts`. Colours are CSS variables at the top of `app/globals.css`. Replace `public/Umar_Tanwar_CV.pdf` to update the CV.

## Deploy (Vercel)

Import the repo in Vercel and add the variables from `.env.example`. Without `SMTP_PASS`, the contact form opens the visitor's email app with their message filled in.
