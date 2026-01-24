# Length Unit Converter

Simple, lightweight length unit converter built with HTML, CSS, and JavaScript.

## Features
- Convert between common length units (meters, kilometers, centimeters, millimeters, miles, yards, feet, inches, millimeter)
- Responsive, accessible UI
- Instant conversion as values or units change
- Clear and copy result actions

## Demo
Open `index.html` in your browser or serve the folder with a static server.

## Installation
1. Clone or download the repository.
2. Open `index.html` in a browser, or run

## File structure
- `index.html` — markup and UI
- `styles.css` — styling
- `script.js` — conversion logic
- `README.md` — this file

## Usage
1. Enter a numeric value.
2. Select the input unit and the target unit.
3. View the converted value instantly. Use clear or copy buttons if provided.

## How it works (implementation notes)
- Uses a base unit (meters) and conversion factors to convert between units:
    value_in_target = value_in_source * (factor_source / factor_target)
- Keep logic modular: parse input, validate numeric value, map unit keys to factors, calculate, and update DOM.

## Units included
- meters (m), kilometers (km), centimeters (cm), millimeters (mm)
- miles (mi), yards (yd), feet (ft), inches (in)
