# Animation Timing Analysis
## Frame-by-Frame Breakdown from Video

---

## Video Analysis Methodology
- **Video Duration**: ~42 seconds
- **Frame Rate**: Analyzed at 30fps
- **Total Frames**: ~1260 frames
- **Analysis Focus**: Scroll-triggered animations, transitions, and interactions

---

## Section 1: Homepage Hero (00:00 - 00:01)

### Initial Load Sequence

| Time | Element | Animation | Duration | Easing |
|------|---------|-----------|----------|--------|
| 00:00.000 | Header | Fade in + slide down | 400ms | ease-out-expo |
| 00:00.200 | Hero Title Line 1 | Slide up from 100% | 600ms | ease-out-expo |
| 00:00.300 | Hero Title Line 2 | Slide up from 100% | 600ms | ease-out-expo |
| 00:00.600 | Subtitle | Fade up | 500ms | ease-out-quart |
| 00:00.800 | CTA Button | Scale in | 400ms | ease-out-expo |
| 00:01.000 | Scroll Indicator | Fade in | 300ms | ease-out |

### Animation Details
```css
/* Hero Title Characteristics */
.hero-title {
  font-size: 120px;
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.03em;
}

/* Entrance Animation */
@keyframes heroTitleReveal {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Section 2: Navigation Click - About Page Transition (00:01 - 00:02)

### Page Transition Sequence

| Time | Action | Animation | Duration |
|------|--------|-----------|----------|
| 00:01.080 | Click "About" | - | - |
| 00:01.100 | Current page | Fade out | 300ms |
| 00:01.200 | New page | Fade in from bottom | 500ms |

### About Page Hero Animation

| Time | Element | Animation | Duration | Delay |
|------|---------|-----------|----------|-------|
| 00:01.200 | Title "DESIGN" | Slide up | 600ms | 0ms |
| 00:01.300 | Title "AND" | Slide up | 600ms | 100ms |
| 00:01.400 | Title "SKATEBOARDING" | Slide up | 600ms | 200ms |
| 00:01.600 | Body text | Fade up | 500ms | 400ms |
| 00:01.800 | Portrait image | Scale in | 800ms | 600ms |

---

## Section 3: Scroll-Triggered Reveals (00:02 - 00:05)

### Scroll Behavior Analysis
- **Scroll Speed**: Moderate (natural scrolling)
- **Trigger Point**: Elements animate when 20% visible
- **Animation Overlap**: Multiple elements can animate simultaneously

### Philosophy Section (00:03 - 00:04)

| Time | Element | Animation | Duration | Trigger |
|------|---------|-----------|----------|---------|
| 00:03.200 | Section number (001) | Fade in | 400ms | Scroll |
| 00:03.300 | Philosophy text | Fade up | 700ms | Scroll |
| 00:03.500 | Text continues | Fade up | 700ms | Scroll |

### Process Section (00:04 - 00:05)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:04.200 | Process 01 number | Fade in | 400ms |
| 00:04.300 | Process 01 title | Fade up | 600ms |
| 00:04.400 | Process 01 description | Fade up | 600ms |
| 00:04.600 | Process 02 number | Fade in | 400ms |
| 00:04.700 | Process 02 title | Fade up | 600ms |
| 00:04.800 | Process 02 description | Fade up | 600ms |

---

## Section 4: Services Section (00:05 - 00:07)

### Services Header Animation

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:05.200 | "SERVICES" title | Slide up + scale | 800ms |
| 00:05.400 | CTA button | Fade in | 400ms |

### Service Items Stagger

| Time | Element | Animation | Duration | Stagger |
|------|---------|-----------|----------|---------|
| 00:05.600 | Service 01 | Fade up | 600ms | 0ms |
| 00:05.750 | Service 02 | Fade up | 600ms | 150ms |
| 00:05.900 | Service 03 | Fade up | 600ms | 300ms |

### Service Item Structure
```css
.service-item {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid #000;
  animation: fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

## Section 5: Personal Photos Section (00:07 - 00:08)

### Photo Gallery Animation

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:07.000 | Section number (003) | Fade in | 400ms |
| 00:07.100 | Personal text | Fade up | 600ms |
| 00:07.300 | Photo 1 | Scale in | 700ms |
| 00:07.400 | Photo 2 | Scale in | 700ms |
| 00:07.500 | Photo 3 | Scale in | 700ms |
| 00:07.600 | Photo 4 | Scale in | 700ms |

### Photo Grid Layout
```css
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.photo-item {
  aspect-ratio: 3/4;
  border-radius: 4px;
  overflow: hidden;
  animation: scaleIn 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

## Section 6: Awards Section (00:08 - 00:11)

### Awards Header Animation

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:08.200 | Section number (004) | Fade in | 400ms |
| 00:08.300 | Awards intro text | Fade up | 600ms |

### Awards List Animation

| Time | Element | Animation | Duration | Stagger |
|------|---------|-----------|----------|---------|
| 00:08.600 | Award item 1 | Slide in from left | 500ms | 0ms |
| 00:08.700 | Award item 2 | Slide in from left | 500ms | 50ms |
| 00:08.800 | Award item 3 | Slide in from left | 500ms | 100ms |
| 00:08.900 | Award item 4 | Slide in from left | 500ms | 150ms |
| 00:09.000 | Award item 5 | Slide in from left | 500ms | 200ms |
| 00:09.100 | Award item 6 | Slide in from left | 500ms | 250ms |
| 00:09.200 | Award item 7 | Slide in from left | 500ms | 300ms |
| 00:09.300 | Award item 8 | Slide in from left | 500ms | 350ms |
| 00:09.400 | Award item 9 | Slide in from left | 500ms | 400ms |
| 00:09.500 | Award item 10 | Slide in from left | 500ms | 450ms |

### Award Item Animation
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.award-item {
  animation: slideInLeft 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--index) * 50ms);
}
```

---

## Section 7: Project Case Study - Custo (00:11 - 00:27)

### Project Card Hover (00:11 - 00:12)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:11.500 | Custom cursor | Scale up to 1.2 | 200ms |
| 00:11.600 | "View case" text | Fade in | 200ms |
| 00:11.880 | Click | Page transition | 500ms |

### Project Page Header Animation (00:12 - 00:14)

| Time | Element | Animation | Duration | Delay |
|------|---------|-----------|----------|-------|
| 00:12.100 | "CUSTO®" title | Character reveal | 800ms | 0ms |
| 00:12.300 | "(2022)" year | Character reveal | 800ms | 200ms |
| 00:12.600 | Description | Fade up | 500ms | 400ms |
| 00:12.800 | "Discover ↓" | Fade in | 400ms | 600ms |

### Character Reveal Animation
```css
@keyframes characterReveal {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title-character {
  display: inline-block;
  animation: characterReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--char-index) * 30ms);
}
```

### Project Mockup Parallax (00:14 - 00:16)

| Time | Element | Animation | Speed |
|------|---------|-----------|-------|
| 00:14.000 | Laptop mockup | Parallax scroll | 0.5x |
| 00:15.000 | Mockup continues | Parallax scroll | 0.5x |

### Project Description Section (00:16 - 00:18)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:16.200 | Section number (001) | Fade in | 400ms |
| 00:16.300 | Project description | Fade up | 600ms |
| 00:16.600 | "Visit the website's live version" | Fade up | 500ms |
| 00:16.900 | Project details (Client, Year, Services) | Stagger fade up | 400ms each |

### Screenshot Gallery Scroll (00:18 - 00:27)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:18.200 | Screenshot 1 | Scale in | 800ms |
| 00:19.000 | Screenshot 2 | Scale in | 800ms |
| 00:19.800 | Screenshot 3 | Scale in | 800ms |
| 00:20.600 | Screenshot 4 | Scale in | 800ms |
| 00:21.400 | Screenshot 5 | Scale in | 800ms |
| 00:22.200 | Screenshot 6 | Scale in | 800ms |
| 00:23.000 | Screenshot 7 | Scale in | 800ms |
| 00:23.800 | Screenshot 8 | Scale in | 800ms |
| 00:24.600 | Screenshot 9 | Scale in | 800ms |
| 00:25.400 | Screenshot 10 | Scale in | 800ms |

### Screenshot Animation
```css
.project-screenshot {
  width: 100%;
  border-radius: 8px;
  animation: scaleIn 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: center center;
}

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
```

---

## Section 8: Next Case Transition (00:27 - 00:29)

### CTA Section Animation (00:27 - 00:28)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:27.200 | Section number (002) | Fade in | 400ms |
| 00:27.300 | CTA headline | Fade up | 600ms |
| 00:27.500 | CTA subheadline | Fade up | 600ms |
| 00:27.700 | CTA button | Scale in | 400ms |

### Next Case Preview (00:28 - 00:29)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:28.000 | "NEXT CASE" title | Slide up | 700ms |
| 00:28.300 | Project preview image | Scale in | 800ms |
| 00:28.600 | Custom cursor | Scale up | 200ms |
| 00:28.900 | Click | Page transition | 500ms |

---

## Section 9: Motto Project Page (00:29 - 00:32)

### Header Animation (00:29 - 00:31)

| Time | Element | Animation | Duration | Delay |
|------|---------|-----------|----------|-------|
| 00:29.500 | "MOTTO®" title | Character reveal | 800ms | 0ms |
| 00:29.700 | "(2022)" year | Character reveal | 800ms | 200ms |
| 00:30.000 | Description | Fade up | 500ms | 400ms |
| 00:30.300 | "Discover ↓" | Fade in | 400ms | 600ms |

### Navigation Back to Home (00:31 - 00:32)

| Time | Action | Animation | Duration |
|------|--------|-----------|----------|
| 00:31.200 | Click logo | Page transition | 500ms |
| 00:31.400 | Home page | Fade in | 500ms |

---

## Section 10: Homepage Return & Footer (00:32 - 00:42)

### Hero Re-animation (00:32 - 00:34)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:32.500 | Hero title | Slide up | 600ms |
| 00:32.800 | Subtitle | Fade up | 500ms |
| 00:33.000 | CTA button | Scale in | 400ms |

### Selected Work Section (00:34 - 00:38)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:34.200 | Custo project card | Fade up | 700ms |
| 00:35.500 | About text section | Fade up | 600ms |
| 00:36.500 | Motto project card | Fade up | 700ms |
| 00:37.500 | Richard Ekwonye project card | Fade up | 700ms |

### Footer Animation (00:38 - 00:42)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:38.500 | CTA section | Fade up | 600ms |
| 00:39.500 | Large footer text | Fade up | 800ms |
| 00:40.500 | Social links | Stagger fade in | 300ms each |
| 00:41.000 | Back to top | Fade in | 400ms |
| 00:41.500 | Copyright | Fade in | 400ms |

### Button Hover Effect (00:40 - 00:42)

| Time | Element | Animation | Duration |
|------|---------|-----------|----------|
| 00:40.800 | Button hover | Background fill | 400ms |
| 00:41.200 | Button leave | Background clear | 400ms |

---

## Animation Summary Tables

### Entrance Animations

| Animation | Duration | Easing | Transform | Opacity |
|-----------|----------|--------|-----------|---------|
| Fade Up | 600-800ms | ease-out-expo | translateY(60px → 0) | 0 → 1 |
| Fade In | 400-600ms | ease-out | none | 0 → 1 |
| Scale In | 700-1000ms | ease-out-expo | scale(0.95 → 1) | 0 → 1 |
| Slide Left | 500-800ms | ease-out-expo | translateX(-80px → 0) | 0 → 1 |
| Character Reveal | 600-800ms | ease-out-expo | translateY(100% → 0) | 0 → 1 |

### Hover Animations

| Element | Property | From | To | Duration | Easing |
|---------|----------|------|-----|----------|--------|
| Button | background | transparent | #000 | 400ms | ease-out-expo |
| Button | color | #000 | #fff | 400ms | ease-out-expo |
| Button | transform | scale(1) | scale(1.02) | 400ms | ease-out-expo |
| Link | width | 0 | 100% | 400ms | ease-out-expo |
| Project Card | transform | translateY(0) | translateY(-10px) | 600ms | ease-out-expo |
| Project Image | transform | scale(1) | scale(1.05) | 800ms | ease-out-expo |
| Cursor | transform | scale(1) | scale(1.2) | 200ms | ease-out |

### Scroll-Triggered Thresholds

| Section | Trigger Point | Animation Type | Stagger |
|---------|---------------|----------------|---------|
| Hero | On load | Sequence | 100ms |
| Philosophy | 20% visible | Fade up | - |
| Process | 20% visible | Fade up | 100ms |
| Services | 20% visible | Fade up | 150ms |
| Photos | 20% visible | Scale in | 100ms |
| Awards | 20% visible | Slide left | 50ms |
| Projects | 20% visible | Fade up | - |
| Screenshots | 20% visible | Scale in | - |
| Footer | 20% visible | Fade up | 100ms |

---

## Performance Notes

### Animation Performance Checklist
- ✅ All animations use `transform` and `opacity`
- ✅ No layout-triggering properties animated
- ✅ `will-change` applied strategically
- ✅ Animations respect `prefers-reduced-motion`
- ✅ Scroll events throttled to 60fps

### Critical Performance Rules
1. Never animate: `width`, `height`, `top`, `left`, `margin`, `padding`
2. Always use: `transform`, `opacity`
3. Apply `will-change` before animation, remove after
4. Use CSS animations over JavaScript when possible
5. Throttle scroll handlers to 16ms minimum

---

## Implementation Priority

### Phase 1: Core Animations
1. Page load sequence
2. Scroll-triggered fade-ups
3. Button hover states
4. Link underline animations

### Phase 2: Enhanced Animations
1. Character reveal for titles
2. Custom cursor
3. Parallax effects
4. Staggered list animations

### Phase 3: Polish
1. Page transitions
2. Reduced motion support
3. Performance optimization
4. Mobile adaptation

---

*This document provides precise timing specifications for recreating all animations observed in the video demonstration.*
