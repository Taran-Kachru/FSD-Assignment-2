# Personal Portfolio Website — Assignment 1

**Course:** Full Stack Development  
**Student:** Varun  
**Tech stack:** HTML5 · CSS3 (no frameworks, no preprocessors)

---

## Design Rationale

The site uses a **dark theme** (deep navy-black background `#0f1117` with a violet accent `#6c63ff`) to create a professional developer aesthetic while keeping contrast ratios above WCAG AA throughout. All interactive text pairs score ≥ 4.5 : 1; large heading text scores ≥ 3 : 1. Custom properties (`--clr-*`, `--fs-*`, `--sp-*`) centralise every design token in `:root`, so theme changes require edits in exactly one place.

## Layout Technique Justification

Two layout primitives are used deliberately, each chosen for the content type it serves:

**CSS Grid** is used for:
- The hero section — a two-column grid (`1fr 1fr`) naturally splits content and avatar side-by-side and collapses to a single column at tablet width.
- The About section — another two-column grid for bio text and skill bars.
- The contact form's first row — a `1fr 1fr` grid aligns Name and Email fields as a pair.
- The project gallery — `repeat(auto-fill, minmax(300px, 1fr))` gives intrinsically responsive card tiling with zero media-query overhead.

**Flexbox** is used for:
- The sticky header navigation — one-dimensional horizontal alignment with `space-between`.
- Skill bar items, form groups, and button clusters — wherever items flow along a single axis and wrapping or gap control is the main need.

The split follows a clear rule: **Grid for two-dimensional regions, Flexbox for one-dimensional flows.**

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|---|---|---|
| Tablet | ≤ 768 px | Hero stacks vertically; about-grid stacks; form row collapses to 1 col; avatar shrinks |
| Mobile | ≤ 480 px | Font scale reduced; hero CTA stacks; projects grid goes single-column; nav labels shrink |

## Interactive States & Animations

- **`:hover`** — all buttons lift via `translateY(-2px)` + `box-shadow`; nav links reveal a sliding underline; project cards border highlights and image scales.
- **`:focus-visible`** — a 2 px violet outline appears on all keyboard-focusable elements.
- **CSS `transition`** — every interactive state change is eased (`250ms ease`).
- **CSS `animation`** — the hero name cycles a `shimmer` brightness keyframe; skill bar widths grow in with a `grow-bar` keyframe on load.

## Known Limitations

- **No JavaScript** — the contact form submits to `action="#"` and does not send email; client-side validation relies solely on HTML5 `required` attributes.
- **Placeholder images** — all project thumbnails and the profile avatar are inline SVG illustrations; real screenshots would be swapped in for production.
- **No dark/light toggle** — theming is dark-only; a `prefers-color-scheme` light variant was scoped out to keep the submission within the HTML/CSS-only constraint.
