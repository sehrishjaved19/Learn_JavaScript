
# Movie Theater Seating — Lab

An interactive demo that shows a movie-theater seating map where users can select available seats, see how many seats they've chosen, and view the total price. This lab demonstrates DOM manipulation, event handling, and simple state tracking in vanilla JavaScript.

## Files

- `index.html` — the page with the seating layout and summary UI.
- `style.css` — styles for the seating grid and controls.
- `script.js` — JavaScript behavior: seat selection, availability logic, and updating the display.

## How to run

1. Open the folder `14_lab_movie_theater_seating_availabiltity` in your code editor.
2. Open `index.html` in your browser:

	- Double-click `index.html`, or
	- Use VS Code Live Server (recommended), or
	- Run a simple local server from PowerShell

## Usage

- Click (or tap) on available seats to select or deselect them.
- Selected seats update the summary area (selected count and total price).
- Some seats may be marked as unavailable/occupied — those cannot be selected.

If you want to change pricing or the seat map, edit `script.js` (or the HTML where the seats are generated).

## Learning outcomes

- Manipulating the DOM to create interactive UIs.
- Handling user events (click/tap) and maintaining application state.
- Using CSS to visually represent state (available, selected, occupied).

## Troubleshooting

- Nothing happens when clicking seats: open DevTools (F12) and check the console for JS errors.
- Make sure `script.js` is correctly referenced in `index.html` and that the script tag is placed after the DOM elements it manipulates (usually at the end of the body).
