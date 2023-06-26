let unit = parseFloat(document.getElementById("unit").value);
let grade = parseFloat(document.getElementById("grade").value);
      

document.getElementById("btn-cal").addEventListener("click", ()=>{
  var totalUnits = unit1 + unit2 + unit3 + unit4 + unit5 + unit6 + unit7 + unit8 + unit9+ unit10;
      var totalGrades = (grade1 * unit1) + (grade2 * unit2) + (grade3 * unit3) + (grade4 * unit4) +  (grade5 * unit5) + (grade6 * unit6) + (grade7 * unit7) + (grade8 * unit8) + (grade9 * unit9) + (grade10 * unit10);
var gpa = totalGrades / totalUnits;

      var result = document.getElementById("result");
      result.value = "GPA: " + gpa.toFixed(2); 

});
