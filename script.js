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
    timeBlockEl.attr("style", "border-radius: 5px; background-color: grey;");

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
    noteEl.attr("class", "col-8");
    noteEl.attr("style", "border: 1px solid black;");

    // Append all elements that reside within the time block to it
    timeBlockEl.append(timeSlotEl);
    
    // append the current time block to the container that already exists in this application.
    $(".container").append(timeBlockEl);
  }
});