// Function to save a new note
function saveNote() {
  var noteInput = document.getElementById("note-input");
  var noteText = noteInput.value;
  if (noteText !== "") {
    var noteList = document.getElementById("note-list");
    var noteItem = document.createElement("li");
    noteItem.appendChild(document.createTextNode(noteText));
    noteList.appendChild(noteItem);
    noteInput.value = "";
  }
}

// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskText = taskInput.value;
  if (taskText !== "") {
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskItem.appendChild(checkbox);

    var label = document.createElement("label");
    label.textContent = taskText; // Agrega el contenido del input como texto del label
    taskItem.appendChild(label);

    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}


function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName + "-link").classList.add("active");

  if (tabName === "notesTab") {
    var noteList = document.getElementById("note-list");
    noteList.style.display = "block";
  } else {
    var taskList = document.getElementById("task-list");
    taskList.style.display = "block";
  }
}

