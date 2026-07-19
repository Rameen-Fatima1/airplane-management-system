# SkyDesk — Airplane Management System

A responsive Airplane Management System built with **HTML, CSS, and Bootstrap 5**, featuring a professional sidebar navigation and four core screens.

## Screens

| Page | File | Description |
|------|------|-------------|
| Home Dashboard | `index.html` | KPI stat cards, upcoming departures, fleet status, recent arrivals, quick actions |
| Ticket Management | `tickets.html` | Booking summary cards, bookings table with search/filter, quick booking form, new-ticket modal |
| Departures | `departures.html` | Departure stats and a live-style departure board with route indicators |
| Arrivals | `arrivals.html` | Arrival stats and an arrivals board with belt numbers and flight status |

## Tech Stack

- HTML5
- CSS3 (custom stylesheet — `css/style.css`)
- Bootstrap 5.3 (CDN)
- Bootstrap Icons (CDN)
- Vanilla JavaScript (`js/app.js`) — mobile sidebar toggle, live clock, table search filter

## Project Structure

```
airplane-management-system/
├── index.html          # Home Dashboard
├── tickets.html         # Ticket Management
├── departures.html      # Departures
├── arrivals.html         # Arrivals
├── css/
│   └── style.css        # Shared design system & component styles
├── js/
│   └── app.js            # Shared interactivity
└── README.md
```

## How to Run

No build step or installation required — it's a static site.

1. Download / clone the repository.
2. Open `index.html` directly in a browser, **or**
3. Serve it locally for best results, e.g.:
   ```bash
   npx serve .
   ```
   or use the VS Code "Live Server" extension.

## Design Notes

- Color system: deep navy sidebar (`#0B1F3A`), sky-blue accent (`#2E86AB`), amber accent (`#F2A541`) on a light app background (`#F7F9FC`).
- Typography: **Space Grotesk** for headings/data, **Inter** for body text.
- Fully responsive: sidebar collapses into an off-canvas drawer with a hamburger toggle on screens below 992px.

## Author

Rameen — Final Year Computer Engineering, COMSATS University Islamabad (Lahore Campus)
Submission date: 15 July 2026
