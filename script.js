document.addEventListener('DOMContentLoaded', function() {
  var semesterTable = document.getElementById('semester-table');
  var addRowButton = document.getElementById('add-row-button');
  var semesterUnitSelects;
  var semesterGradeSelects;

  // Add event listener to the Add Row button
  addRowButton.addEventListener('click', function() {
    addRow();
  });

  // Function to add a new row to the semester table
  function addRow() {
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td class="course-code">
        <input type="text" class="course-code-input" placeholder="Course Code" disabled>
      </td>
      <td>
        <select class="course-unit">
          <option value="">Unit:</option>
        </select>
      </td>
      <td>
        <select class="grade">
          <option>Grade:</option>
        </select>
      </td>
    `;

    semesterTable.appendChild(newRow);

    semesterUnitSelects = semesterTable.getElementsByClassName('course-unit');
    semesterGradeSelects = semesterTable.getElementsByClassName('grade');

    populateUnitSelects(semesterUnitSelects, 1, 3); // Populate with units from 0 to 4
    populateGradeSelects(semesterGradeSelects, ['A', 'B', 'C', 'D', 'E']); // Populate with letter grades
  }

  var semesterCalculateBtn = document.getElementById('semester-btn-cal');
  var semesterClearBtn = document.getElementById('semester-btn-clear');
  var semesterResultInput = document.getElementById('semester-result');

  // Add event listener to the Semester Calculate button
  semesterCalculateBtn.addEventListener('click', function() {
    calculateSGPA();
  });

  // Add event listener to the Semester Clear button
  semesterClearBtn.addEventListener('click', function() {
    clearSemesterSelections();
  });

  // Function to calculate the SGPA
  function calculateSGPA() {
    var totalGradePoints = 0;
    var totalUnits = 0;

    for (var i = 0; i < semesterUnitSelects.length; i++) {
      var unit = parseInt(semesterUnitSelects[i].value);
      var grade = gradeToPoints(semesterGradeSelects[i].value);

      if (!isNaN(unit) && !isNaN(grade)) {
        totalGradePoints += unit * grade;
        totalUnits += unit;
      }
    }

    var sgpa = totalGradePoints / totalUnits;

    // Display the SGPA in the result input
    semesterResultInput.value = sgpa.toFixed(2);
  }

  // Function to clear all semester selections and result
  function clearSemesterSelections() {
    while (semesterTable.rows.length > 1) {
      semesterTable.deleteRow(1);
    }

    semesterResultInput.value = ''; // Clear the result input
  }

  // Function to populate unit select elements with options
  function populateUnitSelects(selects, min, max) {
    for (var i = 0; i < selects.length; i++) {
      for (var j = min; j <= max; j++) {
        var option = document.createElement('option');
        option.text = j;
        option.value = j;
        selects[i].add(option);
      }
    }
  }

  // Function to populate grade select elements with options
  function populateGradeSelects(selects, options) {
    for (var i = 0; i < selects.length; i++) {
      for (var j = 0; j < options.length; j++) {
        var option = document.createElement('option');
        option.text = options[j];
        option.value = options[j];
        selects[i].add(option);
      }
    }
  }

  // Function to convert letter grades to grade points
  function gradeToPoints(grade) {
    switch (grade) {
      case 'A':
        return 5;
      case 'B':
        return 4;
      case 'C':
        return 3;
      case 'D':
        return 2;
      case 'E':
        return 1;
      default:
        return 0;
    }
  }
});
