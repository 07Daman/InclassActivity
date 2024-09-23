// Step 1: Let's create an array called 'library' with 3 movies in it
const library = [
    {
      
      title: "John Wick", 
      director: "Chad Stahelski",
      status: {
        own: true,      // We own this movie
        watching: false, // We're not currently watching it
        watched: false   // We haven't watched it yet
      }
    },
    {
      
      title: "Zodiac", 
      director: "David Fincher",
      status: {
        own: true, 
        watching: false, 
        watched: false
      }
    },
    {
      
      title: "The Godfather", 
      director: "Francis Ford Coppola",
      status: {
        own: true, 
        watching: false, 
        watched: false
      }
    }
  ];
  
// Step 2: Now let's mark all the movies as watched using dot notation
library[0].status.watched = true; // "John Wick" is watched
library[1].status.watched = true; // "Zodiac" is watched
library[2].status.watched = true; // "The Godfather" is watched
  
// Step 3: Let's pull out the title of the first movie and store it in a new variable called 'firstMovie'
const { title: firstMovie } = library[0];
console.log(firstMovie); 
  
// Step 4: Finally, let's turn the entire 'library' array into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON); 
