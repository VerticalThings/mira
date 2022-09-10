//Section: Cookies//
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//Section: Welcome text//
if (document.getElementById("welcome") != null) {
  let text = document.getElementById("welcome")
  if (getCookie("visited") == "yes") {
    text.innerText = "Welcome Back!"
  }}
if (getCookie("visited") == null) {
  document.cookie="visited=yes"}
//Section: Theme//
let dd;
var checkDone = function() {
  if (menuloaded) {
    dd = eid("themeoption");
    decideTheme()
    clearInterval(interval1);
  }
  if (eid("pageissettings")) {
    theme = getCookie("theme");
    check = eid(theme + "switch")
    check.classList.toggle("checktrue")
  }
}
const interval1 = setInterval(checkDone, 1);
function decideTheme() {
  var ss = document.getElementById("themestylesheet");
  theme = getCookie("theme");
  if (theme.length == 0) {
    document.cookie = "theme=light"
    location.reload()
  }
  if (theme == "undefined") {
    document.cookie = "theme=light"
    location.reload()
  }
  ss.href = "../graphics/"+theme+"-theme.css";
}
var themeselected;
function lightmode() {
  var lswitch = eid("lightswitch");
  var dswitch = eid("darkswitch");
  lswitch.className = "check checktrue"
  if (lswitch.className == "check checktrue") {
    themeselected = "light"
    dswitch.className = "check"
  }
}
function darkmode() {
  var lswitch = eid("lightswitch");
  var dswitch = eid("darkswitch");
  dswitch.className = "check checktrue"
  if (dswitch.className == "check checktrue") {
    themeselected = "dark"
    lswitch.className = "check"
  }
}
function requestsave() {
  document.cookie = "theme=" + themeselected;
  location.reload();
};
//Done//
