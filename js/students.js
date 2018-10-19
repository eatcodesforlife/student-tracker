var search;
var studentReport = "";
var student;
var found;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function getStudentRecord(obj) {
  var report = "<h4>Name: " + obj.name + "</h4>";
  report += "<p>Track: " + obj.track + "</p>";
  report += "<p>Achievements: " + obj.Achievements + "</p>";
  report += "<p>Points: " + obj.Points + "</p>";
  return report;
}

// 'while' loop allows the program to continually ask user to
// enter student name until user types quit
while (true) {
  search = prompt(
    'Enter student name i.e "Dave" and type "Quit" to quit or print search results.'
  );
  found = false; //assume student value entered is not found

  if (search === null || search.toLowerCase() === "quit") break;

  for (i = 0; i < students.length; i++) {
    student = students[i];
    if (search.toLowerCase() === student.name.toLowerCase()) {
      studentReport += getStudentRecord(student); // '+=' appends student  to 'studentReport'
      /*NOTE TO SELF: using '='  only assigns value to studentReport which means that it will overide the last student value and will only show last matched value when print function is called.*/
      print(studentReport);
      found = true;
    }
  }
  //if value is false alert user student is not found.
  if (!found) {
    alert("Student not found!");
  }
}
