const apprenants = [{
    id: 1,
    nom: "aicha",
    age: 24,
    note: 14,
},
{
    id: 2,
    nom: "fatima",
    age: 22,
    note: 16,
},
{
    id: 3,
    nom: "maryam",
    age: 23,
    note: 17,
},
{
    id: 4,
    nom: "safa",
    age: 26,
    note: 18,
},
{
    id: 5,
    nom: "ikram",
    age: 24,
    note: 19,
}]

const apprenant = {
    id: 6,
    nom: "layla",
    age: 24,
    note: 20,
}



apprenants.push(apprenant)
console.log(apprenants)

function modification(id, newnote){
    for(let i = 0; i < apprenants.length; i++){
        if(apprenants[i].id === id){
            apprenants[i].note = newnote
        }
    
    }
    
}

modification(4, 20)
console.log(apprenants)

apprenants.splice(2,1);
console.log(apprenants)


function rechercher(nom){
    for( let i = 0; i < apprenants.length; i++){
        if(apprenants[i].nom === nom){
            return apprenants[i]
        }
    }
}
console.log(rechercher("fatima"))
