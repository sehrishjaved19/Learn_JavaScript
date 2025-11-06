# Restaurant Menu — Lab

A simple demo project showing how to render a restaurant menu using **HTML, CSS, and JavaScript**.
It focuses on iterating through arrays of menu items, displaying them as responsive cards, and updating totals dynamically in the DOM.

---

## Project Files

| File                       | Description                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| **`restaurant_menu.html`** | The main page containing section containers for each menu category.                               |
| **`restaurant_menu.css`**  | Styles for layout, responsive grid, and card design. Includes an inline fallback for quick demos. |
| **`restaurant_menu.js`**   | JavaScript logic that reads menu data, iterates over items, and appends cards to the DOM.         |
| **`README.md`**            | This documentation file.                                                                          |

---

## How to Run

1. Open the folder **`13_lab_restaurant_menu`** in your code editor.
2. Launch `restaurant_menu.html` in a browser:

   * Either double-click the file, **or**
   * Use **VS Code’s Live Server** extension (recommended).

If your script uses `fetch()` for data loading, run a lightweight local server instead:

```bash
# from inside the folder containing restaurant_menu.html
python -m http.server 8000
# open in your browser:
http://localhost:8000/restaurant_menu.html
```

---

## HTML Structure Expected by JS

The page includes three containers where items will be rendered:

* `#breakfastMenuItems` — breakfast items
* `#maincourseMenuItems` — main course items
* `#dessertMenuItems` — desserts

Each section also shows a total count in:

* `#breakfastTotalItems`
* `#maincourseTotalItems`
* `#dessertTotalItems`

---

## Learning Outcomes

* Practice iterating over arrays and dynamically creating DOM elements.
* Understand separation of **structure (HTML)**, **presentation (CSS)**, and **behavior (JS)**.
* Learn to design responsive layouts with **CSS Grid** and reusable card components.

## Troubleshooting

* If no items appear, open DevTools (F12) and check for JavaScript console errors.
* Ensure the `<script>` tag for `restaurant_menu.js` is placed **at the bottom** of the HTML body.

