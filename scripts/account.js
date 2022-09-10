  checkAllowed();
noerror("all")
function isSpecial(str, unwantednum, unwantedspace) {
  var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/;
  if (unwantednum == true) {
    specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1-9]/;
  }
  if (unwantedspace == true) {
    var space = /[\s]/
    if (space.test(str)) {
      return false
    }
  }
  return specialChars.test(str);
}
function TogglePassword() {
  var input = document.getElementById("password");
  var showpass = document.getElementById("showpass");
  if (input.type === "password") {
    input.type = "text";
    showpass.className = "check checktrue"
  } else {
    input.type = "password";
    showpass.className = "check"
  }
}
var terms = true
function ToggleTOS() {
  var termcheck = document.getElementById("toscheck");
  if (terms) {
    terms = false;
    termcheck.className = "check checktrue"
  } else {
    terms = true;
    termcheck.className = "check";
  }
}
function changeSubmit(submit, ft) {
  var btn = document.getElementById(submit);
  btn.disabled = ft;
}
function checkAllowed() {
  if (eid("pageisregister") == null) {
    return
  }
  var pass = eid("password").value.trim();
  var user = eid("username").value.trim();
  var lencheck = eid("passlencheck");
  var spclcheck = eid("passcheckspecial");
  var passlongcheck = eid("passlenchecklong")
  var usrlencheck = eid("usrlencheck");
  var usrlong = eid("usrlenchecklong")
  var usrspclcheck = eid("userspecialcheck");
  var allowable = true
  if (pass.length >= 8) {
    lencheck.className = "noncheck nchecktrue";
  } else {
    allowable = false;
    lencheck.className = "noncheck";
  }
  if (pass.length <= 64) {
    passlongcheck.className = "noncheck nchecktrue";
  } else {
    allowable = false;
    passlongcheck.className = "noncheck";
  }
  if (isSpecial(pass, true, true)) {
    spclcheck.className = "noncheck nchecktrue"
  }
  else {
    allowable = false;
    spclcheck.className = "noncheck"
  }
  
  if (user.length >= 4) {
    usrlencheck.className = "noncheck nchecktrue";
  } else {
    allowable = false;
    usrlencheck.className = "noncheck";
  }
  if (user.length < 24) {
    usrlong.className = "noncheck nchecktrue";
  } else {
    allowable = false;
    usrlong.className = "noncheck";
  }
  if (isSpecial(user, true, true) == false) {
    usrspclcheck.className = "noncheck nchecktrue"
  }
  else {
    allowable = false;
    usrspclcheck.className = "noncheck"
  }
  if (terms == false && allowable == true) {
    allowable = true;
  } else {
    allowable = false;
  }
  if (allowable) {
    changeSubmit("register", false);
  }
  else {
    changeSubmit("register", true)
  }
}
function ToggleDropdown(element, button) {
  var dropdown = document.getElementById(element);
  var btn = document.getElementById(button);
  dropdown.classList.toggle("started")
  if (dropdown.className == "containcheck2 started") {
    btn.innerText = "▲"
  }
  else {
    btn.innerText = "▼"
  }
}
function noerror(type) {
  if (eid("pageisregister") == null) {
    return
  }
  label = type.trim() + "error"
  if (type == "all") {
    var email = eid("emailerror")
    var username = eid("usernameerror")
    var password = eid("passworderror")
    email.className = "error unknown";
    username.className = "error unknown"
    password.className = "error unknown"
  } else {
    label.className = "error unknown"
  }
}
function error(type) {
  label = type.trim() + "error"
  if (label != null) {
    label.className = "error"
    return true
  }
  else {
    return false
  }
}

function eid(e) {
  return document.getElementById(e)
}

window.addEventListener("message", (event) => {
  if (event.origin !== "http://127.0.0.1:5000") {
    return
  }
  console.log("got through")
  console.log(event.data)
  
}, false);
