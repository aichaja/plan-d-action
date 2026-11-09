const champ = document.getElementById("champ")
const button = document.getElementById("button")

const element = document.getElementById("element")



button.addEventListener("click", () => {
    const text = champ.value;

    if(text === ""){
        return
    }
    element.innerHTML +=
    `<div class="list  flex  gap-6 justify-center items-center">
        <li class="input w-60 ">${text}</li>
        <button  class="supprime  border rounded-xl w-20 h-10 ">supprimé</button>
        <button class="marque border rounded-xl w-20 h-10 ">marqué</button>
    </div>`

   
    

    
   
        
    

})



