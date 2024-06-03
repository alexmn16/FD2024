# Loading-Spinner-WebComponent

## Introduction

Welcome to the LoadingSpinner Web Component! This component is a reusable custom element designed to allow users to
easily use and customize a loading spinner.

## Key Features

- **Modern UI:** Enjoy a clean and modern user interface.
- **Customizable:** Allows users to easily customize size, color and speed of the spinner.
- **Simple Integration:** Easily integrate into any web application as a custom HTML element.

## Component Structure

The LoadingSpinner component is structured as follows:

- **HTML Template:** Defines the layout of the loading spinner.
- **CSS Styling:** Provides visual enhancements for the loading spinner interface.
- **JavaScript Logic:** Implements the core functionality of the loading spinner.

## Implementation Details

### HTML Structure

The LoadingSpinner component uses HTML to define its structure.

### CSS Styling

Custom CSS styling enhances the visual appearance of the loading spinner, ensuring a pleasant user experience.

### JavaScript Functionality

JavaScript handles the interactive aspects of the loading spinner, such as applying attributes.

## Usage

To use the LoadingSpinner component, insert the <loading-spinner> tag in your HTML file where you want the loading
spinner to appear. You can use it in different ways:

- **Default spinner:** The component will be initialized with default values (size: 50px, color: #007BFF, speed: 1s).
    ```html
    <loading-spinner></loading-spinner>
    ```

- **Spinner with custom size, color, and speed:** You can set size, color and speed values.
    ```html
    <loading-spinner size="100px" color="#FF5733" speed="2s"></loading-spinner>
    ```

### Example usage:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Spinner Example</title>
</head>
<body>

<!-- Default spinner -->
<loading-spinner></loading-spinner>

<!-- Spinner with custom size, color, and speed -->
<loading-spinner size="100px" color="#FF5733" speed="2s"></loading-spinner>

<!-- Spinner with custom size, color, and faster speed -->
<loading-spinner size="70px" color="#28A745" speed="0.5s"></loading-spinner>

<script src="path/to/loading-spinner.js"></script>
</body>
</html>

```