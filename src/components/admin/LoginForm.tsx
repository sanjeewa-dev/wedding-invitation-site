"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/actions/admin";

export function LoginForm({ nextPath }: { nextPath: string }) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(formData: FormData) {
    setPending(true);
    setError(null);
    const result = await loginAdmin(formData);
    if (result?.error) {
      setError(result.error);
      setPending(false);
    }
  }

  return (
    <form action={onSubmit} className="paper-card space-y-4 rounded-sm p-8">
      <input type="hidden" name="next" value={nextPath} />
      <div>
        <label className="mb-1 block text-sm text-ink/70">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gold/40 bg-ivory px-3 py-2 outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ink/70">Password</label>
        <input
          type="password"
          name="password"
          required
          className="w-full border border-gold/40 bg-ivory px-3 py-2 outline-none focus:border-gold"
        />
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-gold px-4 py-3 text-sm tracking-wide text-ivory disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
