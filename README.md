# Lotus – Our Wedding Invitation

A Sri Lankan traditional wedding invitation & RSVP website built with **Next.js**, **Tailwind CSS**, and **Supabase**.

## Features

- Public single-page wedding site (Home, Story, Details, Venue & Maps, Gallery, Contact as sections)
- English-only content
- Personalized invite URLs: `/invite/[token]`
- RSVP with attendance, guest count limits, optional message
- Admin dashboard: guests, RSVP filters, CSV export, wedding settings
- Watercolour lotus theme (blush, ivory, sage, gold)

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | Next.js App Router + React |
| Styling | Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL + Auth) |
| Hosting | Vercel |

## Getting started

### 1. Install

```bash
npm install
```

### 2. Environment

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role (server-only; invite/RSVP/admin writes) |
| `NEXT_PUBLIC_SITE_URL` | Site origin used for invite links |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Optional Maps embed override |

Without Supabase env vars, the **public pages** still render with placeholder wedding content. Invite RSVP and admin require Supabase.

### 3. Database

In the Supabase SQL editor (or CLI), run:

[`supabase/migrations/001_init.sql`](supabase/migrations/001_init.sql)

This creates `wedding_settings`, `guests`, `rsvps`, RLS policies, and seeds venue:

**The Royal Banquet Hall of Ella Flower Garden Resort**

### 4. Create an admin user

In Supabase Dashboard → Authentication → Users → Add user (email/password).

That account can sign in at `/admin/login`.

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin workflow

1. Sign in at `/admin/login`
2. Add guests under **Guests** (name, optional contact, max attendees)
3. Copy the invite link or share via WhatsApp
4. Track RSVPs under **RSVPs** (filter attending / declined / pending)
5. Export CSV from Dashboard or RSVPs
6. Edit couple names, date, venue, gallery URLs under **Settings**

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in Vercel
3. Add the same environment variables
4. Apply the SQL migration on your production Supabase project
5. Create the admin Auth user in production

## Project structure

```
src/app/           # Public, invite, and admin routes
src/components/    # UI (site + admin)
src/lib/           # Supabase clients, i18n, wedding helpers
supabase/migrations/
public/assets/     # Lotus + gallery placeholders
```

## Placeholder content

Bride/groom names, date, contact, story, and gallery images ship as placeholders and are editable in admin. Venue is pre-seeded to Ella Flower Garden Resort.
