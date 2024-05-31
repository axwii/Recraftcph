// // Initialiserer slideIndex til 1, som betyder at den første slide vises som standard
// let slideIndex = 1;
// showSlides(slideIndex);

// // Funktion til at skifte til næste/forrige slide
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Funktion til at skifte til en specifik slide baseret på thumbnail-klik
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // Funktion til at vise slides og håndtere navigation
// function showSlides(n) {
//   let i;
//   // Henter alle slides og dots elementer
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  
//   // Hvis n er større end antallet af slides, sæt slideIndex til 1 (loop tilbage til start)
//   if (n > slides.length) {slideIndex = 1}
//   // Hvis n er mindre end 1, sæt slideIndex til antallet af slides (loop tilbage til slut)
//   if (n < 1) {slideIndex = slides.length}
  
//   // Gør alle slides usynlige
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   // Fjerner "active" klassen fra alle dots
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  
//   // Gør den aktuelle slide synlig
//   slides[slideIndex-1].style.display = "block";
//   // Tilføjer "active" klassen til den aktuelle dot
//   dots[slideIndex-1].className += " active";
// }

/* Når brugeren klikker på knappen, skiftes der mellem at vise og skjule dropdown-indholdet */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Luk dropdown-menuen hvis brugeren klikker udenfor den
window.onclick = function(event) {
  // Tjekker om det klikkede element ikke er knappen
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    // Gå igennem alle dropdowns og fjern "show" klassen fra de åbne dropdowns
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}