import { p as decodeKey } from './chunks/astro/server_DnANCFlh.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D51sXUHi.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/","cacheDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/node_modules/.astro/","outDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/dist/","srcDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/","publicDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/public/","buildClientDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/dist/client/","buildServerDir":"file:///C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25_05a9e98569d562331e94f1868e9f4ce1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/content.Cbinw3Q6.css"}],"routeData":{"route":"/docs/content","isIndex":false,"type":"page","pattern":"^\\/docs\\/content\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"content","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/content.md","pathname":"/docs/content","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-6ygtcg62][data-variant]:hover{box-shadow:var(--shadow-sm)}[data-astro-cid-6ygtcg62][data-variant]:active{transform:scale(.98)}header[data-astro-cid-3ef6ksr2] details[data-astro-cid-3ef6ksr2][open] summary[data-astro-cid-3ef6ksr2]{outline:none}\n"},{"type":"external","src":"/_astro/content.Cbinw3Q6.css"}],"routeData":{"route":"/docs","isIndex":true,"type":"page","pattern":"^\\/docs\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/index.astro","pathname":"/docs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/content.Cbinw3Q6.css"}],"routeData":{"route":"/projects/[id]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/projects/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/content.Cbinw3Q6.css"},{"type":"inline","content":"[data-astro-cid-i7ih7qtm][role=status][data-type=success]{outline:2px solid transparent}@media(hover:hover)and (pointer:fine){[data-astro-cid-i7ih7qtm][role=status][data-type=success]:hover{box-shadow:var(--elevation-2);transform:translateY(-1px)}}[data-astro-cid-i7ih7qtm][role=status][data-type=success]:focus-within{box-shadow:var(--elevation-3);transform:translateY(-1px)}@media(prefers-color-scheme:dark){[data-astro-cid-i7ih7qtm][role=status][data-type=success]{color:#000}}@media(prefers-reduced-motion:reduce){[data-astro-cid-i7ih7qtm][role=status][data-type=success]{transition:none;transform:none}}article[data-astro-cid-yfhrchtd][data-z][data-cell] [data-astro-cid-yfhrchtd][data-reveal]{transition:opacity var(--duration-fast) var(--ease-standard),max-height var(--duration-fast) var(--ease-standard)}article[data-astro-cid-yfhrchtd][data-z][data-cell]:hover [data-astro-cid-yfhrchtd][data-reveal],article[data-astro-cid-yfhrchtd][data-z][data-cell]:focus-within [data-astro-cid-yfhrchtd][data-reveal]{opacity:1;max-height:var(--space-7)}article[data-astro-cid-3ppcfzse][data-z][data-cell] [data-astro-cid-3ppcfzse][data-reveal]{transition:opacity var(--duration-fast) var(--ease-standard),max-height var(--duration-fast) var(--ease-standard)}article[data-astro-cid-3ppcfzse][data-z][data-cell]:hover [data-astro-cid-3ppcfzse][data-reveal],article[data-astro-cid-3ppcfzse][data-z][data-cell]:focus-within [data-astro-cid-3ppcfzse][data-reveal]{opacity:1;max-height:var(--space-7)}article[data-astro-cid-tkqjjbq4][data-z][data-cell] [data-astro-cid-tkqjjbq4][data-reveal]{transition:opacity var(--duration-fast) var(--ease-standard)}article[data-astro-cid-tkqjjbq4][data-z][data-cell]:hover [data-astro-cid-tkqjjbq4][data-reveal],article[data-astro-cid-tkqjjbq4][data-z][data-cell]:focus-within [data-astro-cid-tkqjjbq4][data-reveal]{opacity:1}article[data-astro-cid-qqpch2nr][data-z][data-cell] [data-astro-cid-qqpch2nr][data-reveal]{transition:opacity var(--duration-fast) var(--ease-standard),max-height var(--duration-fast) var(--ease-standard)}article[data-astro-cid-qqpch2nr][data-z][data-cell]:hover [data-astro-cid-qqpch2nr][data-reveal],article[data-astro-cid-qqpch2nr][data-z][data-cell]:focus-within [data-astro-cid-qqpch2nr][data-reveal]{opacity:1;max-height:var(--space-7)}span[data-astro-cid-35zd7xm4][data-intent=badge]{box-shadow:var(--elevation-1)}span[data-astro-cid-35zd7xm4][data-intent=badge][data-state=status]{border:var(--border-width-1) solid var(--color-border)}span[data-astro-cid-35zd7xm4][data-intent=badge][data-state=status][data-tone=success]{color:var(--ink-1)!important;background:var(--success)!important}\n[data-astro-cid-6ygtcg62][data-variant]:hover{box-shadow:var(--shadow-sm)}[data-astro-cid-6ygtcg62][data-variant]:active{transform:scale(.98)}header[data-astro-cid-3ef6ksr2] details[data-astro-cid-3ef6ksr2][open] summary[data-astro-cid-3ef6ksr2]{outline:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/docs/content.md",{"propagation":"none","containsHead":true}],["C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/docs/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/pages/projects/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/docs/content@_@md":"pages/docs/content.astro.mjs","\u0000@astro-page:src/pages/docs/index@_@astro":"pages/docs.astro.mjs","\u0000@astro-page:src/pages/projects/[id]@_@astro":"pages/projects/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25_05a9e98569d562331e94f1868e9f4ce1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DPy-tYKO.mjs","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/node_modules/.pnpm/astro@5.16.6_@types+node@25_05a9e98569d562331e94f1868e9f4ce1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bapsj3Vu.mjs","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/PortfolioGrid.island":"_astro/PortfolioGrid.Cgopw6AU.js","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/ContactForm.island":"_astro/ContactForm.BJ0sGq3j.js","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/GsapInit.island":"_astro/GsapInit.DA8gFVVA.js","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/NavTransitions.island":"_astro/NavTransitions.CuWN089k.js","@astrojs/preact/client.js":"_astro/client.vs-GGlAc.js","C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/node_modules/.pnpm/@preact+signals@2.5.1_preact@10.28.2/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.CeaYub-C.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/content.Cbinw3Q6.css","/favicon.svg","/_astro/client.vs-GGlAc.js","/_astro/ContactForm.BJ0sGq3j.js","/_astro/GsapInit.DA8gFVVA.js","/_astro/hooks.module.DgMOKmnS.js","/_astro/jsxRuntime.module.BSCWCfwz.js","/_astro/NavTransitions.CuWN089k.js","/_astro/PortfolioGrid.Cgopw6AU.js","/_astro/preact.module.IsPPbktY.js","/_astro/signals.module.CeaYub-C.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"KIBGKO6JVeWSYO1HwZnmhaGPKTjwRZZTtEJy91ddw6A="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
