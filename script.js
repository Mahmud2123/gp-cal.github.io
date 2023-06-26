var unit0 = parseFloat(document.getElementById("unit0").value);
var grade1 = parseFloat(document.getElementById("grade1").value);
var unit1 = parseFloat(document.getElementById("unit1").value);
var grade2 = parseFloat(document.getElementById("grade2").value);
var unit2 = parseFloat(document.getElementById("unit2").value);
var grade3 = parseFloat(document.getElementById("grade3").value);
var unit3 = parseFloat(document.getElementById("unit3").value);
var grdae4 = parseFloat(document.getElementById("grade4").value);
var unit4 = parseFloat(document.getElementById("unit4").value);
var grade5 = parseFloat(document.getElementById("grade5").value);


document.getElementById("btn-cal").addEventListener("click", ()=>{
  var totalUnits = unit1 + unit2 + unit3 + unit4;
      var totalGrades = (grade1 * unit1) + (grade2 * unit2) + (grade3 * unit3) + (grade4 * unit4) +  (grade5 * unit5) + (grade6 * unit6) + (grade7 * unit7) + (grade8 * unit8) + (grade9 * unit9) + (grade10 * unit10);
var gpa = totalGrades / totalUnits;

      var result = document.getElementById("result");
      result.value = "GPA: " + gpa.toFixed(2); 

});
