const produits = [{
    id: 1,
    nom: "shoes",
    prix: 300,
    catégorie: 14,
},
{
    id: 2,
    nom: "jacket",
    prix: 100,
    catégorie: 16,
},
{
    id: 3,
    nom: "shirt",
    prix: 400,
    catégorie: 17,
},
{
    id: 4,
    nom: "Drees",
    prix: 120,
    catégorie: 18,
},
{
    id: 5,
    nom: "cap",
    prix: 60,
    catégorie: 19,
},
{
    id: 6,
    nom: "pants",
    prix: 800,
    catégorie: 19,
}]


const ProduitsMoins200 = produits.filter(produit => produit.prix > 200)
console.log(ProduitsMoins200)


function rechercherUnProduit(id) {

    const rechercher = produits.find(produit => produit.id === id)
    console.log(rechercher)
}
rechercherUnProduit(2)

function tableaunoms(nom) {
    const noms = produits.map(produit => produit.nom)
    console.log(noms)
}
tableaunoms()

const totalprix = produits.reduce((total, produit) =>  total + produit.prix , 0)
console.log(totalprix)