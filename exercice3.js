const groupeA = ["Amsatou", "Mareme","Ndaraw"]
const groupeB = ["Oumou", "Mouhamed"] 
const etudiantBase = {
    nom: "Diop"
    filiere: "GL"
    niveau: "L2"
}
//question1
const tousLesEtudiants = [...groupeA, ...groupeB]
console.log("1. tous les etudiants : ", tousLesEtudiants)

//question2
const copieGroupeA = [...groupeA, "Cheikh"];
console.log("2. Copie du groupe A: ", copieGroupeA)
console.log("Groupe A original: ", groupeA)

//question3
const etudiantCompmlet = {
    ...etudiantBase,
    age: 22,
    ville:"Dakar"

}
console.log("3. Etudiant complet: ", etudiantCompmlet)

//question4
const etudiantL3 = {
    ...etudiantBase,
    niveau: "L3"
}
console.log("4. etudiant niveau L3: ", etudiantL3)
console.log("Etudiant original: ", etudiantBase)                                  

//questioin 5
const contact = {
    telephone: "703167316"
    Ville: "Thies"
}
const profil = {
    ...cordonnees,
    ...contact
}
console.log("5. profil : ", profil)