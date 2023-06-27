var selectUnit = (document.getElementById("unit1");

var selectGrade4 = parseFloat(document.getElementById("grade").value);


document.getElementById("btn-cal").addEventListener("click", ()=>{
  var sum = 0;
  for (var i = 0; i < selectUnit.length; i++) {
        var value = parseFloat(selectUnit[i].value);
        if (!isNaN(value)) {
          sum += value;
          var totalUnits = sum;
        }
      }

  
  var unitBox = document.getElementById("totalUnit");
  unitBox.value = totalUnits
      var totalGrades =  selectGrade1 + selectGrade2 + selectGrade3 + selectGrade4 + selectGrade5
var gradeBox = document.getElementById("totalGrade");
  gradeBox.value = totalGrades
  var UnitGrade = totalUnits * totalGrades
  var gpa = UnitGrade / totalUnits;

      var result = document.getElementById("result");
      result.value = gpa.toFixed(2); 

});
