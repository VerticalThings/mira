function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
logostartup()
async function logostartup() {
  await delay(2500);
}
const menu = document.getElementById("navmenu")
async function togglemenuon() {
  document.getElementById("hamburger").innerText = "X"
  menu.className = "navmenu"
}
async function togglemenuoff() {
  document.getElementById("hamburger").innerText = "☰"
  menu.className = "hiddenmenu"
  await delay(1000)
  menu.className = "unknown"
}
var menutoggle = false
var available = true
async function ToggleMenu() {
  if (menutoggle == false && available == true) {
    available = false
    menutoggle = true
    togglemenuon()
    await delay(1000)
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
