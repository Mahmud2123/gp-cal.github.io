var selectUnit1 = parseFloat(document.getElementById("unit1").value);
var selectUnit2 = parseFloat(document.getElementById("unit2").value);
var selectUnit3 = parseFloat(document.getElementById("unit3").value);
var selectUnit4 = parseFloat(document.getElementById("unit4").value);
var selectGrade5 = parseFloat(document.getElementById("grade5").value);
var selectGrade1 = parseFloat(document.getElementById("grade1").value);
var selectGrade2 = parseFloat(document.getElementById("grade2").value);
var selectGrade3 = parseFloat(document.getElementById("grade3").value);
var selectGrade4 = parseFloat(document.getElementById("grade4").value);


document.getElementById("btn-cal").addEventListener("click", ()=>{
  var totalUnits = selectUnit1 + selectUnit2 + selectUnit3 + selectUnit4;
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
