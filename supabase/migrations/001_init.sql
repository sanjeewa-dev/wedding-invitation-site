-- Lotus wedding invitation schema

create extension if not exists "pgcrypto";

create table if not exists public.wedding_settings (
  id uuid primary key default gen_random_uuid(),
  bride_name text not null default 'Sasini',
  groom_name text not null default 'Chathuranga',
  bride_parents text not null default 'Daughter of Mr. & Mrs. Rathnayaka',
  groom_parents text not null default 'Son of Mr. & Mrs. Bandara',
  wedding_date date not null default '2027-01-21',
  wedding_time time not null default '10:30',
  venue_name text not null default 'The Royal Banquet Hall of Ella Flower Garden Resort',
  venue_address text not null default 'Ella Flower Garden Resort, Ella, Sri Lanka',
  contact_number text not null default '+94 77 000 0000',
  rsvp_deadline date not null default '2027-01-01',
  story text not null default '',
  dress_code_title text not null default 'Formal attire',
  dress_code text not null default 'We would love to see you in ivory, soft blush, sage green, or gentle gold tones.',
  schedule jsonb not null default '[]'::jsonb,
  gallery_urls jsonb not null default '[]'::jsonb,
  maps_embed_url text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  contact text,
  max_attendees integer not null default 1 check (max_attendees > 0),
  invite_token text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null unique references public.guests(id) on delete cascade,
  attendance text not null check (attendance in ('attending', 'declined')),
  attendee_count integer not null default 0 check (attendee_count >= 0),
  message text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists guests_invite_token_idx on public.guests (invite_token);
create index if not exists rsvps_attendance_idx on public.rsvps (attendance);

alter table public.wedding_settings enable row level security;
alter table public.guests enable row level security;
alter table public.rsvps enable row level security;

create policy "Public read wedding settings"
  on public.wedding_settings
  for select
  to anon, authenticated
  using (true);

create policy "Admin manage wedding settings"
  on public.wedding_settings
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin manage guests"
  on public.guests
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin manage rsvps"
  on public.rsvps
  for all
  to authenticated
  using (true)
  with check (true);

insert into public.wedding_settings (
  id,
  bride_name,
  groom_name,
  bride_parents,
  groom_parents,
  wedding_date,
  wedding_time,
  venue_name,
  venue_address,
  contact_number,
  rsvp_deadline,
  story,
  dress_code_title,
  dress_code,
  schedule,
  gallery_urls,
  maps_embed_url
) values (
  '00000000-0000-0000-0000-000000000001',
  'Sasini',
  'Chathuranga',
  'Daughter of Mr. & Mrs. Rathnayaka',
  'Son of Mr. & Mrs. Bandara',
  '2027-01-21',
  '10:30',
  'The Royal Banquet Hall of Ella Flower Garden Resort',
  'Ella Flower Garden Resort, Ella, Sri Lanka',
  '+94 77 000 0000',
  '2027-01-01',
  'Our forever begins with a celebration of love, family, and the traditions that brought us together. We invite you to share in this joyful day as we begin our life as one.',
  'Formal attire',
  'We would love to see you in ivory, soft blush, sage green, or gentle gold tones.',
  '[
    {"time":"09:30","title":"Guest Arrival","description":"Welcome drinks and seating"},
    {"time":"10:00","title":"Poruwa Ceremony","description":"Traditional Sri Lankan wedding ceremony"},
    {"time":"12:30","title":"Wedding Breakfast","description":"Celebrate with us over a shared meal"},
    {"time":"14:00","title":"Photographs & Farewell","description":"Group photos and send-off"}
  ]'::jsonb,
  '["/assets/gallery-1.svg","/assets/gallery-2.svg","/assets/gallery-3.svg","/assets/gallery-4.svg","/assets/gallery-5.svg","/assets/gallery-6.svg"]'::jsonb,
  'https://maps.google.com/maps?q=Ella%20Flower%20Garden%20Resort&t=&z=15&ie=UTF8&iwloc=&output=embed'
)
on conflict (id) do nothing;
