# Dominik Hommer Portfolio

Personal portfolio covering applied AI research, open AI-security models, Patronus Protect, education and industry experience.

[Live website](https://dominikhommer.github.io/MyPortfolio/)

## Development

The active portfolio is the React frontend. From `frontend/`, run `npm ci`, then `npm start`. Use `npm test -- --watchAll=false` for the content and link checks and `npm run build` for the production build.

Pushes to `main` build the frontend and deploy it through GitHub Pages using `.github/workflows/deploy.yml` (or the workflow file in that directory). The historical Flask backend and chatbot are retained in the repository but are not required by the current portfolio.

## Content updates

Main content lives in `frontend/src/pages/Home.js`. The public CV is `frontend/public/CV_Dominik_Hommer.pdf`; replace that file whenever the CV changes.

Download figures are dated snapshots aggregated across the public `patronus-studio` model repositories, including deployment variants. They are repository downloads, not unique users. The October 2026 update uses 12,513 monthly and 49,007 all-time downloads; benchmark figures refer to their named model-card evaluation sets. Update the accepted Array article with its final author list, DOI and public URL when publication is available.
