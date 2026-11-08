const livres =[{
    Titer: "Le Petit Prince",
    Auteur: "Antoine",
    prix: 50
},
{
    Titer: "L'Étranger",
    Auteur: "Albert Camus",
    prix: 60
},
{
    Titer: "Les Misérables",
    Auteur: "Victor Hugo",
    prix: 80
}]


const  listlivres = document.getElementById("card")
const nbr = document.getElementById("nbr")

livres.forEach(livre => {
    listlivres.innerHTML +=
    `<div class=" border rounded-2xl flex flex-col w-70 h-30 bg-sky-200 gap-3 p-3">
            <h1 class="font-bold text-2xl">Titre: ${livre.Titer}</</h1>
            <p>Auteur: ${livre.Auteur}</</p>
            <p>Prix : ${livre.prix} dh </p>
        </div>`
    
});

nbr.textContent = livres.length
