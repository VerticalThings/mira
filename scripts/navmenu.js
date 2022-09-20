function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
let menu
let menuex
let menuloaded = false
var checkNav = function() {
  if (document.getElementById("navmenu") != null) {
    menu = document.getElementById("navmenu")
    menuex = document.getElementById("navmenuex")
    menubutton = document.getElementById("navmenubtntext")
    menu.classList.remove("unknown")
    menuex.classList.remove("unknown")
    menuloaded = true
    clearInterval(interv)
    return true
  } else {
    return false
  }
}
const interv = setInterval(checkNav, 1)

async function ToggleMenu(btn) {
  menu.classList.toggle("open")
  menuex.classList.toggle("open")
  menubutton.classList.toggle("icon-bars")
  menubutton.classList.toggle("icon-xmark")
}
function leave() {
  var myWindow = window.open("", "_self");
  myWindow.document.write("");
  myWindow.close()
}
