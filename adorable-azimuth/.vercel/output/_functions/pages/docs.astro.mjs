import { e as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DnANCFlh.mjs';
/* empty css                                   */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CeMzL_Gb.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_B_qeGUGU.mjs';
import { C as Content } from '../chunks/content_-XqoecU5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Documenta\xE7\xE3o", "description": "Guia de componentes: props, estados e exemplos" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div aria-labelledby="docs-title" class="container"> <h2 id="docs-title" class="text-2xl">Documentação dos Componentes</h2> ${renderComponent($$result2, "Doc", Content, {})} </div>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Header", $$Header, {})}` })}` })}`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/docs/index.astro", void 0);

const $$file = "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/docs/index.astro";
const $$url = "/docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
