function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
let menu
let menuloaded = false
var checkNav = function() {
  if (document.getElementById("navmenu") != null) {
    menu = document.getElementById("navmenu")
    menuloaded = true
    clearInterval(interv)
    return true
    
  } else {
    return false
  }
}
const interv = setInterval(checkNav, 1)
async function togglemenuon() {
  document.getElementById("hamburger").innerText = "✖"
  menu.className = "navmenu invertdiv"
}

async function togglemenuoff() {
  document.getElementById("hamburger").innerText = "☰"
  menu.className = "navmenu hiddenmenu invertdiv"
  await delay(950)
  menu.className = "unknown"
}

var menutoggle = false
var available = true

async function ToggleMenu() {
  if (menutoggle == false && available == true) {
    available = false
    menutoggle = true
    togglemenuon()
    await delay(950)
    available = true
  } else {
    if (available == false) {
      return
    }
    available = false
    menutoggle = false
    togglemenuoff()
    await delay(1000)
    available = true
  }
}
function leave() {
  var myWindow = window.open("", "_self");
  myWindow.document.write("");
  myWindow.close()
}
