// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  //  Set item in localStorage on Save Button click 
  // (Faran helped me with this)
  $(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    console.log(task);
    var hour = $(this).parent().attr("id");
    console.log(hour);
    localStorage.setItem(hour, task);
  })


  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // (Faran helped me with this)
  function colorChanger() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1])
      console.log($(this))
      if (currentTime > blockTime) {
        $(this).addClass("past")
      } else if (currentTime === blockTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    });
  }

  colorChanger();


  // Retrieve tasks from local storage and display in appropriate time-block
  // Help from https://github.com/sylviaprabudy/work-day-scheduler/blob/master/assets/js/script.js
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  // Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
});