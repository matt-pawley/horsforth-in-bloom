# UI and UX refinement recommendations

Reviewed on 3 November 2026 using the UI Taste, React Best Practices and Web Design Guidelines skills. Preserve the recognisable flower logo and orange, green and pink identity. The strongest next step is a clearer community website with stronger photography, simpler page hierarchy and easier routes to volunteering, visiting sites and sponsorship.

These are recommendations for a subsequent design pass. Cheryl's content changes have been implemented without replacing the overall visual identity.

## Recommended priorities

| Priority | Location | Finding and suggested change |
| --- | --- | --- |
| P2 | `src/app/page.tsx:49` | “Get Involved” sends everyone to a general Contact page. Make the principal action “Join a Wednesday working party”, show the existing Wednesday 1.30–3pm arrangement beside it, and link directly to the volunteer section. Keep a clear secondary action for exploring sites and a separate sponsorship route. |
| P2 | `src/app/page.tsx:100` | The long introduction, awards and second volunteer section repeat ideas before giving practical joining information. Condense the introduction, put a short “How to join” section earlier, and reduce the awards to a smaller supporting strip. Preserve the supplied facts and images. |
| P2 | `src/app/sites/page.tsx:15` | The requested full-width map is a tall portrait image and pushes the first site a long way down the page. Keep the full-width presentation, add an alphabetical jump list above it, then replace it with Stuart's interactive map when supplied. Make keyboard and text access to the locations available alongside the interactive view. |
| P2 | `src/app/sites/page.tsx:55` | Sixteen large cards create a very long page. Keep one main photograph per site as requested, but reduce the border/shadow treatment, vary spacing deliberately, and use shorter introductory summaries with the full supplied descriptions still available. A jump list is the first improvement; filters would only be useful if people need them. |
| P2 | `src/app/contact/page.tsx:34` | Contact details appear before the practical volunteering block on mobile. Give the page an immediate “Volunteer”, “Sponsorship” and “General enquiry” choice, with meeting arrangements and a clearly labelled email action for volunteering first. Move the large useful-links directory below these tasks. |
| P2 | `src/app/history/page.tsx:49` | A vertical timeline, milestone headings, grouped photographs and a year index with a current-year indication have now been implemented. Incorporate Daniella's additional timeline content when it arrives, preserving the chronological reading order and mobile layout. |
| P2 | `src/app/sustainability/page.tsx:110` | Six equal icon cards give practical information and broad statements the same visual weight. Use photographs and a few clear sections for perennial planting, peat-free growing, scything and composting. Connect each practice to a real local site. |
| P2 | `src/app/page.tsx:104`, `src/app/sustainability/page.tsx:95` | Some untouched text still uses the light decorative brand shades. Review the actual rendered foreground/background combinations, use darker text variants, and reserve the lighter colours for surfaces and accents. Text in the changed Contact, footer and new pages already uses darker variants. A complete contrast audit remains outstanding. |
| P3 | Shared page layouts | The repeated large pastel introductions and heavy card shadows make pages feel uniform. Keep the brand palette, but use a more deliberate type scale, narrower text measures and lighter dividers. Let real photographs and clear section headings do more of the work. |

## Sponsorship improvements once information arrives

Keep “Enquire about sponsorship” as the clear action. Add approved bank details only when supplied, and add sponsor logos only if Cheryl confirms they are needed. If she later supplies planter availability and prices, a concise explanation of the sponsorship options would make the enquiry easier. Do not invent tiers, prices, testimonials or impact statistics.

## Usability improvements included with the content work

- Shared navigation now consistently includes Our Sites, Sponsorship and Gallery, with Gallery between History and Contact Us.
- Mobile navigation has an accessible name, expanded state, larger touch target and a current-page indication.
- Added a skip link, `en-GB` language declaration and visible keyboard focus styling.
- Gallery images have named buttons, arrow-key navigation, Escape-to-close and focus restoration to the selected photograph.
- Gallery groups have direct anchors from Our Sites and a jump list on the Gallery page.
- Photo selections now use a stable explicit ordering instead of relying on filesystem discovery.
- The social pop-out sits in normal page flow on mobile so it cannot cover contact links. Desktop retains the floating control.
- Missing Instagram and donation details do not produce dead controls or blank fields.
- Corrected the map's intrinsic dimensions to reserve the proper aspect ratio before loading.

## Evidence and limits

The running local production build was inspected in Chrome at 1353 × 675 and 390 × 844 CSS pixels. Inspection covered the existing home page, the revised Our Sites and Contact pages, the new Sponsorship page, the illustrated History page, Gallery thumbnails and the enlarged-photo dialog. Mobile navigation, gallery keyboard navigation, Escape closing, focus restoration and the social disclosure were exercised. The home page had no horizontal overflow at 390 CSS pixels.

This was a focused review, not a full accessibility or performance certification. Physical touch devices, screen-reader output, all colour combinations and constrained-network performance were not tested. The recommendations about information hierarchy and visual style are design judgements, not claims of measured conversion gains.

Reference: [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
