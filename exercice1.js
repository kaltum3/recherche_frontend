function calculerMoyenne(note1, note2, note3){
    return (note1 + note2 + note3) / 3
}
function estAdmis(moyenne){
    return moyenne > 10
}
function calculerPrixTTC(prixHT, tauxTVA = 0.18){
    return prixHT * (1 + tauxTVA)
}
const conversionMinutes = (heures) =>heures * 60
console.log (calculerMoyenne(12, 14, 16))
console.log(estAdmis(12))
console.log(calculerPrixTTC(10000))
console.log(conversionMinutes(2))
