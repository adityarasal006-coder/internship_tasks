# Web Development Internship - Level 2 Projects

This repository contains the complete solution for Level 2 web development tasks, demonstrating the use of modern front-end CSS frameworks and responsive web design techniques with CSS media queries and mobile navigation.

---

## 📁 Repository Structure

```
level_2/
│
├── index.html            # Level 2 Portal Page
├── README.md             # Level 2 Documentation
│
├── task_1/               # Level 2 - Task 1: Front-End Frameworks (Bulma & Bootstrap 5)
│   ├── index.html
│   └── style.css
│
└── task_2/               # Level 2 - Task 2: Responsive Web Design & Hamburger Menu
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 📌 Task Breakdown

### 🔹 Task 1: Front-End Frameworks
- **Bulma Card Component**: A responsive card component featuring an image header, author avatar, metadata, tags, and action buttons built using Bulma.
- **Bootstrap 5 Responsive Grid**: A 12-column flexbox grid system reorganizing across mobile (`col-12`), tablet (`col-md-6`), and desktop (`col-lg-4`) breakpoints.

---

### 🔹 Task 2: Responsive Web Design & Mobile Hamburger Navigation

#### 1. Core Objectives:
- **Responsive Webpage**: Build an adaptive multi-section webpage that reorganizes spatial layouts fluidly across screen sizes using CSS media queries.
- **Mobile Hamburger Navigation**: Implement a mobile-friendly navigation header that collapses into an animated 3-bar hamburger icon on smaller screens (`≤ 768px`) and expands into an accessible slide-down navigation drawer.

#### 2. Key Features Implemented:
- **Collapsible Hamburger Menu**:
  - Desktop view (`> 768px`): Inlined horizontal navigation menu with active hover underline indicators and action buttons. The hamburger button is hidden (`display: none`).
  - Mobile/Tablet view (`≤ 768px`): The hamburger button appears (`display: flex`), while the navigation links collapse into an absolute overlay drawer.
  - Animated Icon Transformation: Clicking the hamburger smoothly morphs the 3 horizontal bars into an 'X' close symbol using CSS `transform` and `transition`.
  - Accessible & Touch-First: Includes `aria-expanded` toggle states, auto-closes when navigation anchor links are tapped, supports clicking outside, and closes on `Escape` key.
- **CSS Media Queries**:
  - `@media (max-width: 1024px)`: Compacts hero layout from 2 columns to a balanced stacked arrangement and adjusts grids.
  - `@media (max-width: 768px)`: Triggers the mobile hamburger navigation drawer, wraps feature cards to single column, stacks pricing tiers, and reorganizes form inputs.
  - `@media (max-width: 480px)`: Mobile phone view adjusting font scales via fluid `clamp()`, full-width buttons, and single-column metric counters.
- **Rich Responsive Sections**:
  - **Header & Navbar**: Sticky navbar with logo, navigation links, CTA button, and mobile hamburger menu.
  - **Hero Section**: 2-column layout with headline, CTA buttons, and responsive image that stacks on tablets and mobiles.
  - **Stats Section**: 4-column counter row adjusting to 2x2 on tablets and 1 column on phones.
  - **Services Grid**: 3-column feature cards wrapping to 2 columns on tablet and 1 column on mobile.
  - **Portfolio Gallery**: Multi-card portfolio showcase adapting fluidly across screen widths.
  - **Pricing Tier Cards**: 3-tier card layout with featured plan highlighting.
  - **Responsive Contact Form**: Multi-column inputs collapsing into full-width stacked fields.
  - **Multi-Column Footer**: Responsive link lists collapsing into accessible stacked sections.
  - **Multi-Column Footer**: Responsive link lists collapsing into accessible stacked sections.

---

## 🚀 How to Run the Projects

1. Open `level_2/index.html` in any modern web browser to access the central Level 2 project portal.
2. Click **Launch Task 2** to view the Responsive Web Design implementation.
3. Resize your browser window (or open Chrome/Edge DevTools via `F12` and toggle Device Mode with `Ctrl + Shift + M`) to observe real-time layout adaptations across mobile, tablet, and desktop breakpoints.
