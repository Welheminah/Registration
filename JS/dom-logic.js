var theButton = document.querySelector(".theButton");
var regNo = document.querySelector(".regNo");
var dispayElement = document.querySelector(".dispay");
var alertElement = document.querySelector(".alert");
var select = document.querySelector(".select");
var show = document.querySelector(".show");
var dispayFilter = document.querySelector(".dispayFilter");


var storePlates = [];
var radio = document.querySelector("input[name='town']:checked");


var regInstance = regPlate();

function theReg() {
var newElement = document.createElement('button');
  newElement.classList.add("btn");

  // var innerT = document.createTextNode(regNo.value);
  //var innerT = document.createTextNode(storePlates[i]);
  if (regInstance.numberPlates(regNo.value) !== false) {
    newElement.innerText = regInstance.numberPlates(regNo.value);
    dispayElement.appendChild(newElement)
  }
  regNo.value = " ";
}

function goFilter(){
  var radio = document.querySelector("input[name='town']:checked");
  var radioBtn = radio.value;
  
  if(radioBtn){
    
    var regFilter = regInstance.filterReg(radioBtn)
    console.log(regFilter);
   for (i = 0; i < regFilter.length; i++) {
  var newElement = document.createElement('button');


      newElement.classList.add("btn");
       newElement.innerText = regFilter[i];
       dispayFilter.appendChild(newElement);
   }
      }
    
    }
function letsUncheck(){
  var radio = document.querySelector("input[name='town']:checked");
    radio.checked = false;
  }    

show.addEventListener('click', goFilter);




theButton.addEventListener('click', theReg);
show.addEventListener('click', letsUncheck)