import View from "./scripts/view";

console.log("Webpack is working!")

// eventlistener for click
const buttons = document.querySelector('.time-periods');
console.log(buttons);
let timeStart;
let timeEnd;

buttons.addEventListener('click', event => {
  console.log(event.target); 
  if (event.target.nodeName === "LI") {
    console.log(event.target.innerText);
    // console.log(event.target.getAttribute("data-time-start"));
    // console.log(event.target.getAttribute("data-time-end"));
    timeStart = event.target.getAttribute("data-time-start");
    timeEnd = event.target.getAttribute("data-time-end");

    let view1 = new View(timeStart, timeEnd);
    let num = view1.numHighlights();
  } 
});

let view2 = new View("1800", "1900");
let num = view2.getArtists();
// view1.getCountry();
// view1.getDepartments();
// view1.getYears();
// console.log(num, "num is");
// view1.getArtists();




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


// Need to work on:
// Search option, search by category
// search by (title, artist, year, material, tag)

// set the dimensions and margins of the graph
const width = 300,
    height = 300,
    margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`);

// Create dummy data
const data = {a: 9, b: 20}

// set the color scale
const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6"])

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(function(d) {return d[1]})
const data_ready = pie(Object.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('All')
  .data(data_ready)
  .join('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data[1])) })
  .attr("stroke", "black")
  .style("stroke-width", "1.5px")
  .style("opacity", 0.7)
