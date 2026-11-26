-- Update public RSVP copy (remove duplicated "We hope you can" wording)
update public.wedding_settings
set rsvp_public_text = 'This is a regrets-only RSVP. If you are unable to join us, kindly let us know via WhatsApp by 25 December 2026.'
where id = '00000000-0000-0000-0000-000000000001';
