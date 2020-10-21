// UCFIRST
function ucfirst(chaine){

    if(typeof(chaine)!=="string"  || chaine==="") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);

}


//console.log(ucfirst("Bonjour"));
//console.log(ucfirst("bonjour"));
//console.log(ucfirst("bonjour"));




// CAPITALIZE
function capitalize(chaine){

    if(typeof(chaine)!=="string" || chaine==="") return "";
    
    nouvelle_chaine=chaine.split(" ");
    var chaine_retour="";

    for( let i=0;i<nouvelle_chaine.length;i++){
        
       let mot=ucfirst(nouvelle_chaine[i]);
        chaine_retour=chaine_retour+" "+mot;
    }

    return chaine_retour;
    
}


//console.log(capitalize("salut tout le monde je suis juLes"));



// CAMELCASE
function camelCase(chaine){

    if(typeof(chaine)!=="string" || chaine==="") return "";
    
    nouvelle_chaine=chaine.split(" ");
    var chaine_retour="";

    for( let i=0;i<nouvelle_chaine.length;i++){
        
       let mot=ucfirst(nouvelle_chaine[i]);
        chaine_retour=chaine_retour+mot;
    }

    return chaine_retour;
}

//console.log(camelCase("salut tout le monde je suis jules"));





// SNAKE CASE
function snakeCase(chaine){
    if(typeof(chaine)!=="string" || chaine==="") return "";

    chaine_en_miniscule=chaine.toLowerCase();
    nouvelle_chaine=chaine_en_miniscule.split(" ");
    var chaine_retour="";

    for( let i=0;i<nouvelle_chaine.length;i++){
        
       let mot=nouvelle_chaine[i];
        chaine_retour=chaine_retour+"_"+mot;
    }

    return chaine_retour.slice(1);
}





