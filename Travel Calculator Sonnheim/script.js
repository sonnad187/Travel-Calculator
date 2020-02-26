var feetmiles;
var feetrate;
var feetcost;

var trainmiles;
var trainrate;
var traincost;

var planemiles;
var planerate;
var planecost;

function feetCalculate() {
  feetmiles = document.getElementById("feetmiles").value;
  feetrate = document.getElementById("feetrate").value;
  feetcost = feetrate * feetmiles;
  alert("It will cost you $" + feetcost + " to take this trip by foot.");
}

function trainCalculate() {
  trainmiles = document.getElementById("trainmiles").value;
  trainrate = document.getElementById("trainrate").value;
  traincost = trainrate * trainmiles;
  alert("It will cost you $" + traincost + " to take this trip by train.");
}

function planeCalculate() {
  planemiles = document.getElementById("planemiles").value;
  planerate = document.getElementById("planerate").value;
  planecost = planerate * planemiles;
  alert("It will cost you $" + planecost + " to take this trip by plane.");
}
