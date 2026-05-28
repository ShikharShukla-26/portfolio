"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-DEFAULT border border-outline bg-surface p-8"
      >
        <div>
          <h1 className="text-headline-md text-on-surface">Admin Login</h1>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Sign in to edit your portfolio content.
          </p>
        </div>

        <label className="block space-y-1">
          <span className="text-label-sm text-on-surface-variant">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-DEFAULT border border-outline bg-surface-container px-3 py-2 text-on-surface outline-none focus:border-primary-container"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-label-sm text-on-surface-variant">Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-DEFAULT border border-outline bg-surface-container px-3 py-2 text-on-surface outline-none focus:border-primary-container"
          />
        </label>

        {error && <p className="text-body-md text-error">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-DEFAULT bg-primary-container py-3 text-label-md text-white disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginForm />
    </Suspense>
  );
}
