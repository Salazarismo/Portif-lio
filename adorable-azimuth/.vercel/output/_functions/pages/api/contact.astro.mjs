import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const runtime = "edge";
const prerender = false;
const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  hp: z.string().optional().default("")
});
async function POST({
  request
}) {
  const start = performance.now();
  try {
    const json = await request.json();
    const parsed = Schema.safeParse(json);
    if (!parsed.success) {
      return new Response(JSON.stringify({
        error: "Invalid payload"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const {
      hp
    } = parsed.data;
    if (hp && hp.trim() !== "") {
      return new Response(JSON.stringify({
        ok: true
      }), {
        status: 204,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const elapsed = performance.now() - start;
    return new Response(JSON.stringify({
      ok: true,
      t: Math.round(elapsed)
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      error: "Bad request"
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender,
  runtime
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
