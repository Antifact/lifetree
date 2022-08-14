# Lifetree Blog

[GitHub](https://github.com/Antifact/lifetree)

[Netlify](https://lifetree-staging.netlify.app/)

The deployed site does not work.

To use this app, as it does not want to deploy, please use two separate terminals. One to start the backend, in the `lifetree/backend` folder and run `nodemon app.js`. The other for frontend, in `src` to run `npm start`.

## An updating blog for publishing company "Lifetree"

### Overview

The website is a blog for a publishing company called Lifetree, the blog in question has basic administrator and user roles, and is used by the company to post about new releases. Administrative roles within the website can delete and moderate the blog posts in question, as well as rescind or approve users ability to post said blog posts. The average user of said blog would be employees of the company tasked with updating the blog with new information on releases, or customers who wish to comment on said blog posts in a comments section.
The ability to post blog updates will be gated behind administrative accounts, a general user will be able to comment on said blogposts.

### Tech Stack

The Tech stack used will be MERN, with other plugins used in conjunction to said stack. The full stack will be Mongo DB, Express JS, React. The plugins used are-
Mongoose JS- Mongoose is an objected date modeling library for MongoDB and Node.JS, it creates a relational database for data, it stores information in the json format.

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

* **Mongo DB** is an open-source NoSQL cross-platform document-oriented database.
* **Express JS** is a web-based application framework work with Node JS, It helps to build web apps and RESTful APIs.
* **React** is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components
* **Node JS** is a free JavaScript run-time environment. It executes JavaScript code outside of a browser. It is available for macOS, Windows, Linux, and Unix.

### Trello

I did not get to use this as much as I'd like to, as my partner disppeared and I never heard back from him, so I was left to do it on my own. It's fine, and possible to complete alone
but it would have been nice to have someone to work with and I probably would have enjoyed this a bit more.

![Trello](docs/trello.png "Trello.")

![Discord](docs/discord1.png "discord")

![Discord2](docs/discord2.png "discord 2")

### Screenshots

The Home Page

![Home](docs/home.png "Home Page")

The navbar displays links depending on the user. If the user is admin, display the admin link

![Admin Navbar](docs/admin_navbar.png "Admin Navbar")

If the user is not logged in, show login and register links

![Navbar](docs/no_user_navbar.png "No User Logged in Navbar")

If the user is logged in but not admin, just display the new post and logout links

![No Admin Navbar](docs/no_admin_navbar.png "Navbar for user that isn't admin")

Login Page

![Login](docs/login.png "Login Page")

Register Page Error Handling

![Register Page](docs/register_error_handling.png "Register Page Error Handling")
