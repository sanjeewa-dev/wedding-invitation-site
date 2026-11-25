import { DEFAULT_SETTINGS } from "./defaults";
import { createClient, isSupabaseConfigured } from "./supabase/server";
import type { ScheduleItem, WeddingSettings } from "./types";

function normalizeSchedule(raw: unknown): ScheduleItem[] {
  if (!Array.isArray(raw)) {
    return DEFAULT_SETTINGS.schedule;
  }

  return raw.map((item) => {
    const row = item as Record<string, unknown>;
    return {
      time: String(row.time ?? ""),
      title: String(row.title ?? row.title_en ?? ""),
      description: row.description
        ? String(row.description)
        : row.description_en
          ? String(row.description_en)
          : undefined,
    };
  });
}

function normalizeSettings(row: Record<string, unknown>): WeddingSettings {
  return {
    id: String(row.id),
    bride_name: String(
      row.bride_name ?? row.bride_name_en ?? DEFAULT_SETTINGS.bride_name,
    ),
    groom_name: String(
      row.groom_name ?? row.groom_name_en ?? DEFAULT_SETTINGS.groom_name,
    ),
    bride_parents: String(
      row.bride_parents ?? DEFAULT_SETTINGS.bride_parents,
    ),
    groom_parents: String(
      row.groom_parents ?? DEFAULT_SETTINGS.groom_parents,
    ),
    wedding_date: String(row.wedding_date ?? DEFAULT_SETTINGS.wedding_date),
    wedding_time: String(row.wedding_time ?? DEFAULT_SETTINGS.wedding_time),
    venue_name: String(row.venue_name ?? DEFAULT_SETTINGS.venue_name),
    venue_address: String(row.venue_address ?? DEFAULT_SETTINGS.venue_address),
    contact_number: String(
      row.contact_number ?? DEFAULT_SETTINGS.contact_number,
    ),
    rsvp_deadline: String(row.rsvp_deadline ?? DEFAULT_SETTINGS.rsvp_deadline),
    story: String(row.story ?? row.story_en ?? DEFAULT_SETTINGS.story),
    schedule_intro: String(
      row.schedule_intro ?? DEFAULT_SETTINGS.schedule_intro,
    ),
    dress_code_title: String(
      row.dress_code_title ?? DEFAULT_SETTINGS.dress_code_title,
    ),
    dress_code: String(row.dress_code ?? DEFAULT_SETTINGS.dress_code),
    gifts_title: String(row.gifts_title ?? DEFAULT_SETTINGS.gifts_title),
    gifts_text: String(row.gifts_text ?? DEFAULT_SETTINGS.gifts_text),
    rsvp_public_text: String(
      row.rsvp_public_text ?? DEFAULT_SETTINGS.rsvp_public_text,
    ),
    schedule: normalizeSchedule(row.schedule),
    gallery_urls: Array.isArray(row.gallery_urls)
      ? (row.gallery_urls as string[])
      : DEFAULT_SETTINGS.gallery_urls,
    maps_embed_url: String(
      row.maps_embed_url ||
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
        DEFAULT_SETTINGS.maps_embed_url,
    ),
    updated_at: row.updated_at ? String(row.updated_at) : undefined,
  };
}

export async function getWeddingSettings(): Promise<WeddingSettings> {
  if (!isSupabaseConfigured()) {
    return DEFAULT_SETTINGS;
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("wedding_settings")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return DEFAULT_SETTINGS;
    }

    return normalizeSettings(data);
  } catch {
    return DEFAULT_SETTINGS;
  }
}
