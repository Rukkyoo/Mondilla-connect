**Mondilla Connect Landing Page**
=====================================

**Project Overview**
-------------------

Mondilla Connect is a landing page built using React, Vite, and Tailwind CSS. The project aims to provide a minimal setup for a React application with Hot Module Replacement (HMR) and ESLint rules.

**Project Setup Instructions**
-----------------------------

1. Clone the repository using `git clone https://github.com/Rukkyoo/Mondilla-connect`
2. Install dependencies using `npm install` or `yarn install`
3. Start the development server using `npm run dev` or `yarn dev`
4. Open `http://localhost:3000` in your browser to view the application

**List of Features Implemented**
-------------------------------

1. **React Components**: The project uses React components to build the UI. Components include `Header`, `Hero`, `Features`, `Pricing`, `ContactForm`, and `Footer`.
2. **Tailwind CSS**: The project uses Tailwind CSS for styling. Custom utility classes are defined in `src/css/index.css`.
3. **Vite**: The project uses Vite as the build tool. Vite provides fast and efficient development server and build processes.
4. **ESLint**: The project uses ESLint for code linting and formatting. ESLint rules are defined in `eslint.config.js`.
5. **Dark Mode**: The project includes a dark mode feature. Users can toggle dark mode using the hamburger menu.
6. **Contact Form**: The project includes a contact form component that validates user input and displays error messages.
7. **Pricing Table**: The project includes a pricing table component that displays different pricing plans.

**Extra Notes**
----------------

* The project uses `localStorage` to store user preferences, such as dark mode.
* The project uses `react-icons` for icons.
* The project uses `motion` for animations.
* The project uses `globals` for global variables.
* The project uses `eslint-plugin-react-hooks` for React Hooks linting.

**File Structure**
-----------------

* `src`: Source code directory
	+ `components`: React components directory
		- `Header.jsx`
		- `Hero.jsx`
		- `Features.jsx`
		- `Pricing.jsx`
		- `ContactForm.jsx`
		- `Footer.jsx`
	+ `css`: CSS directory
		- `index.css`
	+ `js`: JavaScript directory
		- `darkModeToggle.jsx`
	+ `App.jsx`: Main application component
	+ `main.jsx`: Entry point for the application
* `public`: Public directory
	+ `index.html`: HTML template for the application
* `vite.config.js`: Vite configuration file
* `eslint.config.js`: ESLint configuration file
* `package.json`: Project metadata file

**License**
----------

This project is licensed under the MIT License. See `LICENSE` for details.