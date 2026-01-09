import { e as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro, h as addAttribute, k as renderComponent, n as renderSlot, u as unescapeHTML, l as Fragment } from '../chunks/astro/server_DnANCFlh.mjs';
/* empty css                                   */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CeMzL_Gb.mjs';
import { b as $$Button, $ as $$Header, a as $$Footer } from '../chunks/Footer_B_qeGUGU.mjs';
/* empty css                                 */
import 'preact';
import { useState, useMemo, useRef, useEffect } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
export { renderers } from '../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$AppStateBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<div id="app-state-bar" aria-live="polite" role="status" data-z="3" style="display:none; position: sticky; top: 0; z-index: 50; padding: var(--space-2) var(--space-3); border-bottom-style: solid; border-bottom-width: var(--border-width-1);"> <span id="app-state-text" data-text="ui-label"></span> </div> <script>
  (function() {
    const bar = document.getElementById('app-state-bar');
    const text = document.getElementById('app-state-text');
    if (!bar || !text) return;
    const setBar = (state, message) => {
      if (!state) { bar.style.display = 'none'; return; }
      bar.style.display = '';
      bar.dataset.state = state;
      const styles = {
        loading: { bg: getComputedStyle(document.documentElement).getPropertyValue('--surface-2'), ink: getComputedStyle(document.documentElement).getPropertyValue('--ink-1') },
        empty: { bg: getComputedStyle(document.documentElement).getPropertyValue('--surface-2'), ink: getComputedStyle(document.documentElement).getPropertyValue('--ink-1') },
        success: { bg: getComputedStyle(document.documentElement).getPropertyValue('--success'), ink: getComputedStyle(document.documentElement).getPropertyValue('--success-ink') },
        error: { bg: getComputedStyle(document.documentElement).getPropertyValue('--danger'), ink: getComputedStyle(document.documentElement).getPropertyValue('--danger-ink') },
      };
      const s = styles[state] || styles.loading;
      bar.style.background = s.bg;
      bar.style.color = s.ink;
      text.textContent = message || (state === 'loading' ? 'Carregando\u2026' : state === 'empty' ? 'Sem dados' : state === 'success' ? 'Opera\xE7\xE3o conclu\xEDda' : 'Erro');
    };
    const applyFromBody = () => {
      const ds = document.body?.dataset || {};
      setBar(ds.appState, ds.appMessage);
    };
    window.addEventListener('appstate:set', (ev) => {
      const detail = ev.detail || {};
      document.body.dataset.appState = detail.state || '';
      document.body.dataset.appMessage = detail.message || '';
      applyFromBody();
    });
    applyFromBody();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) bar.style.transition = 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)';
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const t = e.target;
        if (!(t instanceof HTMLElement)) continue;
        if (t.hasAttribute('data-global-loading')) setBar('loading');
        if (t.hasAttribute('data-global-empty')) setBar('empty');
      }
    }, { rootMargin: '0% 0% -10% 0%' });
    document.querySelectorAll('[data-global-loading],[data-global-empty]').forEach((el) => io.observe(el));
  })();
  <\/script>`])), maybeRenderHead());
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/AppStateBar.astro", void 0);

const $$Astro$g = createAstro();
const $$ProofStrip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ProofStrip;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div role="list" data-intent="proof-strip" data-z="1" style="display:flex; gap: var(--space-3); flex-wrap: wrap; padding: var(--space-2); border-style: solid; border-width: var(--border-width-1); border-color: var(--color-border); border-radius: var(--radius-md); box-shadow: var(--elevation-1)"> ${items.map((it) => renderTemplate`<div role="listitem" style="display:flex; flex-direction:column; gap: 2px"> <strong data-text="heading-lg">${it.value}</strong> <span data-text="ui-helper">${it.label}</span> </div>`)} </div>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ux/ProofStrip.astro", void 0);

const $$Astro$f = createAstro();
const $$StateBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$StateBanner;
  const { type = "info", message, inkHex } = Astro2.props;
  let bg = "var(--surface-2)";
  let fg = "var(--ink-1)";
  if (type === "success") {
    bg = "var(--success)";
    fg = "var(--ink-1)";
  }
  if (type === "error") {
    bg = "var(--danger)";
    fg = "var(--danger-ink)";
  }
  if (inkHex) {
    fg = inkHex;
  }
  return renderTemplate`${maybeRenderHead()}<div role="status" aria-live="polite"${addAttribute(type, "data-type")}${addAttribute(`background:${bg}; color:${fg}; border-radius: var(--radius-md); padding: var(--space-2) var(--space-3); transition: box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard); border: var(--border-width-1) solid var(--color-border); position: relative; z-index: 1; box-shadow: var(--elevation-1)`, "style")} data-astro-cid-i7ih7qtm> <span data-text="ui-helper" data-astro-cid-i7ih7qtm>${message}</span>  </div>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/StateBanner.astro", void 0);

const $$Astro$e = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, imageAlt = "Hero visual", proofMetrics = [], ctaLabel = "Diagnosticar sua landing", ctaHref = "#contact" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="hero-title" class="px-4 py-8" data-objective="Apresentar valor de forma clara" data-action="Explorar projetos ou contatar" data-completion="Imagem hero carregada" data-anim="hero"> <div class="container"> <div class="grid grid-cols-1 md:grid-cols-12 gap-token-6 items-center"> <div data-cell class="md:col-span-6"> <h1 id="hero-title" data-text="heading-3xl" style="font-family: var(--font-family-sans)">${title}</h1> ${subtitle && renderTemplate`<p class="mt-2" data-text="body-muted">${subtitle}</p>`} <style>
          #hero-title { font-family: var(--font-family-sans); }
        </style> ${proofMetrics.length > 0 && renderTemplate`<div class="mt-3"> ${renderComponent($$result, "ProofStrip", $$ProofStrip, { "items": proofMetrics })} </div>`} <div class="mt-3"> ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": ctaHref, "variant": "primary", "data-cta": true }, { "default": ($$result2) => renderTemplate`${ctaLabel}` })} </div> <div class="mt-2"> ${renderComponent($$result, "StateBanner", $$StateBanner, { "type": "info", "message": "Sem m\xE1gica. M\xE9tricas reais. Produ\xE7\xE3o real." })} </div> </div> <div data-cell class="md:col-span-6"> <figure aria-label="Comparativo de performance: antes 3.2s, depois 0.9s" style="display:grid; gap: var(--space-3); padding: var(--space-3); background: var(--surface-1); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--elevation-2)"> <div style="display:flex; align-items:center; justify-content:space-between"> <span data-text="ui-label">Comparativo</span> <span data-text="ui-helper">Dados simulados para demonstração</span> </div> <div style="display:grid; gap: var(--space-2)"> <div style="display:grid; gap: var(--space-1)"> <div style="display:flex; align-items:center; justify-content:space-between"> <span data-text="ui-label">Antes</span> <span data-text="ui-helper">3.2s</span> </div> <div style="height: 10px; border-radius: var(--radius-md); background: var(--surface-2); overflow:hidden"> <div style="width:75%; height:100%; background: var(--danger);"></div> </div> </div> <div style="display:grid; gap: var(--space-1)"> <div style="display:flex; align-items:center; justify-content:space-between"> <span data-text="ui-label">Depois</span> <span data-text="ui-helper">0.9s</span> </div> <div style="height: 10px; border-radius: var(--radius-md); background: var(--surface-2); overflow:hidden"> <div style="width:25%; height:100%; background: var(--success);"></div> </div> </div> </div> <div style="display:flex; gap: var(--space-2); flex-wrap:wrap; align-items:center"> <span data-text="ui-label" style="padding: 4px 10px; border-radius: var(--radius-md); background: var(--surface-2)">LCP 0.95s</span> <span data-text="ui-label" style="padding: 4px 10px; border-radius: var(--radius-md); background: var(--surface-2)">CLS 0</span> <span data-text="ui-label" style="padding: 4px 10px; border-radius: var(--radius-md); background: var(--surface-2)">JS Budget 24.86KB</span> </div> </figure> </div> </div> </div> </section>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/Hero.astro", void 0);

const $$Astro$d = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title,
    problem,
    decision,
    metricLabel,
    metricValue,
    codeSnippet = "",
    metricContext = "",
    impact = "",
    docHref = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article aria-labelledby="project-title" data-project-card data-cell data-z="1"${addAttribute(metricValue, "data-metric")} class="rounded-md p-4 border" style="border-color: var(--color-border); box-shadow: var(--elevation-1)"> <header> <h3 id="project-title" data-text="heading-lg" style="font-family: var(--font-family-sans)">${title}</h3> </header> <section class="mt-3"> <h3 data-text="ui-label">Problema</h3> <p class="mt-1" data-text="body-muted">${problem}</p> </section> <section class="mt-3"> <h3 data-text="ui-label">Decisão técnica</h3> <p class="mt-1" data-text="body-muted">${decision}</p> </section> <section class="mt-3" aria-live="polite"> <h3 data-text="ui-label">Resultado mensurável</h3> <p class="mt-1" data-text="ui-label">${metricLabel}</p> <div class="mt-1" aria-label="métrica" style="display:flex; align-items:center; gap: var(--space-2)"> <strong data-text="heading-2xl" style="color: var(--success)">${metricValue}</strong> ${metricContext && renderTemplate`<span data-text="ui-helper">${metricContext}</span>`} </div> ${impact && renderTemplate`<p class="mt-1" data-text="body-muted">${impact}</p>`} </section> ${codeSnippet && renderTemplate`<details class="mt-3"> <summary data-text="ui-label" style="cursor:pointer">Ver snippet</summary> <pre class="mt-1 p-3 rounded-sm" style="background: var(--color-muted); overflow:auto"><code>${codeSnippet}</code></pre> </details>`} ${docHref && renderTemplate`<div class="mt-3"> ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": docHref, "variant": "secondary" }, { "default": ($$result2) => renderTemplate`Ver Documentação` })} </div>`} </article>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ProjectCard.astro", void 0);

function ContactForm() {
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;
    setState("submitting");
    try {
      window.dispatchEvent(new CustomEvent("appstate:set", {
        detail: {
          state: "loading",
          message: "Enviando…"
        }
      }));
    } catch {
    }
    const fd = new FormData(e.target);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      hp: String(fd.get("hp") || "")
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setState("success");
        setMessage("Mensagem enviada. Obrigado!");
        try {
          window.dispatchEvent(new CustomEvent("appstate:set", {
            detail: {
              state: "success",
              message: "Mensagem enviada"
            }
          }));
        } catch {
        }
        e.target.reset();
      } else {
        setState("error");
        const data = await res.json().catch(() => ({}));
        setMessage(data.error || "Falha ao enviar.");
        try {
          window.dispatchEvent(new CustomEvent("appstate:set", {
            detail: {
              state: "error",
              message: "Falha ao enviar"
            }
          }));
        } catch {
        }
      }
    } catch (err) {
      setState("error");
      setMessage("Erro de rede.");
      try {
        window.dispatchEvent(new CustomEvent("appstate:set", {
          detail: {
            state: "error",
            message: "Erro de rede"
          }
        }));
      } catch {
      }
    }
  }
  return jsxs("form", {
    onSubmit,
    class: "grid",
    style: "gap: var(--spacing-3)",
    "data-state": state,
    children: [jsxs("div", {
      children: [jsx("label", {
        for: "name",
        children: "Nome"
      }), jsx("input", {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        class: "ui-input"
      })]
    }), jsxs("div", {
      children: [jsx("label", {
        for: "email",
        children: "Email"
      }), jsx("input", {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        class: "ui-input"
      })]
    }), jsxs("div", {
      children: [jsx("label", {
        for: "message",
        children: "Mensagem"
      }), jsx("textarea", {
        id: "message",
        name: "message",
        rows: 4,
        required: true,
        class: "ui-textarea"
      })]
    }), jsxs("div", {
      "aria-hidden": "true",
      class: "sr-only",
      children: [jsx("label", {
        htmlFor: "hp",
        children: "Não preencher"
      }), jsx("input", {
        id: "hp",
        name: "hp",
        type: "text",
        tabIndex: -1,
        autoComplete: "off"
      })]
    }), jsx("button", {
      type: "submit",
      disabled: state === "submitting",
      class: "ui-button",
      children: state === "submitting" ? "Enviando..." : "Enviar"
    }), state !== "idle" && jsx("p", {
      "aria-live": "polite",
      "data-text": "ui-helper",
      children: message
    })]
  });
}

const $$Astro$c = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, title, type, objective, action, completion, tone = "default", metaLine } = Astro2.props;
  const toneStyle = tone === "alt" ? "background: var(--surface-2)" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")} class="px-4 py-6" data-section${addAttribute(type, "data-section-type")}${addAttribute(objective, "data-objective")}${addAttribute(action, "data-action")}${addAttribute(completion, "data-completion")}${addAttribute(tone, "data-tone")}${addAttribute(toneStyle, "style")}> <div class="container"> <h2${addAttribute(`${id}-title`, "id")} data-text="heading-2xl" style="font-family: var(--font-family-sans)">${title}</h2> ${metaLine && renderTemplate`<p class="mt-1" data-text="ui-helper" style="max-width: 65ch">${metaLine}</p>`} ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/Section.astro", void 0);

const $$P = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-text="body-normal">${renderSlot($$result, $$slots["default"])}</p>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/typography/P.astro", void 0);

const $$Astro$b = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$List;
  const { ordered = false } = Astro2.props;
  return renderTemplate`${ordered ? renderTemplate`${maybeRenderHead()}<ol style="margin-top: var(--spacing-2); display:grid; gap: var(--spacing-2)">${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul style="margin-top: var(--spacing-2); display:grid; gap: var(--spacing-2)">${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/typography/List.astro", void 0);

const $$SkeletonContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form aria-hidden="true" class="grid" style="gap: var(--spacing-3)"> <div> <div data-skeleton style="height: var(--space-2); width: var(--space-9); border-radius: var(--radius-sm)"></div> <div data-skeleton style="margin-top: var(--space-1); height: var(--space-7); width: 100%; border-radius: var(--radius-md)"></div> </div> <div> <div data-skeleton style="height: var(--space-2); width: var(--space-9); border-radius: var(--radius-sm)"></div> <div data-skeleton style="margin-top: var(--space-1); height: var(--space-7); width: 100%; border-radius: var(--radius-md)"></div> </div> <div> <div data-skeleton style="height: var(--space-2); width: var(--space-8); border-radius: var(--radius-sm)"></div> <div data-skeleton style="margin-top: var(--space-1); height: calc(var(--space-7) + var(--space-2)); width: 100%; border-radius: var(--radius-md)"></div> </div> <div> <div data-skeleton style="height: var(--space-2); width: calc(var(--space-9) - var(--space-4)); border-radius: var(--radius-sm)"></div> <div data-skeleton style="margin-top: var(--space-1); height: var(--space-5); width: calc(var(--space-9) + var(--space-8)); border-radius: var(--radius-md)"></div> </div> </form>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/SkeletonContactForm.astro", void 0);

const $$Astro$a = createAstro();
const $$CardInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CardInfo;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article aria-labelledby="card-info-title" class="card-interactive" data-cell data-z="1" style="background: var(--color-bg); border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); border-radius: var(--radius-md); box-shadow: var(--elevation-1); padding: var(--spacing-4); display:grid; gap: var(--spacing-2)" data-astro-cid-yfhrchtd> <header data-astro-cid-yfhrchtd> <h3 id="card-info-title" data-text="heading-lg" data-astro-cid-yfhrchtd>${title}</h3> </header> <p data-text="body-normal" data-astro-cid-yfhrchtd>${description}</p> ${renderSlot($$result, $$slots["default"])} <div data-reveal style="opacity: 0; max-height: 0; overflow: hidden" data-astro-cid-yfhrchtd> <p data-text="ui-helper" data-astro-cid-yfhrchtd>Detalhes disponíveis ao interagir.</p> </div>  </article>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/cards/CardInfo.astro", void 0);

const $$Astro$9 = createAstro();
const $$CardAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CardAction;
  const { title, description, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article aria-labelledby="card-action-title" class="card-interactive" data-cell data-z="2" style="background: var(--color-bg); border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); border-radius: var(--radius-md); box-shadow: var(--elevation-2); padding: var(--spacing-4); display:grid; gap: var(--spacing-2)" data-astro-cid-3ppcfzse> <header data-astro-cid-3ppcfzse> <h3 id="card-action-title" data-text="heading-lg" data-astro-cid-3ppcfzse>${title}</h3> </header> <p data-text="body-normal" data-astro-cid-3ppcfzse>${description}</p> ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": href, "variant": "secondary", "data-astro-cid-3ppcfzse": true }, { "default": ($$result2) => renderTemplate`Acessar` })} <div data-reveal style="opacity: 0; max-height: 0; overflow: hidden" data-astro-cid-3ppcfzse> <p data-text="ui-helper" data-astro-cid-3ppcfzse>Esta ação abre a seção de contato.</p> </div>  </article>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/cards/CardAction.astro", void 0);

const $$Astro$8 = createAstro();
const $$CardPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardPreview;
  const { title, imageAlt = "Pr\xE9via", imageUrl } = Astro2.props;
  let avif = "";
  let webp = "";
  try {
    const u = new URL(imageUrl);
    if (u.hostname.includes("images.unsplash.com")) {
      avif = imageUrl.replace(/fm=[^&]*/i, "fm=avif");
      webp = imageUrl.replace(/fm=[^&]*/i, "fm=webp");
    }
  } catch {
  }
  return renderTemplate`${maybeRenderHead()}<article aria-labelledby="card-preview-title" class="card-interactive" data-cell data-z="2" style="background: var(--color-bg); border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); border-radius: var(--radius-md); box-shadow: var(--elevation-2); overflow:hidden; position: relative" data-astro-cid-tkqjjbq4> <picture data-astro-cid-tkqjjbq4> ${avif && renderTemplate`<source type="image/avif"${addAttribute(`${avif} 1200w`, "srcset")} sizes="100vw" data-astro-cid-tkqjjbq4>`} ${webp && renderTemplate`<source type="image/webp"${addAttribute(`${webp} 1200w`, "srcset")} sizes="100vw" data-astro-cid-tkqjjbq4>`} <img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} width="640" height="360" loading="lazy" decoding="async" style="display:block; width:100%; height:auto" data-astro-cid-tkqjjbq4> </picture> <div style="padding: var(--spacing-3)" data-astro-cid-tkqjjbq4> <h3 id="card-preview-title" data-text="heading-lg" data-astro-cid-tkqjjbq4>${title}</h3> ${renderSlot($$result, $$slots["default"])} </div> <div data-reveal style="position: absolute; inset: var(--space-2); background: rgba(0,0,0,0.35); color: var(--accent-ink); display:flex; align-items:center; justify-content:center; border-radius: var(--radius-md); opacity: 0;" data-astro-cid-tkqjjbq4> <p data-text="ui-label" data-astro-cid-tkqjjbq4>Prévia detalhada</p> </div>  </article>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/cards/CardPreview.astro", void 0);

const $$Astro$7 = createAstro();
const $$CardStat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardStat;
  const { label, value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card-interactive" data-cell data-z="1" style="background: var(--color-bg); border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); border-radius: var(--radius-md); box-shadow: var(--elevation-1); padding: var(--spacing-4); display:grid; gap: var(--spacing-2)" data-astro-cid-qqpch2nr> <span data-text="ui-meta" data-astro-cid-qqpch2nr>${label}</span> <strong data-text="heading-2xl" data-astro-cid-qqpch2nr>${value}</strong> <div data-reveal style="opacity: 0; max-height: 0; overflow: hidden" data-astro-cid-qqpch2nr> <p data-text="ui-helper" data-astro-cid-qqpch2nr>Atualização recente.</p> </div>  </article>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/cards/CardStat.astro", void 0);

const $$Astro$6 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Badge;
  const { type = "status", tone = "info" } = Astro2.props;
  let bg = "var(--surface-2)";
  let fg = "var(--ink-1)";
  if (tone === "success") {
    bg = "var(--success)";
    fg = "var(--ink-1)";
  } else if (tone === "danger") {
    bg = "var(--danger)";
    fg = "var(--danger-ink)";
  }
  const metricStyle = type === "metric" ? `border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); background: var(--surface-1); color: var(--ink-1)` : `background: ${bg}; color: ${fg}`;
  return renderTemplate`${maybeRenderHead()}<span data-intent="badge"${addAttribute(type, "data-state")}${addAttribute(tone, "data-tone")}${addAttribute(`display:inline-flex; align-items:center; gap: var(--space-2); padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); ${metricStyle}`, "style")} data-astro-cid-35zd7xm4> ${renderSlot($$result, $$slots["default"])}  </span>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/Badge.astro", void 0);

const $$Astro$5 = createAstro();
const $$Divider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Divider;
  const { subtle = true } = Astro2.props;
  const color = subtle ? "var(--color-border)" : "var(--ink-2)";
  return renderTemplate`${maybeRenderHead()}<hr role="separator" aria-orientation="horizontal" data-intent="divider"${addAttribute(subtle ? "subtle" : "strong", "data-state")}${addAttribute(`border: none; border-top-style: solid; border-top-width: var(--border-width-1); border-top-color: ${color}; margin-block: var(--space-3)`, "style")}>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/Divider.astro", void 0);

const $$Astro$4 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  const { tone = "neutral", size = "md" } = Astro2.props;
  let bg = "var(--surface-2)";
  if (tone === "accent") bg = "var(--accent-1)";
  else if (tone === "success") bg = "var(--success)";
  else if (tone === "danger") bg = "var(--danger)";
  const dim = size === "sm" ? "var(--space-4)" : size === "lg" ? "var(--space-7)" : "var(--space-5)";
  return renderTemplate`${maybeRenderHead()}<div data-intent="icon"${addAttribute(tone, "data-state")}${addAttribute(`display:inline-flex; align-items:center; justify-content:center; width: ${dim}; height: ${dim}; border-radius: var(--radius-full); background: ${bg}; box-shadow: var(--elevation-1)`, "style")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/Icon.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$FilterableList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FilterableList;
  const { items } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div> <label for="filter" class="sr-only">Filtrar</label> <input id="filter" class="ui-input" type="text" placeholder="Filtrar..."> <div id="counter" aria-live="polite" data-text="ui-label" style="margin-top: var(--space-1)"></div> <ul id="list" style="display:grid; gap: var(--spacing-2); margin-top: var(--spacing-2)"> ', " </ul> <div id=\"empty\" style=\"display:none; margin-top: var(--space-2)\" data-text=\"ui-helper\">Nenhum item corresponde ao termo.</div> <script>\n    const input = document.getElementById('filter');\n    const list = document.getElementById('list');\n    const counter = document.getElementById('counter');\n    const empty = document.getElementById('empty');\n    function highlight(text, query) {\n      if (!query) return text;\n      const i = text.toLowerCase().indexOf(query.toLowerCase());\n      if (i === -1) return text;\n      const before = text.slice(0, i);\n      const match = text.slice(i, i + query.length);\n      const after = text.slice(i + query.length);\n      return `${before}<mark style=\"background: var(--surface-2); color: inherit; border-radius: var(--radius-sm)\">${match}</mark>${after}`;\n    }\n    function update() {\n      const s = input.value.trim().toLowerCase();\n      let visible = 0;\n      for (const li of list.querySelectorAll('li')) {\n        const text = li.textContent || '';\n        const show = !s || text.toLowerCase().includes(s);\n        if (li instanceof HTMLElement) {\n          li.style.display = show ? '' : 'none';\n          li.innerHTML = highlight(text, s);\n        }\n        if (show) visible++;\n      }\n      if (counter) counter.textContent = s ? `${visible} resultados` : `${list.children.length} itens`;\n      if (empty) empty.style.display = visible === 0 ? '' : 'none';\n    }\n    if (input && list) {\n      input.addEventListener('input', update);\n      update();\n    }\n  <\/script> </div>"], ["", '<div> <label for="filter" class="sr-only">Filtrar</label> <input id="filter" class="ui-input" type="text" placeholder="Filtrar..."> <div id="counter" aria-live="polite" data-text="ui-label" style="margin-top: var(--space-1)"></div> <ul id="list" style="display:grid; gap: var(--spacing-2); margin-top: var(--spacing-2)"> ', " </ul> <div id=\"empty\" style=\"display:none; margin-top: var(--space-2)\" data-text=\"ui-helper\">Nenhum item corresponde ao termo.</div> <script>\n    const input = document.getElementById('filter');\n    const list = document.getElementById('list');\n    const counter = document.getElementById('counter');\n    const empty = document.getElementById('empty');\n    function highlight(text, query) {\n      if (!query) return text;\n      const i = text.toLowerCase().indexOf(query.toLowerCase());\n      if (i === -1) return text;\n      const before = text.slice(0, i);\n      const match = text.slice(i, i + query.length);\n      const after = text.slice(i + query.length);\n      return \\`\\${before}<mark style=\"background: var(--surface-2); color: inherit; border-radius: var(--radius-sm)\">\\${match}</mark>\\${after}\\`;\n    }\n    function update() {\n      const s = input.value.trim().toLowerCase();\n      let visible = 0;\n      for (const li of list.querySelectorAll('li')) {\n        const text = li.textContent || '';\n        const show = !s || text.toLowerCase().includes(s);\n        if (li instanceof HTMLElement) {\n          li.style.display = show ? '' : 'none';\n          li.innerHTML = highlight(text, s);\n        }\n        if (show) visible++;\n      }\n      if (counter) counter.textContent = s ? \\`\\${visible} resultados\\` : \\`\\${list.children.length} itens\\`;\n      if (empty) empty.style.display = visible === 0 ? '' : 'none';\n    }\n    if (input && list) {\n      input.addEventListener('input', update);\n      update();\n    }\n  <\/script> </div>"])), maybeRenderHead(), items.map((it) => renderTemplate`<li>${it}</li>`));
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/data/FilterableList.astro", void 0);

const $$Astro$2 = createAstro();
const $$TableBasic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableBasic;
  const { headers, rows, caption = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-cell data-z="1" style="overflow-x:auto; border-radius: var(--radius-md); box-shadow: var(--elevation-1)"> <table style="width:100%; border-collapse: collapse; color: var(--ink-1); background: var(--surface-1)" role="table"> ${caption && renderTemplate`<caption style="padding: var(--spacing-2) var(--spacing-3)">${caption}</caption>`} <thead> <tr> ${headers.map((h, i) => renderTemplate`<th scope="col" data-text="ui-label"${addAttribute(`text-align:${i === headers.length - 1 ? "right" : "left"}; background: var(--surface-2); position: sticky; top: 0; padding: var(--space-2) var(--space-3)`, "style")}>${h}</th>`)} </tr> </thead> <tbody> ${rows.map((r) => renderTemplate`<tr> ${r.map((c, i) => {
    const isFirst = i === 0;
    const isStatus = headers[i]?.toLowerCase() === "status";
    const isMetric = headers[i]?.toLowerCase() === "m\xE9trica";
    let content = c;
    if (isStatus) {
      let tone = "neutral";
      const v = c.toLowerCase();
      if (v.includes("conclu\xEDdo")) tone = "success";
      else if (v.includes("est\xE1vel")) tone = "neutral";
      else if (v.includes("pendente")) tone = "danger";
      content = `<span style="display:inline-block; padding:2px 8px; border-radius: var(--radius-md); background:${tone === "success" ? "var(--success)" : "var(--surface-2)"}; color:${tone === "success" ? "var(--success-ink)" : "var(--ink-1)"}">${c}</span>`;
    }
    if (isMetric) {
      const lc = c.toLowerCase();
      const good = lc.includes("0.95s") || lc.includes("0 viola\xE7\xF5es") || lc.includes("0,95s");
      content = `<strong style="color:${good ? "var(--success)" : "var(--ink-1)"}">${c}</strong>`;
    }
    return renderTemplate`<td${addAttribute(isFirst ? "heading-lg" : "body-normal", "data-text")}${addAttribute(`border-top-style: solid; border-top-color: var(--color-border); border-top-width: var(--border-width-1); padding: var(--space-2) var(--space-3); text-align:${i === r.length - 1 ? "right" : "left"}`, "style")}>${unescapeHTML(content)}</td>`;
  })} </tr>`)} </tbody> </table> </div>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/data/TableBasic.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const label = "Carrossel de cards";
  return renderTemplate`${maybeRenderHead()}<div role="region"${addAttribute(label, "aria-label")} tabindex="0" class="flex md:grid md:grid-cols-2 gap-token-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/ui/Carousel.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardInteractive = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardInteractive;
  const { title, description = "", href, tone = "default" } = Astro2.props;
  const bg = tone === "accent" ? "var(--surface-2)" : "var(--surface-1)";
  const border = tone === "accent" ? "var(--accent-1)" : "var(--color-border)";
  const shadowBase = tone === "accent" ? "var(--elevation-2)" : "var(--elevation-1)";
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a aria-labelledby="card-interactive-title"${addAttribute(href, "href")} class="card-interactive" data-cell data-z="2"${addAttribute(`background:${bg}; border-color:${border}; box-shadow:${shadowBase}`, "style")}><div class="card-body"><h3 id="card-interactive-title" data-text="heading-lg">${title}</h3>${description && renderTemplate`<p data-text="body-normal">${description}</p>`}${renderSlot($$result, $$slots["default"])}</div></a>` : renderTemplate`<article aria-labelledby="card-interactive-title" class="card-interactive" data-cell data-z="2"${addAttribute(`background:${bg}; border-color:${border}; box-shadow:${shadowBase}`, "style")}><div class="card-body"><h3 id="card-interactive-title" data-text="heading-lg">${title}</h3>${description && renderTemplate`<p data-text="body-normal">${description}</p>`}${renderSlot($$result, $$slots["default"])}</div></article>`}`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/cards/CardInteractive.astro", void 0);

function toFormat(url, fmt) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("images.unsplash.com")) {
      return url.replace(/fm=[^&]*/i, `fm=${fmt}`);
    }
  } catch {
  }
  return "";
}
function PortfolioGrid({
  items
}) {
  const categories = useMemo(() => ["Todos", "App Mobile", "Websites", "Design"], []);
  const [selected, setSelected] = useState("Todos");
  const [loaded, setLoaded] = useState({});
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const containerRef = useRef(null);
  const counts = useMemo(() => {
    const map = {
      "Todos": items.length,
      "App Mobile": 0,
      "Websites": 0,
      "Design": 0
    };
    for (const it of items) map[it.category]++;
    return map;
  }, [items]);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelected("Todos");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll("img[data-pid]"));
    if (imgs.length) {
      setLoaded((prev) => {
        const next = {
          ...prev
        };
        for (const img of imgs) {
          const pid = img.getAttribute("data-pid") || "";
          if (pid && img.complete) next[pid] = true;
        }
        return next;
      });
    }
  }, []);
  const onSelect = (cat) => {
    setSelected(cat);
    const el = containerRef.current;
    if (el) {
      el.setAttribute("data-state", "changing");
      setTimeout(() => el.removeAttribute("data-state"), 260);
    }
  };
  return jsxs("div", {
    ref: containerRef,
    class: "portfolio-grid",
    "data-active": selected,
    style: "display:grid; gap: var(--spacing-4)",
    children: [jsx("div", {
      role: "toolbar",
      "aria-label": "Filtros de portfólio",
      style: "display:flex; gap: var(--space-2); flex-wrap: wrap",
      children: categories.map((cat) => {
        const active = selected === cat;
        return jsxs("button", {
          type: "button",
          "aria-pressed": active,
          onClick: () => onSelect(cat),
          class: "filter-btn",
          "data-text": active ? "ui-label" : "ui-helper",
          style: `position:relative; padding: var(--space-1) var(--space-2); border-radius: var(--radius-md); border: var(--border-width-1) solid ${active ? "var(--accent-1)" : "var(--color-border)"}; background: ${active ? "var(--surface-1)" : "transparent"}; transition: all var(--duration-fast) var(--ease-standard)`,
          children: [cat, " · ", cat === "Todos" ? counts["Todos"] : counts[cat], jsx("span", {
            "aria-hidden": "true",
            class: "filter-underline"
          })]
        }, cat);
      })
    }), jsx("div", {
      "aria-live": "polite",
      "data-text": "ui-label",
      children: selected === "Todos" ? "Todos os projetos" : `${items.filter((i) => i.category === selected).length} projetos — ${selected}`
    }), jsx("div", {
      class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-token-4",
      children: items.map((item, idx) => {
        const avif = toFormat(item.imageUrl, "avif");
        const webp = toFormat(item.imageUrl, "webp");
        const eager = idx < 3;
        const match = selected === "Todos" ? true : item.category === selected;
        return jsxs("a", {
          class: "card-interactive portfolio-item",
          "data-cell": true,
          "data-z": "1",
          "aria-labelledby": `${item.id}-title`,
          href: `/projects/${item.id}`,
          "data-category": item.category,
          "data-match": match ? "true" : "false",
          onMouseEnter: (e) => {
            const el = containerRef.current;
            if (!el) return;
            e.currentTarget.setAttribute("data-hovered", "true");
            el.setAttribute("data-hover", match ? "active" : "inactive");
            const cr = el.getBoundingClientRect();
            const tr = e.currentTarget.getBoundingClientRect();
            const cx = tr.left + tr.width / 2 - cr.left;
            const cy = tr.top + tr.height / 2 - cr.top;
            el.style.setProperty("--hover-x", `${cx}px`);
            el.style.setProperty("--hover-y", `${cy}px`);
            el.setAttribute("data-hoverfx", "on");
          },
          onMouseLeave: (e) => {
            const el = containerRef.current;
            if (!el) return;
            e.currentTarget.removeAttribute("data-hovered");
            el.removeAttribute("data-hover");
            el.removeAttribute("data-hoverfx");
          },
          style: `background: var(--surface-1); border-color: var(--color-border); box-shadow: var(--elevation-1)`,
          children: [jsxs("div", {
            style: "position:relative; overflow:hidden; border-radius: var(--radius-md)",
            children: [!loaded[item.id] && jsx("div", {
              "aria-hidden": "true",
              "data-skeleton": true,
              style: "position:absolute; inset:0; border-radius: var(--radius-md); pointer-events:none"
            }), jsxs("picture", {
              children: [avif && jsx("source", {
                type: "image/avif",
                srcSet: `${avif} 1200w`,
                sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              }), webp && jsx("source", {
                type: "image/webp",
                srcSet: `${webp} 1200w`,
                sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              }), jsx("img", {
                src: item.imageUrl,
                alt: item.title,
                width: "640",
                height: "360",
                loading: eager ? "eager" : "lazy",
                decoding: "async",
                fetchpriority: eager ? "high" : "auto",
                "data-pid": item.id,
                onLoad: () => setLoaded((s) => ({
                  ...s,
                  [item.id]: true
                })),
                onError: () => setLoaded((s) => ({
                  ...s,
                  [item.id]: true
                })),
                style: "display:block; width:100%; height:auto; aspect-ratio: 16/9; border-radius: var(--radius-md)"
              })]
            })]
          }), jsxs("div", {
            class: "card-body",
            children: [jsx("h3", {
              id: `${item.id}-title`,
              "data-text": "heading-lg",
              children: item.title
            }), item.caseLabel && item.caseTarget && jsx("a", {
              href: item.caseTarget,
              "data-text": "ui-label",
              style: "display:inline-block; padding: 2px 8px; border-radius: var(--radius-sm); background: var(--surface-2); border: var(--border-width-1) solid var(--color-border)",
              children: item.caseLabel
            }), jsx("p", {
              "data-text": "body-normal",
              style: "max-width: 65ch",
              children: item.description
            }), jsx("div", {
              style: "display:flex; flex-wrap:wrap; gap: var(--space-1)",
              children: item.technologies.map((t) => jsx("span", {
                "data-text": "ui-label",
                style: "border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md); padding: 2px 8px; background: var(--surface-2)",
                children: t
              }, t))
            })]
          })]
        }, item.id);
      })
    })]
  });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "P\xE1gina Base", "description": "Estrutura sem\xE2ntica inicial" }, { "default": ($$result2) => renderTemplate(_b || (_b = __template(["  ", " ", " ", " ", " ", " ", " ", '  <script type="application/ld+json">{JSON.stringify({\n    "@context": "https://schema.org",\n    "@type": "BreadcrumbList",\n    itemListElement: [\n      { "@type": "ListItem", position: 1, name: "Home", item: "/" },\n      { "@type": "ListItem", position: 2, name: "Projetos", item: "/#projects" }\n    ]\n  })}<\/script> <script type="application/ld+json">{JSON.stringify({\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    name: "Portfolio",\n    itemListElement: [\n      { "@type": "ListItem", position: 1, name: "Redu\xE7\xE3o de LCP em landing" },\n      { "@type": "ListItem", position: 2, name: "Gate de tokens CSS" }\n    ]\n  })}<\/script> '])), renderComponent($$result2, "Hero", $$Hero, { "title": "Se sua landing demora mais de 2s, voc\xEA j\xE1 est\xE1 perdendo clientes todos os dias.", "subtitle": "Eu entrego p\xE1ginas que carregam em \u2264 1s, validadas por Core Web Vitals.", "imageAlt": "Hero visual", "proofMetrics": [
    { label: "LCP 0.95s \u2192 usu\xE1rio v\xEA antes de desistir", value: "\u2264 1s" },
    { label: "CLS 0 \u2192 nada se mexe", value: "0" },
    { label: "JS Budget 24.86KB \u2192 intera\xE7\xE3o sem bloqueios", value: "24.86KB" }
  ], "ctaLabel": "Descobrir gargalos de convers\xE3o agora", "ctaHref": "#contact" }), renderComponent($$result2, "Section", $$Section, { "id": "portfolio", "title": "Portf\xF3lio", "type": "demonstracao", "objective": "Mostrar projetos realizados", "action": "Explorar projetos", "completion": "Grid renderizado", "tone": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PortfolioGrid", PortfolioGrid, { "client:load": true, "items": [
    { id: "p1", title: "App de Entregas", description: "Aplicativo mobile com rastreamento em tempo real e otimiza\xE7\xE3o de rotas.", imageUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fm=jpg&w=1200&q=80", technologies: ["React Native", "TypeScript", "GSAP"], category: "App Mobile" },
    { id: "p2", title: "Website de SaaS", description: "Landing de alto desempenho com m\xE9tricas de produ\xE7\xE3o e SEO t\xE9cnico.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fm=jpg&w=1200&q=80", technologies: ["Astro", "Preact", "Tailwind"], category: "Websites", caseLabel: "Ver Case de LCP", caseTarget: "#projects" },
    { id: "p3", title: "Dashboard Anal\xEDtico", description: "Interface web responsiva com gr\xE1ficos interativos e filtros.", imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fm=jpg&w=1200&q=80", technologies: ["React", "D3", "Zod"], category: "Websites" },
    { id: "p4", title: "Sistema de Design", description: "Biblioteca de componentes com tokens e gates de CSS.", imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fm=jpg&w=1200&q=80", technologies: ["CSS Tokens", "Tailwind", "Astro"], category: "Design" },
    { id: "p5", title: "E-commerce Headless", description: "Cat\xE1logo com checkout otimizado e carregamento instant\xE2neo.", imageUrl: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fm=jpg&w=1200&q=80", technologies: ["Next.js", "Stripe", "GSAP"], category: "Design" },
    { id: "p6", title: "Prot\xF3tipo Mobile", description: "Padr\xF5es de navega\xE7\xE3o com microintera\xE7\xF5es e acessibilidade.", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fm=jpg&w=1200&q=80", technologies: ["Expo", "ARIA", "Motion"], category: "App Mobile" }
  ], "client:component-hydration": "load", "client:component-path": "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/PortfolioGrid.island", "client:component-export": "default" })} ` }), renderComponent($$result2, "Section", $$Section, { "id": "data", "title": "Interfaces que reduzem tempo de decis\xE3o", "type": "informacional", "objective": "Acelerar decis\xE3o com informa\xE7\xE3o organizada", "action": "Explorar exemplos", "completion": "Tabela renderizada", "tone": "alt", "metaLine": "" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid gap-token-3" style="margin-top: var(--space-2)"> <div> <div style="max-width: 65ch">${renderComponent($$result3, "P", $$P, {}, { "default": ($$result4) => renderTemplate`Filtros em tempo real e tabelas responsivas para encontrar respostas em segundos.` })}</div> ${renderComponent($$result3, "FilterableList", $$FilterableList, { "items": ["Landing LCP", "Gate Tokens", "Islands Hygiene", "Skeletons", "Responsive Table"] })} </div> <div> <div style="max-width: 65ch">${renderComponent($$result3, "P", $$P, {}, { "default": ($$result4) => renderTemplate`Visualização orientada à decisão` })}</div> ${renderComponent($$result3, "TableBasic", $$TableBasic, { "headers": ["Projeto", "Status", "M\xE9trica"], "rows": [["Landing LCP", "Conclu\xEDdo", "0.95s"], ["Gate Tokens", "Est\xE1vel", "0 viola\xE7\xF5es"], ["Tabela", "Pendente", "N/A"]] })} </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "id": "projects", "title": "Estudos de Caso Reais", "type": "demonstracao", "objective": "Provar compet\xEAncia com resultados", "action": "Agendar conversa", "completion": "Cards renderizados", "tone": "default" }, { "cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "cta" }, { "default": ($$result4) => renderTemplate`<div class="w-full sm:w-auto sm:inline-block">${renderComponent($$result4, "Button", $$Button, { "dataCta": true, "as": "a", "href": "#contact", "variant": "primary" }, { "default": ($$result5) => renderTemplate`Fale comigo` })}</div>` })}`, "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-token-4"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "title": "LCP de 3.2s \u2192 0.95s em landing com imagem hero", "problem": "LCP acima de 3s por imagem hero pesada e fontes bloqueantes.", "decision": "Uso de <picture> com AVIF/WebP, fetchpriority=high, loading=eager e fontes com font-display: swap.", "metricLabel": "LCP", "metricValue": "0.95s em 4G simulado", "metricContext": "em 4G simulado", "impact": "Isso resultou em melhora estimada de 8\u201312% na taxa de convers\xE3o, alinhada a estudos sobre impacto de velocidade.", "codeSnippet": `<picture>
  <source type="image/avif" ... />
  <img loading="eager" fetchpriority="high" />
</picture>` })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "title": "Sistema de tokens CSS com valida\xE7\xE3o autom\xE1tica (0 viola\xE7\xF5es em 30 dias)", "problem": "Valores arbitr\xE1rios de CSS causando inconsist\xEAncia visual.", "decision": "Sistema de tokens via @theme e gate que bloqueia px/rem/#/hsl fora de tokens.css.", "metricLabel": "Incid\xEAncia de viola\xE7\xF5es", "metricValue": "0 viola\xE7\xF5es em CI por 30 dias", "docHref": "/docs", "codeSnippet": `/* scripts/token-gate.cjs */
patterns = [/px/, /rem/, /#/, /hsl(/];` })} <div class="col-span-1 md:col-span-2"> <div style="max-width: 65ch"> ${renderComponent($$result3, "P", $$P, { "data-text": "ui-label" }, { "default": ($$result4) => renderTemplate`Princípios que guiam meus projetos` })} </div> ${renderComponent($$result3, "List", $$List, {}, { "default": ($$result4) => renderTemplate` <li>Performance mensurável</li> <li>Sistemas auditáveis</li> <li>JS mínimo e intencional</li> <li>Tokens e consistência visual</li> ` })} </div> <details class="col-span-1 md:col-span-2"> <summary data-text="ui-label" style="cursor:pointer">Ver sistema de componentes usado nos estudos de caso</summary> ${renderComponent($$result3, "Carousel", $$Carousel, {}, { "default": ($$result4) => renderTemplate` <div class="min-w-[80%] snap-start"> ${renderComponent($$result4, "CardInfo", $$CardInfo, { "title": "Card Informativo", "description": "Texto e contexto para orientar sem a\xE7\xE3o direta." }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "P", $$P, {}, { "default": ($$result6) => renderTemplate`Use para comunicar estado ou instrução.` })} <div style="display:flex; align-items:center; gap: var(--space-2)"> ${renderComponent($$result5, "Badge", $$Badge, { "type": "status", "tone": "success" }, { "default": ($$result6) => renderTemplate`Sucesso` })} ${renderComponent($$result5, "Badge", $$Badge, { "type": "status", "tone": "danger" }, { "default": ($$result6) => renderTemplate`Erro` })} ${renderComponent($$result5, "Badge", $$Badge, { "type": "metric" }, { "default": ($$result6) => renderTemplate`12%` })} </div> ${renderComponent($$result5, "Divider", $$Divider, {})} ` })} </div> <div class="min-w-[80%] snap-start"> ${renderComponent($$result4, "CardAction", $$CardAction, { "title": "Card com A\xE7\xE3o", "description": "Convite para executar uma tarefa.", "href": "#contact" })} </div> <div class="min-w-[80%] snap-start"> ${renderComponent($$result4, "CardPreview", $$CardPreview, { "title": "Card Preview", "imageUrl": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fm=jpg&w=1200&q=80" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "P", $$P, {}, { "default": ($$result6) => renderTemplate`Pré-visualização de conteúdo multimídia.` })} <div style="display:flex; gap: var(--space-2)"> ${renderComponent($$result5, "Icon", $$Icon, { "tone": "neutral" }, { "default": ($$result6) => renderTemplate` <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"> <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.6"></circle> </svg> ` })} ${renderComponent($$result5, "Icon", $$Icon, { "tone": "accent" }, { "default": ($$result6) => renderTemplate` <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"> <rect x="6" y="6" width="12" height="12" fill="currentColor" opacity="0.6"></rect> </svg> ` })} </div> ` })} </div> <div class="min-w-[80%] snap-start"> ${renderComponent($$result4, "CardStat", $$CardStat, { "label": "Projetos", "value": "12" })} </div> <div class="min-w-[80%] snap-start"> ${renderComponent($$result4, "CardInteractive", $$CardInteractive, { "title": "Workflow Ajust\xE1vel", "description": "Interface simples e responsiva com feedback visual consistente.", "href": "#docs", "tone": "accent" }, { "default": ($$result5) => renderTemplate` <div style="display:flex; gap: var(--space-2); align-items:center"> ${renderComponent($$result5, "Badge", $$Badge, { "type": "status", "tone": "success" }, { "default": ($$result6) => renderTemplate`Estável` })} ${renderComponent($$result5, "Badge", $$Badge, { "type": "metric" }, { "default": ($$result6) => renderTemplate`95` })} </div> ` })} </div> ` })} </details> </div>  ` }), renderComponent($$result2, "Section", $$Section, { "id": "commitment", "title": "Compromisso de produ\xE7\xE3o", "type": "informacional", "objective": "Elevar confian\xE7a", "action": "Avan\xE7ar para contato", "completion": "Compromisso exibido", "tone": "alt" }, { "default": ($$result3) => renderTemplate` <div class="grid gap-token-3"> <div data-cell data-z="1" style="display:grid; gap: var(--space-2); padding: var(--space-3); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md); background: var(--surface-1)"> <div style="display:flex; align-items:center; gap: var(--space-2)"> ${renderComponent($$result3, "Icon", $$Icon, { "tone": "accent" }, { "default": ($$result4) => renderTemplate` <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"> <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5L9 16.2z" fill="currentColor"></path> </svg> ` })} <span data-text="heading-lg">Compromisso de Engenharia</span> </div> ${renderComponent($$result3, "P", $$P, { "data-text": "body-muted", "style": "font-style: italic" }, { "default": ($$result4) => renderTemplate`Sem mágica. Métricas reais. Produção real.` })} <div style="display:grid; gap: var(--space-1)"> ${renderComponent($$result3, "P", $$P, { "data-text": "ui-label" }, { "default": ($$result4) => renderTemplate`Transparência Radical` })} ${renderComponent($$result3, "P", $$P, { "data-text": "body-muted" }, { "default": ($$result4) => renderTemplate`Se uma métrica não for atingida, você recebe um post-mortem técnico explicando o porquê e o plano de correção.` })} </div> </div> ${renderComponent($$result3, "Fragment", Fragment, { "slot": "cta" }, { "default": ($$result4) => renderTemplate`<div class="w-full sm:w-auto sm:inline-block">${renderComponent($$result4, "Button", $$Button, { "as": "a", "href": "#contact", "variant": "primary" }, { "default": ($$result5) => renderTemplate`Validar sua performance agora` })}</div>` })} </div> ` }), renderComponent($$result2, "Divider", $$Divider, {}), renderComponent($$result2, "Section", $$Section, { "id": "contact", "title": "Vamos construir algo que funcione em produ\xE7\xE3o", "type": "conversao", "objective": "Iniciar projeto real", "action": "Agendar conversa", "completion": "Mensagem enviada", "tone": "default" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <style>\n      #contact-skeleton.fade { opacity: 0; transition: opacity var(--duration-fast) var(--ease-standard); }\n      #contact-form.show { opacity: 1; transition: opacity var(--duration-fast) var(--ease-standard); }\n    </style> <div id="contact-skeleton"> ', ' </div> <div data-cell data-z="1" style="margin-top: var(--space-3); padding: var(--space-3); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md); background: var(--surface-1)"> <div class="grid grid-cols-1 md:grid-cols-3 gap-token-4"> <div> <p data-text="ui-label">Iniciar Projeto</p> <div style="display:flex; flex-wrap:wrap; gap: var(--space-2); margin-top: var(--space-2)"> ', " ", ' </div> <p class="mt-2" data-text="body-muted">Tem um projeto de alta performance? Respondo em at\xE9 24h.</p> </div> <div> <p data-text="ui-label">Redes</p> <ul style="display:grid; gap: var(--space-2); margin-top: var(--space-2)"> <li><a href="https://www.linkedin.com/in/victor-de-alcantara/" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap: var(--space-2); padding: var(--space-1) var(--space-2); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md)" data-text="ui-label"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" opacity="0.6"></rect></svg>LinkedIn</a></li> <li><a href="https://github.com/Salazarismo" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap: var(--space-2); padding: var(--space-1) var(--space-2); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md)" data-text="ui-label"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.6"></circle></svg>GitHub</a></li> <li><a href="https://www.reddit.com/user/Salazarismo/" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap: var(--space-2); padding: var(--space-1) var(--space-2); border: var(--border-width-1) solid var(--color-border); border-radius: var(--radius-md)" data-text="ui-label"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" fill="currentColor" opacity="0.6"></path></svg>Reddit</a></li> </ul> </div> <div> <p data-text="ui-label">Pr\xF3ximos passos</p> <ul style="display:grid; gap: var(--space-2); margin-top: var(--space-2)"> <li data-text="body-normal">1. Briefing r\xE1pido</li> <li data-text="body-normal">2. An\xE1lise de gargalos</li> <li data-text="body-normal">3. Proposta t\xE9cnica</li> </ul> </div> </div> </div> <div id="contact-form" style="opacity: 0"> ', " </div> <script>\n      const sect = document.getElementById('contact');\n      const sk = document.getElementById('contact-skeleton');\n      const form = document.getElementById('contact-form');\n      if (sect && sk && 'IntersectionObserver' in window) {\n        const io = new IntersectionObserver((entries) => {\n          for (const e of entries) {\n            if (e.isIntersecting) {\n              sk.classList.add('fade');\n              sk.addEventListener('transitionend', () => { sk.style.display = 'none'; }, { once: true });\n              form.classList.add('show');\n              io.disconnect();\n            }\n          }\n        }, { rootMargin: '0% 0% -20% 0%' });\n        io.observe(sect);\n      }\n    <\/script> "])), renderComponent($$result3, "SkeletonContactForm", $$SkeletonContactForm, {}), renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "mailto:victor.de.alcantara.bueno@gmail.com", "variant": "primary" }, { "default": ($$result4) => renderTemplate`Email` }), renderComponent($$result3, "Button", $$Button, { "as": "a", "href": "https://wa.me/5548984586949", "target": "_blank", "rel": "noopener noreferrer", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`WhatsApp` }), renderComponent($$result3, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/ContactForm.island", "client:component-export": "default" })) })), "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Header", $$Header, {})}${renderComponent($$result3, "AppStateBar", $$AppStateBar, {})}` })}` })}`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/index.astro", void 0);

const $$file = "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
