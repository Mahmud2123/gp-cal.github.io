// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the table element
  var table = document.getElementById('grade-table');

  // Get all the course unit and grade select elements
  var unitSelects = table.getElementsByClassName('course-unit');
  var gradeSelects = table.getElementsByClassName('grade');

  // Populate the course unit and grade select elements
  populateUnitSelects(unitSelects, 1, 3); // Populate with units from 0 to 4
  populateGradeSelects(gradeSelects, [ 'A', 'B', 'C', 'D', 'E']); // Populate with letter grades

  // Get the Calculate and Clear buttons, and result input element
  var calculateBtn = document.getElementById('btn-cal');
  var clearBtn = document.getElementById('btn-clear');
  var resultInput = document.getElementById('result');

  // Add event listener to the Calculate button
  calculateBtn.addEventListener('click', function() {
    calculateCGPA();
  });

  // Add event listener to the Clear button
  clearBtn.addEventListener('click', function() {
    clearSelections();
  });

  // Function to calculate the CGPA
  function calculateCGPA() {
    var totalGradePoints = 0;
    var totalUnits = 0;

    for (var i = 0; i < unitSelects.length; i++) {
      var unit = parseInt(unitSelects[i].value);
      var grade = gradeToPoints(gradeSelects[i].value);

      if (!isNaN(unit) && !isNaN(grade)) {
        totalGradePoints += unit * grade;
        totalUnits += unit;
      }
    }

    var cgpa = totalGradePoints / totalUnits;

    // Display the CGPA in the result input
    resultInput.value = cgpa.toFixed(2);
  }

  // Function to clear all selections and result
  function clearSelections() {
    for (var i = 0; i < unitSelects.length; i++) {
      unitSelects[i].selectedIndex = 0; // Set unit select to the first option
      gradeSelects[i].selectedIndex = 0; // Set grade select to the first option
    }

    resultInput.value = ''; // Clear the result input
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
