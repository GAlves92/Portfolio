// Bubble Chart:

var dataset = [
  Scores = [350, 300, 400, 358, 389, 100, 490, 430, 445, 470, 465, 250, 80, 350, 425, 150, 130, 170, 412, 375, 360, 415],
  skills = ["Spark", "NOSQL", "R", "M. Learning", "D3.js", "JavaScript", "MySQL", "CSS", "Git", "Python", "APIs", "Web Scrapping", "Outlook", 
"Social Analytics", "Data Mining", "Tableau", "Matplotlib", "GitHub", "Word", "Excel"]];

var points = [
  [350, "Python"], [300,"MySQL"], [400, "Pandas"], [418, "Git"], [389, "Web Scrapping"],
  [100, "NOSQL"], [490, "Excel"], [430, "Visual Studio"], [445, "Matplotlib"], [470, "GitHub"],
  [465, "Word"], [250, "JavaScript"], [80, "Spark"], [350, "Tableau"], [425, "Social Analytics"],
  [150, "Machine Learning"], [130, "R"], [170, "D3"], [412, "Social Media Mining"], [375, "API Interactions"],
  [360, "CSS"], [415, "Outlook"]
];

var margin = {top: 20, right: 20, bottom: 50, left: 70},
width = 700 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;


var svg = d3.select("#bubble")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chart = svg.append("g")

svg.selectAll("circle")
  .data(points)
  .enter()
  .append("circle")

var yLinearScale = d3.scaleLinear()
  .domain(skills)
  .range([height, 0])

var xLinearScale = d3.scaleBand()
  .domain(skills)
  .range([0, width])
  .padding(0.05);

var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);

var tooltip = d3.tip()
  .attr("class", "tooltip")
  .style("opacity", 0)
  .html(function(points) {
    var skill = points[1]
    var experience = points[0]
    return ("Skill: " + skill + "<br> Experience: " + experience);
  });

chart.call(tooltip);

chart.selectAll("circle")
  .data(points)
  .enter().append("circle")
  .attr("cx", function(d) {
    return d[0];
  })
  .attr("cy", function(d) {
    return d[1];
  })
  .attr("r", "15")
  .attr("fill", "blue")
  .on("click", function(dataset) {
    tooltip.show(dataset);
  })
  .on("mouseout", function(dataset) {
    tooltip.hide(dataset);
  });

svg.append("g")
.attr("class", "x axis")
.attr("transform", "translate(0," + height + ")")
.call(bottomAxis)
  .selectAll("text")  
  .style("text-anchor", "end")
  .attr("dx", "-.9em")
  .attr("dy", ".15em")
  .attr("transform", "rotate(-25)");

chart.append("g")
  .call(leftAxis);

chart.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + .5)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .attr("class", "axisText")
  .attr("font-size", "20px")
  .attr("fill", "darkred")
  .text("Experience");

chart.append("text")
  .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 24) + ")")
  .attr("class", "axisText")
  .attr("dx", "-4em")
  .attr("font-size", "20px")
  .attr("fill", "darkred")
  .text("Skills");

// Bar Chart:

var Scores = [350, 300, 400, 358, 389, 100, 490, 430, 445, 470, 465, 250, 80, 350, 425, 150, 130, 170, 412, 375, 360, 415];
var skills = ["Python", "MySQL", "Pandas", "Git", "Web Scrapping", "NOSQL", "Excel", "VS", "Matplotlib", "GitHub", "Word", 
"JS", "Spark", "Tableau", "Outlook", "M. Learning", "R", "D3.js", "Data Mining", "APIs", "CSS", "Social_Analytics"];

var svgHeight = 600;
var svgWidth = 970;

var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

var svg = d3.select("#body").append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

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
  .attr("viewBox", "0 0 1200 900")
  .classed("svg-content-responsive", true); 
