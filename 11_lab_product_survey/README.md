# Product Survey — Lab

A small interactive product survey lab implemented with HTML, CSS and JavaScript. This exercise demonstrates DOM manipulation, event handling, basic form validation, and client-side UI updates.

## Files

- `product_survey.html` — The demo page and user interface for the survey.
- `product_survey.css` — Styles used by the survey page.
- `product_survey.js` — JavaScript logic: event listeners, form handling, validation, and DOM updates.

## How to open / run

1. Open the folder `11_lab_product_survey` in your editor or file explorer.
2. Open `product_survey.html` in a browser:
   - Double-click the file or
   - In VS Code, install and use the Live Server extension and click "Go Live" while the file is open.

Optional: serve the folder from a simple local HTTP server (useful if you test features that require an HTTP origin):

```powershell
# from the folder containing product_survey.html
python -m http.server 8000
# then open http://localhost:8000/product_survey.html
```

## Usage

- Fill out the survey fields and submit using the page button.
- The page uses JavaScript to validate and process the input and then displays the results or feedback to the user.
- Check the browser DevTools console for debug messages or errors while testing.

## Learning outcomes

- Practice adding and removing DOM elements and changing element content and classes.
- Learn how to attach event listeners to form elements and buttons.
- Implement basic client-side form validation and user feedback.
- See separation of concerns: HTML for structure, CSS for presentation, JS for behavior.

## Notes for customization

- Tweak `product_survey.css` to change colors, spacing, and responsive behavior.
- Modify `product_survey.js` to add new fields, persist results (e.g., `localStorage`), or submit to a backend.

## Troubleshooting

- If the page doesn't behave as expected, open the browser console (F12) and look for JS errors.
- Make sure the `.js` and `.css` files are referenced correctly from `product_survey.html`.

## License & credits

This lab is part of the Learn_JavaScript exercises. You can reuse and adapt it for learning purposes.


