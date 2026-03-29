# Lotto Number Generator

This document outlines the design and development plan for the Lotto Number Generator web application.

## Overview

The Lotto Number Generator is a simple, user-friendly web application that allows users to generate random lottery numbers. The application will be built using modern web technologies, including HTML, CSS, and JavaScript, with a focus on a clean, responsive design and a great user experience.

## Style, Design, and Features (v1)

*   **UI/UX:**
    *   A clean, centered layout.
    *   A prominent "Generate Numbers" button.
    *   A visually distinct area to display the generated lottery numbers.
    *   Responsive design for mobile and desktop.
*   **Styling:**
    *   **Color Palette:** A vibrant and energetic color scheme. Using `oklch` for modern color representation.
    *   **Typography:** Clear, legible fonts. Larger font size for the numbers.
    *   **Effects:**
        *   Subtle background texture (`noise`).
        *   Soft, multi-layered drop shadows on the main container and button for a "lifted" look.
        *   A "glow" effect on the interactive button.
*   **Functionality:**
    *   Clicking the "Generate Numbers" button will produce 6 unique random numbers between 1 and 45.
    *   The numbers will be displayed in ascending order.

## Current Plan: Initial Setup

1.  **Create `index.html`:** Set up the basic HTML structure with a container, a button, and a placeholder for the numbers.
2.  **Create `style.css`:** Implement the design, including layout, colors, typography, and effects.
3.  **Create `main.js`:** Add the JavaScript logic to generate and display the lottery numbers when the button is clicked.
