alter table public.wedding_settings
  add column if not exists schedule_intro text not null default 'An unforgettable day, filled with cherished moments, heartfelt blessings and joyous celebrations.',
  add column if not exists gifts_title text not null default 'Gifts',
  add column if not exists gifts_text text not null default 'We are genuinely just excited to have you share our day but if you wish to honor us with a gift, a wishing well will be available at the venue.',
  add column if not exists rsvp_public_text text not null default 'We hope you can make it but if you can''t please let us know via WhatsApp by the 25th of December 2026.';

update public.wedding_settings
set
  wedding_date = '2027-01-21',
  wedding_time = '10:30',
  rsvp_deadline = '2026-12-25',
  bride_parents = 'Daughter of Mr. & Mrs. Rathnayaka',
  groom_parents = 'Son of Mr. & Mrs. Bandara',
  schedule_intro = 'An unforgettable day, filled with cherished moments, heartfelt blessings and joyous celebrations.',
  dress_code_title = 'Formal Attire',
  dress_code = 'We invite you to dress in your finest formal attire, while keeping comfort in mind. Wear what makes you feel confident and comfortable as we celebrate our special day together.',
  gifts_title = 'Gifts',
  gifts_text = 'We are genuinely just excited to have you share our day but if you wish to honor us with a gift, a wishing well will be available at the venue.',
  rsvp_public_text = 'We hope you can make it but if you can''t please let us know via WhatsApp by the 25th of December 2026.',
  schedule = '[
    {"time":"10:30 AM","title":"Guest Arrival & Welcome","description":"A warm welcome awaits. Enjoy refreshing welcome drinks as you arrive and take your seats."},
    {"time":"11:00 AM","title":"Congratulations & Photography","description":"Share your heartfelt wishes with the newlyweds and capture beautiful moments to treasure forever."},
    {"time":"11:30 AM","title":"Toasts & Heartfelt Wishes","description":"A celebration of love and togetherness, accompanied by heartfelt speeches, warm wishes and joyful moments."},
    {"time":"12:00 PM","title":"Wedding Reception & Luncheon","description":"An exquisite dining experience awaits as we gather with family and friends to celebrate love, happiness and new beginnings."},
    {"time":"2:00 PM","title":"Music, Dance & Festivities","description":"Let the festivities unfold with music, dancing and laughter as we create memories to last a lifetime."}
  ]'::jsonb
where id = '00000000-0000-0000-0000-000000000001';
