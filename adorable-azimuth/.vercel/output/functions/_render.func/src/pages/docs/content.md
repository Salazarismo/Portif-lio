---
layout: "../../components/BaseLayout.astro"
title: "Documentação dos Componentes"
description: "Guia de componentes: props, estados e exemplos"
---

# Documentação dos Componentes

## 1. ContactForm (Componente Preact)

**Descrição:** Componente de formulário de contato interativo com validação e envio assíncrono.

### Props
Não recebe props externas - é um componente autônomo.

### Estados
- `state`: Controla o estado do formulário
  - `'idle'`: Estado inicial, formulário pronto para envio
  - `'submitting'`: Enviando dados para o servidor
  - `'success'`: Mensagem enviada com sucesso
  - `'error'`: Erro durante o envio

- `message`: Mensagem de feedback para o usuário

### Exemplo de Uso
```tsx
import ContactForm from '../islands/ContactForm.island.tsx';

// No Astro ou Preact:
<ContactForm />
```

### Comportamento
- Validação HTML5 nativa (required, type="email")
- Proteção contra spam com campo honeypot invisível (`hp`)
- Feedback visual durante envio (botão desabilitado, texto alterado)
- Mensagens de sucesso/erro com aria-live="polite" para acessibilidade
- Reset do formulário após sucesso

## 2. Button (Componente Astro)

**Descrição:** Botão versátil que pode renderizar como `<button>` ou `<a>` com múltiplas variantes visuais.

### Props
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | `'primary'` | Estilo visual do botão |
| `as` | `'button' \| 'a'` | `'button'` | Elemento HTML a ser renderizado |
| `href` | `string` | `'#'` | URL (quando `as="a"`) |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `loading` | `boolean` | `false` | Estado de carregamento (mostra spinner) |
| `dataCta` | `boolean` | `false` | Marca como call-to-action para analytics |

### Exemplos de Uso
```astro
---
import Button from '../components/ui/Button.astro';
---

<!-- Botão primário padrão -->
<Button>Enviar</Button>

<!-- Botão secundário desabilitado -->
<Button variant="secondary" disabled>Cancelar</Button>

<!-- Link estilizado como botão -->
<Button as="a" href="/contato" variant="primary">Fale comigo</Button>

<!-- Botão com estado de carregamento -->
<Button loading>Processando...</Button>
```

### Estados Visuais
- **Primary**: Fundo destacado, texto claro
- **Secondary**: Fundo neutro, texto padrão
- **Ghost**: Fundo transparente com borda
- **Destructive**: Fundo vermelho para ações destrutivas
- **Loading**: Spinner animado + texto
- **Disabled**: Opacidade reduzida, sem interação

## 3. Input (Componente Astro)

**Descrição:** Campo de entrada de formulário com estados de validação.

### Props
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | `string` | obrigatório | ID único do campo |
| `name` | `string` | obrigatório | Nome do campo para formulários |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'search' \| 'tel' \| 'url' \| 'date' \| 'time'` | `'text'` | Tipo de entrada |
| `placeholder` | `string` | `''` | Texto de placeholder |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `state` | `'default' \| 'error' \| 'success'` | `'default'` | Estado de validação |

### Exemplos de Uso
```astro
---
import Input from '../components/ui/Input.astro';
---

<!-- Input básico -->
<Input id="nome" name="nome" placeholder="Seu nome" />

<!-- Email com estado de erro -->
<Input id="email" name="email" type="email" state="error" />

<!-- Input desabilitado -->
<Input id="codigo" name="codigo" disabled value="12345" />
```

### Acessibilidade
- Atributos ARIA apropriados (`aria-disabled`, `aria-invalid`)
- Integração com labels através do atributo `id`

## 4. Textarea (Componente Astro)

**Descrição:** Área de texto para entrada de textos longos.

### Props
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | `string` | obrigatório | ID único do campo |
| `name` | `string` | obrigatório | Nome do campo para formulários |
| `rows` | `number` | `4` | Número de linhas visíveis |
| `placeholder` | `string` | `''` | Texto de placeholder |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `state` | `'default' \| 'error' \| 'success'` | `'default'` | Estado de validação |

### Exemplos de Uso
```astro
---
import Textarea from '../components/ui/Textarea.astro';
---

<!-- Textarea básica -->
<Textarea id="mensagem" name="mensagem" placeholder="Sua mensagem..." />

<!-- Textarea maior com estado de sucesso -->
<Textarea id="descricao" name="descricao" rows="8" state="success" />
```

## 5. Header (Componente Astro)

**Descrição:** Cabeçalho responsivo com navegação e menu mobile.

### Props
Não recebe props - componente estático.

### Estrutura
- Logo/Título "Portfólio" (link para home)
- Navegação desktop: links para #projects e #contact
- Botão CTA "Fale comigo" (visível apenas em desktop)
- Menu hamburger para mobile (dropdown com mesmas opções)

### Comportamento
- Sticky positioning (fixo no topo ao scrollar)
- Layout responsivo (mobile/desktop)
- Menu mobile com dropdown através de `<details>`
- Acessibilidade com `aria-label` e `aria-controls`

## 6. Hero (Componente Astro)

**Descrição:** Seção hero com título, subtítulo e imagem destacada.

### Props
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | obrigatório | Título principal da seção |
| `subtitle` | `string` | `''` | Texto descritivo opcional |
| `imageAlt` | `string` | `'Imagem de destaque'` | Texto alternativo da imagem |

### Exemplo de Uso
```astro
---
import Hero from '../components/Hero.astro';
---

<Hero 
  title="Olá, sou João Silva"
  subtitle="Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis"
  imageAlt="Foto de perfil de João Silva"
/>
```

### Características
- Imagem otimizada com múltiplos formatos (AVIF, WebP, JPEG)
- Lazy loading e fetchpriority configurados
- Layout responsivo com picture element
- Acessibilidade com `aria-labelledby`

## 7. ProjectCard (Componente Astro)

**Descrição:** Card de projeto com descrição, métricas e código.

### Props
| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | obrigatório | Título do projeto |
| `problem` | `string` | obrigatório | Descrição do problema resolvido |
| `decision` | `string` | obrigatório | Decisão técnica tomada |
| `metricLabel` | `string` | obrigatório | Label da métrica de sucesso |
| `metricValue` | `string` | obrigatório | Valor da métrica |
| `codeSnippet` | `string` | `''` | Código de exemplo (opcional) |

### Exemplo de Uso
```astro
---
import ProjectCard from '../components/ProjectCard.astro';
---

<ProjectCard
  title="Otimização de Performance"
  problem="Aplicação com tempo de carregamento de 8 segundos"
  decision="Implementação de lazy loading e code splitting"
  metricLabel="Redução no tempo de carregamento"
  metricValue="75%"
  codeSnippet={`const lazyLoad = () => import('./heavy-component.js');`}
/>
```

### Estrutura
- Header com título do projeto
- Seção "Problema" com descrição
- Seção "Decisão técnica" com solução
- Seção "Resultado mensurável" com métrica
- Seção opcional "Snippet" com código formatado
- Acessibilidade com `aria-live="polite"` para métricas

## Diretrizes Gerais

### Acessibilidade
Todos os componentes seguem práticas de acessibilidade:
- Atributos ARIA apropriados
- Textos alternativos para imagens
- Estados de foco visíveis
- Navegação por teclado
- Mensagens ao vivo para leitores de tela

### Responsividade
- Mobile-first approach
- Breakpoints configuráveis via CSS custom properties
- Layouts flexíveis e grid
- Imagens responsivas com srcset

### Performance
- Componentes Astro com zero JavaScript no cliente (exceto islands)
- Lazy loading para imagens
- Otimização de assets
- Minimal bundle size

### Estilização
- CSS custom properties para design tokens
- Classes utilitárias para consistência
- Isolamento de estilos através de escopo
- Suporte para temas (claro/escuro)

## Contato

<a id="contact"></a>

<article data-cell data-z="1" style="background: var(--surface-1); border-style: solid; border-color: var(--color-border); border-width: var(--border-width-1); border-radius: var(--radius-md); box-shadow: var(--elevation-1); padding: var(--spacing-4); display:grid; gap: var(--spacing-2)">
  <header>
    <h3 data-text="heading-lg">Portfólio para cliente pagante</h3>
    <p data-text="body-normal">Comunica valor, prova e convite à ação.</p>
  </header>
  <ul style="display:grid; gap: var(--space-2)">
    <li><a href="https://www.linkedin.com/in/victor-de-alcantara/" target="_blank" rel="noopener noreferrer" data-text="ui-label">LinkedIn</a></li>
    <li><a href="https://github.com/Salazarismo" target="_blank" rel="noopener noreferrer" data-text="ui-label">GitHub</a></li>
    <li><a href="https://www.reddit.com/user/Salazarismo/" target="_blank" rel="noopener noreferrer" data-text="ui-label">Reddit</a></li>
    <li><a href="https://wa.me/5548984586949" target="_blank" rel="noopener noreferrer" data-text="ui-label">WhatsApp</a></li>
    <li><a href="mailto:victor.de.alcantara.bueno@gmail.com" data-text="ui-label">Email</a></li>
  </ul>
</article>
