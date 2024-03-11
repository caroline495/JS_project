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

// dataset = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${dateBegin}&dateEnd=${dateEnd}&q=*`)
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
//     //   console.log(data["objectIDs"]);
//       set = [...data["objectIDs"]];
//       console.log("this is dataset");
//       console.log(set, "hello");
//       return collectData(set);
//     },
//     errorResponse => {
//       console.log("Failure!");
//       console.log(errorResponse);
//     }
//   );

// Fetch for time period and isHighlight
const dateBegin= "1800";
const dateEnd = "1899";
let dataset;
let artists = {};
function addToArtists(object, artist) {
    if (!object[artist]) {
        object[artist] = 1;
    } else {
        object[artist] += 1;
    }
    return object
}

let sum = 0;
dataset = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${dateBegin}&dateEnd=${dateEnd}&q=*`)
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
      set = [...data["objectIDs"]];
      console.log("this is dataset");
      return collectData(set);
    },
    errorResponse => {
      console.log("Failure!");
      console.log(errorResponse);
    })
    .then(data => {
        data.forEach((element, idx) => {
            //if (idx < 10) {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
            .then(response => {
                console.log("here");
                return response.json()
            })
            .then(response => {
                // console.log("here2");
                // console.log(response, idx);
                // console.log(response.artistDisplayName);
                addToArtists(artists, response.artistDisplayName);
                 
                if (idx === data.length - 1) {
                    console.log(artists, "artists");
                    Object.values(artists).forEach(ele => {
                        sum += ele;
                    })
                    console.log(sum, "sum");
                    let arr = Object.entries(artists).slice();
                    arr.sort((a, b) => b[1] - a[1]);
                    console.log(arr.slice(0,14));
                }
            });
            //}
        })
        return artists;
    })
    .then(response => {
        // Object.values(artists).forEach(ele => {
        //     sum += ele;
        // })
        // console.log(sum, "sum");
    });

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