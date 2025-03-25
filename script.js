  fetch('./navfooter/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Now that the navbar is loaded, run active link check:
      const links = document.querySelectorAll('.navbar__links a');
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    });
