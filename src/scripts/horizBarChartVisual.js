// Set up the dimensions of the chart
const margin = { top: 0, right: 50, bottom: 50, left: 50 }
const width = 325 - margin.left - margin.right
const height = 275 - margin.top - margin.bottom

// Create the SVG container for the chart
const svg = d3.select("#example-chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load and process the data
// d3.csv("fileName.csv").then(data => {
//   data.forEach(d => {
//     d.total = +d.total;
//   });

  const data = [{"":"1", type: "a", total:"10"},
                {"":"2", type: "b", total:"15"},
                {"":"3", type: "c", total:"20"},
                {"":"4", type: "d", total:"6"},
                {"":"5", type: "e", total:"13"},
                {"":"6", type: "f", total:"70"},
                {"":"7", type: "g", total:"5"}
  ]

  // Sort the data by total
  data.sort(function (a, b) {
    return d3.ascending(a.total, b.total);
  });

  // Set the x and y scales
  const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) { return d.total; })]);

  const y = d3.scaleBand()
    .range([height, 0])
    .padding(0.1)
    .domain(data.map(function (d) { return d.type; }));

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
    .attr("y", function (d) { return y(d.type); })
    .attr("height", y.bandwidth())
    .attr("x", 0)
    .attr("width", function (d) { return x(d.total); })
    .attr('fill', '#BF2720')

  // Add the x and y axes to the chart
  svg.append("g")
    .attr("class", "x axis")
    .style("font-size", "10px")
    .attr("transform", "translate(0," + height + ")")
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
      return d.toUpperCase();
    });

  //});