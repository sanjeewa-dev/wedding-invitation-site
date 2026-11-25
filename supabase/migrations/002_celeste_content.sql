-- Add Celeste-style invitation content fields
alter table public.wedding_settings
  add column if not exists bride_parents text not null default 'Daughter of Mr. & Mrs. Rathnayaka',
  add column if not exists groom_parents text not null default 'Son of Mr. & Mrs. Bandara',
  add column if not exists dress_code_title text not null default 'Formal attire',
  add column if not exists dress_code text not null default 'We would love to see you in ivory, soft blush, sage green, or gentle gold tones.';

update public.wedding_settings
set
  bride_name = 'Sasini',
  groom_name = 'Chathuranga',
  bride_parents = 'Daughter of Mr. & Mrs. Rathnayaka',
  groom_parents = 'Son of Mr. & Mrs. Bandara',
  wedding_date = '2027-01-21',
  wedding_time = '10:30',
  venue_name = 'The Royal Banquet Hall of Ella Flower Garden Resort',
  rsvp_deadline = '2027-01-01',
  dress_code_title = coalesce(nullif(dress_code_title, ''), 'Formal attire'),
  dress_code = coalesce(nullif(dress_code, ''), 'We would love to see you in ivory, soft blush, sage green, or gentle gold tones.')
where id = '00000000-0000-0000-0000-000000000001';
