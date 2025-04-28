// textContent permet de lire le texte en brut ,trim enleve les espaces,split les coupes
function count(){
    const text = document.getElementById("corps_texte_exo").textContent;
    let mot = text.trim().split(" ");
    let countMot= mot.length;
    return countMot;
}
console.log(count());

function date(){
let annee = Number(document.getElementById("date").textContent);
const anneeActuel =new Date().getFullYear();
let resultAnnee = anneeActuel - annee;
document.getElementById("resultat").textContent= "L'article a " + resultAnnee + " ans.";
}
date();

