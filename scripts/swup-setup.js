const swup = new Swup()
swup.on('contentReplaced', function() {
  checkDone();
  checkAllowed();
  noerror("all");
})
