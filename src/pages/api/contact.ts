import type { APIRoute } from "astro";

export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ ok: true, info: "contact endpoint listo (usa POST)" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
