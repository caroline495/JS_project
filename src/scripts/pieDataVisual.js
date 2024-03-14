// PIE CHART CODE 

export function createPieChart(numHighlights, numNotHighlights) {
  
  let piechart = document.querySelector("piechart_viz");
  if (piechart && piechart.hasChildNodes()){
      piechart.removeChild();
      console.log("hello");
  }

  // Create dummy data
  let data = [{title:"Highlight", value: numHighlights, percentageShare: 0},
                {title: "Not Highlight", value: numNotHighlights, percentageShare: 0},
                ]  

  let avg1 = (data[0].value * 1.0 / (data[0].value + data[1].value))*100;
  let avg2 = (data[1].value * 1.0 / (data[0].value + data[1].value))*100;
  data[0].percentageShare = Math.round(avg1);
  data[1].percentageShare = Math.round(avg2);            

  // set the dimensions and margins of the graph
  const width = 250,
      height = 250,
      margin = 0;

  // The radius of the pieplot is half the width or half the height (smallest one). subtract a bit of margin.
  const radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'piechart_viz'
  const svg = d3.select("#piechart_viz")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewbox", "0 0 100 100")
    .append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);

  // set the color scale
  const color = d3.scaleOrdinal()
    .range(["#BF2720", "#BFBFBF"])

  // Compute the position of each group on the pie:
  const pie = d3.pie()
    .value(function(d) {
      // console.log(d, "d here");  // d is: {title: 'Highlight', value: 333}
      return d.value })(data);
    // d is an array of the data values [[a, .33],[b, .67]]

  //  const data_set = pie(Object.entries(data))

  // div that appends to the body, but isn't visible
  const divTip = d3.select("#pie-chart-group").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)


  // Build the pie chart: each part of the pie is a path that we build using the arc function
  svg
    .selectAll('path')
    .data(pie)
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.title)) })
    .attr("stroke", "white")
    .style("stroke-width", "1px")
    .attr("class", "pie-chart")
    .on("mouseover", (evt, d) => {

      d3.select(evt.target).transition()
      .duration('50')
      .attr('opacity', '.85');

      //Makes the new div appear on hover:
      divTip.transition()
            .duration(50)
            .style("opacity", 1);
            // Highlight: XX works
            // let num = `${d.data.title}s: ${(d.value).toString()} works, ${(d.data.percentageShare).toString()}%`;
            let num = `${d.data.title}s: ${(d.value).toString()} works`;
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

}

  

