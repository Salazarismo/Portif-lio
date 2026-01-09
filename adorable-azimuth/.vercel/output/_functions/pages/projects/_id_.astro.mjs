import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DnANCFlh.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CeMzL_Gb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Projeto ${id}`, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"></div> ` })}`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/projects/[id].astro", void 0);

const $$file = "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
