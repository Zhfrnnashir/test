filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterColumn");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filterShow");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filterShow");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button
var btnContainer = document.getElementsByClassName("filterBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("filterActive");
    current[0].className = current[0].className.replace(" filterActive", "");
    this.className += " filterActive";
  });
}

document.getElementsByClassName('cta-primary')[0].textContent='Turn on the light';
function colorChange() {
   var element = document.getElementsByTagName('body')[0];   
   element.classList.toggle("dark-mode");
   
   var darkBtn = document.getElementsByClassName('cta-primary')[0];
   if(darkBtn.textContent == 'Turn on the light')darkBtn.textContent='Turn off the light';
   else darkBtn.textContent='Turn on the light';
}