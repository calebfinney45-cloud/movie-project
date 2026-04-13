# 🎬 Movie Library Dashboard

A responsive, dynamic web application that fetches movie data and allows for real-time filtering and status tracking. 

## 🧪 Technical Objectives Tested
This project was designed to demonstrate core **Full-Stack Development** fundamentals, specifically focusing on the following:

### 1. Asynchronous Data Handling
* **Fetch API & JSON:** Successfully retrieving data from an external GitHub repository and parsing it into usable JavaScript objects.
* **Async/Await Logic:** Handling the "wait time" of network requests and implementing `try/catch` blocks for robust error handling.

### 2. DOM Manipulation
* **Dynamic Rendering:** Using JavaScript to construct and inject HTML elements (`movie-cards`) into the Document Object Model based on data arrays.
* **Scoped Selection:** Implementing `card.querySelector` to manage event listeners on a per-element basis, ensuring logic is isolated to individual cards rather than targeting the entire document.

### 3. Functional Programming
* **Array Methods:** Utilizing `.filter()` for real-time search functionality and `.slice()` to manage data volume and performance.
* **State Management:** Using event listeners to toggle visual states (line-through styles) based on user interaction (checkbox toggles).

### 4. Modern CSS & UI/UX
* **Responsive Layouts:** Implementing **CSS Grid** with `auto-fill` and `minmax` to create a fluid gallery that works across all device sizes.
* **Glassmorphism:** Utilizing `backdrop-filter: blur`, linear gradients, and RGBA transparency to create a high-fidelity, modern "frosted glass" interface.
* **Typography:** Integrating multiple Google Fonts (**Barlow**, **Inter**, **Kaushan Script**) to establish a clear visual hierarchy and brand identity.

## 🛠️ Features
* **Live Search:** Filters through the movie collection instantly as the user types.
* **Watchlist Tracking:** Interactive checkboxes that "cross out" titles to track progress.
* **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## 🚀 How to Run (WSL/Local)
1. Clone this repository to your local machine.
2. Open the project folder in **VS Code**.
3. If using **WSL**, ensure the "WSL" extension is active.
4. Open `index.html` using the **Live Server** extension or by dragging the file into your browser.

---
*Created as part of a Web Development Module - April 2026*