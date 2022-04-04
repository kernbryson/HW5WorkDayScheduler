// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
// handle displaying the time
//displayTime creates the clock
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
// function decides when to use correct time classes
let presentTime = moment().hours();

for (let i = 0; i < 9; i++) {
  let timeID = i + 9;
  let timeBlock = $("#time" + timeID);
  if (timeID < presentTime) {
    timeBlock.addClass("past");
  } else if (timeID === presentTime) {
    timeBlock.addClass("present");
  } else {
    timeBlock.addClass("future");
  }
}
// This section saves the input to local storage
$(save1).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("9am TTD", $("#time9").val());
});
$("#time9").val(localStorage.getItem("9am TTD"));

$(save2).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("10amTTD", $("#time10").val());
});
$("#time10").val(localStorage.getItem("10amTTD"));

$(save3).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("11amTTD", $("#time11").val());
});
$("#time11").val(localStorage.getItem("11amTTD"));

$(save4).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("12pmTTD", $("#time12").val());
});
$("#time12").val(localStorage.getItem("12pmTTD"));

$(save5).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("1pmTTD", $("#time13").val());
});
$("#time13").val(localStorage.getItem("1pmTTD"));

$(save6).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("2pmTTD", $("#time14").val());
});
$("#time14").val(localStorage.getItem("2pmTTD"));

$(save7).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("3pmTTD", $("#time15").val());
});
$("#time15").val(localStorage.getItem("3pmTTD"));

$(save8).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("4pmTTD", $("#time16").val());
});
$("#time16").val(localStorage.getItem("4pmTTD"));

$(save9).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("5pmTTD", $("#time17").val());
});
$("#time17").val(localStorage.getItem("5pmTTD"));
