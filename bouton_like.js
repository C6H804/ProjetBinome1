const likeCount = document.querySelector(".compteur");
let like = 0;

function btn_like(){
    like++;
    console.log(like);
    document.querySelector(".compteur").textContent = like; 
    messageSpecial(); 
}
function messageSpecial(){
    if (like >5){
        alert("Vous aimez vraiment cet article !");
        return;
    }
}
// saut de page a retirer je sais pas comment faire au moment du click like


