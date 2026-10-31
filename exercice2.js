const etudiant = {
    id: 2026
    nom: "Fall"
    prenom: "Oumou"
    filiere: "GL"
    niveau: "L2"
    ville: "Dakar"
};
const resultats = [15, 11, 17, 13, 16]
// question 1
const { nom, prenom, filiere} = etudiant
// question 2
const {niveau: classe } = etudiant
//question3
const [premiere, deuxieme, , , derniere] = resultats
//question4
const [note1, , note3] = resultats
// question5
const {email = "non renseigné" } = etudiant
//question 6
console.log("Nom : ", nom);
console.log("Prenom : ", prenom);
console.log("Filiere : ", filiere);
console.log("Classe : ", classe);
console.log("Premiere note : ", premiere);
console.log("Deuxieme note: ", deuxieme);
console.log("Derniere note ", derniere);
console.log("Note1 : ", note1);
console.log("Note2 : ", note3);
console.log("Email : ", email);

console.log('Je mappelle ${prenom} ${nom}, je suis en filière ${filiere} et en classe ${classe}.')