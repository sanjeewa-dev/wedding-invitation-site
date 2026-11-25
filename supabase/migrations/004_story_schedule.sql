-- Sync full Our Story + Schedule of the Day into wedding_settings
alter table public.wedding_settings
  add column if not exists schedule_intro text not null default 'An unforgettable day, filled with cherished moments, heartfelt blessings and joyous celebrations.';

update public.wedding_settings
set
  story = $story$
Some beautiful love stories begin with a grand moment, while others begin with something as simple as a friendship. Ours began in the familiar classrooms of our school during our Advanced Level days.

Back then, we were just friends and classmates, sharing conversations, laughter, and little moments without ever imagining what the future had in store for us. Little did we know that the friendship we were building would one day become the beginning of our forever.

As life took us beyond school and into university, our paths led us to different universities and different degree programmes. Although we were pursuing separate dreams and walking different academic journeys, our hearts remained connected. Distance never became a barrier; instead, we became each other's greatest supporters, encouraging one another through challenges, celebrating every little achievement, and believing in each other's dreams even when things were difficult.

Our love grew quietly, away from the spotlight. We chose to keep our relationship private, holding on to our dreams and supporting each other as we worked towards building the futures we had always hoped for. Through every challenge, every milestone, and every new beginning, we stood beside each other, knowing that we were stronger together.

Today, those dreams have blossomed into reality. She has become a lecturer, inspiring others through knowledge and dedication, while he has grown into a Senior Software Engineer, turning ideas into possibilities. We have achieved so much individually, but our greatest achievement is the beautiful journey we have shared along the way.

And now, after years of friendship, love, patience, and countless memories, we are ready to take the most beautiful step of all to become husband and wife.

With the love and blessings of our two families, we are bringing our worlds together to begin a new chapter, one filled with shared dreams, endless laughter, unconditional support, and a lifetime of togetherness.

What started as a simple school friendship has become our greatest blessing. What once was a quiet love story is now a celebration surrounded by the people we cherish most.

Two different journeys, one shared dream, and one love story that was always meant to be.
$story$,
  schedule_intro = 'An unforgettable day, filled with cherished moments, heartfelt blessings and joyous celebrations.',
  schedule = '[
    {"time":"10:30 AM","title":"Guest Arrival & Welcome","description":"A warm welcome awaits. Enjoy refreshing welcome drinks as you arrive and take your seats."},
    {"time":"11:00 AM","title":"Congratulations & Photography","description":"Share your heartfelt wishes with the newlyweds and capture beautiful moments to treasure forever."},
    {"time":"11:30 AM","title":"Toasts & Heartfelt Wishes","description":"A celebration of love and togetherness, accompanied by heartfelt speeches, warm wishes and joyful moments."},
    {"time":"12:00 PM","title":"Wedding Reception & Luncheon","description":"An exquisite dining experience awaits as we gather with family and friends to celebrate love, happiness and new beginnings."},
    {"time":"2:00 PM","title":"Music, Dance & Festivities","description":"Let the festivities unfold with music, dancing and laughter as we create memories to last a lifetime."},
    {"time":"4:00 PM","title":"Our Journey Begins","description":"As the celebrations come to a close, we bid farewell to our loved ones and set off hand in hand, carrying their blessings and beautiful memories into our happily ever after. ❤️"}
  ]'::jsonb
where id = '00000000-0000-0000-0000-000000000001';
