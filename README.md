# ARG GeoSint - Next.js Prototype

Prototype de redesign pentru `geosint.ro`, construit in Next.js, cu focus pe claritate, utilitate si extindere rapida.

## Ce contine acum

- Pagina `Acasa` (`/`) cu:
  - hero modern + CTA-uri utile,
  - statistici rapide,
  - directii principale ARG,
  - highlight pentru evenimente,
  - prezentare simplificata a cotizatiilor.
- Pagina `Evenimente` (`/evenimente`) cu:
  - carduri de eveniment cu status,
  - timeline istoric ARG,
  - flux practic de participare.

## Stack

- Next.js (App Router)
- React
- TypeScript
- CSS custom (fara dependenta de UI kit)

## Dezvoltare locala

```bash
npm install
npm run dev
```

Aplicatia ruleaza pe `http://localhost:3000`.

## Build productie

```bash
npm run build
npm run start
```

`next.config.ts` este setat cu `output: "standalone"`, iar scriptul de start ruleaza serverul standalone.

## Deploy pe Railway din GitHub

1. Urca proiectul intr-un repository GitHub.
2. In Railway: `New Project` -> `Deploy from GitHub Repo`.
3. Selecteaza repository-ul.
4. Railway va detecta automat proiectul Node/Next si va rula `build` + `start`.
5. Dupa primul deploy, genereaza domeniul public din `Settings -> Networking -> Generate Domain`.

## Structura utila

- `app/page.tsx` - pagina Acasa
- `app/evenimente/page.tsx` - pagina Evenimente
- `app/content.ts` - continut centralizat (evenimente, timeline, membership)
- `app/components/main-nav.tsx` - navigatie
- `app/components/site-footer.tsx` - footer
- `app/globals.css` - sistem vizual + responsive
