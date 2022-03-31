// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
let times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// handle displaying the time
let save1 = $("#save1");
let save2 = $("#save2");
let save3 = $("#save3");
let save4 = $("#save4");
let save5 = $("#save5");
let save6 = $("#save6");
let save7 = $("#save7");
let save8 = $("#save8");
let save9 = $("#save9");
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
console.log();
function calendarColor() {}
let now = new Date().getHours();
if (now > 8) {
  $("#time1").addClass("past");
} else if (now >= 8 && now < 9) {
  $("#time1").addClass("present");
} else if (now < 8) {
  $("#time1").addClass("future");
}

if (now > 9) {
  $("#time2").addClass("past");
} else if (now >= 9 && now < 10) {
  $("#time2").addClass("present");
} else if (now < 9) {
  $("#time2").addClass("future");
}

if (now > 10) {
  $("#time3").addClass("past");
} else if (now >= 10 && now < 11) {
  $("#time3").addClass("present");
} else if (now < 10) {
  $("#time3").addClass("future");
}

if (now > 11) {
  $("#time4").addClass("past");
} else if (now >= 11 && now < 12) {
  $("#time4").addClass("present");
} else if (now < 11) {
  $("#time4").addClass("future");
}

if (now > 12) {
  $("#time5").addClass("past");
} else if (now >= 12 && now < 13) {
  $("#time5").addClass("present");
} else if (now < 12) {
  $("#time5").addClass("future");
}

if (now > 13) {
  $("#time6").addClass("past");
} else if (now >= 13 && now < 14) {
  $("#time6").addClass("present");
} else if (now < 13) {
  $("#time6").addClass("future");
}

if (now > 14) {
  $("#time7").addClass("past");
} else if (now >= 14 && now < 15) {
  $("#time7").addClass("present");
} else if (now < 14) {
  $("#time7").addClass("future");
}

if (now > 15) {
  $("#time8").addClass("past");
} else if (now >= 15 && now < 16) {
  $("#time8").addClass("present");
} else if (now < 15) {
  $("#time8").addClass("future");
}

if (now > 16) {
  $("#time9").addClass("past");
} else if (now >= 16 && now < 17) {
  $("#time9").addClass("present");
} else if (now < 16) {
  $("#time9").addClass("future");
}
