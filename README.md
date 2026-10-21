# Dominik Hommer Portfolio

Personal portfolio covering applied AI research, open AI-security models, Patronus Protect, education and industry experience.

[Live website](https://dominikhommer.github.io/MyPortfolio/)

## Development

The active portfolio is the React frontend. From `frontend/`, run `npm ci`, then `npm start`. Use `npm test -- --watchAll=false` for the content and link checks and `npm run build` for the production build.

Pushes to `main` build the frontend and deploy it through GitHub Pages using `.github/workflows/deploy.yml` (or the workflow file in that directory). The historical Flask backend and chatbot are retained in the repository but are not required by the current portfolio.

## Content updates

Main content lives in `frontend/src/pages/Home.js`. The website does not publish a CV download.

Download figures are dated snapshots aggregated across the public `patronus-studio` model repositories, including deployment variants. They are repository downloads, not unique users. The October 2026 update uses 12,513 monthly and 49,007 all-time downloads; benchmark figures refer to their named model-card evaluation sets. The Array article was published online on 17 October 2026: Hommer and Vogl, Array 32 (2026), 101347, DOI 10.1016/j.array.2026.101347. ScienceDirect, DOI, ResearchGate paper and ResearchGate profile links are included.
