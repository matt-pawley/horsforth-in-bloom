# UI and UX review — 4 November 2026

The full seven-page website was reviewed with UI Taste, Better UI, React Best Practices and Web Design Guidelines. A separate design critic reviewed the rendered desktop and mobile screenshots; its actionable feedback has been implemented. Website copy was preserved throughout this visual pass.

## Completed

- Unified typography, warm paper surfaces, forest text and restrained orange/pink brand details. Corrected the Inter font binding for Tailwind v4.
- Reworked the home page around real volunteer photography, clearer actions, an editorial introduction, compact awards and a distinct volunteering section.
- Reduced header height, clarified the active page, and improved mobile menu spacing, Escape handling and outside-click dismissal.
- Refined all page introductions, content spacing, photography, buttons, borders and keyboard focus. Preserved the chronological History timeline and year navigation.
- Kept the Sites map in its full-width container, bounded its height and added a control for opening the complete image.
- Simplified gallery category navigation and photo controls; refined the enlarged-photo dialog.
- Moved social links into the footer on every screen size. Corrected the mobile disclosure position and white-panel hover/focus contrast.
- Improved Contact resources, Sustainability sections and Sponsorship layout without rewriting their text.
- Respected reduced-motion settings and retained comfortable touch targets.

## Verification

- Production webpack build and TypeScript passed.
- Biome checks passed for every changed source file; git whitespace checks passed.
- All seven pages inspected at 390 × 844 and 1440 × 1000, with additional layout checks at widths 320, 768 and 1024. No horizontal page overflow, broken loaded images or missing in-page anchor targets were found.
- Mobile menu open/close, Escape and focus return verified. Gallery arrow-key navigation, Escape and focus restoration verified. Social disclosure open state verified on mobile. Desktop map now fits a 560px-high viewer.
- Automated comparison confirmed unchanged body copy on all seven pages before applying any subsequent email requests.

## Remaining information-dependent work

See [information-to-collect.md](information-to-collect.md) for the outstanding supplied-content requests. An interactive map, further historical material and replacement photographs can be incorporated when received. Changes to calls to action or information hierarchy that require rewriting copy remain outside this visual pass.

This review used browser emulation, not physical touch devices or a screen reader. It does not constitute a full accessibility or performance certification.

## Latest email actioned

After the visual review, Cheryl’s 4 November email supplied Penny’s extended history. Added the 2024, 2025 and 2026 milestones, all five accompanying images and matching year navigation. The existing history through 2023 was retained. This is the only website copy change following the copy-preservation check.
