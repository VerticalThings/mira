function generateStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
async function tryclosing(notification, progressbar) {
  var notif = eid(notification);
  var progressdiv = eid(progressbar);
  var progress = progressdiv.querySelector(".notifyprogress");
}
async function notify(title, message) {
const uncopied = eid('notification')
const notif = uncopied.cloneNode(true);
const id = generateStr(8)
notif.id = id;
document.body.appendChild(notif);
await delay(1);
var ntitle = notif.querySelector(".notiftitle");
var ntext = notif.querySelector(".notiftext");
var nprogress = notif.querySelector(".progressdiv");
ntitle.innerText = title;
ntext.innerText = message;
notif.classList.toggle("opening");
}
async function closenotify(notification) {
  notif = eid(notification);
  notif.classList.toggle("opening")
  notif.classList.toggle("closing")
  await delay(999)
  notify.className = "removeonpile"
}
