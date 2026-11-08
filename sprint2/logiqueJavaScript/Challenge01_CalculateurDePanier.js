let prix1 = 50
let quantite1 = 3

let prix2 = 80
let quantite2 = 5

let prix3 = 100
let quantite3 = 2



let produits1 = prix1 * quantite1
let produits2 = prix2 * quantite2
let produits3 = prix3 * quantite3


let total = produits1 + produits2 + produits3
console.log("le montant : " , total)
if(total > 500){
    let totalfinal = total - (total * 10)/100
    console.log("le montant final : ",totalfinal)
}


