function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = Number(num1) + Number(num2);
    document.getElementById("result").value = result;
    document.getElementById("result").style.display="inline-block" 
  }
  
  function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = Number(num1) - Number(num2);
    document.getElementById("result").value = result;
    document.getElementById("result").style.display="inline-block" 
  }
  
  function clearResult() {
    document.getElementById("result").style.display="none" 
  }