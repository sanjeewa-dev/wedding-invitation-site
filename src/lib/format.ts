import { format, parseISO } from "date-fns";
import type { WeddingSettings } from "./types";

export function coupleNames(settings: WeddingSettings) {
  return {
    bride: settings.bride_name,
    groom: settings.groom_name,
  };
}

export function formatWeddingDate(date: string) {
  try {
    return format(parseISO(date), "MMMM d, yyyy");
  } catch {
    return date;
  }
}

/** Split story text into paragraphs (handles CRLF / blank lines / single newlines). */
export function storyParagraphs(story: string): string[] {
  const text = story.replace(/\r\n/g, "\n").trim();
  if (!text) return [];

  const byBlank = text
    .split(/\n\s*\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (byBlank.length > 1) return byBlank;

  const byLine = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (byLine.length > 1) return byLine;

  return [text];
}

export function formatWeddingTime(time: string) {
  const match = /^(\d{1,2}):(\d{2})/.exec(time);
  if (!match) return time;

  let hours = Number(match[1]);
  const minutes = match[2];
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${suffix}`;
}

export function whatsappUrl(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function inviteUrl(token: string) {
  return `${siteUrl()}/invite/${token}`;
}

export function whatsappShareUrl(_guestName: string, token: string) {
  const text = `You're invited! Open your personalized wedding invitation: ${inviteUrl(token)}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function generateInviteToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Buffer.from(bytes).toString("base64url");
}
