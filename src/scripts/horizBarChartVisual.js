export function createHorizBarChart(fileName) {

  // Set up the dimensions of the chart
  const margin = { top: 0, right: 100, bottom: 50, left: 200 }
  const width = 550 - margin.left - margin.right
  const height = 275 - margin.top - margin.bottom

  // Create the SVG container for the chart
  const svg = d3.select("#example-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")  // g is group element
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //const data;
  // Load and process the data
  d3.csv(`${fileName}.csv`).then(data => {
    data.forEach(d => {
      d.total = +d.total; // taking every total value and make it a number
    });
    // console.log(data[0], 'data is');
    // Sort the data by total
    data.sort(function (a, b) {
      return d3.ascending(a.total, b.total);
    });

  // div that appends to the body, but isn't visible
  var divTip = d3.select("#horiz-chart-group").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)

  // sample data
  // const data = [{"":"1", type: "a", total:"10"},
  //               {"":"2", type: "b", total:"15"},
  //               {"":"3", type: "c", total:"20"},
  //               {"":"4", type: "d", total:"6"},
  //               {"":"5", type: "e", total:"13"},
  //               {"":"6", type: "f", total:"70"},
  //               {"":"7", type: "g", total:"5"}
  //               ]

  // Set the x and y scales
  const x = d3.scaleLinear()
    .range([0, width]) // range of pixels where chart will live
    .domain([0, d3.max(data, function (d) { return d.total; })]); // set of numbers will be from 0 to the biggest # in our dataset will look at all our totals and return the max

  const y = d3.scaleBand()  // use this with horiz bar chart
    .range([height, 0])
    .padding(0.1)
    .domain(data.map(function (d) { return d.artist; })); // domain is all the y-values

  // Create the x and y axes
  const xAxis = d3.axisBottom(x)
    .ticks(5)
    .tickSize(0); // remove ticks

  const yAxis = d3.axisLeft(y)
    .tickSize(0)
    .tickPadding(10);

  // Add vertical gridlines
  svg.selectAll("line.vertical-grid")
    .data(x.ticks(5))
    .enter()
    .append("line")
    .attr("class", "vertical-grid")
    .attr("x1", function (d) { return x(d); })
    .attr("y1", 0)
    .attr("x2", function (d) { return x(d); })
    .attr("y2", height)
    .style("stroke", "gray")
    .style("stroke-width", 0.5)
    .style("stroke-dasharray", "3 3");

  // Create the bars for the chart
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("id", function (d) { return d.total.toString(); } )
    .attr("y", function (d) { return y(d.artist); })
    .attr("height", y.bandwidth())
    .attr("x", 0)
    .attr("width", function (d) { return x(d.total); })
    .attr('fill', '#BF2720')

  // Add the x and y axes to the chart
  svg.append("g")
    .attr("class", "x axis")
    .style("font-size", "11px")
    .attr("transform", "translate(0," + height + ")")  // this moves it from the top of the chart to the bottom
    .call(xAxis)
    .call(g => g.select(".domain").remove());

  svg.append("g")
    .attr("class", "y axis")
    .style("font-size", "8px")
    .call(yAxis)
    .selectAll('path')
    .style('stroke-width', '1.75px');

  svg.selectAll(".y.axis .tick text")
    .text(function (d) {
      console.log
      return d.toUpperCase();
    });

  svg.on("mouseover", (evt) => {
    // console.log(evt, "evt");  
    // console.log(evt.target, "evt.target");
    // console.log(evt.target.nodeName, "evt.target nodeName");
    if (evt.target.nodeName === "rect") {
      d3.select(evt.target).transition()
      .duration('50')
      .attr('opacity', '.8');

      //Makes the new div appear on hover:
      divTip.transition()
            .duration(50)
            .style("opacity", 1);
            
            let num = `${evt.target.id} works`;  // label for hover
        divTip.html(num)
        .style("left", (evt.pageX-25) + "px")
        .style("top", (evt.pageY-10) + "px"); 
    }  
    
    })
    .on('mouseout', function (evt, d) {
      
      if (evt.target.nodeName === "rect") {
        d3.select(evt.target).transition()
          .duration('50')
          .attr('opacity', '1');

          //Makes the new divTip disappear:
          divTip.transition()
              .duration('50')
              .style("opacity", 0);
      }

    })
});

}
