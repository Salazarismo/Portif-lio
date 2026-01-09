# M4 — Hero Section (LCP Controlado)

- LCP definido pelo Hero (texto/imagem com `<picture>` e `fetchpriority="high"`, `loading="eager"`)
- Dimensões estáticas garantem CLS = 0 (`width`/`height` + `display:block`)
- Estrutura semântica mantém único `h1` por página via `BaseLayout`
- Fontes do Hero confirmadas como non-blocking (font-display: swap), sem impacto no LCP.
- Cenário atual usa fontes do sistema via tokens (`--font-family-sans`), sem webfonts; se forem adicionadas fontes self-hosted, usar `@font-face` com `font-display: swap`.
