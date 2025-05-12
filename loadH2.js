let sommaire = document.getElementById("sommaire");
let enteteSommaire = document.createElement("a");
enteteSommaire.id = "enteteSommaire";
enteteSommaire.href = "#enteteSommaire";
enteteSommaire.innerHTML = "Sommaire";
sommaire.appendChild(enteteSommaire);
Array.from(document.getElementsByTagName("h2")).forEach((element, index) => {
    console.log(index + " | " + element.innerHTML);
    let a = document.createElement("a");
    a.id = "ancreSommaire" + index;
    a.href = "#" + element.id;
    a.innerHTML = element.innerHTML;
    sommaire.appendChild(a);
});
