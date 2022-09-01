function loadHtml(id, page) {
  fetch(page)
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector(id).innerHTML = body + document.querySelector(id).innerHTML
  });
}
window.addEventListener('load', function() {
  loadHtml("#bodyid", "../scripts/navbar.html");
})
