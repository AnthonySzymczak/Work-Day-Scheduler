//Calls document first
$(document).ready(function () {
  //Current Date

  let today = document.querySelector("#currentDay");
  let currentTime = moment();
  today.textContent = currentTime.format("MMMM DD, YYYY ");

  //TIME ARRAY
  let myTimeArray = [
    $("#9"),
    $("#10"),
    $("#11"),
    $("#12"),
    $("#13"),
    $("#14"),
    $("#15"),
    $("#16"),
    $("#17"),
  ];
  // Time Loop to recognize past time, present time, and future time.
  function timeLoop() {
    for (let i = 0; i < myTimeArray.length; i++) {
      //Formating Current Date with Moment.js
      let terasDate = moment().hours();
      //Hour declaration
      let godzina = parseInt($(".area")[i].id);
      //Now ELement Declaration
      let terasElem = $(".area")[i];

      if (godzina < terasDate) {
        terasElem.classList.add("past");
      } else if (godzina === terasDate) {
        terasElem.classList.add("present");
        terasElem.classList.remove("past");
      } else {
        terasElem.classList.add("future");
        terasElem.classList.remove("present");
        terasElem.classList.remove("past");
      }
    }
  }
  const clock = document.getElementById('clock');

  function updateTime() {
        const now = moment();
        const realTime = now.format('hh:mm:ss A');

        clock.textContent = realTime;

  };
  setInterval(updateTime,1000);
  updateTime();

let storedItem = localStorage.getItem("storedItem");

function save(){
    let item = document.getElementById("savedText").val;
    localStorage.setItem("storedItem", item);
    document.getElementById("savedText").innerHTML = item;
}
function get(){
    localStorage.getItem("storedItem");
    document.getElementById("returnedText").innerHTML = storedItem ;
}
  

  timeLoop();
  save();
  get();
});
