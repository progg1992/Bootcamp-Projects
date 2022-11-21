// Create variables
var currentDate = $('#currentDay');
var saveBtn = $('#save-button');
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
currentDate.text(moment().format('MMMM Do, YYYY'));

// let taContent = JSON.parse(localStorage.getItem("event"));
// $("#ta1").text(taContent);

// Display the current date at the top of the page
currentDate.text(moment().format('MMMM Do YYYY'));
// Create a variable for the current time
let currentTime = parseInt((moment().format('H')));

// Create a variable for past time
$(document).ready(function() {
    
 });
function compareTime(){

   
for(var i = 0; i < time.length ; i ++) {
    let textArea = time[i];
    
 
    if(textArea < currentTime) {
        $("#ta"+ i +"parent").addClass("past");        
    }

    if(textArea == currentTime) {
        $("#ta"+ i +"parent").addClass("present");
    } 

    if(textArea > currentTime) {
        $("#ta"+ i +"parent").addClass("future")
    }
}};
compareTime();      



Function //to save the events to local sotrage when save button is clicked
$("#save-button").on("click", function(event){
// Check to see if there is anything in local storage. 
// If there is, add to it. If there is not, set an empty array.
    /*const event = $('#event')
 let events;
 if(localStorage.getItem('events') === null) {
     events = [];
 } else {
     events = JSON.parse(localStorage.getItem('events'));
 }

 events.push(event.val().trim());

 localStorage.setItem("events", JSON.stringify(events));*/
 if(event.target.matches = $("#button")) {
     alert("hello");
 } else {
     alert("bye");
 }
 localStorage.setItem("event", JSON.stringify(ta1.val().trim()));
})






$(".save-button").on("click", function() {
 var saveButton = $(this).attr('data-save');
 console.log(saveButton);
 var targetButton = $(this).attr('data-targetbutton');
 var targetButtonText = $('#' + targetButton).val().trim();
 console.log(targetButtonText);
 localStorage.setItem(saveButton, targetButtonText);
 
})