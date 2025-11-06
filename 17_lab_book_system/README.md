# Book Management System

A simple web-based book management system that allows users to add, display, and edit book information. This project demonstrates the use of HTML, CSS, and JavaScript to create an interactive book cataloging interface.

## Features

- Add new books with detailed information:
  - Book Name
  - Author Name
  - Book Description
  - Number of Pages
- Display list of all added books
- Edit existing book entries
- Input validation to ensure all fields are filled correctly
- Responsive design that works on both desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

- `book_system.html` - Main HTML structure and form elements
- `book_system.css` - Styling and responsive design
- `book_system.js` - JavaScript functionality for managing books

## How to Use

1. Open `book_system.html` in a web browser
2. Fill in the book details in the form:
   - Enter the book name
   - Add the author's name
   - Provide a description of the book
   - Specify the number of pages
3. Click "Add Book" to add the book to the list
4. To edit a book:
   - Click the "Edit" button on any book entry
   - The book's details will be loaded into the form
   - Update the information as needed
   - Click "Add Book" to save the changes

## Features Implementation

### Adding Books
- Books are stored in an array of objects
- Each book object contains: name, authorName, bookDescription, and pagesNumber
- Input validation ensures all fields are filled and page number is numeric

### Editing Books
- Edit functionality loads book details back into the form
- Removes the selected book from the list
- Allows user to modify and re-add the book

### Display
- Books are displayed in a clean, organized format
- Each book entry shows all stored information
- Responsive design ensures proper display on all screen sizes

## CSS Styling

- Modern, clean interface design
- Responsive layout using media queries
- Form styling with focus states
- Smooth hover transitions
- Mobile-friendly padding and margins
- Shadow effects for depth and hierarchy
