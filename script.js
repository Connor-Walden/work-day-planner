var NUM_HOURS = 8;

$(document).ready(function() {

  // Time block creation

  for(var i = 0; i < NUM_HOURS; i++) {
    // The row that contains all of the information for this hour of the day planner
    var timeBlockEl = $("<div>");
    timeBlockEl.attr("class", "row");
    timeBlockEl.attr("style", "border-radius: 5px; background-color: grey;");

    // Now, append a bootstrap column for the left side of the row (time slot)
    var timeSlotEl = $("<div>");
    timeSlotEl.attr("class", "col-2");

    $(".container").append(timeBlockEl);
  }
})
