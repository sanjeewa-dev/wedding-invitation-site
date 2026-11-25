# Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run [`migrations/001_init.sql`](migrations/001_init.sql).
3. Create an admin user under **Authentication → Users**.
4. Copy the project URL, anon key, and service role key into `.env.local`.

Guest and RSVP tables are not publicly readable. Invite lookup and RSVP writes use the service role on the server after validating the invite token.
