# Text Editor PWA - Progressive Web App

This application allows developers to create and store notes or code snippets, with or without an internet connection, for reliable retrieval later.

# Application

View this application at `https://jade-text-editor.herokuapp.com/`

# Features

- Pre-caching of Static Assets: Registered service worker pre-caches static assets upon loading, including subsequent pages and static assets.
- Service Worker Registration: Loading the web application registers a service worker using workbox.
- IndexedDB Database Storage: Opening the text editor immediately creates a database storage using IndexedDB.
- Content Saving: Content entered in the text editor is automatically saved with IndexedDB when clicking off the DOM window.
- Content Retrieval: Upon reopening the text editor after closing it, the content is retrieved from IndexedDB.
- Install Button: Clicking on the Install button allows the user to download the web application as an icon on their desktop.

# Installation

- Clone `https://github.com/tneiman19/PWA-Text-Editor.git`
- Navigate to the project directory.
- Install the dependencies using `npm install`.

# Usage

- Run the application using `npm start`.
- Access the application at `http://localhost:3000`

# License

This project uses the MIT license: [![Licensettt: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
