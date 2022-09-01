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
//Section: Theme//
let dd;
var checkDone = function() {
  if (menuloaded) {
    console.log("pointer 1");
    dd = document.getElementById("themeoption");
    decideTheme();
    clearInterval(interval1);
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
  ss.href = "../graphics/"+theme+"-theme.css";
  if (document.getElementById("pageissettings") != null) {
    dd.value = theme;
  };
}
function requestsave() {
  var value = dd.value;
  document.cookie = "theme=" + value;
  location.reload();
};
//Done//
