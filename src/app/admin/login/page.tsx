import Link from "next/link";
import { LoginForm } from "@/components/admin/LoginForm";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const configured = isSupabaseConfigured();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4">
      <h1 className="mb-2 text-center font-display text-4xl text-mauve">
        Admin Login
      </h1>
      <p className="mb-8 text-center text-sm text-ink/60">
        Manage invitations and RSVPs
      </p>
      {configured ? (
        <LoginForm nextPath={next || "/admin"} />
      ) : (
        <div className="paper-card rounded-sm p-8 text-center text-sm text-ink/70">
          Configure Supabase environment variables to enable admin login.
          <Link href="/" className="mt-4 block text-gold underline">
            Back to site
          </Link>
        </div>
      )}
    </div>
  );
}
