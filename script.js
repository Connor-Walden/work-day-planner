const NUM_HOURS = 8;
const START_HOUR = 9;

$(document).ready(function() {

  // Time block creation

  for(var i = 0; i < NUM_HOURS + 1; i++) {
    // The row that contains all of the information for this hour of the day planner
    var timeBlockEl = $("<div>");
    timeBlockEl.attr("class", "row");
    timeBlockEl.attr("style", "border-radius: 5px; background-color: grey;");

    // Now, append a bootstrap column for the left side of the row (time slot)
    var timeSlotEl = $("<div>");
    timeSlotEl.attr("class", "col-2");
    timeSlotEl.attr("style", "border-top: 4px solid black;");

    var hour = (i + START_HOUR) % 12;

    timeSlotEl.append("<h2>" + (hour == 0 ? 12 : hour) + "</h2>");

    timeBlockEl.append(timeSlotEl);
    $(".container").append(timeBlockEl);
  }
})
