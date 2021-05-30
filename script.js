//Calls document first
$(document).ready(function(){
    let tasks = {};

    //TIME ARRAY
    let myTimeArray = [
        $('#9'),
        $('#10'),        
        $('#11'),
        $('#12'),
        $('#13'),
        $('#14'),
        $('#15'),
        $('#16'),
        $('#17'),
    ]

    //Load Tasks
    let loadTasks = function() {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    //Save Button & Localstorage setup
    let saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };     
    $(".saveBtn").on("click", function(){
    })
    // Time Loop
    function timeLoop(){
        for (let i = 0; i < myTimeArray.length; i++){
            //Formating Current Date with Moment.js
            let terasDate = moment().hours();
            //Hour declaration
            let godzina = parseInt($(".area") [i].id);
            //Now ELement Declaration
            let terasElem = $(".area")[i];

            if (godzina < terasDate){
                terasElem.classList.add('past');
            }else if(godzina === terasDate){
                terasElem.classList.add('present');
                terasElem.classList.remove('past');
            } else {
                terasElem.classList.add('future');
                terasElem.classList.remove('present');
                terasElem.classList.remove('past');
            }   
        }
    }
    timeLoop();


})