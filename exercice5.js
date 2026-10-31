const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "fall",
    notes: [13, 16, 12]
    filiere: "IAGE"
}
// quetsion 1
function extraireIdentite(etudiant){
    const { prenom, nom, filiere } = etudiant
    return {
        prenom,
        nom,
        filiere
    }
}
console.log(extraireIdentite(etudiantL2))

//question2

function calculerMoyenneNotes(notes) {
    if (notes.lenght === 0) {
        return 0;

    }
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.lenght
}

console.log(calculerMoyenneNotes(etudiantL2.notes))
console.log(calculerMoyenneNotes([]))
