function openCity2(evt2, cityName2) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active2", "");
  }
  document.getElementById(cityName2).style.display = "block";
  evt2.currentTarget.className += " active2";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();
