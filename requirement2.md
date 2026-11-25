# Final Wedding Website Specification

Requirements finalizedSri Lankan Wedding Invitation - Etsy

Elegant Asian Lotus Wedding Invitation | Zazzle | Wedding invitations, Wedding invitation cards, Unique wedding invitations

Nude Wedding - Etsy

# Our Forever Begins

### A Sri Lankan Traditional Wedding

A romantic watercolour-inspired digital wedding experience

The following is the finalized specification to use as the master development brief for your wedding website.

## 1. Confirmed project details

| Item | Final requirement |
| --- | --- |
| Project | Personalized Wedding Invitation & RSVP Website |
| Couple names | Bride & Groom names to be added |
| Language | Sinhala and English |
| Wedding events | One main wedding event |
| Invitation access | Private personalized invitations |
| Primary design | Sri Lankan traditional wedding |
| Theme | Watercolour lotus |
| Colour palette | Soft pink, ivory, sage green and gold |
| Devices | Mobile, tablet and desktop |
| Admin access | Private administrator dashboard |

## 2. Design and branding

Primary colour palette

Blush pink

#F4DDE1

Ivory

#FFFCF5

Sage

#DCE6D8

Gold

#C5A46D

Visual requirements

- Watercolour lotus illustrations.
- Traditional Sri Lankan ornamental details.
- Delicate gold borders and accents.
- Soft floral backgrounds.
- Elegant typography supporting both Sinhala and English.
- Smooth page transitions and subtle animations.
- Consistent design across invitation, RSVP and information pages.

## 3. Final website functionality

### Guest-facing website

- Beautiful wedding landing page.
- Bride and groom names.
- Wedding date countdown.
- Personalized wedding invitation.
- Sinhala / English language switching.
- Wedding date, time and venue.
- Wedding schedule.
- Google Maps directions.
- Wedding gallery.
- RSVP form.
- RSVP confirmation screen.
- Mobile-friendly experience.

### Personalized invitation system

Highest priorityEach guest must receive an individual invitation URL.

Example:

`yourweddingsite.com/invite/unique-token`

When the administrator adds a guest:

1. Enter the guest or family name.
2. Enter contact details (optional).
3. Set the maximum number of attendees.
4. Generate a unique invitation URL.
5. Copy the link or share it through WhatsApp.
6. Track invitation and RSVP status.

The invitation automatically displays the guest's name.

### RSVP system

Guests should be able to:

- Confirm attendance.
- Decline attendance.
- Specify the number of attendees.
- Submit an optional message.
- Change their response until the RSVP deadline.

The system must enforce the maximum guest allowance assigned to each invitation.

### Admin dashboard

Wedding Guest List Manager with Trackable Invitations & RSVPs

[blog.wedsites.com](<https://blog.wedsites.com/wedding-guest-list-manager-template/?utm_source=chatgpt.com>)

Dashboard features:

- Secure admin login.
- Add, edit and delete guests.
- Automatically generate invitation URLs.
- WhatsApp invitation sharing.
- View all RSVP responses.
- Filter attending, not attending and pending guests.
- Track total confirmed attendees.
- Manage guest limits.
- Export RSVP information to Excel/CSV.
- Set wedding information and RSVP deadline.

## 4. Technical architecture

| Layer | Technology |
| --- | --- |
| Frontend | Next.js + React |
| Design | Tailwind CSS |
| Backend | Supabase |
| Database | PostgreSQL |
| Admin authentication | Supabase Auth |
| Hosting | Vercel |
| Maps | Google Maps integration |
| Language | Sinhala + English |
| Invitation URLs | Secure unique tokens |

### Database structure

The developer should create these main database entities:

- `wedding_settings` – couple names, wedding date, venue, languages and other details.
- `guests` – guest names, contact details, allowed guest count and unique invitation token.
- `invitations` – invitation creation and sharing records.
- `rsvps` – attendance status, attendee count, comments and submission timestamps.
- `admin_users` – authorized administrators.

Important: Invitation tokens must be random and unguessable. Guest information and RSVP records must not be publicly accessible. Enforce invitation limits and permissions on the backend.

## 5. Website structure

## Wedding Website

- Home
- Our Story
- Wedding Details
- Venue & Directions
- Gallery
- Contact

## Private Guest Experience

- Personalized Invitation
- RSVP Submission
- RSVP Confirmation

## Administration

- Admin Login
- Dashboard
- Guest Management
- RSVP Reports

## 6. Development acceptance criteria

The project will be considered complete when:

- [ ]Admin can securely log in.
- [ ]Admin can add and manage wedding guests.
- [ ]Every guest gets a unique invitation URL.
- [ ]Guest name automatically appears on the invitation.
- [ ]Guests can view wedding information in Sinhala or English.
- [ ]Guests can accept or decline invitations.
- [ ]Guest count is restricted by the invitation allowance.
- [ ]RSVP submissions are saved in the database.
- [ ]Admin can view updated RSVP information.
- [ ]Admin can export the guest list.
- [ ]Website works correctly on mobile and desktop.
- [ ]Guest information is protected from unauthorized access.

## 7. Final information needed before implementation

Only the actual wedding details remain to be added. These can be configured later through the admin dashboard.

| Information | Current status |
| --- | --- |
| Bride's name | To be added |
| Groom's name | To be added |
| Wedding date | To be added |
| Wedding time | To be added |
| Wedding venue | To be added |
| Venue address | To be added |
| RSVP deadline | To be added |
| Contact number | To be added |

## 8. My final recommendation

Build this as a complete wedding website with two distinct experiences:

Wedding Invitation Digital RSVP Online - Wedding Website - Dusty Pink Blush - Rose Gold - Watercolor Flower Invite - Etsy

Guest experience

A beautiful, personalized wedding invitation and simple RSVP experience.

Premium Digital Invitations for Weddings and Events

Admin experience

A private dashboard for guest invitations, attendance tracking and reports.

The most important design decision is to make the personalized invitation feel like opening a premium physical wedding invitation: soft ivory paper, hand-painted lotus flowers, elegant gold detailing and the guest's name beautifully displayed in the centre.

Recommended project name: Lotus – Our Wedding Invitation

This specification is ready to be used as the development brief for your website.