function ucfirst(chaine){

    if(typeof(chaine)!=="string"  || chaine==="") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);

}


console.log(ucfirst("Bonjour"));
console.log(ucfirst("bonjour"));
console.log(ucfirst("bonjour"));