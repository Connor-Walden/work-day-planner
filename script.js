// These keep track of where the planner starts, and how many hours it will have on it
const NUM_HOURS = 8;
const START_HOUR = 9;
$(document).ready(function() {
  for(var i = START_HOUR; i < START_HOUR + NUM_HOURS + 1; i++) {
    
    // parsedHour is the hour and whether its am / pm    
    // the ternary operator makes sure that when (i % 12) is 0 it is shown as 12 still
    var parsedHour;
    if(i > 12)
      parsedHour = (i % 12 == 0 ? 12 : i % 12) + "PM";
    else parsedHour = (i % 12 == 0 ? 12 : i % 12) + "AM";

    // The row that contains all of the information for this hour of the day planner
    var timeBlockEl = $("<div>");
    timeBlockEl.attr("class", "row");
    timeBlockEl.attr("style", "border-radius: 5px; background-color: grey; height: 100px;");

    // Now, append a bootstrap column for the left side of the row (time slot)
    var timeSlotEl = $("<div>");
    // justify content center to make sure the h2 is not left aligned in this col
    timeSlotEl.attr("class", "col-2 justify-content-center");
    // padding top to move the h2 down slightly in the col as it was too high up without this
    timeSlotEl.attr("style", "border-top: 4px solid black; padding-top: 10px;");
    // append the parsedHour variable from the top as a h2 element
    timeSlotEl.append("<h2>" + parsedHour + "</h2>");

    // Note element is what will contain the note for hour i
    var noteEl = $("<div>");
    // this element wants to be the majority of the row, as it is the note section and may need 
    // lot of room
    noteEl.attr("class", "col-8");
    // position relative so the child can be absolute and moved where it should be
    noteEl.attr("style", "position: relative;");
    // append the textarea to the noteEl element so the user can input
    noteEl.append("<textarea id=\"noteInput\" style=\"height: 30px; width: 90%; position:absolute; top: 35px; background-color: white;\"></textarea>");

    // save element contains the button used to save the user input to local storage.
    var saveEl = $("<div>");
    // takes up 2 columns and the button appended below needs to be centered
    saveEl.attr("class", "col-2 justify-content-center");
    saveEl.attr("style", "padding: 20px;");

    // Save button element 
    var saveBtn = $("<div>");
    // make save button element a bootstrap button
    saveBtn.attr("class", "btn btn-primary");
    // size and position the button in the correct place.
    saveBtn.attr("style", "width: 100%; padding: 18px 0;");
    // the save button needs to let the user know what it is...
    saveBtn.text("SAVE");

    // adding the save button the the save element
    saveEl.append(saveBtn);

    // Append all elements that reside within the time block to it
    timeBlockEl.append(timeSlotEl);
    timeBlockEl.append(noteEl);
    timeBlockEl.append(saveEl);
    
    // append the current time block to the container that already exists in this application.
    $(".container").append(timeBlockEl);
  }
});