import type { WeddingSettings } from "./types";

export const DEFAULT_SETTINGS: WeddingSettings = {
  id: "00000000-0000-0000-0000-000000000001",
  bride_name: "Sasini",
  groom_name: "Chathuranga",
  bride_parents: "Daughter of Mr. & Mrs. Rathnayake",
  groom_parents: "Son of Mr. & Mrs. Bandara",
  wedding_date: "2027-01-21",
  wedding_time: "10:30",
  venue_name: "The Royal Banquet Hall of Ella Flower Garden Resort",
  venue_address: "Ella Flower Garden Resort, Ella, Sri Lanka",
  contact_number: "0772697028",
  rsvp_deadline: "2026-12-25",
  story: [
    "Some beautiful love stories begin with a grand moment, while others begin with something as simple as a friendship. Ours began in the familiar classrooms of our school during our Advanced Level days.",
    "Back then, we were just friends and classmates, sharing conversations, laughter, and little moments without ever imagining what the future had in store for us. Little did we know that the friendship we were building would one day become the beginning of our forever.",
    "As life took us beyond school and into university, our paths led us to different universities and different degree programmes. Although we were pursuing separate dreams and walking different academic journeys, our hearts remained connected. Distance never became a barrier; instead, we became each other's greatest supporters, encouraging one another through challenges, celebrating every little achievement, and believing in each other's dreams even when things were difficult.",
    "Our love grew quietly, away from the spotlight. We chose to keep our relationship private, holding on to our dreams and supporting each other as we worked towards building the futures we had always hoped for. Through every challenge, every milestone, and every new beginning, we stood beside each other, knowing that we were stronger together.",
    "Today, those dreams have blossomed into reality. She has become a lecturer, inspiring others through knowledge and dedication, while he has grown into a Senior Software Engineer, turning ideas into possibilities. We have achieved so much individually, but our greatest achievement is the beautiful journey we have shared along the way.",
    "And now, after years of friendship, love, patience, and countless memories, we are ready to take the most beautiful step of all to become husband and wife.",
    "With the love and blessings of our two families, we are bringing our worlds together to begin a new chapter, one filled with shared dreams, endless laughter, unconditional support, and a lifetime of togetherness.",
    "What started as a simple school friendship has become our greatest blessing. What once was a quiet love story is now a celebration surrounded by the people we cherish most.",
    "Two different journeys, one shared dream, and one love story that was always meant to be.",
  ].join("\n\n"),
  schedule_intro:
    "An unforgettable day, filled with cherished moments, heartfelt blessings and joyous celebrations.",
  dress_code_title: "Formal Attire",
  dress_code:
    "We invite you to dress in your finest formal attire, while keeping comfort in mind. Wear what makes you feel confident and comfortable as we celebrate our special day together.",
  gifts_title: "Gifts",
  gifts_text:
    "We are genuinely just excited to have you share our day but if you wish to honor us with a gift, a wishing well will be available at the venue.",
  rsvp_public_text:
    "We hope you can make it but if you can't please let us know via WhatsApp by the 25th of December 2026.",
  schedule: [
    {
      time: "10:30 AM",
      title: "Guest Arrival & Welcome",
      description:
        "A warm welcome awaits. Enjoy refreshing welcome drinks as you arrive and take your seats.",
    },
    {
      time: "11:00 AM",
      title: "Congratulations & Photography",
      description:
        "Share your heartfelt wishes with the newlyweds and capture beautiful moments to treasure forever.",
    },
    {
      time: "11:30 AM",
      title: "Toasts & Heartfelt Wishes",
      description:
        "A celebration of love and togetherness, accompanied by heartfelt speeches, warm wishes and joyful moments.",
    },
    {
      time: "12:00 PM",
      title: "Wedding Reception & Luncheon",
      description:
        "An exquisite dining experience awaits as we gather with family and friends to celebrate love, happiness and new beginnings.",
    },
    {
      time: "2:00 PM",
      title: "Music, Dance & Festivities",
      description:
        "Let the festivities unfold with music, dancing and laughter as we create memories to last a lifetime.",
    },
    {
      time: "4:00 PM",
      title: "Our Journey Begins",
      description:
        "As the celebrations come to a close, we bid farewell to our loved ones and set off hand in hand, carrying their blessings and beautiful memories into our happily ever after. ❤️",
    },
  ],
  gallery_urls: [
    "/assets/gallery-1.svg",
    "/assets/gallery-2.svg",
    "/assets/gallery-3.svg",
    "/assets/gallery-4.svg",
    "/assets/gallery-5.svg",
    "/assets/gallery-6.svg",
  ],
  maps_embed_url:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://maps.google.com/maps?q=Ella%20Flower%20Garden%20Resort&t=&z=15&ie=UTF8&iwloc=&output=embed",
};
