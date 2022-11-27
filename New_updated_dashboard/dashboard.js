const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});


// Calendar 
var Calendar = function(t) {
  this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.Months = t.Months ? t.Months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var e = new Date;
  this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
  var r = t.Format;
  this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
};


Calendar.prototype.nextMonth = function() {
  11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.prevMonth = function() {
  0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.previousYear = function() {
  this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
}, Calendar.prototype.nextYear = function() {
  this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
}, Calendar.prototype.showCurrent = function() {
  this.Calendar(this.CurrentYear, this.CurrentMonth)
}, Calendar.prototype.checkActive = function() {
  1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function() {
      document.querySelector(".calendar .header").setAttribute("class", "header active")
  }, 200), document.querySelector("body").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
}, Calendar.prototype.Calendar = function(t, e) {
  "number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
  var r = (new Date).getDate(),
      n = (new Date).getMonth(),
      a = (new Date).getFullYear(),
      o = new Date(t, e, 1).getDay(),
      i = new Date(t, e + 1, 0).getDate(),
      u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
      s = "<span>" + this.Months[e] + " &nbsp; " + t + "</span>",
      d = '<div class="table">';
  d += '<div class="row head">';
  for (var c = 0; c < 7; c++) d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
  d += "</div>";
  for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
      d += '<div class="row">';
      for (var m = 0; m < 7; m++) {
          if ((h = c + dm - o) < 1) d += '<div class="cell disable">' + (u - o + l++) + "</div>";
          else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
          else {
              d += '<div class="cell' + (r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "") + '"><span>' + h + "</span></div>", l = 1
          }
          c % 7 == 6 && h >= i && (v = 10), c++
      }
      d += "</div>"
  }
  d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)
}, window.onload = function() {
  var t = new Calendar({
      RenderID: ".render-a",
      Format: "M"
  });
  t.showCurrent(), t.checkActive();
  var e = document.querySelectorAll(".header [data-action]");
  for (i = 0; i < e.length; i++) e[i].onclick = function() {
      if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
      var e;
      document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function() {
          document.querySelector(".months").removeAttribute("data-loading")
      }), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function() {
          document.querySelector(".months").removeAttribute("data-loading")
      })
  }
};

// Todolist
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");

	//Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = function() {
	console.log("Add task...");
	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

//Edit an existing task
var editTask = function() {
	console.log("Edit task...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");

	//if the class of the parent is .editMode
	if (containsClass) {
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else {
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}

	//Toggle .editMode on the list item
	listItem.classList.toggle("editMode");

}

//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("Task complete...");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
	//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	//bind editTask to edit button
	editButton.onclick = editTask;

	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

// var ajaxRequest = function() {
// 	console.log("AJAX request");
// }

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	//bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}


// Your Courses


const buttons = document.querySelectorAll(".continue-btn");
const overlay = document.querySelector(".overlay");
const msg = document.querySelector(".overlay-message");
const main = document.querySelector(".main-section");
const htmlCourse = document.querySelector(".html-course");
const cssCourse = document.querySelector(".css-course");
const jsCourse = document.querySelector(".js-course");
const backBtns = document.querySelectorAll(".back");
const courses = document.querySelectorAll(".course-section");
const modeBtn = document.querySelector(".mode-switch");
const r = document.querySelector(":root");
const markBtns = document.querySelectorAll(".mark");
let mode = "light";

const htmlCourses = document.querySelectorAll(".course.html");
const cssCourses = document.querySelectorAll(".course.css");
const jsCourses = document.querySelectorAll(".course.js");

const allCourses = [htmlCourses, cssCourses, jsCourses];

const progressBars = document.querySelectorAll(".progress-bar span");
const progressText = document.querySelectorAll(".progress-text");

const updateCourses = () => {
  for (let i = 0; i < progressBars.length; i++) {
    const course = allCourses[i];
    const length = course.length - 1;
    let completed = 0;
    for (let j = 0; j < course.length; j++) {
      if (course[j].classList[2]) {
        completed += 1;
      }
    }
    progressText[i].innerText = `${completed}/${length} Lessons Completed`;
    progressBars[i].style.width = (completed / length) * 200 + "px";
  }
};

updateCourses();

const showCourse = (course) => {
  course.style.transform = "translateX(0px)";
  course.style.display = "block";
};

const hideCourse = (course) => {
  course.style.transform = "translateX(150%)";
  course.style.display = "none";
};

modeBtn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    modeBtn.classList.remove("fa-moon");
    modeBtn.classList.add("fa-sun");
    r.style.setProperty("--mode-hover", "#ead94c");
    r.style.setProperty("--header", "#121212");
    r.style.setProperty("--bg", "#1c1c1c");
    r.style.setProperty("--text", "#ffffff");
    r.style.setProperty("--dark-grey", "rgba(255, 255, 255, 0.7)");
  } else {
    mode = "light";
    modeBtn.classList.remove("fa-sun");
    modeBtn.classList.add("fa-moon");
    r.style.setProperty("--mode-hover", "#203297");
    r.style.setProperty("--header", "#dbdbdb");
    r.style.setProperty("--bg", "#f0f0f0");
    r.style.setProperty("--text", "#050505");
    r.style.setProperty("--dark-grey", "rgba(5, 5, 5, 0.7)");
  }
});

for (let btn of buttons) {
  let courseToShow = btn.classList[1];
  switch (courseToShow) {
    case "html":
      courseToShow = htmlCourse;
      break;
    case "css":
      courseToShow = cssCourse;
      break;
    case "js":
      courseToShow = jsCourse;
      break;
  }


  btn.addEventListener("click", () => {
    overlay.style.transformOrigin = "right";
    overlay.style.transform = "scaleX(1)";
    msg.innerText = "Please wait...";
    setTimeout(() => {
      msg.style.opacity = 1;
      hideCourse(main);
    }, 500);
    setTimeout(() => {
      msg.style.opacity = 0;
      showCourse(courseToShow);
    }, 2500);
    setTimeout(() => {
      overlay.style.transformOrigin = "left";
      overlay.style.transform = "scaleX(0)";
    }, 3000);
  });
}

for (let btn of backBtns) {
  btn.addEventListener("click", () => {
    overlay.style.transformOrigin = "right";
    overlay.style.transform = "scaleX(1)";
    msg.innerText = "Loading Courses...";
    setTimeout(() => {
      msg.style.opacity = 1;
      for (let course of courses) {
        hideCourse(course);
      }
    }, 500);
    setTimeout(() => {
      msg.style.opacity = 0;
      showCourse(main);
    }, 2500);
    setTimeout(() => {
      overlay.style.transformOrigin = "left";
      overlay.style.transform = "scaleX(0)";
    }, 3000);
  });
}

for (let btn of markBtns) {
  btn.addEventListener("click", () => {
    const parentLesson = btn.parentElement.parentElement;
    const checked = parentLesson.classList[2] ? true : false;
    if (checked) {
      parentLesson.classList.remove("checked");
      btn.innerText = "Mark as Done";
    } else {
      parentLesson.classList.add("checked");
      btn.innerText = "Mark as Incomplete";
    }
    updateCourses();
  });
}

// Navbar

var nav = $('nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid
  });
}

nav.find('ul li a').click(function(e) {
  e.preventDefault();
  if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
    
    nav.addClass('animate');

    var _this = $(this);

    nav.find('ul li').removeClass('active');

    var position = _this.parent().position();
    var width = _this.parent().width();

    if(position.left >= pos) {
      line.animate({
        width: ((position.left - pos) + width)
      }, 300, function() {
        line.animate({
          width: width,
          left: position.left
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('active');
      });
    } else {
      line.animate({
        left: position.left,
        width: ((pos - position.left) + wid)
      }, 300, function() {
        line.animate({
          width: width
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('active');
      });
    }

    pos = position.left;
    wid = width;
  }
});


// Clock
// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT




