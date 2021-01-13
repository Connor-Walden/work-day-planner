// These keep track of where the planner starts, and how many hours it will have on it
const NUM_HOURS = 8;
const START_HOUR = 9;

// these keep track of the color settings for the past present and future elements
const COLOR_PAST = "grey";
const COLOR_PRESENT = "red";
const COLOR_FUTURE = "green";

// when the document is ready... run the code
$(document).ready(function() {
  // Add current date to the top of the calander
  var dateEl = $(".container").append("<div>");
  dateEl.attr("style", "width: 100%; text-align: center");
  dateEl.append("<h1>" + moment().format('DD/MM/YYYY') + "</h1>");

  // Loop through all hours according to the setting consts at the top of this file
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

    // current time provided by moment
    var currentTime = moment();
    // color variable so we can dynamically assign colors based on the real time
    var color = "";

    // check if current time is before, the same or after the target which is 'i'
    if(currentTime.isBefore(moment().hour(i), "hour"))
      color = COLOR_PAST;
    else if(currentTime.isSame(moment().hour(i), "hour"))
      color = COLOR_PRESENT;
    else if(currentTime.isAfter(moment().hour(i), "hour"))
      color = COLOR_FUTURE;

    // add the styling to the time block element and use the color var from above to 
    // determine the color of the time block
    timeBlockEl.attr("style", "border-radius: 5px; background-color: " + color + "; height: 100px;");

    // Now, append a bootstrap column for the left side of the row (time slot)
    var timeSlotEl = $("<div>");
    // justify content center to make sure the h2 is not left aligned in this col
    timeSlotEl.attr("class", "col-2 justify-content-center");
    // padding top to move the h2 down slightly in the col as it was too high up without this
    timeSlotEl.attr("style", "padding-top: 30px; text-align: center;");
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
    var noteText = $("<textarea>");
    // set styling for the notText element, so it looks right
    noteText.attr("style", "height: 30px; width: 100%; position:absolute; top: 35px; left: 0; background-color: white;");
    
    // if there is data in the local storage for the hour we are in in the loop set it to the
    // text-area's val()
    if(localStorage.getItem(parsedHour) != null)
      noteText.val(localStorage.getItem(parsedHour));

    // can't forget to append the note text element, otherwise it wont appear! :(
    noteEl.append(noteText);

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
    // data to keep track of what button does what
    saveBtn.attr("data-index", parsedHour);
    // the save button needs to let the user know what it is...
    saveBtn.text("SAVE");

    // there must be a click event on the save button so the user input gets saved
    // the on click event is wrapped in a closure, as a method of "passing" the 
    // current variables on to the event
    (function(hour, note) {
      saveBtn.on("click", function() {
        localStorage.setItem(hour, note.val());
      });
    })(parsedHour, noteText);
    

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