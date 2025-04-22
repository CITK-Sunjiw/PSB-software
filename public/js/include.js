// Load header and footer into current page
window.addEventListener('DOMContentLoaded', () => {
    includeHTML("header", "partials/header.html");
    includeHTML("footer", "partials/footer.html");
  });
  
  function includeHTML(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }
  