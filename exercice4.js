//question1
function additionner(...nombres){
    let somme = 0
    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
        
    }
    return somme;
}

console.log(additionner(2,3))
console.log(additionner(1, 2, 3, 4, 5))
console.log(additionner(5, 10, 15))

//question3
 function creerFiche(nom,filiere,...competences){
    return{
        nom: nom,
        filiere: filiere,
        competences: competences
    }
 }

 console.log("question 3:")
 console.log(creerFiche("Oumou", "GL", "Javascript", "SQL","HTML"))

 