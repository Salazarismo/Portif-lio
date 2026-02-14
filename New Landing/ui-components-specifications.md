# UI Components & Interactive Behaviors Specification
## Detailed Component Library for Gil Huybrecht Portfolio

---

## Table of Contents
1. [Navigation System](#1-navigation-system)
2. [Button Components](#2-button-components)
3. [Typography Components](#3-typography-components)
4. [Project Cards](#4-project-cards)
5. [Service Items](#5-service-items)
6. [Awards List](#6-awards-list)
7. [Photo Gallery](#7-photo-gallery)
8. [Custom Cursor System](#8-custom-cursor-system)
9. [Footer Components](#9-footer-components)
10. [Form Elements](#10-form-elements)

---

## 1. Navigation System

### 1.1 Header Component

#### Visual Specifications
```
┌─────────────────────────────────────────────────────────────────┐
│ Gil®    Booking projects from mid June 2023    Projects, About  │
│                                                hello@...        │
└─────────────────────────────────────────────────────────────────┘
```

#### CSS Implementation
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
  background: transparent;
  transition: background 300ms ease;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}
```

#### Layout Structure
| Element | Position | Width | Alignment |
|---------|----------|-------|-----------|
| Logo | Left | Auto | Left |
| Availability | Center-Left | Auto | Center |
| Navigation | Center-Right | Auto | Center |
| Email | Right | Auto | Right |

#### Interactive Behaviors

**Logo Hover**
- Default: Black text
- Hover: Slight opacity reduction (0.7)
- Transition: 300ms ease
- Cursor: Pointer

**Navigation Links**
```css
.nav-link {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  padding: 8px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #000;
  transition: width 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  width: 100%;
}
```

**Email Link**
- Always underlined (static underline, not animated)
- Font size: 14px
- Font weight: 500
- Hover: Opacity 0.7

### 1.2 Mobile Navigation

#### Hamburger Menu
```css
.mobile-menu-button {
  display: none;
  width: 24px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
}

.mobile-menu-button span {
  display: block;
  width: 100%;
  height: 2px;
  background: #000;
  transition: all 300ms ease;
}

.mobile-menu-button--open span:nth-child(1) {
  transform: rotate(45deg) translateY(5.5px);
}

.mobile-menu-button--open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button--open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-5.5px);
}
```

#### Mobile Menu Panel
```css
.mobile-menu {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 40px;
  transform: translateX(100%);
  transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu--open {
  transform: translateX(0);
}
```

---

## 2. Button Components

### 2.1 Primary Button (Pill Outline)

#### Visual Specifications
- Height: 48px (minimum touch target: 44px)
- Padding: 16px 32px
- Border: 1px solid #000
- Border-radius: 50px (pill)
- Background: transparent
- Text color: #000
- Font size: 14px
- Font weight: 500

#### States
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 32px;
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

/* Hover State */
.btn-primary:hover {
  background: #000;
  color: #fff;
  transform: scale(1.02);
}

/* Active/Pressed State */
.btn-primary:active {
  transform: scale(0.98);
}

/* Focus State */
.btn-primary:focus-visible {
  outline: 2px solid #000;
  outline-offset: 4px;
}

/* Disabled State */
.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

#### Animation Sequence
| State | Background | Color | Transform | Duration |
|-------|------------|-------|-----------|----------|
| Default | transparent | #000 | scale(1) | - |
| Hover | #000 | #fff | scale(1.02) | 400ms |
| Active | #000 | #fff | scale(0.98) | 100ms |

### 2.2 Text Link with Arrow

#### Visual Specifications
```
Discover ↓
```

#### Implementation
```css
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.btn-text .arrow {
  transition: transform 300ms ease;
}

.btn-text:hover .arrow {
  transform: translateX(4px) translateY(2px);
}
```

#### Arrow Animation
- Default: Static position
- Hover: Translate 4px right, 2px down (for down arrow)
- Duration: 300ms
- Easing: ease

### 2.3 Back to Top Button

#### Visual Specifications
```
Back to top ↑
```

#### Implementation
```css
.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 300ms ease;
}

.back-to-top:hover {
  opacity: 0.7;
}

.back-to-top .arrow {
  transition: transform 300ms ease;
}

.back-to-top:hover .arrow {
  transform: translateY(-4px);
}
```

---

## 3. Typography Components

### 3.1 Hero Title

#### Specifications
```css
.hero-title {
  font-size: clamp(60px, 8vw, 120px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #000;
}

.hero-title__line {
  display: block;
  overflow: hidden;
}

.hero-title__text {
  display: block;
  transform: translateY(100%);
  animation: heroReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroReveal {
  to {
    transform: translateY(0);
  }
}
```

#### Stagger Pattern
| Line | Delay | Animation |
|------|-------|-----------|
| Line 1 | 0ms | translateY(100% → 0) |
| Line 2 | 100ms | translateY(100% → 0) |
| Line 3 | 200ms | translateY(100% → 0) |

### 3.2 Section Title

#### Specifications
```css
.section-title {
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #000;
}
```

### 3.3 Body Text

#### Large Body
```css
.body-large {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  max-width: 600px;
}
```

#### Regular Body
```css
.body-regular {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
}
```

### 3.4 Section Number

#### Specifications
```css
.section-number {
  font-size: 12px;
  font-weight: 400;
  color: #000;
  font-variant-numeric: tabular-nums;
}

/* Format: (001), (002), etc. */
```

---

## 4. Project Cards

### 4.1 Project Card Component

#### Visual Structure
```
┌─────────────────────────────────────────┐
│                                         │
│         [Project Image]                 │
│         (Laptop mockup)                 │
│                                         │
│         [Custom Cursor Overlay]         │
│              "View case"                │
│                                         │
└─────────────────────────────────────────┘
Custo®    Ecommerce website for...    (2022)
```

#### CSS Implementation
```css
.project-card {
  position: relative;
  width: 100%;
  cursor: none; /* Hide default cursor when custom cursor active */
}

.project-card__image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 16/10;
  background: #f5f5f5;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
  gap: 24px;
}

.project-card__name {
  font-size: 14px;
  font-weight: 500;
  color: #000;
  flex-shrink: 0;
}

.project-card__description {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  max-width: 400px;
}

.project-card__year {
  font-size: 14px;
  font-weight: 500;
  color: #000;
  flex-shrink: 0;
}
```

#### Hover Effects
| Element | Property | Default | Hover | Duration | Easing |
|---------|----------|---------|-------|----------|--------|
| Card | transform | translateY(0) | translateY(-10px) | 600ms | ease-out-expo |
| Image | transform | scale(1) | scale(1.05) | 800ms | ease-out-expo |
| Cursor | scale | 1 | 1.2 | 200ms | ease-out |

### 4.2 Project Card with Custom Cursor

#### Implementation
```jsx
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      ref={cardRef}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.name}
          className="project-card__image"
        />
      </div>
      <div className="project-card__meta">
        <span className="project-card__name">{project.name}</span>
        <span className="project-card__description">{project.description}</span>
        <span className="project-card__year">{project.year}</span>
      </div>
      
      {/* Custom cursor follows mouse */}
      <CustomCursor 
        targetRef={cardRef}
        isVisible={isHovered}
        text="View case"
      />
    </div>
  );
}
```

---

## 5. Service Items

### 5.1 Service List Component

#### Visual Structure
```
SERVICES                                    [CTA Button]
─────────────────────────────────────────────────────────
01    Information architecture      Description text...
─────────────────────────────────────────────────────────
02    Web design / art direction    Description text...
─────────────────────────────────────────────────────────
03    Animation / interaction       Description text...
─────────────────────────────────────────────────────────
```

#### CSS Implementation
```css
.services-section {
  padding: 120px 0;
}

.services-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.services-title {
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  color: #000;
}

.services-list {
  border-top: 1px solid #000;
}

.service-item {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid #000;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.service-item:nth-child(1) { animation-delay: 0ms; }
.service-item:nth-child(2) { animation-delay: 150ms; }
.service-item:nth-child(3) { animation-delay: 300ms; }

.service-number {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.service-title {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  line-height: 1.2;
}

.service-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Responsive Behavior
| Breakpoint | Grid Columns | Gap | Padding |
|------------|--------------|-----|---------|
| Desktop (>1024px) | 60px 1fr 1fr | 40px | 40px 0 |
| Tablet (640-1024px) | 60px 1fr | 24px | 32px 0 |
| Mobile (<640px) | 1fr (stacked) | 16px | 24px 0 |

---

## 6. Awards List

### 6.1 Awards Component

#### Visual Structure
```
(004)
I've been lucky enough to have won some awards...
─────────────────────────────────────────────────
Awwwards Independent of the year nominee          1
─────────────────────────────────────────────────
Awwwards Site of the year nominee                 1
─────────────────────────────────────────────────
Webby award                                       1
─────────────────────────────────────────────────
...
```

#### CSS Implementation
```css
.awards-section {
  padding: 120px 0;
}

.awards-intro {
  font-size: 24px;
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 60px;
}

.awards-list {
  border-top: 1px solid #e5e5e5;
}

.award-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  font-size: 18px;
  color: #000;
  opacity: 0;
  transform: translateX(-40px);
  animation: slideIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.award-item:nth-child(1) { animation-delay: 0ms; }
.award-item:nth-child(2) { animation-delay: 50ms; }
.award-item:nth-child(3) { animation-delay: 100ms; }
/* ... continue pattern */

.award-count {
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## 7. Photo Gallery

### 7.1 Photo Grid Component

#### Visual Structure
```
(003)
When I'm not at the computer you can find me...
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Photo 1 │ │ Photo 2 │ │ Photo 3 │ │ Photo 4 │
│         │ │         │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

#### CSS Implementation
```css
.photo-section {
  padding: 120px 0;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 40px;
}

.photo-item {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  animation: scaleIn 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.photo-item:nth-child(1) { animation-delay: 0ms; }
.photo-item:nth-child(2) { animation-delay: 100ms; }
.photo-item:nth-child(3) { animation-delay: 200ms; }
.photo-item:nth-child(4) { animation-delay: 300ms; }

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.photo-item:hover img {
  transform: scale(1.05);
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### Responsive Behavior
| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Desktop (>1024px) | 4 | 16px |
| Tablet (640-1024px) | 2 | 16px |
| Mobile (<640px) | 2 | 8px |

---

## 8. Custom Cursor System

### 8.1 Custom Cursor Component

#### Specifications
- Size: 80px diameter
- Shape: Circle (border-radius: 50%)
- Background: White (#fff)
- Border: 1px solid black
- Text: "View case" (10px, centered)
- Blend mode: normal (or difference for contrast)

#### Implementation
```jsx
function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const animate = () => {
      // Lerp for smooth following (0.15 = lag amount)
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      cursor.style.transform = `translate(${cursorX - 40}px, ${cursorY - 40}px)`;
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'is-hovering' : ''}`}
    >
      {cursorText && <span className="custom-cursor__text">{cursorText}</span>}
    </div>
  );
}
```

#### CSS
```css
.custom-cursor {
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
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 200ms ease, transform 200ms ease;
  /* Hide on touch devices */
  @media (hover: none) {
    display: none !important;
  }
}

.custom-cursor.is-hovering {
  opacity: 1;
  transform: scale(1);
}

.custom-cursor__text {
  font-size: 10px;
  font-weight: 500;
  color: #000;
  text-align: center;
  line-height: 1.2;
}
```

### 8.2 Cursor States

| State | Scale | Opacity | Text | Target |
|-------|-------|---------|------|--------|
| Default | 0.5 | 0 | - | Anywhere |
| Project hover | 1.0 | 1 | "View case" | Project cards |
| Link hover | 0.3 | 0.5 | - | Navigation links |
| Button hover | 0.3 | 0.5 | - | Buttons |

---

## 9. Footer Components

### 9.1 Footer Structure

#### Visual Layout
```
┌─────────────────────────────────────────────────────────────────┐
│ (002)                                                           │
│ Looking to grow your business...                                │
│ Reach out to get the conversation started...                    │
│ [hello@gilhuybrecht.com]                                        │
│                                                                 │
│ GIL HUYBRECHT DIGITAL DESIGNER                                  │
│                                                                 │
│ Instagram  Dribbble  Twitter    Back to top ↑    Copyright ©... │
└─────────────────────────────────────────────────────────────────┘
```

#### CSS Implementation
```css
.footer {
  padding: 120px 0 40px;
}

.footer-cta {
  margin-bottom: 120px;
}

.footer-cta__title {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 600px;
  margin-bottom: 24px;
}

.footer-cta__button {
  margin-top: 32px;
}

.footer-large-text {
  font-size: clamp(48px, 6vw, 100px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 60px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid #e5e5e5;
}

.footer-social {
  display: flex;
  gap: 24px;
}

.footer-social-link {
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  position: relative;
}

.footer-social-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #000;
  transition: width 300ms ease;
}

.footer-social-link:hover::after {
  width: 100%;
}

.footer-copyright {
  font-size: 14px;
  color: #666;
}
```

---

## 10. Form Elements

### 10.1 Text Input (if needed)

#### Specifications
```css
.input {
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid #000;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: #000;
  transition: border-color 300ms ease;
}

.input:focus {
  outline: none;
  border-color: #666;
}

.input::placeholder {
  color: #999;
}
```

### 10.2 Textarea

```css
.textarea {
  width: 100%;
  min-height: 160px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: #000;
  resize: vertical;
  transition: border-color 300ms ease;
}

.textarea:focus {
  outline: none;
  border-color: #666;
}
```

---

## Component State Matrix

### Interactive States Summary

| Component | Default | Hover | Active | Focus | Disabled |
|-----------|---------|-------|--------|-------|----------|
| Primary Button | transparent/bg | black bg/white text | scale(0.98) | outline | opacity 0.4 |
| Nav Link | black text | underline expand | - | outline | - |
| Project Card | static | lift + image scale | - | - | - |
| Service Item | static | - | - | - | - |
| Award Item | static | - | - | - | - |
| Photo Item | static | image scale | - | - | - |
| Social Link | black text | underline | - | outline | - |
| Back to Top | black text | arrow up | - | outline | - |

---

## Accessibility Requirements

### Keyboard Navigation
- All interactive elements must be focusable
- Focus order follows visual order
- Focus indicators clearly visible
- Escape key closes modals/menus

### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images
- Skip navigation link

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .custom-cursor {
    display: none !important;
  }
}
```

---

*This document provides complete specifications for all UI components and their interactive behaviors.*
