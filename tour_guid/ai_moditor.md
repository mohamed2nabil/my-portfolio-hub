# ANTIGRAVITY — Portfolio Hub Refactoring & Landing Page Foundation

## Project Scope

This project is an existing portfolio website, not a greenfield build. It already contains:

- A main landing / portfolio hub
- Four portfolio domains
- Reference/template pages
- Existing animations and UI components
- Routing and navigation
- Content and assets
- Current code issues and inconsistencies

The primary goal is not to redesign everything from scratch. The priority is to:

1. Audit the current codebase
2. Understand the architecture
3. Fix broken routes, imports, styling, and runtime issues
4. Refactor the shared foundation
5. Stabilize the landing page
6. Establish a shared design system
7. Only then implement the portfolio phases one by one

---

## Phase 0 — Audit and Stabilize the Existing Project

### Goal

Before making visual or structural changes, inspect the project thoroughly and fix the root problems.

### Required actions

- Review the existing codebase and architecture
- Identify broken routes and navigation
- Check imports, paths, and missing components
- Remove duplicate components and duplicate styling
- Fix runtime, hydration, and Next.js issues
- Resolve React/TypeScript/build errors
- Clean dead or unused code
- Ensure theme consistency and responsive behavior
- Fix animation and layout problems
- Do not hide errors or apply hacks just to render the page

### Important rule

Do not destroy working features. If a component is useful, preserve it while refactoring carefully.

---

## Phase 1 — Landing Page Foundation

### Goal

Build a stable central landing page that acts as the hub for the entire portfolio ecosystem.

### Landing page responsibilities

The landing page should communicate:

- Who Mohamed Nabil is
- What he specializes in
- What he builds
- Where users can explore his work
- How to contact him

It should not become a fifth portfolio domain.

### Required structure

The landing page must include:

- Personal introduction
- Short professional positioning
- Overview of the four domains
- Exactly 4 domain cards
- Shared contact section
- Navigation to all portfolio domains
- Theme / night-mode control
- Shared visual identity
- Responsive behavior

### Required domain cards

Exactly four cards are allowed:

1. Data Analysis
2. Data Engineering
3. Web Development
4. AI Automation

Each card should be concise and navigational only. It must not contain deep project detail or content from another domain.

### Visual direction

The landing page should feel like:

- One professional identity with four capabilities
- Not four unrelated websites grouped together

The hierarchy should be clear and intentional:

Mohamed Nabil
↓
Professional Positioning
↓
4 Domains
↓
4 Cards
↓
Short Overall Profile
↓
Contact

Important rule:

- Do not add project sections to the landing page
- Do not include Data Analysis, Web Development, or AI Automation project cards on the landing page
- The landing page is an overview only

---

## Core Information Architecture

The portfolio contains four independent domains:

- Data Analysis
- Data Engineering
- Web Development
- AI Automation

The landing page is the hub and overview. It is not a fifth specialization.

The landing page answers:

> Who is Mohamed Nabil and what can he do?

Each portfolio page answers:

> What does Mohamed Nabil do in this specific domain?

---

## Domain Content Rules

### Rule 1 — No content mixing

Each portfolio page must remain isolated.

#### Data Analysis page

Allowed content:

- Data Analysis skills
- Data Analysis projects
- Data Analysis tools
- Data Analysis experience
- Relevant images and achievements
- Relevant contact/context if necessary

Not allowed:

- Data Engineering content
- AI Automation content
- Web Development content
- Other domain content

#### Data Engineering page

Allowed content:

- Data Engineering-specific information only

Not allowed:

- Data Analysis, Web Development, AI Automation content

#### Web Development page

Allowed content:

- Web development-only content

Not allowed:

- Data Analysis, Data Engineering, AI Automation content

#### AI Automation page

Allowed content:

- AI automation-only content

Not allowed:

- Data Analysis, Data Engineering, Web Development content

### Hard rule

Never reuse a generic sentence, technology, image, section, or project from another domain just because it is available.

---

## Source of Truth

The main content source is the folder:

- `tour_guid/`

Each domain has its own markdown file. These files should be treated as the source of truth.

### Important rules

- Do not invent portfolio information
- Do not replace domain content with generic AI text
- Do not merge the files together
- Read the correct markdown file for each phase before implementation

### Data Analysis source

- `tour_guid/mohamed_nabil_portfolio_content.md`

The source markdown determines:

- About text
- Skills
- Projects
- Descriptions
- Business value
- Tools and technologies
- Opportunities
- Domain-specific context

---

## Reference Templates

The existing reference/template pages are design and interaction references only, not content sources.

They help with:

- Layout structure
- Section hierarchy
- Animation ideas
- Scroll behavior
- Interaction patterns
- Card behavior
- Typography rhythm
- Transitions
- Component structure
- UX patterns

They must not be copied as-is.

### Never copy from a template

- Personal information
- Projects
- Contact details
- Identity
- Brand elements
- Social links
- Statistics
- Testimonials
- Image assets
- Descriptions

The result should feel like Mohamed Nabil’s portfolio, not someone else’s template.

---

## Template Customization Flow

Every portfolio should follow this structure:

REFERENCE TEMPLATE
↓
RETAIN DESIGN SYSTEM / INTERACTION IDEA
↓
CUSTOMIZE CONTENT
↓
CUSTOMIZE IMAGES
↓
CUSTOMIZE COLORS
↓
CUSTOMIZE TYPOGRAPHY
↓
CUSTOMIZE PROJECTS
↓
CUSTOMIZE PERSONAL INFORMATION
↓
MOHAMED NABIL PORTFOLIO

---

## Global Design System

All portfolio pages must share one consistent visual ecosystem.

This includes:

- Same background family
- Same typography system
- Same navigation language
- Same buttons
- Same spacing system
- Same borders and cards
- Same animation philosophy
- Same dark/light mode system
- Same interaction quality

Create a single global color/token system.

The Landing Page defines the primary visual identity.
All four portfolio pages must inherit the same core palette.
Domain pages may have subtle accent variations only.
Night mode must use the same global token system.

There can be subtle domain accents, but the identity must remain unified across all pages.

Important rule:

- Do not replace the current Landing Page with an unrelated new design
- Preserve the existing visual direction, layout concept, animations, and useful components where they are already appropriate
- Improve hierarchy, spacing, responsiveness, consistency, and UX instead of starting from zero

---

## Theme System

The theme should be global and coherent across:

- Landing page
- Data Analysis
- Data Engineering
- Web Development
- AI Automation

The theme must affect:

- Backgrounds
- Text
- Borders
- Cards
- Buttons
- Navigation
- Hover states
- Animations
- Sections

Avoid hardcoded colors that break in dark mode.

Use shared design tokens.

---

## Shared Contact System

There must be one shared Contact destination.

All portfolio pages must route the user to the Landing Page Contact section.

Do not duplicate the full Contact form across the four portfolio pages.

The contact functionality belongs to the landing page / global portfolio system, not to each individual portfolio page.

If the user clicks Contact from any domain page, they should reach the same global contact section.

The contact design may adapt slightly to the active page palette, but the experience should remain unified.

---

## Navigation Requirements

The global navigation must allow access to:

- Home
- Data Analysis
- Data Engineering
- Web Development
- AI Automation
- Contact

It must work on:

- Desktop
- Tablet
- Mobile

Rules:

- No dead links
- No fake buttons
- No clickable-looking elements with no action

---

## Responsive Design Requirements

The system must be responsive across the important sizes:

### Desktop

- 1920px
- 1440px
- 1366px

### Laptop

- 1280px
- 1024px

### Tablet

- 768px

### Mobile

- 430px
- 390px
- 375px
- 320px

### Must never happen

- Horizontal overflow
- Text escaping containers
- Images covering text
- Navigation breaking
- Cards becoming unusable
- Layout shift from animations
- Overlapping elements
- Cut-off sections
- Fixed elements covering content
- Unreadable typography

---

## Animation Requirements

Animations from the reference templates should be preserved conceptually.

The motion must be:

- Smooth
- Intentional
- Professional
- Performance-conscious
- Responsive
- Consistent

Support:

- Page transitions
- Section entrances
- Hover interactions
- Scroll progression
- Card interactions
- Navigation
- Hero elements

Avoid excessive motion that makes the site feel like a template demo.

---

## Refactoring Requirement

Before adding new features, inspect and fix the architecture.

Look for:

- TypeScript errors
- React errors
- Next.js routing problems
- Broken imports
- Missing components
- Incorrect paths
- Duplicate components
- Duplicate styling
- Dead code
- Unused dependencies
- Invalid references
- Broken links
- Runtime errors
- Hydration issues
- Responsive bugs
- Theme inconsistencies
- Animation errors
- Console errors

Do not hide problems. Fix the root cause.

---

## Rule: Do Not Break Working Features

Before changing a component:

- Understand what it does
- Identify what depends on it
- Check whether it is shared
- Refactor carefully

Do not rewrite the whole project unnecessarily.

The goal is:

Existing Project
↓
Audit
↓
Refactor
↓
Fix
↓
Unify
↓
Improve

Not:

Delete everything
↓
Build a random new portfolio

---

## Phase 1 Execution Checklist

### Current requirement

Do not implement all four portfolio pages yet.

Only build the landing page foundation first.

### Landing page objective

The landing page should act as the stable central hub.

### It must communicate

- Who I am
- What I specialize in
- What I build
- Where the user can explore my work
- How the user can contact me

### It must not become

- A giant Data Analysis page
- A giant Data Engineering page
- A detailed portfolio of all domains

---

## Landing Page Visual Direction

The current landing page already has the right general idea and should be improved rather than replaced.

The final structure should be:

Mohamed Nabil
↓
Professional Positioning
↓
4 Domains
↓
4 Cards
↓
Short Overall Profile
↓
Contact

The task is to clean it up and make the hierarchy much clearer without replacing it with a completely unrelated design.

The final feeling should be:

- One professional identity with four capabilities
- Not four websites randomly placed together
- Overview only, not a portfolio of projects from the four domains

Important rule:

- Remove any "Projects / highlights if appropriate" section from the landing page
- Do not add Data Analysis, Web Development, or AI Automation project cards to the landing page

---

## Image Usage Rules

Use the personal images and assets already in the project.

Do not randomly reuse the same image in every section.

- If an image belongs to Data Analysis, keep it there
- If it is personal / general branding, it can be used globally
- Do not add random stock images unless explicitly needed

---

## Content Rule

The content must come from the correct source.

Use the `tour_guid/` directory as the content repository.

For the landing page, only use information appropriate for the global overview.

For the individual portfolios later, the phases will be:

- Phase 2 → Data Analysis MD + Reference
- Phase 3 → Data Engineering MD + Reference
- Phase 4 → Web Development MD + Reference
- Phase 5 → AI Automation MD + Reference

Each phase must be treated independently.

---

## Four-Phase Portfolio Plan

### Phase 2 — Data Analysis

Input:

- Data Analysis markdown
- Data Analysis reference template

Output:

- Fully customized Data Analysis portfolio

### Phase 3 — Data Engineering

Input:

- Data Engineering markdown
- Data Engineering reference template

Output:

- Fully customized Data Engineering portfolio

### Phase 4 — Web Development

Input:

- Web Development markdown
- Web Development reference template

Output:

- Fully customized Web Development portfolio

### Phase 5 — AI Automation

Input:

- AI Automation markdown
- AI Automation reference template

Output:

- Fully customized AI Automation portfolio

---

## Phase Implementation Rules

For every phase, follow this sequence:

1. Read the markdown content
2. Read the relevant reference template
3. Identify reusable structure and interaction pattern
4. Map markdown content to the template
5. Replace all reference content
6. Replace all reference images
7. Apply the global portfolio design system
8. Apply the domain’s subtle accent variation
9. Ensure strict content isolation
10. Test responsiveness
11. Test navigation
12. Test animations
13. Fix console, build, and runtime errors
14. Only then consider the phase complete

---

## Do Not Invent Projects

If the markdown contains specific projects, use those.

If it does not contain a project, do not invent one.

When information is missing, leave it out instead of creating fake experience.

Professional accuracy matters more than filling every section.

---

## Do Not Copy Template Content

The template is for structure and interaction only, not to be used as content.

Never leave behind:

- Template names
- Template projects
- Template contact details
- Template descriptions
- Template social links
- Template statistics
- Template testimonials
- Template identity

Everything must become Mohamed Nabil’s actual information.

---

## Code Architecture

Where appropriate, create shared reusable components such as:

- `components/layout/`
- `components/navigation/`
- `components/theme/`
- `components/buttons/`
- `components/cards/`
- `components/sections/`
- `components/animations/`
- `components/contact/`

Do not duplicate logic four times if the same infrastructure can be shared.

Use a sensible balance between shared infrastructure and domain-specific presentation.

---

## Content Architecture

Keep domain content logically separated in the application's content/data layer.

Do not unnecessarily duplicate or move the original `tour_guid` source files.

The `tour_guid` folder is the documentation and source material for the project, not a structure that must be physically reorganized unless absolutely necessary.

Preferred approach:

- Keep domain-specific content separated in the app layer
- Preserve the original markdown source files as the canonical reference
- Avoid cross-domain contamination in rendering logic

This prevents cross-domain content contamination without forcing unnecessary restructuring.

---

## Routing Requirements

The final architecture should support routes such as:

- `/`
- `/data-analysis`
- `/data-engineering`
- `/web-development`
- `/ai-automation`

Each route must:

- Render correctly
- Have proper metadata
- Have working navigation
- Support the global theme
- Support responsive layouts
- Return to the landing page
- Access the shared contact section

---

## SEO and Metadata

Each portfolio page must have domain-specific metadata.

Examples:

- Data Analysis → Mohamed Nabil — Data Analysis
- Data Engineering → Mohamed Nabil — Data Engineering
- Web Development → Mohamed Nabil — Web Development
- AI Automation → Mohamed Nabil — AI Automation

Do not give every page the same metadata.

---

## Final Quality Standard

Before declaring the landing page complete, verify:

### Architecture

- No unnecessary duplication
- No broken imports
- No dead routes
- No obvious runtime errors

### UX

- Clear hierarchy
- Clear four-domain navigation
- Contact works
- Back/home navigation works

### Visual

- Unified identity
- Consistent palette
- Professional typography
- Consistent spacing
- Good animations
- No template leftovers

### Responsive behavior

- Works on desktop
- Works on tablet
- Works on mobile
- No horizontal overflow

### Content

- Landing page stays as overview only
- No domain contamination
- No invented projects
- No template content

### Theme

- Light mode works
- Night mode works
- Both modes are visually coherent

---

## Most Important Instruction

Do not start implementing the four portfolio pages yet.

The order must be:

AUDIT EXISTING PROJECT
↓
FIX ARCHITECTURE
↓
FIX ERRORS
↓
ESTABLISH GLOBAL DESIGN SYSTEM
↓
FIX LANDING PAGE
↓
VERIFY LANDING PAGE

Then stop and report what was changed.

After that, proceed phase by phase.

---

## Expected Result of This Phase

The project should end this phase with:

- A stable professional landing page
- One clear Mohamed Nabil identity
- Four clean portfolio cards
- Unified navigation
- Shared contact section
- Shared theme system
- Responsive layout
- Reference-inspired animations
- Clean architecture
- No obvious errors
- No accidental mixing of portfolio content

The landing page should be the central hub from which the four specialized portfolios are explored.

Do not overbuild it. Keep it as an overview only.

Landing = Overview
Portfolio pages = Specialization
Markdown files = Content source of truth
Reference templates = Design and interaction source
Global design system = Shared identity
Phased implementation = Safe, clear execution

---

## Final Approach Summary

The correct execution is:

1. Audit existing project
2. Fix architecture and errors
3. Establish shared design system
4. Stabilize landing page
5. Verify landing page quality
6. Then begin Phase 2 onward for individual portfolios

This keeps the work controlled, professional, and aligned with the project requirement to preserve the existing portfolio ecosystem while fixing and improving it.

### Recommended workflow

PORTFOLIO HUB
│
├── PHASE 0
│   └── AUDIT
│
├── PHASE 1
│   └── LANDING PAGE
│
├── GLOBAL DESIGN SYSTEM
│
├── PHASE 2
│   └── Data Analysis MD + Data Analysis Reference
│
├── PHASE 3
│   └── Data Engineering MD + Data Engineering Reference
│
├── PHASE 4
│   └── Web Development MD + Web Development Reference
│
└── PHASE 5
    └── AI Automation MD + AI Automation Reference

This ensures the landing page is fixed and stabilized first, then each domain portfolio is implemented as an isolated phase based on its own markdown and reference.
