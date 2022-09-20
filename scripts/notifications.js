function generateStr(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
   return result;
}
var foreground = []
var background = []
function dg() {
  console.log("> Foreground >", foreground)
  console.log("< Background <", background)
  return "debug"
}
async function putToBackground(element) {
  var elem = eid(element);
  elem.style.zIndex = "90"
  elem.classList.add("background")
  count = elem.querySelector(".count")
  background = background.concat(elem.id)
}
async function putToForeground() {
  if (background.length == 0) {
    foreground = []
    return
  }
  var elem = eid(background[0])
  elem.style.zIndex = "105"
  elem.classList.remove("background")
  count = elem.querySelector(".count")
  foreground = []
  foreground = foreground.concat(elem.id)
  background.shift()
}
async function notify(title, message) {
  if (foreground.length > 0) {
    for (let i = 0; i < foreground.length; i++) {
      putToBackground(foreground[i])
    }}
  var uncopied = eid('notification')
  var notif = uncopied.cloneNode(true);
  var special = generateStr(8);
  notif.id = special;
  document.body.appendChild(notif);
  foreground = [];
  foreground = foreground.concat(notif.id);
  notif.querySelector(".title").innerText = title
  notif.querySelector(".message").innerText = message
  await delay();
  notif.className = "notification open";
}
async function closeNotify(notif) {
  putToForeground()
  await delay()
  eid(notif).className = "notification close"
}
