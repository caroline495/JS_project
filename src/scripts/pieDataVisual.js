// PIE CHART CODE 
// set the dimensions and margins of the graph
const width = 250,
    height = 250,
    margin = 0;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'piechart_viz'
const svg = d3.select("#piechart_viz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`);

// Create dummy data
const data = [{title:"Highlight", value: 33},
              {title: "Not Highlight", value: 67},
              ]

// set the color scale
const color = d3.scaleOrdinal()
  .range(["#BF2720", "#BFBFBF"])

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(function(d) {return d.value })(data);
  // d is an array of the data values [[a, .33],[b, .67]]

//  const data_set = pie(Object.entries(data))

// div that appends to the body, but isn't visible
var divTip = d3.select("#pie-chart-group").append("div")
     .attr("class", "tooltip")
     .style("opacity", 0)


// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
var path = svg
  .selectAll('path')
  .data(pie)
  .enter()
  .append('path')
  //.join('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.title)) })
  .attr("stroke", "white")
  .style("stroke-width", "1px")
  //.attr('transform', 'translate(0, 0)')
  .on("mouseover", (evt, d) => {
    // console.log(evt.target, "evt.target");
    //const [mx, my] = d3.pointer(evt); 
    d3.select(evt.target).transition()
     .duration('50')
     .attr('opacity', '.85');

     //Makes the new div appear on hover:
     divTip.transition()
           .duration(50)
           .style("opacity", 1);
           console.log(d, "d is");
          let num = `${d.data.title}: ${(d.value).toString()}%`;
       divTip.html(num)
       .style("left", (evt.pageX-25) + "px")
       .style("top", (evt.pageY-10) + "px"); 

 })
.on('mouseout', function (evt, d) {
  d3.select(evt.target).transition()
      .duration('50')
      .attr('opacity', '1');

      //Makes the new divTip disappear:
      divTip.transition()
           .duration('50')
           .style("opacity", 0);
 });
  


  // OLD
//      d3.select(this).transition()
//      .duration('50')
//      .attr('opacity', '.85');

//      //Makes the new div appear on hover:
//      divTip.transition()
//            .duration(50)
//            .style("opacity", 1);
//            console.log(d, "d is");
//           let num = (100).toString() + '%';
//       divTip.html(num)
//            .style("left", (d3.event.pageX + 10) + "px")
//            .style("top", (d3.event.pageY - 15) + "px");
//  })
// .on('mouseout', function (d, i) {
//   d3.select(this).transition()
//       .duration('50')
//       .attr('opacity', '1');

//       //Makes the new divTip disappear:
//       divTip.transition()
//            .duration('50')
//            .style("opacity", 0);
//  });