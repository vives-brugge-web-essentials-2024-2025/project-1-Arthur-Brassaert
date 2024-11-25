// Toon de knop bij scrollen
window.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 200) { // Toon de knop na 200px scrollen
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  })