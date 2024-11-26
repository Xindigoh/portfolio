//Avonbourne//

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
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

//Avonwood//

filterSelectionAvw("allAvw")
function filterSelectionAvw(ca) {
  var xa, ia;
  xa = document.getElementsByClassName("filterDivAvw");
  if (ca == "allAvw") ca = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (ia = 0; ia < xa.length; ia++) {
    w3RemoveClass(xa[ia], "showAvw");
    if (xa[ia].className.indexOf(ca) > -1) w3AddClass(xa[ia], "showAvw");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var ia, arr3, arr4;
  arr3 = element.className.split(" ");
  arr4 = name.split(" ");
  for (ia = 0; ia < arr4.length; ia++) {
    if (arr3.indexOf(arr4[ia]) == -1) {
      element.className += " " + arr4[ia];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var ia, arr3, arr4;
  arr3 = element.className.split(" ");
  arr4 = name.split(" ");
  for (ia = 0; ia < arr4.length; ia++) {
    while (arr3.indexOf(arr4[ia]) > -1) {
      arr3.splice(arr3.indexOf(arr4[ia]), 1);
    }
  }
  element.className = arr3.join(" ");
}