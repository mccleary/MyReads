# MyReads Project

MyReads is a react application that lets a user keep track of the books they have read, are currently reading, or want to read. Each book is categorized into theses three shelves depending on their status. Users can change the shelf status of any book at any time. Users can also Search for additional books to add to their library and may put them on any shelf they would like.


## Installation and Deployment

Before getting started , you must have Node Package Manager or Yarn installed. Download all files to your local machine.
* git clone `https://github.com/mccleary/MyReads.git`
* cd `reactnd-project-myreads`
* after this is completed, follow additional instructions below

To get your application running:
* install all project dependencies with `npm install`
* start the development server with `npm start`
* your browser should open and display the app at `http://localhost:3000`


## Backend Server

A backend server is provided to simplify the process. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:


## Important - Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.
