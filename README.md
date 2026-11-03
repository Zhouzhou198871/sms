# SMS Workspace

A responsive Vite front-end inspired by the public information architecture of nzsms.com. This repository contains an independent interface implementation; it does not reuse the source site's private code or connect to its accounts, inventory, SMS gateways, payment systems, or authentication.

## Included
- Responsive landing page and navigation
- Country/region directory with client-side search
- About and developer documentation pages
- Demo login dialog (no credentials are sent or stored)
- GitHub Actions build on pushes and pull requests

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Integration notes
The country list is sample display data. Live country inventory, service catalog, user accounts, orders, SMS receipt, and payments require a separately operated backend and authorized provider integration. Keep API secrets on the server; never commit credentials or expose provider keys in browser JavaScript.
