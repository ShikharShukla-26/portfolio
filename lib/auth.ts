import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authSecret =
  process.env.AUTH_SECRET ??
  (process.env.NODE_ENV === "development" ? "dev-only-auth-secret" : undefined);
const devFallbackEmail = "admin@local.dev";
const devFallbackPassword = "admin123";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: authSecret,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          return null;
        }

        const adminEmail =
          process.env.ADMIN_EMAIL ??
          (process.env.NODE_ENV === "development" ? devFallbackEmail : undefined);
        const passwordHash = process.env.ADMIN_PASSWORD_HASH;
        const plainPassword =
          process.env.ADMIN_PASSWORD ??
          (process.env.NODE_ENV === "development" ? devFallbackPassword : undefined);

        if (!adminEmail || (!passwordHash && !plainPassword)) {
          return null;
        }

        if (email !== adminEmail) {
          return null;
        }

        let valid = false;
        if (passwordHash) {
          valid = await bcrypt.compare(password, passwordHash);
        } else if (plainPassword) {
          valid = password === plainPassword;
        }

        if (!valid) {
          return null;
        }

        return {
          id: "admin",
          email: adminEmail,
          name: "Admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = Boolean(auth?.user);
      const { pathname } = request.nextUrl;
      const isProtected =
        pathname.startsWith("/admin/dashboard") ||
        (pathname.startsWith("/api/content") && request.method === "PUT");

      if (isProtected) {
        return isLoggedIn;
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  trustHost: true,
});
