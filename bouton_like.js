const likeCount = document.querySelector(".compteur");
let like = 0;
let messageAffiche = false;

function btn_like(){
    like++;
    console.log(like);
    document.querySelector(".compteur").textContent = like; 
    messageSpecial(); 
}
function messageSpecial(){
    if (like >5 && !messageAffiche){
        alert("Vous aimez vraiment cet article !");
        messageAffiche =true;
        return;
    }        
    }
// messageAffiche definie en faux en status de base passe en vrai apres alert
// saut de page a retirer je sais pas comment faire au moment du click like


