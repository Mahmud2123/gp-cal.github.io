document.getElementById("btn-cal").addEventListener("click", () => {
      var selectUnit = document.querySelectorAll('select[id^="unit"]');
     var selectGrade = document.querySelectorAll('select[id^="grade"]');
      var totalUnit = 0;
      var totalGrade = 0;

      for (var i = 0; i < selectUnit.length && i < selectGrade.length; i++) {
        var valueUnit = parseFloat(selectUnit[i].value);
        var valueGrade = parseFloat(selectGrade[i].value);
        if (!isNaN(totalUnit) && !isNaN(totalGrade)) {
          totalUnit += valueUnit;
             totalGrade += valueGrade; 
        }
      }

      var unitBox = document.getElementById("totalUnit");
      unitBox.value = totalUnit;
      var gradeBox = document.getElementById("totalGrade");
      gradeBox.value = totalGrade;
    });
