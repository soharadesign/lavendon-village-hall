# Lavendon Village Hall — first design draft

A responsive, two-page website prototype built from the content currently spread across Lavendon Connection and Lemon Booking.

## Pages

- `index.html` — introduction, upcoming events, facilities overview and community uses.
- `booking.html` — spaces, indicative prices, booking journey, licensing note and hire documents.

## Content model

Upcoming events are intentionally separated into `events.js`. The prototype renders this data on the home page; in production the same component can consume a CMS, Google Sheet or calendar feed without changing the page design.

## Run locally

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Source notes

- Address, charity number, facilities, capacities, indicative price ranges, contact details and hire documents were taken from the two current hall sites on 31 October 2026.
- The current Lemon Booking service remains linked for live calendar data and booking requests.
- Photographs are the hall's existing images served by Lemon Booking and copied locally for this design draft.
- The published ticketed event is represented in `events.js`. Its content can be removed or updated independently of the page.
