function analyseurDeNotes(arr){
    let sum = 0
    let len = arr.length
    var moyenn = 0
    for(let i = 0; i < len ; i++){
        sum += arr[i]
    }
    moyenn = sum / len 
    if(moyenn >= 10){
        console.log("la moyenne de la classe est supérieure ou égale à 10:", moyenn)
    }
    return moyenn
   
    

}
function meilleurenote(arr){
    let meilleure = 0
    for(let i = 0; i < arr.length; i++){
        if(meilleure < arr[i] ){
            meilleure = arr[i]
        }
        
    
    }
    return meilleure
}
function superieure10(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 10){
            console.log("le notes supérieures ou égales à 10 ",arr[i])
        }
    }
}




let arr = [ 4, 7, 0, 1, 9, 19]
let moyenn = analyseurDeNotes(arr)
console.log("le moyenne :" ,moyenn)
let meilleure = meilleurenote(arr)
console.log("la meilleure de note :" , meilleure)
superieure10(arr)
