
let nbr = document.getElementById("nbr")

const Augmenter = document.getElementById("Augmenter")
const Diminuer = document.getElementById("Diminuer")
const Réinitialiser = document.getElementById("Réinitialiser")

let compteur = 0
Augmenter.addEventListener("click", () => {
    compteur++
    nbr.textContent = compteur
    if(compteur >= 10){
        nbr.classList.add("text-red-500")
    }
   
})


Diminuer.addEventListener("click", () => {
    if (compteur > 0) {
        compteur--
        nbr.textContent = compteur
    }
    if(compteur <= 10){
        nbr.classList.remove("text-red-500")
    }
   


})



Réinitialiser.addEventListener("click", () => {
        if(compteur > 0){
            nbr.textContent = 0
        }

})
