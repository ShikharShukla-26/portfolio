# Shikhar Shukla — Portfolio

Next.js portfolio with a protected admin dashboard for editing dynamic content.

## Features

- Public portfolio matching the dark Linear-style design
- Admin login (solo user via environment variables)
- Editable sections: Hero, Engineering Work (max 4), How I think about products (max 4), About, Social links, Footer
- Static profile photo at `public/assets/images/profile.jpg` (update via Git)

## Local development

```bash
npm install
cp .env.example .env.local
```

Set in `.env.local`:

- `ADMIN_EMAIL` and `ADMIN_PASSWORD` (or `ADMIN_PASSWORD_HASH` from `npm run auth:hash -- yourpassword`)
- `AUTH_SECRET` (any random string, e.g. `openssl rand -base64 32`)

```bash
npm run dev
```

- Site: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Profile image

Replace `public/assets/images/profile.jpg` with your headshot and commit to Git. No upload in the dashboard.

## Content storage

Dashboard edits are saved to `data/site-content.json` (no database required).

## Git remote

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

## Vercel deployment

1. Import the GitHub repository in Vercel.
2. Add environment variables:
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH` (recommended; generate with `npm run auth:hash -- yourpassword`)
   - `AUTH_SECRET`
3. Deploy and visit `/admin/login`.
4. Since Vercel serverless filesystem is ephemeral, use Git updates (or external storage) for long-term content persistence.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run auth:hash -- password` | Generate bcrypt hash for Vercel |
