import View from "./scripts/view";
import "./scripts/horizBarChartVisual";
import "./scripts/pieDataVisual";
console.log("Webpack is working!")

// Code for dialog
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// eventlistener for click on Time Period buttons
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


// let view2 = new View("1800", "1900");
// let num = view2.getArtists();

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


// PIE CHART CODE 
// set the dimensions and margins of the graph
// const width = 300,
//     height = 300,
//     margin = 40;

// // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// const radius = Math.min(width, height) / 2 - margin;

// // append the svg object to the div called 'my_dataviz'
// const svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", `translate(${width/2}, ${height/2})`);

// // Create dummy data
// const data = {a: .33, b:.67}

// // set the color scale
// const color = d3.scaleOrdinal()
//   .range(["#BF2720", "#BFBFBF"])

// // Compute the position of each group on the pie:
// const pie = d3.pie()
//   .value(function(d) {return d[1]})
//   // d is an array of the data values [[a, .33],[b, .67]]
// const data_set = pie(Object.entries(data))

// // div that appends to the body, but isn't visible
// var div = d3.select("body").append("div")
//      .attr("class", "tooltip-donut")
//      .style("opacity", 0);

// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg
//   .selectAll('All')
//   .data(data_set)
//   .join('path')
//   .attr('d', d3.arc()
//     .innerRadius(0)
//     .outerRadius(radius)
//   )
//   .attr('fill', function(d){ return(color(d.data[1])) })
//   .attr("stroke", "white")
//   .style("stroke-width", "1px")
//   .style("opacity", 0.7)
//   .on('mouseover', function (d, i) {
//     d3.select(this).transition()
//          .duration('50')
//          .attr('opacity', '.85');

//          //Makes the new div appear on hover:
//          div.transition()
//                .duration(50)
//                .style("opacity", 1);
//               let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
//           div.html(num)
//                .style("left", (d3.event.pageX + 10) + "px")
//                .style("top", (d3.event.pageY - 15) + "px");
//      })
//   .on('mouseout', function (d, i) {
//       d3.select(this).transition()
//           .duration('50')
//           .attr('opacity', '1');

//           //Makes the new div disappear:
//           div.transition()
//                .duration('50')
//                .style("opacity", 0);
//      });


// // Set up the dimensions of the chart
// const margin = { top: 70, right: 40, bottom: 60, left: 175 }
// const width = 660 - margin.left - margin.right
// const height = 400 - margin.top - margin.bottom

// // Create the SVG container for the chart
// const svg = d3.select("#example-chart").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // Load and process the data
// // d3.csv("bog_bodies.csv").then(data => {
// //   data.forEach(d => {
// //     d.total = +d.total;
// //   });

//   const data = [{"":"1", type: "a", total:"10"},
//                 {"":"2", type: "b", total:"15"},
//                 {"":"3", type: "c", total:"20"},
//                 {"":"4", type: "d", total:"6"},
//                 {"":"5", type: "e", total:"13"},
//                 {"":"6", type: "f", total:"70"},
//                 {"":"7", type: "g", total:"5"}
//   ]

//   // Sort the data by total
//   data.sort(function (a, b) {
//     return d3.ascending(a.total, b.total);
//   });

//   // Set the x and y scales
//   const x = d3.scaleLinear()
//     .range([0, width])
//     .domain([0, d3.max(data, function (d) { return d.total; })]);

//   const y = d3.scaleBand()
//     .range([height, 0])
//     .padding(0.1)
//     .domain(data.map(function (d) { return d.type; }));

//   // Create the x and y axes
//   const xAxis = d3.axisBottom(x)
//     .ticks(5)
//     .tickSize(0); // remove ticks

//   const yAxis = d3.axisLeft(y)
//     .tickSize(0)
//     .tickPadding(10);

//   // Add vertical gridlines
//   svg.selectAll("line.vertical-grid")
//     .data(x.ticks(5))
//     .enter()
//     .append("line")
//     .attr("class", "vertical-grid")
//     .attr("x1", function (d) { return x(d); })
//     .attr("y1", 0)
//     .attr("x2", function (d) { return x(d); })
//     .attr("y2", height)
//     .style("stroke", "gray")
//     .style("stroke-width", 0.5)
//     .style("stroke-dasharray", "3 3");

//   // Create the bars for the chart
//   svg.selectAll(".bar")
//     .data(data)
//     .enter().append("rect")
//     .attr("class", "bar")
//     .attr("y", function (d) { return y(d.type); })
//     .attr("height", y.bandwidth())
//     .attr("x", 0)
//     .attr("width", function (d) { return x(d.total); })
//     .attr('fill', '#BF2720')

//   // Add the x and y axes to the chart
//   svg.append("g")
//     .attr("class", "x axis")
//     .style("font-size", "10px")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis)
//     .call(g => g.select(".domain").remove());

//   svg.append("g")
//     .attr("class", "y axis")
//     .style("font-size", "8px")
//     .call(yAxis)
//     .selectAll('path')
//     .style('stroke-width', '1.75px');

//   svg.selectAll(".y.axis .tick text")
//     .text(function (d) {
//       return d.toUpperCase();
//     });

//   //});