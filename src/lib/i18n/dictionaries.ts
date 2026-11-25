export type Dictionary = {
  brand: string;
  subtitle: string;
  togetherWith: string;
  joyfullyInvite: string;
  nav: {
    home: string;
    story: string;
    details: string;
    dress: string;
    gifts: string;
    venue: string;
    gallery: string;
    rsvp: string;
    contact: string;
  };
  home: {
    countdownLabel: string;
    countdownLead: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    ctaStory: string;
    ctaDetails: string;
    and: string;
    youAreInvited: string;
  };
  story: { title: string; lead: string };
  details: {
    title: string;
    lead: string;
    date: string;
    time: string;
    venue: string;
    schedule: string;
  };
  dress: { title: string; lead: string };
  gifts: { title: string; lead: string };
  venue: {
    title: string;
    lead: string;
    address: string;
    openMaps: string;
  };
  gallery: { title: string; lead: string };
  rsvpPublic: {
    title: string;
    lead: string;
    whatsappCta: string;
  };
  contact: { title: string; lead: string; phone: string };
  invite: {
    dear: string;
    invited: string;
    openRsvp: string;
    alreadyResponded: string;
    updateRsvp: string;
    deadline: string;
    closed: string;
  };
  rsvp: {
    title: string;
    attending: string;
    declined: string;
    guests: string;
    message: string;
    submit: string;
    update: string;
    successTitle: string;
    successAttending: string;
    successDeclined: string;
    backToInvite: string;
    maxHint: string;
    errorGeneric: string;
    errorDeadline: string;
    errorMax: string;
  };
  footer: { withLove: string };
  admin: {
    loginTitle: string;
    email: string;
    password: string;
    signIn: string;
    signOut: string;
    dashboard: string;
    guests: string;
    rsvps: string;
    settings: string;
    invited: string;
    attending: string;
    declined: string;
    pending: string;
    confirmedHeadcount: string;
    addGuest: string;
    editGuest: string;
    deleteGuest: string;
    fullName: string;
    contact: string;
    maxAttendees: string;
    inviteLink: string;
    copyLink: string;
    whatsapp: string;
    exportCsv: string;
    filterAll: string;
    save: string;
    saved: string;
    actions: string;
    status: string;
    message: string;
  };
};

export const dict: Dictionary = {
  brand: "Our Forever Begins",
  subtitle: "A Sri Lankan Traditional Wedding",
  togetherWith: "Together with their families",
  joyfullyInvite: "joyfully invite you to celebrate their marriage",
  nav: {
    home: "Home",
    story: "Our Story",
    details: "Details",
    dress: "Dress Code",
    gifts: "Gifts",
    venue: "Venue",
    gallery: "Gallery",
    rsvp: "RSVP",
    contact: "Contact",
  },
  home: {
    countdownLabel: "We are getting married",
    countdownLead: "Until our celebration",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    ctaStory: "Our Story",
    ctaDetails: "Wedding Details",
    and: "&",
    youAreInvited: "You are invited to the wedding of",
  },
  story: {
    title: "Our Story",
    lead: "A celebration of love, tradition, and togetherness.",
  },
  details: {
    title: "Wedding Details",
    lead: "Join us for a day filled with ritual, joy, and family.",
    date: "Date",
    time: "Time",
    venue: "Venue",
    schedule: "Schedule of the day",
  },
  dress: {
    title: "Dress Code",
    lead: "A gentle guide for our celebration.",
  },
  gifts: {
    title: "Gifts",
    lead: "Your presence is the greatest gift.",
  },
  venue: {
    title: "Venue & Directions",
    lead: "Find your way to our celebration.",
    address: "Address",
    openMaps: "Open in Google Maps",
  },
  gallery: {
    title: "Gallery",
    lead: "Moments from our journey.",
  },
  rsvpPublic: {
    title: "RSVP",
    lead: "We hope you can celebrate with us.",
    whatsappCta: "Message us on WhatsApp",
  },
  contact: {
    title: "Contact",
    lead: "Questions about the wedding? Reach out to us.",
    phone: "Phone",
  },
  invite: {
    dear: "Dear",
    invited: "You are warmly invited to celebrate with us",
    openRsvp: "Respond to Invitation",
    alreadyResponded: "You have already responded",
    updateRsvp: "Update your RSVP",
    deadline: "Please respond by",
    closed: "RSVP is now closed",
  },
  rsvp: {
    title: "RSVP",
    attending: "Joyfully accept",
    declined: "Respectfully decline",
    guests: "Number of guests",
    message: "Message (optional)",
    submit: "Submit RSVP",
    update: "Update RSVP",
    successTitle: "Thank you",
    successAttending: "We cannot wait to celebrate with you.",
    successDeclined: "We will miss you, and thank you for letting us know.",
    backToInvite: "Back to invitation",
    maxHint: "Maximum {max} guests for this invitation",
    errorGeneric: "Something went wrong. Please try again.",
    errorDeadline: "The RSVP deadline has passed.",
    errorMax: "Guest count exceeds your invitation allowance.",
  },
  footer: {
    withLove: "With love",
  },
  admin: {
    loginTitle: "Admin Login",
    email: "Email",
    password: "Password",
    signIn: "Sign in",
    signOut: "Sign out",
    dashboard: "Dashboard",
    guests: "Guests",
    rsvps: "RSVPs",
    settings: "Settings",
    invited: "Invited",
    attending: "Attending",
    declined: "Declined",
    pending: "Pending",
    confirmedHeadcount: "Confirmed guests",
    addGuest: "Add guest",
    editGuest: "Edit guest",
    deleteGuest: "Delete",
    fullName: "Full name",
    contact: "Contact",
    maxAttendees: "Max attendees",
    inviteLink: "Invite link",
    copyLink: "Copy link",
    whatsapp: "WhatsApp",
    exportCsv: "Export CSV",
    filterAll: "All",
    save: "Save",
    saved: "Saved",
    actions: "Actions",
    status: "Status",
    message: "Message",
  },
};
