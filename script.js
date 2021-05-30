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
  
    //Savebutton/ local storage setup
     $(".saveBtn").on("click",function(){
         for(let i=9; i <= 17; i++)
         save(i);
        })
        
        let storedItem = localStorage.getItem("storedItem");
        
        function save(i){
            let item = (document.getElementById("text" +i).value);
            console.log(item);
            localStorage.setItem("storedItem" +i, item);
            
            //  console.log(storedItem);
        }
        
        function get(){
            for( i=9; i <= 17;i++){
                let item = (document.getElementById("text" +i));
                let returnItem = localStorage.getItem("storedItem" +i);
                    item.value = returnItem;
            console.log(returnItem);
            }
        }
        get();
    
  timeLoop();
});
