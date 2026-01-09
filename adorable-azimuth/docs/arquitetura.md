# M2 — Arquitetura de Componentes (Islands Hygiene)

- `.astro` = apresentação estática (sem lógica interativa ou efeitos)
- `.tsx` = somente em `src/islands/` e usado via directives `client:` nas páginas `.astro`
- `src/components/` contém componentes estáticos `.astro` reutilizáveis
- Proibido `.tsx` fora de `src/islands/` (checado por `pnpm run islands:gate`)
- Build roda gates antes de compilar (`prebuild` executa tokens e islands gate)

