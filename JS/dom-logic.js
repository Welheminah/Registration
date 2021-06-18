var theButton = document.querySelector(".theButton");
var regNo = document.querySelector(".regNo");
var dispayElement = document.querySelector(".dispay");
var alertElement = document.querySelector(".alert");
var select = document.querySelector(".select");
var show = document.querySelector(".show");
var clear = document.querySelector(".clear");
var dispayFilter = document.querySelector(".dispayFilter");



var radio = document.querySelector("input[name='town']:checked");


var regInstance = regPlate();
var storePlatesLocal = regInstance.storings();

if (localStorage["reg"]) {
  storePlatesLocal = JSON.parse(localStorage.getItem("reg"));


  for (var i = 0; i < storePlatesLocal.length; i++) {
    var newElement = document.createElement('button');
    newElement.classList.add("btn");

    newElement.innerText = storePlatesLocal[i];
    dispayElement.appendChild(newElement);

  }
}

function theReg() {
  var newElement = document.createElement('button');
  newElement.classList.add("btn");
  var newElement2 = document.createElement('p');
  

  var ourValue = regInstance.numberPlates(regNo.value);


  if (ourValue === "Invalid regitration, please enter a valid registration eg CA 12345") {
    regNo.value = " ";
    newElement2.classList.add("errorMessages")

    alertElement.appendChild(newElement2);
    alertElement.innerHTML = "Invalid regitration, please enter a valid registration eg CA 12345";
    setTimeout(function () {
      alertElement.innerText = '';
    }, 4000);
    return;

  } else if (ourValue === "The registration entered already exist") {
    regNo.value = " ";
    newElement2.classList.add("errorMessages")
    alertElement.appendChild(newElement2);
    alertElement.innerHTML = "The registration entered already exist";
    setTimeout(function () {
      alertElement.innerText = ''
    }, 4000);
    return;

  }


  newElement.innerText = ourValue;
  dispayElement.appendChild(newElement);

  regNo.value = " ";
  var theReg = JSON.stringify(regInstance.storings());
  localStorage.setItem('reg', theReg);

}



function goFilter() {
  dispayElement.innerHTML = '';
  dispayFilter.innerHTML = '';

  var radio = document.querySelector("input[name='town']:checked");
  var radioBtn = radio.value;
  var beacon = regInstance.filterReg(radioBtn);
  var newElement2 = document.createElement('p');


  if (radioBtn) {

    for (i = 0; i < storePlatesLocal.length; i++) {


      if (storePlatesLocal[i].startsWith(radioBtn)) {
        console.log(storePlatesLocal[i])
        var newElement = document.createElement('button');
        newElement.classList.add("btn");
        newElement.innerText = storePlatesLocal[i];
        dispayFilter.appendChild(newElement);
      } else if (radioBtn === "ALL") {
        var newElement = document.createElement('button');
        newElement.classList.add("btn");
        newElement.innerText = storePlatesLocal[i];
        dispayElement.appendChild(newElement);
      }

      if(beacon.length === 0) {

        newElement2.classList.add("notown")
        dispayFilter.style.fontSize = "1.3rem";
        dispayFilter.style.color = "#2F4F4F";
        dispayFilter.appendChild(newElement2); 
        
        dispayFilter.innerHTML = "No registration for the selected town";
        setTimeout(function () {
          dispayFilter.innerText = ''
        }, 2000);
        return;
      }

    }

  }
}

function clearAll() {
  localStorage['reg'] = "";
  storePlatesLocal = [];
  dispayElement.innerHTML = "";
  dispayFilter.innerHTML = "";
  window.location.reload();
}


function letsUncheck() {
  var radio = document.querySelector("input[name='town']:checked");
  radio.checked = false;
}

show.addEventListener('click', goFilter);
theButton.addEventListener('click', theReg);
show.addEventListener('click', letsUncheck);
clear.addEventListener('click', clearAll);