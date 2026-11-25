export type AttendanceStatus = "attending" | "declined";

export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
};

export type WeddingSettings = {
  id: string;
  bride_name: string;
  groom_name: string;
  bride_parents: string;
  groom_parents: string;
  wedding_date: string;
  wedding_time: string;
  venue_name: string;
  venue_address: string;
  contact_number: string;
  rsvp_deadline: string;
  story: string;
  schedule_intro: string;
  dress_code_title: string;
  dress_code: string;
  gifts_title: string;
  gifts_text: string;
  rsvp_public_text: string;
  schedule: ScheduleItem[];
  gallery_urls: string[];
  maps_embed_url: string;
  updated_at?: string;
};

export type Guest = {
  id: string;
  full_name: string;
  contact: string | null;
  max_attendees: number;
  invite_token: string;
  created_at: string;
};

export type Rsvp = {
  id: string;
  guest_id: string;
  attendance: AttendanceStatus;
  attendee_count: number;
  message: string | null;
  submitted_at: string;
  updated_at: string;
};

export type GuestWithRsvp = Guest & {
  rsvps: Rsvp | null;
};
