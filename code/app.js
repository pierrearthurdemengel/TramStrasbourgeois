$(function(){

    // Définir allA en dehors des fonctions anonymes
    let allA = $('[id*=A_');
    let allD = $('[id*=D_');

    // A chaque click sur un A_
    $('[id*=A_').on('click',function(){

        // je selectionne l'arret A_ et je le stocke dans A
        let A = $(this);

        // je récupère son ID
        let AId = $(this)["0"].id;

        // je les colorises en blanc
        allD.css('fill', '#fff');
        allA.css('fill', '#fff');
        // je colore le D en vert
        A.css('fill', 'rgb(255 0 0)');

        // afficher les arrets D bien écrit
        AId = AId.replace('A_', '');

        let boucle = true;

        do{
            AId = AId.replace('_', ' ');
            // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
            if(AId.indexOf('_') == -1)
                boucle = false;

        }while(boucle);

        $('#infosA').text(AId);

        console.log(AId);
    });

    // A chaque click sur un D_
    $('[id*=D_').on('click',function(){

        // je selectionne l'arret D_ et je le stocke dans D
        let D = $(this);

        // je récupère son ID
        let DId = $(this)["0"].id;

        // je les colorises en blanc
        allD.css('fill', '#fff');
        allA.css('fill', '#fff');

        // je colore le D en vert
        D.css('fill', 'rgb(0 255 78)');

        // afficher les arrets D bien écrit
        DId = DId.replace('D_', '');

        let boucle = true;

        do{
            DId = DId.replace('_', ' ');
            // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
            if(DId.indexOf('_') == -1)
                boucle = false;

        }while(boucle);

        $('#infosD').text(DId);

        console.log(DId);
    });
});
