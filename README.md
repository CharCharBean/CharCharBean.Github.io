# CharCharBean.github.io

My personal website — a portfolio at the intersection of user-centered design and
data-driven business strategy. Built as a static site (HTML + CSS) hosted on GitHub Pages.

Live at: https://charcharbean.github.io

---

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — photo hero, impact metrics, featured case studies, about teaser |
| `case-studies.html` | Listing of case studies (SensoryGen, Sensiply) |
| `case-study-sensorygen.html` | SensoryGen case study in "executive deck" format (copy this for new projects) |
| `case-study-sensiply.html` | Sensiply case study |
| `about.html` | About / résumé — narrative, experience timeline, honors, education, skills |
| `insights.html` | Insights — currently a "coming soon" page |
| `css/style.css` | The whole design system (colors, type, components) |
| `js/main.js` | Mobile navigation toggle |

## Design system

- **Palette:** Black `#000000` · Oxford Navy `#14213D` · Amber `#FCA311` · Platinum `#E5E5E5` · White
- **Type:** Playfair Display (headings) + Inter (body) — loaded from Google Fonts
- **Aesthetic:** minimalist, high-contrast, sharp 1px borders, generous whitespace

To re-skin the entire site, edit the CSS variables in the `:root` block at the top of `css/style.css`.

## What's still left to fill in

Most of the site is populated from the résumé. The remaining `[bracketed]` placeholders (highlighted
in amber on the page) are:

1. **Case study content** — `case-study-sensorygen.html` and `case-study-sensiply.html` have the full
   deck structure ready, but the narrative sections (challenge, approach, insights) are placeholders.
   Drop in your real write-ups when ready.
2. **About page** — the AVID Tutor dates/description, and the optional personal line in the bio.
3. **Project thumbnails** — the two case-study cards still use grayscale `picsum.photos` placeholders
   (see below to swap in real images).

To add a **new** case study later, copy `case-study-sensorygen.html` to a new file and link it from the
cards in `index.html` and `case-studies.html`.

## Replacing the placeholder images

- **Hero** — already uses your `hero.jpg` (a web-optimized 1920px copy of `Hawaii Photo.jpeg`). To change
  it, set a new file and update the `url("../hero.jpg")` line in `.hero` in `css/style.css`.
- **Headshot** — already uses `Headshot Image Website.JPG` on the About page.
- **Project thumbnails** — still `picsum.photos` placeholders. Replace the `src="https://picsum.photos/..."`
  attributes in `index.html` and `case-studies.html` with your own images (keep the `alt` text accurate).

## Preview locally

Just open `index.html` in a browser, or run a tiny local server from this folder:

```powershell
python -m http.server 8000
# then visit http://localhost:8000
```

## Publish

This repo is your GitHub Pages site. Once you've made changes:

```powershell
git add .
git commit -m "Build personal portfolio site"
git push
```

GitHub Pages will redeploy automatically (give it a minute). You'll need to be authenticated
to push — either via the GitHub CLI (`gh auth login`) or by signing in when git prompts.
