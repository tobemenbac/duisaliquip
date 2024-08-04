// Define the scale for the vertical guide
var firstThirdScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, height]);

// Create the vertical guide
var firstThird = d3.axisLeft(firstThirdScale);

// Append the guide to the SVG
svg.append("g")
  .attr("class", "firstThird")
  .call(firstThird);
