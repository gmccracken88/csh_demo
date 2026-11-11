# CSH demo site

A design demo of a more modern website for the Colorado Society of Histotechnology.
It is based on the public content of the current site, <https://coloradohisto.org/>.

This is a demo, not a replacement. The current site runs on ClubExpress, which handles
login, dues, registration and payments. Here those parts are mock screens.

## What it is

- Plain HTML, CSS and a little JavaScript. No framework and no build step.
- 27 pages: home, about, awards, meetings, membership, jobs, documents, FAQ, photos,
  contact, login, and eight member pages.
- The header and footer live in one file, `assets/js/site.js`, so they stay the same
  on every page.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8765
```

Then go to <http://localhost:8765>.

## What is real and what is mock

| Part | In the demo |
| --- | --- |
| Page text (history, mission, constitution, officers, awards, meetings) | Carried over from the current public site |
| Photos and stain images | Real images from the current public site |
| Meeting program PDFs | Links to the files on the current site |
| Member login | Mock. Press "Log in"; nothing is checked, sent or stored |
| Join, meeting registration, contact form, profile, volunteering | Mock. They show a confirmation and send nothing |
| Member directory, document lists, profile | Made-up sample data in `assets/js/demo-data.js` |
| Committee member lists, memorial names, webinar recordings | Left out |

No real member data is in this repository.

## Problems on the current site that the demo fixes

Accessibility and layout
- 41 of 44 home page images had no alt text. Every image now has one.
- 6 links had no readable name (image-only links). All links now have text.
- The home page had no main heading. Every page now has exactly one `h1`.
- Body text was 12px Arial. It is now 17px with more spacing.
- The banner, meeting notice and buttons were pictures of text. They are now real text,
  so screen readers and phones can read them.
- Form fields on Contact and Sign-up had no proper labels. All fields are labelled.
- The fixed-width layout is replaced with one that works from phone to desktop.

Broken or confusing things
- LinkedIn and Twitter icons linked to nothing. Only the working Facebook link is kept.
- An unrelated "grammar quiz" image was sitting in the home page code. Removed.
- The Documents page carried a hidden "There was an error loading documents!" message
  and a long block of instructions. Replaced with a simple folder browser.
- The FAQ showed nothing until you clicked a category. All questions now show at once.
- "Officers" and "Contact CSH" were near copies of each other. Officers now has the
  board; Contact has everyone plus the form.
- Job openings and resumes were two near-identical pages. They are now one page.
- The home slideshow was titled "2025 CSH Fall Meeting" next to 2026 content.

Typos corrected
- Mission: "mutual mutual understanding".
- History: "could not located", "each slides", "lead by", "wanted for form",
  "Histotechnolgy".
- Contact: "Email;:" and an email link with a stray space in it.
- Benefits: "carry at monetary value".
- Past boards: missing spaces and periods in titles ("Ms.Jennifer", "Ms Tugy").

## For CSH to confirm

These looked wrong or unclear on the current site. The demo does not guess.

1. **Fifth board member's title.** The Officers page says "Past Vice President". The
   Contact page says "Past Secretary (5th board member)". The demo uses "Past Vice
   President (fifth board member)".
2. **Bylaws numbering.** The bylaws have two sections called "Article V" (Meetings and
   Rules). The text is left as it is.
3. **Meeting price.** Benefits says members pay $25 per class and non-members $50 per
   class. The 2026 Fall Meeting says one $50 fee covers everything. Both are shown as
   written.
4. **2025 meetings.** Previous Meetings stopped at 2024, but there are photo albums for
   a 2025 spring meeting and a slideshow for a 2025 fall meeting. Both are added to the
   list. The fall meeting has no place or dates yet, and neither has a program link.
5. **Membership dues.** The amounts for Member, Student and Retired were not on a public
   page, so the Join screen does not show prices.
6. **FAQ answers.** The questions come from the current site. The answers were rewritten
   from other pages on the site. Questions that could not be answered that way were left
   out (for example membership cost and "Who was Monte Thompson?").
7. **Resource links.** The vendor and organization links were carried over as they are.
   Many are old `http://` addresses and have not been checked one by one.
8. **Past boards.** One 1991–1993 entry reads "Ms. Mary Ann Haynes?" with a question
   mark, and one "Past President" is blank on the current site.

## Not checked

- Screen reader testing with real assistive software.
- Browsers other than the Chromium-based preview.
- Whether every external link still works.
