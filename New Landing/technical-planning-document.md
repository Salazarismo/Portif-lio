# Technical Planning Document
## Gil Huybrecht Portfolio Website
### Complete Blueprint for Development

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Visual Design System](#2-visual-design-system)
3. [Typography Specifications](#3-typography-specifications)
4. [Layout & Spacing System](#4-layout--spacing-system)
5. [Animation & Motion Design](#5-animation--motion-design)
6. [UI Components Library](#6-ui-components-library)
7. [Interactive Behaviors](#7-interactive-behaviors)
8. [Technical Architecture](#8-technical-architecture)
9. [Content Structure & IA](#9-content-structure--ia)
10. [Responsive Design Specifications](#10-responsive-design-specifications)
11. [Accessibility Requirements](#11-accessibility-requirements)
12. [Performance Specifications](#12-performance-specifications)
13. [Browser Compatibility](#13-browser-compatibility)
14. [Asset Requirements](#14-asset-requirements)

---

## 1. Project Overview

### 1.1 Website Purpose
Personal portfolio website for Gil Huybrecht, a digital designer and art director, showcasing selected work, services, and personal brand identity.

### 1.2 Core Features
- Single-page application with smooth scroll navigation
- Project case study presentations with detailed scroll-through experiences
- Interactive hover states and cursor effects
- Smooth page transitions and scroll-triggered animations
- Responsive design for all device sizes

### 1.3 Design Philosophy
- **Minimalist aesthetic**: Clean white backgrounds with black typography
- **High contrast**: Pure black (#000000) on pure white (#FFFFFF)
- **Generous whitespace**: Large padding and margin systems
- **Typography-first**: Large, bold headlines as primary visual elements
- **Subtle interactions**: Refined micro-interactions that enhance without distracting

---

## 2. Visual Design System

### 2.1 Color Palette

#### Primary Colors
| Color Name | Hex Value | RGB | Usage |
|------------|-----------|-----|-------|
| Pure Black | `#000000` | rgb(0, 0, 0) | Primary text, borders, buttons |
| Pure White | `#FFFFFF` | rgb(255, 255, 255) | Background, button text |

#### Secondary/Neutral Colors
| Color Name | Hex Value | RGB | Usage |
|------------|-----------|-----|-------|
| Light Gray | `#F5F5F5` | rgb(245, 245, 245) | Subtle backgrounds, dividers |
| Medium Gray | `#999999` | rgb(153, 153, 153) | Secondary text, captions |
| Dark Gray | `#333333` | rgb(51, 51, 51) | Body text alternatives |

#### Project-Specific Colors (Custo Case Study)
| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| Custo Green | `#4ADE80` | Accent highlights, glow effects |
| Custo Dark | `#1A1A1A` | Dark section backgrounds |
| Custo Gray | `#8B9A8B` | Muted backgrounds |

### 2.2 Visual Elements

#### Borders & Dividers
- **Horizontal rules**: 1px solid #000000
- **Button borders**: 1px solid #000000, border-radius: 50px (pill shape)
- **Section dividers**: Full-width 1px lines with 40px+ margins

#### Shadows
- **Project cards**: Subtle drop shadow on laptop/device mockups
  - `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15)`
- **Hover states**: Elevated shadow
  - `box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2)`

#### Border Radius
- **Buttons**: 50px (full pill shape)
- **Project images**: 8px
- **Photo gallery images**: 4px
- **Cursor follower**: 50% (perfect circle)

---

## 3. Typography Specifications

### 3.1 Font Family
**Primary Font**: Inter (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)

**Alternative/Display Font**: Custom or system sans-serif stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### 3.2 Type Scale

| Element | Size (Desktop) | Weight | Line Height | Letter Spacing |
|---------|----------------|--------|-------------|----------------|
| Hero H1 | 120px / 8vw | 800 (ExtraBold) | 0.9 | -0.03em |
| Section H2 | 80px / 5vw | 800 (ExtraBold) | 1.0 | -0.02em |
| Project Title | 100px / 6vw | 700 (Bold) | 1.0 | -0.02em |
| Body Large | 24px | 400 | 1.5 | 0 |
| Body Regular | 18px | 400 | 1.6 | 0 |
| Body Small | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 500 | 1.4 | 0.02em |
| Nav Links | 14px | 500 | 1.0 | 0 |
| Button Text | 14px | 500 | 1.0 | 0 |

### 3.3 Typography Patterns

#### Hero Typography
```css
.hero-title {
  font-size: clamp(60px, 8vw, 120px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}
```

#### Section Headers
```css
.section-title {
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
}
```

#### Body Text
```css
.body-large {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
}
```

### 3.4 Text Treatments
- **Registered trademark**: Superscript ® with `font-size: 0.5em; vertical-align: super;`
- **Section numbers**: Parenthetical format (001), (002) - 12px, regular weight
- **Project years**: Parenthetical format (2022) - matches project title size

---

## 4. Layout & Spacing System

### 4.1 Grid System
- **Container max-width**: 1400px
- **Container padding**: 40px (desktop), 24px (tablet), 16px (mobile)
- **Grid**: CSS Grid with flexible columns
- **Gutter**: 24px (desktop), 16px (mobile)

### 4.2 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-xs | 8px | Tight spacing, icon gaps |
| space-sm | 16px | Component internal padding |
| space-md | 24px | Standard gaps |
| space-lg | 40px | Section internal spacing |
| space-xl | 80px | Between major elements |
| space-2xl | 120px | Between sections |
| space-3xl | 160px | Major section breaks |

### 4.3 Section Spacing
- **Hero section**: min-height: 100vh, padding-top: 120px
- **Standard sections**: padding: 120px 0
- **Compact sections**: padding: 80px 0
- **Project sections**: padding: 0 (full-bleed images)

### 4.4 Layout Patterns

#### Header/Navigation
- **Position**: Fixed, top: 0, z-index: 1000
- **Height**: 80px
- **Layout**: Flexbox, space-between
- **Background**: Transparent (white on scroll optional)

#### Hero Layout
- **Structure**: Left-aligned content
- **Max-width**: 800px for text content
- **Vertical centering**: Flexbox align-items: center

#### Two-Column Layouts
- **Ratio**: 50/50 or 40/60
- **Gap**: 80px
- **Alignment**: Top-aligned or center-aligned

---

## 5. Animation & Motion Design

### 5.1 Animation Philosophy
- **Smooth, elegant transitions**: No abrupt movements
- **Scroll-triggered reveals**: Content animates into view as user scrolls
- **Subtle parallax**: Layered depth through different scroll speeds
- **Consistent easing**: Primarily use `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)

### 5.2 Global Easing Functions

| Name | Cubic Bezier | Usage |
|------|--------------|-------|
| ease-out-expo | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary entrance animations |
| ease-out-quart | `cubic-bezier(0.25, 1, 0.5, 1)` | Secondary animations |
| ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover states, toggles |
| linear | `linear` | Continuous animations, marquees |

### 5.3 Page Load Animations

#### Sequence (Total: ~1500ms)
1. **Header fade-in** (0-400ms)
   - Opacity: 0 → 1
   - Transform: translateY(-20px) → translateY(0)
   - Easing: ease-out-expo

2. **Hero title reveal** (200-1000ms)
   - Split by lines or words
   - Transform: translateY(100%) → translateY(0)
   - Opacity: 0 → 1
   - Stagger: 100ms between lines
   - Easing: ease-out-expo

3. **Hero subtitle** (600-1200ms)
   - Opacity: 0 → 1
   - Transform: translateY(30px) → translateY(0)
   - Easing: ease-out-quart

4. **CTA Button** (800-1400ms)
   - Opacity: 0 → 1
   - Scale: 0.95 → 1
   - Easing: ease-out-expo

### 5.4 Scroll-Triggered Animations

#### Fade Up (Primary Reveal)
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 800ms, Easing: ease-out-expo */
/* Trigger: When element enters viewport (threshold: 0.2) */
```

#### Fade In (Subtle)
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Duration: 600ms, Easing: ease-out */
```

#### Scale In (Images)
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* Duration: 1000ms, Easing: ease-out-expo */
```

#### Slide In From Side
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
/* Duration: 800ms, Easing: ease-out-expo */
```

### 5.5 Parallax Effects

#### Image Parallax
- **Speed**: 0.5x (moves at half scroll speed)
- **Range**: -50px to +50px translateY
- **Implementation**: `transform: translateY(calc(var(--scroll) * 0.5))`

#### Layered Parallax (Project Mockups)
- **Background layer**: 0.3x speed
- **Device mockup**: 0.5x speed
- **Content overlay**: 0.7x speed

### 5.6 Hover Animations

#### Button Hover
```css
.button {
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.button:hover {
  background: #000;
  color: #fff;
  transform: scale(1.02);
}
```

#### Link Hover (Underline Animation)
```css
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #000;
  transition: width 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.link:hover::after {
  width: 100%;
}
```

#### Project Card Hover
```css
.project-card {
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.project-card:hover {
  transform: translateY(-10px);
}
.project-card:hover .project-image {
  transform: scale(1.03);
}
```

### 5.7 Custom Cursor Animation

#### Cursor Follower
- **Size**: 80px diameter circle
- **Behavior**: Follows mouse with slight lag (lerp: 0.15)
- **Default state**: White background, black border, contains "View case" text
- **Blend mode**: `mix-blend-mode: difference` (optional for contrast)
- **Transition**: Scale and opacity on hover targets

```css
.cursor-follower {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #000;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  transition: transform 150ms ease-out, opacity 200ms ease;
}
```

### 5.8 Page Transition Animations

#### Exit Transition
- **Duration**: 500ms
- **Effect**: Content fades out, slight upward movement
- **Easing**: ease-in-out

#### Enter Transition
- **Duration**: 800ms
- **Effect**: New content fades in from below
- **Easing**: ease-out-expo

### 5.9 Scroll Progress Indicator

#### Implementation
- **Type**: Thin line at top of viewport
- **Height**: 2px
- **Color**: #000000
- **Width**: 0% to 100% based on scroll position
- **Position**: Fixed, top: 0, left: 0

---

## 6. UI Components Library

### 6.1 Buttons

#### Primary Button (Pill Outline)
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border: 1px solid #000;
  border-radius: 50px;
  background: transparent;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
  background: #000;
  color: #fff;
}
```

#### Secondary Button (Text with Arrow)
```css
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
}
.btn-text .arrow {
  transition: transform 300ms ease;
}
.btn-text:hover .arrow {
  transform: translateX(4px);
}
```

### 6.2 Navigation

#### Header Navigation
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
}

.nav-logo {
  font-size: 18px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  position: relative;
}
```

### 6.3 Project Cards

#### Project Card Component
```css
.project-card {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 16/10;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 14px;
}
```

### 6.4 Service Items

#### Service List Item
```css
.service-item {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid #000;
}

.service-number {
  font-size: 14px;
  font-weight: 500;
}

.service-title {
  font-size: 32px;
  font-weight: 600;
}

.service-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}
```

### 6.5 Awards List

#### Awards Table
```css
.awards-list {
  width: 100%;
}

.award-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  font-size: 18px;
}

.award-count {
  font-weight: 500;
}
```

---

## 7. Interactive Behaviors

### 7.1 Smooth Scroll
- **Implementation**: Native CSS `scroll-behavior: smooth` or Lenis library
- **Duration**: ~800ms for anchor links
- **Easing**: ease-out

### 7.2 Custom Cursor System

#### Behavior States
1. **Default**: 80px circle, "View case" text visible on project cards
2. **Hover on links**: Scale to 0.5, opacity reduce
3. **Hover on projects**: Scale to 1.2, full opacity
4. **Click**: Quick scale down to 0.9 then back

#### Implementation Notes
- Use `transform` for performance
- Disable on touch devices
- Add `pointer-events: none` to cursor element

### 7.3 Scroll-Triggered Reveals

#### Intersection Observer Configuration
```javascript
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};
```

#### Animation Classes
- `.animate-on-scroll` - Base class for animated elements
- `.fade-up` - Fade + translate up
- `.fade-in` - Simple opacity fade
- `.scale-in` - Scale + fade
- `.slide-left` - Slide from left
- `.slide-right` - Slide from right

### 7.4 Hover States Summary

| Element | Default | Hover | Transition |
|---------|---------|-------|------------|
| Nav links | No underline | Underline expands | 400ms ease-out-expo |
| Buttons | Transparent bg | Black bg, white text | 400ms ease-out-expo |
| Project cards | Static | Lift up 10px, image scale 1.05 | 600ms ease-out-expo |
| Footer links | Black text | Underline | 300ms ease |
| Arrow icons | Static | Translate X 4px | 300ms ease |

### 7.5 Mobile Interactions
- **Tap**: Same as click
- **Swipe**: Smooth scroll between sections
- **Long press**: Disabled (prevent context menu on images)

---

## 8. Technical Architecture

### 8.1 Recommended Tech Stack

#### Core Technologies
| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14+ (App Router) | React framework with SSG/SSR |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first CSS |
| Animation | Framer Motion | React animations |
| Scroll | Lenis | Smooth scroll |
| Icons | Lucide React | Icon library |

#### Alternative Stack (Vanilla)
| Layer | Technology |
|-------|------------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, Grid, Flexbox |
| JavaScript | ES6+ modules |
| GSAP | Animations + ScrollTrigger |
| Lenis | Smooth scroll |

### 8.2 Project Structure (Next.js)
```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── globals.css             # Global styles
├── about/
│   └── page.tsx            # About page
├── projects/
│   └── [slug]/
│       └── page.tsx        # Dynamic project pages
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── ProjectCard.tsx     # Project card component
│   ├── ServiceItem.tsx     # Service list item
│   ├── AwardItem.tsx       # Award list item
│   ├── AnimatedSection.tsx # Scroll-triggered wrapper
│   ├── CustomCursor.tsx    # Custom cursor component
│   └── SmoothScroll.tsx    # Lenis provider
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useMousePosition.ts
│   └── useInView.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
public/
├── images/                 # Static images
└── fonts/                  # Custom fonts (if needed)
```

### 8.3 Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lenis": "^1.0.0",
    "lucide-react": "^0.294.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

### 8.4 Animation Implementation Strategy

#### Framer Motion Patterns
```typescript
// Fade up animation variant
const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
```

#### Scroll-Triggered Animation Component
```typescript
// AnimatedSection.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## 9. Content Structure & IA

### 9.1 Site Map
```
Homepage (/) - Hero + Selected Work Preview
├── About (/about) - Bio, Services, Personal, Awards
├── Projects
│   ├── Custo (/projects/custo) - Case study
│   ├── Motto (/projects/motto) - Case study
│   └── Richard Ekwonye (/projects/richard-ekwonye) - Case study
└── Contact - Footer CTA
```

### 9.2 Homepage Sections

#### Section 1: Hero
- **Logo**: "Gil®" (top left)
- **Availability**: "Booking projects from mid June 2023" (top center)
- **Navigation**: "Projects, About" (top center-right)
- **Email**: "hello@gilhuybrecht.com" (top right, underlined)
- **Headline**: "GIL HUYBRECHT DIGITAL DESIGNER"
- **Subheadline**: "Through strategic art direction and webdesign I help companies around the world grow their business."
- **CTA**: "hello@gilhuybrecht.com" button
- **Scroll indicator**: "(Selected work)" left, "Discover ↓" right

#### Section 2: Selected Work Preview
- **Project**: Custo®
- **Image**: Laptop mockup on concrete pedestal
- **Caption**: "Custo®" | "Ecommerce website for the first smart mailbox Custo®." | "(2022)"

#### Section 3: About Preview
- **Headline**: "As a digital designer and art director I help companies and organisations around the world connect with their audience and grow their business."
- **Body**: "Projects can be done directly with clients or in a supporting role for agencies and studios from around the world."

#### Section 4: More Projects
- **Motto®** - Agency website
- **Richard Ekwonye** - Portfolio website

#### Section 5: Contact CTA
- **Headline**: "Looking to grow your business through the power of great digital design?"
- **Subheadline**: "Reach out to get the conversation started about your digital design needs."
- **CTA Button**: "hello@gilhuybrecht.com"

#### Section 6: Footer
- **Large text**: "GIL HUYBRECHT DIGITAL DESIGNER"
- **Social links**: Instagram, Dribbble, Twitter
- **Back to top**: "Back to top ↑"
- **Copyright**: "Copyright ©GilHuybrecht"

### 9.3 About Page Sections

#### Section 1: Hero
- **Headline**: "DESIGN AND SKATEBOARDING"
- **Body**: "Get to know more about my approach, process, services and way of working. See some some of my skateboard tricks while you're at it."
- **Image**: Portrait photo (outdoor, wearing black cap)

#### Section 2: Philosophy
- **Number**: (001)
- **Headline**: "The best results come from websites that are easy to use, show the user what they want to see and delight them. By analysing your current situation and defining your business goals we'll design a website that is not only beautiful but also converts."

#### Section 3: Process
- **01**: Defining the business goal and strategic direction
- **02**: Strategic visual design and art direction

#### Section 4: Services
- **01**: Information architecture
- **02**: Web design / art direction
- **03**: Animation / interaction

#### Section 5: Personal
- **Number**: (003)
- **Text**: "When I'm not at the computer you can find me riding my skateboard, watching anything star wars related or walking our dogs."
- **Images**: 4 photos (skateboarding, dog, couple, beach)

#### Section 6: Awards
- **Number**: (004)
- **Intro**: "I've been lucky enough to have won some awards and features with my work. This was all made possible through great teamwork with great people."
- **List**: Awwwards, Webby, FWA, SiteInspire, Godly, Codrops, Abduzeedo, Behance features

### 9.4 Project Case Study Structure (Custo Example)

#### Section 1: Project Header
- **Title**: CUSTO®
- **Year**: (2022)
- **Description**: "Ecommerce website for the first smart mailbox Custo®."
- **CTA**: "Discover ↓"

#### Section 2: Hero Mockup
- Large laptop mockup image

#### Section 3: Project Info
- **Number**: (001)
- **Description**: "Custo is building the first ever smart mailbox. They focus on bringing a product that is not only safe and practical but also beautiful by design. The website and art direction is a reflection of those attributes."
- **Link**: "Visit the website's live version" (underlined)
- **Details**: Client, Year, Services

#### Section 4: Website Screenshots
- Multiple full-width screenshots showing:
  - Homepage hero
  - Problem/solution section
  - How it works section
  - App integration
  - Notification feature
  - Product showcase
  - Pricing/checkout flow

#### Section 5: Next Case
- **Headline**: "NEXT CASE"
- **Preview**: Motto project

---

## 10. Responsive Design Specifications

### 10.1 Breakpoints

| Name | Width | Target |
|------|-------|--------|
| mobile | < 640px | Phones |
| tablet | 640px - 1024px | Tablets |
| desktop | 1024px - 1400px | Laptops |
| wide | > 1400px | Desktops |

### 10.2 Responsive Patterns

#### Typography Scaling
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero H1 | 48px | 72px | 120px |
| Section H2 | 36px | 56px | 80px |
| Body Large | 18px | 20px | 24px |
| Body | 16px | 16px | 18px |

#### Layout Adjustments

**Mobile (< 640px)**
- Single column layout
- Header: Hamburger menu
- Hero: Full-width, stacked
- Project cards: Full-width, single column
- Services: Stacked (number, title, description)
- Footer: Stacked links

**Tablet (640px - 1024px)**
- Two column where appropriate
- Header: Compressed nav
- Hero: Full-width
- Project cards: Single column, larger
- Services: Two columns

**Desktop (1024px+)**
- Full multi-column layouts
- All features enabled
- Custom cursor active
- Parallax effects enabled

### 10.3 Touch Device Considerations
- Disable custom cursor
- Increase touch targets to 44px minimum
- Simplify hover-dependent interactions
- Enable momentum scrolling

---

## 11. Accessibility Requirements

### 11.1 WCAG Compliance Target
- **Level**: WCAG 2.1 AA
- **Contrast**: Minimum 4.5:1 for text
- **Focus indicators**: Visible focus states on all interactive elements

### 11.2 Implementation Requirements

#### Color Contrast
- Black (#000) on White (#FFF): 21:1 ✓
- Gray (#666) on White: 5.7:1 ✓
- Gray (#999) on White: 2.8:1 (use only for large text)

#### Focus States
```css
:focus-visible {
  outline: 2px solid #000;
  outline-offset: 4px;
}
```

#### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 11.3 Semantic HTML Structure
```html
<header> <!-- Navigation -->
<main> <!-- Main content -->
  <section> <!-- Hero -->
  <section> <!-- Projects -->
  <section> <!-- About -->
  <section> <!-- Contact -->
</main>
<footer> <!-- Footer -->
```

### 11.4 ARIA Attributes
- `aria-label` on icon-only buttons
- `aria-expanded` on collapsible sections
- `aria-current="page"` on active nav item
- `role="img"` with `aria-label` on decorative images

---

## 12. Performance Specifications

### 12.1 Performance Budget

| Metric | Target | Maximum |
|--------|--------|---------|
| First Contentful Paint (FCP) | < 1.0s | 1.5s |
| Largest Contentful Paint (LCP) | < 2.0s | 2.5s |
| Time to Interactive (TTI) | < 3.0s | 4.0s |
| Cumulative Layout Shift (CLS) | < 0.05 | 0.1 |
| Total Page Size | < 2MB | 3MB |
| JavaScript Bundle | < 200KB | 300KB |

### 12.2 Optimization Strategies

#### Images
- Format: WebP with JPEG fallback
- Lazy loading: All below-fold images
- Responsive images: `srcset` for different densities
- Optimization: Compress to 80% quality

#### Fonts
- Subset: Load only used character sets
- Display: `font-display: swap`
- Preload: Critical font files

#### Animation Performance
- Use `transform` and `opacity` only
- Apply `will-change` sparingly
- Use CSS animations over JavaScript where possible
- Throttle scroll events to 16ms (60fps)

### 12.3 Code Splitting
- Route-based splitting for project pages
- Component lazy loading for below-fold content
- Dynamic imports for heavy animation libraries

---

## 13. Browser Compatibility

### 13.1 Support Matrix

| Browser | Minimum Version | Support Level |
|---------|-----------------|---------------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Safari | 14+ | Full |
| Edge | 90+ | Full |
| Chrome (Android) | 90+ | Full |
| Safari (iOS) | 14+ | Full |

### 13.2 Feature Detection
```javascript
// Check for smooth scroll support
if (!('scrollBehavior' in document.documentElement.style)) {
  // Load polyfill
}

// Check for Intersection Observer
if (!('IntersectionObserver' in window)) {
  // Load polyfill or fallback
}
```

### 13.3 Progressive Enhancement
- Core content accessible without JavaScript
- Animations enhance but don't block content
- Custom cursor is enhancement only

---

## 14. Asset Requirements

### 14.1 Image Assets

#### Homepage
| Asset | Type | Dimensions | Format |
|-------|------|------------|--------|
| custo-hero | Mockup | 2400x1500 | WebP |
| motto-hero | Mockup | 2400x1500 | WebP |
| richard-hero | Mockup | 2400x1500 | WebP |

#### About Page
| Asset | Type | Dimensions | Format |
|-------|------|------------|--------|
| portrait | Photo | 1200x800 | WebP |
| skate-photo-1 | Photo | 800x1000 | WebP |
| skate-photo-2 | Photo | 800x1000 | WebP |
| skate-photo-3 | Photo | 800x1000 | WebP |
| skate-photo-4 | Photo | 800x1000 | WebP |

#### Custo Project
| Asset | Type | Dimensions | Format |
|-------|------|------------|--------|
| custo-screenshot-1 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-2 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-3 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-4 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-5 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-6 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-7 | Screenshot | 2400x1500 | WebP |
| custo-screenshot-8 | Screenshot | 2400x1500 | WebP |

### 14.2 SVG Assets
- Arrow icons (down, right)
- Social media icons
- Logo mark (if applicable)

### 14.3 Video Assets
- No video assets required for this project

---

## Appendix A: Animation Timing Reference

### A.1 Duration Guidelines
| Animation Type | Duration |
|----------------|----------|
| Micro-interaction | 200-300ms |
| Hover state | 300-400ms |
| Element entrance | 600-800ms |
| Page transition | 500-800ms |
| Stagger delay | 80-120ms |

### A.2 Easing Reference
```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Appendix B: Content Copy

### B.1 Navigation
- Logo: "Gil®"
- Availability: "Booking projects from mid June 2023"
- Nav Links: "Projects", "About"
- Email: "hello@gilhuybrecht.com"

### B.2 Homepage
- Hero Title: "GIL HUYBRECHT DIGITAL DESIGNER"
- Hero Subtitle: "Through strategic art direction and webdesign I help companies around the world grow their business."
- Selected Work Label: "(Selected work)"
- Discover: "Discover ↓"

### B.3 About Page
- Title: "DESIGN AND SKATEBOARDING"
- Intro: "Get to know more about my approach, process, services and way of working. See some some of my skateboard tricks while you're at it."
- Philosophy: "The best results come from websites that are easy to use, show the user what they want to see and delight them. By analysing your current situation and defining your business goals we'll design a website that is not only beautiful but also converts."
- Process 01: "Defining the business goal and strategic direction."
- Process 02: "Strategic visual design and art direction."
- Services Title: "SERVICES"
- Service 01: "Information architecture"
- Service 02: "Web design / art direction"
- Service 03: "Animation / interaction"
- Personal: "When I'm not at the computer you can find me riding my skateboard, watching anything star wars related or walking our dogs."
- Awards Intro: "I've been lucky enough to have won some awards and features with my work. This was all made possible through great teamwork with great people."

### B.4 Footer
- CTA Title: "Looking to grow your business through the power of great digital design?"
- CTA Subtitle: "Reach out to get the conversation started about your digital design needs."
- Large Text: "GIL HUYBRECHT DIGITAL DESIGNER"
- Social: "Instagram", "Dribbble", "Twitter"
- Back to Top: "Back to top ↑"
- Copyright: "Copyright ©GilHuybrecht"

---

## Document Version
- **Version**: 1.0
- **Date**: 2024
- **Author**: Technical Planning Analysis
- **Status**: Complete

---

*This document serves as the complete technical blueprint for recreating the Gil Huybrecht portfolio website with exact fidelity to the video demonstration.*
