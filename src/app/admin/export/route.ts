import { NextResponse } from "next/server";
import { getGuestsWithRsvps, guestsToCsv } from "@/lib/admin-data";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 503 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(
      new URL("/admin/login?next=/admin/export", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    );
  }

  const guests = await getGuestsWithRsvps();
  const csv = guestsToCsv(guests);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="lotus-rsvps.csv"`,
    },
  });
}
