# Significa Challenge - "Cosmic Frame" Videos web app

I have built the app using Next.js, the 'themoviedb' API, and the Google firabase package.
Due to the tight time window I focused on developing the app for mobile devices. I suggest that you **_take a look at the app using a mobile device preview_** .

In this challange, I started to sketch on paper the app. Listing the components and features allowed me to map and schedule the developing plan. I used an approach starting from the most 'inner' component to the most 'outer'. Simplified example: (thumb -> thumb + actions -> thumb + actions + details -> list(thumb + actions + details) -> page(list(thumb + actions + details), list(thumb + actions + details, favourite: true))). 

After planning such tree, I noted each level with details (types of api requests, needed props, etc) ending up with a solid plan.

![alt text](https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbDRhRSJA84bk05EEE3sozye6wR8nSqpBGZqN4xHb65Hv53f9KPK5VywMced-lewhLj-giKwRbk-90__8Y0ib4zeg6x4lsdHg=w1920-h947-rw-v1)

My approach to build de frontend is based on styling by classes on the last relevant level. Complementing the bootstrap classes with a bootstrap-like scss from my personal boilerplate. Reducing drastically the time spent on css styling.

The main page has one filterable list after the header, and a non filterable list listing the movies marked as 'favourites'. When the search value is setted to blank the list renders the weekly trending movies. The weekly trending movies is also the initial query for the filterable list.

The list displays a thumbnail with the movie poster, the title and rating (based on the average of the reviews provided by the API: <5 = *, >5 = ** >7.5 = ***), and three buttons. The first button add the movie to the personal favourites, persisting the data in a firebase realtime db. The second would open a modal with video preview of the trailer, _this feature was not implemented due to lack of time_ , allthough part of the process is built, clicking in the button is stored in state the path for youtube video. Activating and rendering the trailer modal is what's missing. The third button redirects the user to the selected movie details page.

The search input searches for all the keywords (title, actors, director, etc).

The list has two display options 'carousel' and 'list'. The carousel is made with flex display and scroll-snap.

The main page has a static setion with a line from the lord of ther rings. That section was supposed to be dynamic, but such feature _was not developed due to time_.

The details page displays in adition to the thumbnail and its data, the movie tagline and an overview text. It also has a 'go back' button. The same effect can be obtained by clicking in the webapp title, in the header.

Due to  _lack of time the loading states were not developed_. Only 'fullfilled' and 'not found'.

# Instalation
 1) 'npm i' at the root
 2) 'npm run dev'
