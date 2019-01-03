#React Fundamentals

You've learned the basics of React today.

Also, I'd like you to explore the React documentation.  Outside of your lecture notes and code, this should be your reference material as well as Airbnb's style guide. Here's a link to the docs.  Bookmark It.

[React Docs](https://facebook.github.io/react/docs/thinking-in-react.html)

##The Shadow DOM

Although you can create React apps via pure JS, we will be using JSX, which looks like markup but is just an abstraction, which is then compiled into JS through Babel.  The beauty of React is its ability to compare nodes in the Shadow DOM to those of the Browser's DOM and render based on State changes.   

[Babel] (https://babeljs.io/) is the JavaScript compiler used to convert JSX into JavaScript.  Feel free to check out the docs and REPL at [Babel Repl](https://babeljs.io/repl/).

##A Simple Movie App
Tonight you're going to build a React app with a few compoenents.  

-  ``<App />`` (Highest level Component)
-  ``<Movie imdbid='tt0096895' />``(Include props with the imdbid in the example)

You need to pass in an imdbid as props to the Movie component.  When a button is clicked in the browser, the movie title should be rendered in the browser.  Use the OMDB API for the JSON data.  Here is the link to the docs and a URL for the GET 
request.

###[OMDB API](http://www.omdbapi.com/)

```http://www.omdbapi.com/?i={include imdb id here...somehow}&plot=short&r=json```

#Bonus
Create another component called MovieList.  This should be an unordered list containing details about the movie.


