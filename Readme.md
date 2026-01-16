# ProyectoJS
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/XhantheProg/PROYECTOJS)

This project is a practical implementation of a Single Page Application (SPA) built using vanilla JavaScript, HTML, and CSS. It demonstrates a modular approach to web development, featuring a client-side router that dynamically loads different page views without a full page reload.

## Features

*   **Single Page Application (SPA):** Uses a single `index.html` as the app shell, with content dynamically replaced.
*   **Client-Side Routing:** A custom router in `js/router.js` handles navigation between the "Dashboard" and "Products" views.
*   **Modular Views:** Each page is managed in its own JavaScript module (`js/pages/`), making the code organized and scalable.
*   **Dynamic Content Rendering:** Views are rendered into the DOM using dedicated JavaScript functions.
*   **Responsive Layout:** The application features a fixed sidebar for navigation and a main content area.

## How It Works

The application is built around a few core concepts:

1.  **The Shell (`index.html`)**: This is the only HTML page the user's browser ever loads. It contains the basic layout, including a persistent sidebar and a main content area (`<div id="app">`).

2.  **The Entry Point (`js/main.js`)**: This script is loaded as an ES module. It creates an instance of the `Router` and attaches event listeners to the navigation buttons. When a button is clicked, it calls the router's `navigate` method.

3.  **The Router (`js/router.js`)**: The `Router` class maps route names (e.g., "dashboard", "products") to specific JavaScript functions located in the `js/pages/` directory. When `navigate(pageName)` is called, it finds the corresponding function, clears the content of the `<div id="app">` container, and executes the function to render the new view's HTML inside it.

4.  **The Views (`js/pages/*.js`)**: Each file in this directory exports a function (e.g., `renderDashboardPage`) that takes the root element (`#app`) as an argument. The function then sets the `innerHTML` of that element to the HTML content for that specific page.

## Project Structure

```
/
├── index.html          # Main HTML file (the SPA shell)
├── css/
│   ├── style.css       # Main styles for layout and sidebar
│   └── ...
└── js/
    ├── main.js         # Entry point for JavaScript, initializes the router
    ├── router.js       # The client-side router logic
    ├── data/
    │   └── products.js # Mock product data
    └── pages/
        ├── dashboard.js  # Renders the dashboard page
        ├── products.js   # Renders the products page
        └── about.js      # Renders the "About" page
```

## Getting Started

This project does not have any external dependencies or build steps.

1.  Clone the repository:
    ```sh
    git clone https://github.com/xhantheprog/PROYECTOJS.git
    ```

2.  Navigate to the project directory:
    ```sh
    cd PROYECTOJS
    ```

3.  Because the project uses ES Modules (`import`/`export`), you need to serve the files from a local web server to avoid CORS issues. A simple way to do this is with the "Live Server" extension in Visual Studio Code.
    *   Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
    *   Right-click on `index.html` in the VS Code explorer and select "Open with Live Server".

This will open the application in your browser, and you can navigate between the Dashboard and Products pages.