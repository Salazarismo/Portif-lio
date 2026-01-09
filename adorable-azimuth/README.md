# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Arquitetura M2 (Islands Hygiene):

- `src/components/` para componentes estáticos `.astro` (apenas apresentação)
- `src/islands/` para componentes interativos `.tsx` (somente aqui)
- Gate: `pnpm run islands:gate` falha se existir `.tsx` fora de `src/islands/`
- Build executa gates automaticamente (`prebuild`)

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
## M4 — Hero Section (LCP)

- Hero com `<picture>` (AVIF/WebP/JPG), `fetchpriority="high"`, `loading="eager"`
- Dimensões fixas para CLS = 0
- Fontes do Hero confirmadas como non-blocking (font-display: swap), sem impacto no LCP
- Relatório detalhado: `docs/m4-relatorio.md`
