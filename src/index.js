import View from "./scripts/view";

console.log("Webpack is working!")

// eventlistenber for click
let view1 = new View("1800","1899");
let num = view1.numHighlights();
// view1.getCountry();
// view1.getDepartments();
// view1.getYears();
// console.log(num, "num is");
// view1.getArtists();





// Need to work on:
// Search option, search by category
// search by (title, artist, year, material, tag)



// TEST CODE --------------------------------------
// test webpack working, manipulate html element
// document.querySelectorAll("ul.works > li").forEach( element => {
//     element.style.color = "red";
// });

// testing The Met API link up

// GET /public/collection/v1/objects : returns a listing of all valid Object IDs available to use
// 487401 objects
// public/collection/v1/objects/437133 : returns a specific object at the object id (ex. 437133, "Garden at Sainte-Adresse" by Claude Monet) 

// Search by criteria
// returns an array of object IDs that match criteria
// could use object ID to get at fields, and then iterate through each object, collect that info from each object
// fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=1800&dateEnd=1899&q=*`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(response);
//     }
//   })
//   .then(
//     data => {
//       console.log("Success!");
//       console.log(data);
//     },
//     errorResponse => {
//       console.log("Failure!");
//       console.log(errorResponse);
//     }
//   );
