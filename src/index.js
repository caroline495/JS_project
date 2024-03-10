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

// function to save data from fetch
function collectData(data) {
    return data
}

// Fetch for time period and isHighlight
const dateBegin= "-240000";
const dateEnd = "0";
let dataset;

  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${dateBegin}&dateEnd=${dateEnd}&q=*`)
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
    //   console.log(data["objectIDs"]);
      dataset = [...data["objectIDs"]];
      console.log(dataset, "hi");
    },
    errorResponse => {
      console.log("Failure!");
      console.log(errorResponse);
    }
  );

  console.log("this is dataset");
  console.log(dataset, "hello");

  // Search option, search by category
  // search by (title, artist, year, material, tag)

  // View for each time period:
  // Show % highlights among total number of works 
  //  - pie chart for this with % highlights vs. non highlights (show specific numbers in hover description)

  // Show top artists (artists with the most works)
  //  - collect all object ids that fall within a certain time period, then iterate through those 
  // Show % of regions represented 
  // Show makeup of Years of Accession
  // Show top tags 
  // - could use the search query to search tags