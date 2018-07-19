var dataset = [
  [450, "Python"], [300,"MySQL"], [400, "Pandas"], [418, "Git"], [389, "Web Scrapping"],
  [100, "NOSQL"], [490, "Excel"], [430, "Visual Studio"], [445, "Matplotlib"], [470, "GitHub"],
  [465, "Word"], [250, "JavaScript"], [80, "Spark"], [350, "Tableau"], [425, "Social Analytics"],
  [150, "Machine Learning"], [130, "R"], [170, "D3"], [412, "Social Media Mining"], [375, "API Interactions"],
  [360, "CSS"], [415, "Outlook"]
];

var margin = {top: 20, right: 20, bottom: 50, left: 70},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var svg = d3.select("#body")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chart = svg.append("g")

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")

var xLinearScale = d3.scaleLinear()
.range([0, width]);

var yLinearScale = d3.scaleLinear()
.range([height, 0]);

var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);

var tooltip = d3.tip()
.attr("class", "tooltip")
.style("opacity", 0)
.html(function(dataset) {
  var skill = dataset[1]
  var experience = dataset[0]
  return ("Skill: " + skill + "<br> Experience: " + experience);
});

chart.call(tooltip);

chart.selectAll("circle")
  .data(dataset)
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

chart.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(bottomAxis);

chart.append("g")
  .call(leftAxis);

chart.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + .5)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .attr("class", "axisText")
  .text("Experience");

chart.append("text")
.attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 25) + ")")
.attr("class", "axisText")
.text("Skills");

