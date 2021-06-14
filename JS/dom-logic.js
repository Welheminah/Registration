var theButton = document.querySelector(".theButton");
var regNo = document.querySelector(".regNo");
var dispayElement = document.querySelector(".dispay");
var alertElement = document.querySelector(".alert");
var select = document.querySelector(".select");
var show = document.querySelector(".show");

var dispayFilter = document.querySelector(".dispayFilter");



var radio = document.querySelector("input[name='town']:checked");


// var textInput = regInstance.numberPlates(regNo.value);

var regInstance = regPlate();
var storePlatesLocal = regInstance.storings();

if(localStorage["reg"]){
  // storePlatesLocal.push(regInstance.numberPlates(regNo.value));
  storePlatesLocal = JSON.parse(localStorage.getItem("reg"));


  for (var i = 0; i< storePlatesLocal.length; i++){
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
  storePlatesLocal.push(regInstance);

  if (ourValue === "Invalid regitration, please enter a valid registration eg CA 12345") {
 
    newElement2.classList.add("errorMessages")
    newElement2.innerText = ourValue;
    alertElement.appendChild(newElement2);
    setTimeout(function () {
      newElement2.innerText = ''
    }, 4000);
    return;
  } else if (ourValue === "The registration entered already exist") {
    newElement2.classList.add("errorMessages")
    newElement2.innerText = ourValue;
    alertElement.appendChild(newElement2);
    alert();
    setTimeout(function () {
      newElement2.innerText = ''
    }, 4000);
    return;
  }else if(ourValue === ""){
    setTimeout(function () {
      newElement2.innerText = ''
    }, 4000);
    return "Please enter the registration number";
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
  // newElement.innerText = regInstance.numberPlates(regNo.value);
  var radio = document.querySelector("input[name='town']:checked");
  var radioBtn = radio.value;
  

  if (radioBtn) {
    // var regFilter = regInstance.filterReg(radioBtn)
    // if (radioBtn === "ALL") { // storePlatesLocal
    //   newElement.innerText = storePlatesLocal;
    //   dispayFilter.appendChild(newElement);

    // }
    // if(radioBtn ==="ALL"){
    //   for (i = 0; i < storePlatesLocal.length; i++) {
    //     var newElement = document.createElement('button');
    //     newElement.classList.add("btn");
       
    //     newElement.innerText = storePlatesLocal[i];
    //     dispayFilter.appendChild(newElement);
    //   }
    //   return;
    // }

    for (i = 0; i < storePlatesLocal.length; i++) {
      if(storePlatesLocal[i].startsWith(radioBtn)){
      var newElement = document.createElement('button');
      newElement.classList.add("btn");
     
      newElement.innerText = storePlatesLocal[i];
      dispayFilter.appendChild(newElement);
    }
    }
  }
}


function letsUncheck() {
  var radio = document.querySelector("input[name='town']:checked");
  radio.checked = false;
}

show.addEventListener('click', goFilter);
theButton.addEventListener('click', theReg);
show.addEventListener('click', letsUncheck);