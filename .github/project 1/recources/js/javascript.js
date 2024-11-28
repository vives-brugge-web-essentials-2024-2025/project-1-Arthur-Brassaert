// Toon de knop na 200px scrollen
window.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 200) { 
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  })