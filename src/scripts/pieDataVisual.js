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
const data = {a: .33, b:.67}

// set the color scale
const color = d3.scaleOrdinal()
  .range(["#BF2720", "#BFBFBF"])

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(function(d) {return d[1]})
  // d is an array of the data values [[a, .33],[b, .67]]
const data_set = pie(Object.entries(data))

// div that appends to the body, but isn't visible
var div = d3.select("body").append("div")
     .attr("class", "tooltip-donut")
     .style("opacity", 0);

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('All')
  .data(data_set)
  .join('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data[1])) })
  .attr("stroke", "white")
  .style("stroke-width", "1px")
  .style("opacity", 0.7)
  .on('mouseover', function (d, i) {
    d3.select(this).transition()
         .duration('50')
         .attr('opacity', '.85');

         //Makes the new div appear on hover:
         div.transition()
               .duration(50)
               .style("opacity", 1);
              let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
          div.html(num)
               .style("left", (d3.event.pageX + 10) + "px")
               .style("top", (d3.event.pageY - 15) + "px");
     })
  .on('mouseout', function (d, i) {
      d3.select(this).transition()
          .duration('50')
          .attr('opacity', '1');

          //Makes the new div disappear:
          div.transition()
               .duration('50')
               .style("opacity", 0);
     });