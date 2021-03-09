// Bar Chart:

var Scores = [8.5, 6.5, 5, 7.5, 6.5, 7, 6.5, 7.5, 6, 6, 10, 8.5, 10, 10];
var skills = ["Python", "Pandas", "Web Scrapping", "Excel", "Matplotlib", "GitHub", 
"JS", "Tableau", "M. Learning", "D3.js", "Data Mining", "CSS", "Social_Analytics", "Customer Service"];

var svgHeight = 325;
var svgWidth = 400;

var margin = {top: 50, right: 10, bottom: 10, left: 40}

var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

var svg = d3.select("#body")
  .append("svg")
  .attr("height", svgHeight + margin.left + margin.right)
  .attr("width", svgWidth + margin.top + margin.bottom)
  .attr("viewBox", `0 0 ${svgHeight} ${svgWidth}`);

var chartGroup = svg.append("g")
.attr("transform", `translate(-${margin.left}-${margin.top})`);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(Scores)])
  .range([chartHeight, 0]);

var xScale = d3.scaleBand()
  .domain(skills)
  .range([0, chartWidth])
  .padding(0.05);

var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

chartGroup.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(xAxis)
  .attr("class", "axis")
  .selectAll("text")  
  .style("text-anchor", "end")
  .attr("dx", "-0.9em")
  .attr("dy", ".15em")
  .attr("transform", "rotate(-25)");

chartGroup.append("g")
  .call(yAxis)
  .attr("class", "axis");

chartGroup.selectAll(".bar")
  .data(Scores)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("x", (d, i) => xScale(skills[i]))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d));

chartGroup.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + .5)
  .attr("x", 0 - (chartHeight / 2))
  .attr("dy", "0.7em")
  .attr("class", "axisText")
  .attr("font-size", "20px")
  .attr("fill", "darkred")
  .text("Experience");

chartGroup.append("text")
  .attr("transform", "translate(" + (chartWidth / 2) + " ," + (chartHeight + margin.top) + ")")
  .attr("class", "axisText")
  .attr("font-size", "20px")
  .attr("fill", "darkred")
  .text("Skills");

d3.select("#body")
  .append("div")
  .classed("svg-container", true) 
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 960 600")
  .classed("svg-content-responsive", true); 

