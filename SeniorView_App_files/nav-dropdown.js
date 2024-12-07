function openNav() {
    document.getElementById("myNav").style.opacity = "0.95";
    document.getElementById("myNav").style.visibility = "visible";
    document.getElementById("closeNav").style.opacity ="1";
    document.getElementById("toggle").style.display ="none";
}

function closeNav() {
    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("myNav").style.visibility = "hidden";
    document.getElementById("closeNav").style.opacity ="0";
    document.getElementById("toggle").style.display ="block";
}
