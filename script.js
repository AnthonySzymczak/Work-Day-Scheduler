//Calls document first
$(document).ready(function(){

    //Tasks Declaration
    let tasks = [];

    //Time array 
    const timeArr = [
        $("#9"),
        $("#10"),
        $("#11"),
        $("#12"),
        $("#13"),
        $("#14"),
        $("#15"),
        $("#16"),
        $("#17")
    ];
//Save Button & Localstorage setup, including blank text area alert
    $(".saveBtn").on("click", function(){

        //Declaring text attributes  
        let text = $(this).siblings(".info").val();

        //Declaring Time attributes
        let time = $(this).parent().att("id");

        //Formating Current Date with Moment.js
        let currentDate = moment().format('MMMM Do YYYY, hh:mm:ss a');

        tasks.push({
            info: text,
            time: time,
            date: currentDate
        });
        // Local Storage setup        
        localStorage.setItem("tasks",JSON.stringify(tasks));

        //Text Alert indicating a blank field        
        if (text === ""){
        alert("Text area empty, Input your desired tasks.")
    }
})

})
