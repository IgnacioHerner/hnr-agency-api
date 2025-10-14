import type { APIRoute } from "astro";

export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ ok: true, message: "pong" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
});
