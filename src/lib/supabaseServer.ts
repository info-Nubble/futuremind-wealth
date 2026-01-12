// src/lib/supabaseServer.ts
import {
  createServerClient,
  createBrowserClient,
  type CookieOptions,
} from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * CLIENT COMPONENTS ONLY
 */
export function createSupabaseBrowserClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

/**
 * SERVER COMPONENT CLIENT (READ ONLY)
 * Used in:
 *   - /starter-kit
 *   - /portal
 *   - any page.tsx / layout.tsx
 *
 * This version NEVER writes cookies — avoids Next.js 16 crashes.
 */
export async function createSupabaseServerClient() {
  // Next 16: cookies() is async
  const store = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value;
      },
      // Never write cookies from Server Components
      set(_name: string, _value: string, _options: CookieOptions) {},
      remove(_name: string, _options: CookieOptions) {},
    },
  });
}

/**
 * ROUTE HANDLER CLIENT (READ/WRITE)
 * Used ONLY in:
 *   - /auth/callback
 *   - any /api/* route
 */
export async function createSupabaseRouteClient() {
  const store = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        store.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        store.set({ name, value: "", ...options });
      },
    },
  });
}
