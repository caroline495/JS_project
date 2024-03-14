import View from "./scripts/view";

// console.log("Webpack is working!")

// Code for dialog
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  let instructions = document.querySelector("#instructions");
  instructions.innerText = "Click on any time period to see this period of art history at the Met";  
  dialog.close();
});

const linkedin = document.querySelector('#linkedin');
linkedin.addEventListener('click', ()=>{
  window.location.href = "https://www.linkedin.com/in/carolineczhang/";
});


// eventlistener for click on Time Period buttons
const buttons = document.querySelector('.time-periods');

let timeStart;
let timeEnd;

buttons.addEventListener('click', event => {
  if (event.target.nodeName === "LI") {
    // console.log(event.target.innerText, "innertext");
    timeStart = event.target.getAttribute("data-time-start");
    timeEnd = event.target.getAttribute("data-time-end");

    let backgroundImage = document.querySelector("#met-background");
    if (backgroundImage) {
      document.body.removeChild(backgroundImage);
    }

    let piechart = document.querySelector("#piechart_viz");
    let horizBarChart = document.querySelector("#example-chart");
    if (piechart.hasChildNodes() || horizBarChart.hasChildNodes()){
        while (piechart.hasChildNodes() || horizBarChart.hasChildNodes()){
          piechart.removeChild(piechart.firstChild);
          horizBarChart.removeChild(horizBarChart.firstChild);   
        }
    }
    
    new View(timeStart, timeEnd);

  } 
});
