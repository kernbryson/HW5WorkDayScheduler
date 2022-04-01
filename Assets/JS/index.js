// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
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

let presentTime = new Date().getHours();
if (presentTime > 9) {
  $("#time1").addClass("past");
} else if (presentTime >= 9 && presentTime < 10) {
  $("#time1").addClass("present");
} else if (presentTime < 9) {
  $("#time1").addClass("future");
}

if (presentTime > 10) {
  $("#time2").addClass("past");
} else if (presentTime >= 10 && presentTime < 11) {
  $("#time2").addClass("present");
} else if (presentTime < 10) {
  $("#time2").addClass("future");
}

if (presentTime > 11) {
  $("#time3").addClass("past");
} else if (presentTime >= 11 && presentTime < 12) {
  $("#time3").addClass("present");
} else if (presentTime < 11) {
  $("#time3").addClass("future");
}

if (presentTime > 12) {
  $("#time4").addClass("past");
} else if (presentTime >= 12 && presentTime < 13) {
  $("#time4").addClass("present");
} else if (presentTime < 12) {
  $("#time4").addClass("future");
}

if (presentTime > 13) {
  $("#time5").addClass("past");
} else if (presentTime >= 13 && presentTime < 14) {
  $("#time5").addClass("present");
} else if (presentTime < 13) {
  $("#time5").addClass("future");
}

if (presentTime > 14) {
  $("#time6").addClass("past");
} else if (presentTime >= 14 && presentTime < 15) {
  $("#time6").addClass("present");
} else if (presentTime < 14) {
  $("#time6").addClass("future");
}

if (presentTime > 15) {
  $("#time7").addClass("past");
} else if (presentTime >= 15 && presentTime < 16) {
  $("#time7").addClass("present");
} else if (presentTime < 15) {
  $("#time7").addClass("future");
}

if (presentTime > 16) {
  $("#time8").addClass("past");
} else if (presentTime >= 16 && presentTime < 17) {
  $("#time8").addClass("present");
} else if (presentTime < 16) {
  $("#time8").addClass("future");
}

if (presentTime > 17) {
  $("#time9").addClass("past");
} else if (presentTime >= 17 && presentTime < 18) {
  $("#time9").addClass("present");
} else if (presentTime < 17) {
  $("#time9").addClass("future");
}

$(save1).on("click", function (event) {
  event.preventDefault();
  // let thingsToDO = $("#time1").val();
  // localStorage.setItem("Things to be done", thingsToDO);
  let ThingsToDO = localStorage.setItem("9am TTD", $("#time1").val());
});
$("#time1").val(localStorage.getItem("9am TTD"));

$(save2).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("10amTTD", $("#time2").val());
});
$("#time2").val(localStorage.getItem("10amTTD"));

$(save3).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("11amTTD", $("#time3").val());
});
$("#time3").val(localStorage.getItem("11amTTD"));

$(save4).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("12pmTTD", $("#time4").val());
});
$("#time4").val(localStorage.getItem("12pmTTD"));

$(save5).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("1pmTTD", $("#time5").val());
});
$("#time5").val(localStorage.getItem("1pmTTD"));

$(save6).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("2pmTTD", $("#time6").val());
});
$("#time6").val(localStorage.getItem("2pmTTD"));

$(save7).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("3pmTTD", $("#time7").val());
});
$("#time7").val(localStorage.getItem("3pmTTD"));

$(save8).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("4pmTTD", $("#time8").val());
});
$("#time8").val(localStorage.getItem("4pmTTD"));

$(save9).on("click", function (event) {
  event.preventDefault();

  let ThingsToDO = localStorage.setItem("5pmTTD", $("#time9").val());
});
$("#time9").val(localStorage.getItem("5pmTTD"));
