# CharCharBean.github.io

My personal website — a portfolio at the intersection of user-centered design and
data-driven business strategy. Built as a static site (HTML + CSS) hosted on GitHub Pages.

Live at: https://charcharbean.github.io

---

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — photo hero, impact metrics, Featured Work cards, about teaser |
| `case-studies.html` | The "Work" page (file name kept so shared links still work) |
| `work-nemko.html` | Nemko job page (copy this for new jobs) |
| `case-study-sensorygen.html` | SensoryGen case study (copy this for new projects) |
| `case-study-sensiply.html` | Sensiply case study |
| `about.html` | About — bio, experience timeline, honors, education, skills |
| `insights.html` | Insights — currently a "coming soon" page |
| `css/style.css` | The whole design system (colors, type, components) |
| `js/main.js` | Mobile navigation toggle |

## Folder layout

```
*.html                       pages (must stay at the top level for GitHub Pages URLs)
css/  js/                    styles and scripts
images/                      every image the site displays
images/originals/            source photos and logos (not shown directly on the site)
Charles-Russell-Resume.pdf   linked from every Résumé button
```

## Design system

- **Palette:** Black `#000000` · Oxford Navy `#14213D` · Amber `#FCA311` · Platinum `#E5E5E5` · White
- **Type:** Playfair Display (headings) + Inter (body) — loaded from Google Fonts
- **Aesthetic:** minimalist, high-contrast, sharp 1px borders, generous whitespace

To re-skin the entire site, edit the CSS variables in the `:root` block at the top of `css/style.css`.

## Adding work

To add a job or project, copy `work-nemko.html` (jobs) or `case-study-sensorygen.html` (projects), then
add a card for it in `index.html` and `case-studies.html`.

## Images

All site images live in `images/`; originals go in `images/originals/`.

- **Hero** — `images/hero.jpg`, a web-optimized 1920px copy of `images/originals/Hawaii Photo.jpeg`.
  Set in the `.hero` rule in `css/style.css`.
- **Headshot** — `images/Headshot Image Website.JPG` on the About page.
- **Card thumbnails** — `images/*-thumb.jpg`, 1000×625 (16:10) so they fill the cards without distortion.

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
