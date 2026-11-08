const carte = document.getElementById("carte")
const afficher =document.getElementById("afficher")
const Bisque = document.getElementById("Bisque")
const Pink = document.getElementById("Pink")
const Lavender = document.getElementById("Lavender")
const informations =document.getElementById("informations")


Bisque.addEventListener("click" , () =>{
    carte.classList.remove("bg-[#FFC0CB]","bg-[#E6E6FA]")
    carte.classList.add("bg-[#FFE4C4]")
})

Pink.addEventListener("click" , () => {
    carte.classList.remove("bg-[#FFE4C4]", "bg-[#E6E6FA]")
    carte.classList.add("bg-[#FFC0CB]")

})
Lavender.addEventListener("click" , () => {
    carte.classList.remove("bg-[#FFC0CB]", "bg-[#FFE4C4]")
    carte.classList.add("bg-[#E6E6FA]")

})

afficher.addEventListener("click" , () => {
    informations.classList.toggle("hidden")
    if(informations.classList.contains("hidden")){
        afficher.textContent = "afficher"
    }
    else{
        afficher.textContent = "masquer"

    }

})


