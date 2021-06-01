var theButton = document.querySelector(".theButton");
var regNo = document.querySelector(".regNo");
var dispayElement = document.querySelector(".dispay");
var alertElement = document.querySelector(".alert");

var storePlates = [];


var regInstance = regPlate();

function theReg() {
  // regInstance.numberPlates(regNo.value)



  var newElement = document.createElement('button');

  // var innerT = document.createTextNode(regNo.value);
  //var innerT = document.createTextNode(storePlates[i]);
  if (regInstance.numberPlates(regNo.value) !== false) {
    newElement.innerText = regInstance.numberPlates(regNo.value)
    dispayElement.appendChild(newElement);
  }
  else {
    alertElement.innerHTML = "Enter valid registration";
  }


}


regNo.value = " ";


theButton.addEventListener('click', theReg);