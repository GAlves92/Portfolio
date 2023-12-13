// Bar Chart:

var Scores = [8.5, 7.5, 4, 9, 6.5, 7, 7.5, 6, 6, 6, 6, 6, 6, 7, 5];
var skills = ["Python", "Pandas", "Active Directory", "Excel/CSV", "Matplotlib", "GitHub", 
"Jira/Elements Connect", "Tableau", "M. Learning", "D3.js", "Data Mining", "HTML/CSS", "Social_Analytics", "Customer Service", "Oracle E-Business"];

var svgHeight = 360;
var svgWidth = 450;

var margin = {top: 50, right: -15, bottom: -15, left: 40}

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
  .attr("font-size", "10px")
  .attr("fill", "darkred")
  .text("Experience (Years)";

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

