# Typing Speed Analysis

A web-based application that measures typing speed and provides instant analysis of typing performance. This project helps users test and improve their typing speed through a simple and intuitive interface.

## Features

- Real-time typing speed measurement
- Predefined test text for consistent testing
- Words Per Minute (WPM) calculation
- Time elapsed tracking
- Word count analysis
- Responsive design for all devices
- Clean and user-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

- `typing_speed_analysis.html` - Main HTML structure
- `typing_speed_analysis.css` - Styling and responsive design
- `typing_speed_analysis.js` - Core functionality and calculations

## How to Use

1. Open `typing_speed_analysis.html` in a web browser
2. Click the "Start Test" button
3. A sample text will appear in the top textarea
4. Type the text in the bottom textarea
5. Click "End Test" when finished
6. View your results:
   - Words Typed
   - Time Elapsed (in seconds)
   - Words Per Minute (WPM)

## Technical Implementation

### Timing System
- Uses JavaScript's `Date.getTime()` for precise timing
- Calculates elapsed time in seconds
- Handles edge cases like zero duration tests

### Word Count Algorithm
- Splits text using regex pattern `/\s+/`
- Filters out empty strings for accurate word count
- Handles various whitespace scenarios correctly

### WPM Calculation
- Formula: `(words typed / time in seconds) * 60`
- Results are rounded to nearest whole number
- Includes validation to prevent NaN results

## UI Features

### Input Areas
- Read-only display area for test text
- Active input area for user typing
- Clear visual distinction between areas

### Responsive Design
- Adapts to different screen sizes
- Mobile-friendly button layout
- Readable typography at all viewport widths

### Visual Feedback
- Clear results display
- Easy-to-read formatting
- Professional color scheme

## CSS Styling Details

- Modern, clean interface
- Smooth transitions and hover effects
- Subtle shadows for depth
- Accessible color contrast
- Responsive padding and margins
- Focus states for better UX

## Error Handling

- Prevents invalid timing calculations
- Handles empty input gracefully
- Validates word count results
- Manages test state appropriately
