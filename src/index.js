console.log("Webpack is working!")

// test webpack working, manipulate html element
// document.querySelectorAll("ul.works > li").forEach( element => {
//     element.style.color = "red";
// });

// testing The Met API link up
// const id = "bcb83c4b54aee8418983c2aff3073b3b";
// const city = "London,UK";

// GET /public/collection/v1/objects : returns a listing of all valid Object IDs available to use
// 487401 objects
// public/collection/v1/objects/437133 : returns a specific object at the object id (ex. 437133, "Garden at Sainte-Adresse" by Claude Monet) 

// 
fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response);
    }
  })
  .then(
    data => {
      console.log("Success!");
      console.log(data);
    },
    errorResponse => {
      console.log("Failure!");
      console.log(errorResponse);
    }
  );
