# Frontend Mentor - GitHub User Search Solution

## Table of contents

- [Frontend Mentor - GitHub User Search Solution](#frontend-mentor---github-user-search-solution)
	- [Table of contents](#table-of-contents)
	- [Overview](#overview)
		- [The challenge](#the-challenge)
		- [Screenshot](#screenshot)
	- [My process](#my-process)
		- [Built with](#built-with)
		- [What I Learned](#what-i-learned)

## Overview

### The challenge

1. **Home Page:**

   - Display a list of Pokémon on the home page.
   - Retrieve and render the Pokémon data from a PostgreSQL database.

2. **Detail Page:**

   - Implement a detailed view for each Pokémon, accessible through a dynamic route (e.g., /detail/:id).
   - Display comprehensive information about a specific Pokémon, including its stats and types.

3. **Search Functionality:**

   - Implement a search functionality allowing users to search for Pokémon by name.
   - Display search results on the home page.

### Screenshot

- Home Page

![Home Page Screenshot](<public/img/Screenshot 2023-12-20 at 19-33-24 PokedEXPRESS.png>)

- Detail Page

![Detail Page Screenshot](<public/img/Screenshot 2023-12-20 at 19-37-08 PokedEXPRESS.png>)

- Search Result Page

![Search Result Page Screenshot](<public/img/Screenshot 2023-12-20 at 19-37-43 PokedEXPRESS.png>)

- 404 Page

![404 Page Screenshot](<public/img/Screenshot 2023-12-20 at 19-42-20 PokedEXPRESS.png>)

- Tablet Home Page

![Tablet Home Page](<public/img/Capture d’écran_2023-12-20_20-00-22.png>)

- Phone Home Page

![Phone Home Page](<public/img/Capture d’écran_2023-12-20_19-58-16.png>)

## My process

### Built with

**Frontend**

- HTML5
- Sass

**Backend**

- Node.js
- Express

**Database**

- PostgreSQL

### What I Learned

Throughout the development of this Pokémon Express App, I gained valuable experience and knowledge in several key areas:

1. **Node.js and Express:**

   Developed a solid understanding of server-side JavaScript using Node.js.
   Implemented routes, middleware, and controllers with the Express.js
   framework for building robust web applications.

2. **PostgreSQL Database:**

   Designed and configured a PostgreSQL database to store Pokémon data.
   Learned to perform database queries using the node-postgres library, interacting with the database to retrieve and manipulate information.

3. **MVC Architecture:**

   Implemented the Model-View-Controller (MVC) architectural pattern to organize code and separate concerns.
   Created controllers for handling different aspects of the application, promoting modularity and maintainability.

4. **Middleware Usage:**

   Utilized middleware functions in Express for tasks such as error handling and parsing incoming requests.
   Explored the role of middleware in enhancing the functionality and security of the application.

5. **EJS View Engine:**

   Configured the EJS view engine to dynamically render HTML templates on the server.
   Learned how to pass data from the server to views, enabling the creation of dynamic and data-driven web pages.

6. **Routing and Navigation:**

   Defined and organized routes using Express Router to handle different URL paths in the application.
   Implemented dynamic routes to display detailed information about specific Pokémon.

7. **Environment Variables:**

   Implemented the use of environment variables to configure aspects of the application, such as the port and base URL.
   Explored best practices for managing configuration in a Node.js environment.
