document.getElementById("btn-cal").addEventListener("click", () => {
      var selectUnit = document.querySelectorAll('select[id^="unit"]');
      var sum = 0;

      for (var i = 0; i < selectUnit.length; i++) {
        var value = parseFloat(selectUnit[i].value);
        if (!isNaN(value)) {
          sum += value;
        }
      }

      var unitBox = document.getElementById("totalUnit");
      unitBox.value = sum;
    });
