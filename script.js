
    const resultInput = document.getElementById('result');

    function appendValue(val) {
      if (resultInput.value === "0") {
        resultInput.value = val;
      } else {
        resultInput.value += val;
      }
    }

    function clearResult() {
      resultInput.value = '';
    }

    function calculate() {
      try {
        resultInput.value = eval(resultInput.value);
      } catch {
        resultInput.value = 'Error';
      }
    }

    function toggleTheme() {
      document.body.classList.toggle('light-mode');
    }
