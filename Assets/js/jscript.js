// Gives current time of system utilizing moment.js library
var currentTime = moment();
//variables holding ID's, classes utilizing jquery commands
var currentTimeDisplay = $("#currentDay");


//Get value residing in the inputRows set by user
var task9AM = $("#inputRow9").val();
var task10AM = $("#inputRow10").val();
var task11AM = $("#inputRow11").val();
var task12PM = $("#inputRow12").val();
var task1PM = $("#inputRow1").val();
var task2PM = $("#inputRow2").val();
var task3PM = $("#inputRow3").val();
var task4PM = $("#inputRow4").val();
var task5PM = $("#inputRow5").val();

/* This function formats the current time as such
   i.e "Sunday, February 14th 2019, 3:25:50 pm"
   Then displays to <p> element with ID currentDay
*/
function displayTime() {
    currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentTimeDisplay.text(currentTime);
}

//9 10 11 12 1 2 3 4 5; 9 values total standard work hours array workHours holds business hours
var workHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

//Saves tasks 
function saveUserTask() {
    //getting non-parsed values to save tasks into object for use in the function

    task9AM = $("#inputRow9").val();
    task10AM = $("#inputRow10").val();
    task11AM = $("#inputRow11").val();
    task12PM = $("#inputRow12").val();
    task1PM = $("#inputRow1").val();
    task2PM = $("#inputRow2").val();
    task3PM = $("#inputRow3").val();
    task4PM = $("#inputRow4").val();
    task5PM = $("#inputRow5").val();
    //object contains tasks items as properties
    var userTasks = {
        task9AM,
        task10AM,
        task11AM,
        task12PM,
        task1PM,
        task2PM,
        task3PM,
        task4PM,
        task5PM,
    };
    //verify tasks being saved to object
    console.log(userTasks);
    //stores every property items from userTasks Object parsed
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
}

//upload function task
function uploadUserTask() {
    var userInput = localStorage.getItem("userTasks");

    //If userInput is true get value from inputRows(#)'s and have them parsed
    if (userInput) {
        var taskParse = JSON.parse(userInput);
        $("#inputRow9").val(taskParse.task9AM);
        $("#inputRow10").val(taskParse.task10AM);
        $("#inputRow11").val(taskParse.task11AM);
        $("#inputRow12").val(taskParse.task12PM);
        $("#inputRow1").val(taskParse.task1PM);
        $("#inputRow2").val(taskParse.task2PM);
        $("#inputRow3").val(taskParse.task3PM);
        $("#inputRow4").val(taskParse.task4PM);
        $("#inputRow5").val(taskParse.task5PM);
    }
}

//listens for the saveBtn to be clicked
$(".custom-Btn").click(function (event) {
    event.preventDefault();
    saveUserTask();
});

//Updates every second with current time, Calls displayTime function when the page is loaded
$("document").ready(setInterval(displayTime, 1000));
//Updates the value for input if previously entered by user
$("document").ready(uploadUserTask);




$("#inputRow4").on("keyup", function () {

    //variable delcaration for valuecurrent hour 
    var currentHour = moment().format("kk")
    var inputRows = document.querySelectorAll(".input")

    for (var inputs of inputRows) {
        if (inputs.dataset.number < currentHour) {
            inputs.classList.add('past');
        }
        if (inputs.dataset.number === currentHour) {
            inputs.classList.add('present');
        }
        if (inputs.dataset.number > currentHour) {
            inputs.classList.add('future');
        }
    }
})




