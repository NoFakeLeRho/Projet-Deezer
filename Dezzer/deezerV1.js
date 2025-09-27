const lecteur = document.getElementById("lecteur");
const images = document.querySelectorAll(".music img");
let musiqueActuelle = null;

    images.forEach(img => {
      img.addEventListener("click", () => {
        const son = img.getAttribute("data-audio");


        if (musiqueActuelle === son) {
          if (lecteur.paused) {
            lecteur.play();  
          } else {
            lecteur.pause();  
          }
        } else {

          lecteur.src = son;
          lecteur.play();
          musiqueActuelle = son;
        }
      });
    });