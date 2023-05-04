$(function () {
  // Définir allA... en dehors des fonctions anonymes
  let allA = $("[id*=A_");
  let allB = $("[id*=B_");
  let allC = $("[id*=C_");
  let allD = $("[id*=D_");
  let allE = $("[id*=E_");
  let allF = $("[id*=F_");
  let allG = $("[id*=G_");

  // Stocker une référence au dernier A cliqué
  let lastA = null;
  let lastB = null;
  let lastC = null;
  let lastD = null;
  let lastE = null;
  let lastF = null;
  let lastG = null;
  // A chaque click sur un A_     ///////////////////////////////////////////////////////////////////////////////
  $("[id*=A_").on("click", function () {
    // je selectionne l'arret A_ et je le stocke dans A
    let A = $(this);

    // je récupère son ID
    let AId = $(this)["0"].id;

    // Réinitialiser le dernier A cliqué
    if (lastA != null) {
      lastA.css("fill", "#fff");
    }

    // je les colorises en blanc
    allB.css("fill", "#fff");
    allC.css("fill", "#fff");
    allD.css("fill", "#fff");
    allE.css("fill", "#fff");
    allF.css("fill", "#fff");
    allG.css("fill", "#fff");

    // je colore le A en rouge
    A.css("fill", "rgb(255 0 0)");

    // Stocker une référence au dernier cliqué
    lastA = A;
    

    // afficher les arrets A bien écrit
    AId = AId.replace("A_", "");

    let boucle = true;

    do {
      AId = AId.replace("_", " ");
      // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
      if (AId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text(AId);
    $("#infosB").text("");
    $("#infosC").text("");
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text("");

    console.log(AId);
  });

  // A chaque click sur un B_ //////////////////////////////////////////////////////////////////////////
  $("[id*=B_").on("click", function () {
    // je selectionne l'arret B_ et je le stocke dans B
    let B = $(this);

    // je récupère son ID
    let BId = $(this)["0"].id;

    // Réinitialiser le dernier B cliqué
    if (lastB != null) {
      lastB.css("fill", "#fff");
    }

    // je les colorises en blanc
    allA.css("fill", "#fff");
    allC.css("fill", "#fff");
    allD.css("fill", "#fff");
    allE.css("fill", "#fff");
    allF.css("fill", "#fff");
    allG.css("fill", "#fff");

    // je colore le A en rouge
    B.css("fill", "rgb(255 0 0)");

    // Stocker une référence au dernier cliqué
    lastB = B;
    

    // afficher les arrets A bien écrit
    BId = BId.replace("B_", "");

    let boucle = true;

    do {
      BId = BId.replace("_", " ");
      // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
      if (BId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text(BId);
    $("#infosC").text("");
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text("");

    console.log(BId);
  });

  // A chaque click sur un C_ //////////////////////////////////////////////////////////////////////////////////////////////////
  $("[id*=C_").on("click", function () {
    // je selectionne l'arret C_ et je le stocke dans C
    let C = $(this);

    // je récupère son ID
    let CId = $(this)["0"].id;

    // Réinitialiser le dernier C cliqué
    if (lastC != null) {
      lastC.css("fill", "#fff");
    }

    // je les colorises en Clanc
    allA.css("fill", "#fff");
    allB.css("fill", "#fff");
    allD.css("fill", "#fff");
    allE.css("fill", "#fff");
    allF.css("fill", "#fff");
    allG.css("fill", "#fff");

    // je colore le A en rouge
    C.css("fill", "rgb(255 0 0)");

    // Stocker une référence au dernier cliqué
    lastC = C;
    

    // afficher les arrets A bien écrit
    CId = CId.replace("C_", "");

    let boucle = true;

    do {
      CId = CId.replace("_", " ");
      // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
      if (CId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text("");
    $("#infosC").text(CId);
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text("");

    console.log(CId);
  });

  // A chaque click sur un D_ /////////////////////////////////////////////////////////////////////////////////////////////////
  $("[id*=D_").on("click", function () {
    // je selectionne l'arret D_ et je le stocke dans D
    let D = $(this);

    // je récupère son ID
    let DId = $(this)["0"].id;

    // Réinitialiser le dernier D cliqué
    if (lastD != null) {
      lastD.css("fill", "#fff");
    }

    // je les colorises en Clanc
    allA.css("fill", "#fff");
    allB.css("fill", "#fff");
    allC.css("fill", "#fff");
    allE.css("fill", "#fff");
    allF.css("fill", "#fff");
    allG.css("fill", "#fff");

    // je colore le D en rouge
    D.css("fill", "rgb(255 0 0)");

    // Stocker une référence au dernier cliqué
    lastD = D;
    

    // afficher les arrets D bien écrit
    DId = DId.replace("A_", "");

    let boucle = true;

    do {
      DId = DId.replace("_", " ");
      // prend la valeur de la position dans la chaine et si il n'en trouve pas il met -1
      if (DId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text("");
    $("#infosC").text(CId);
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text("");

    console.log(DId);
  });
  // A chaque click sur un E_  //////////////////////////////////////////////////////////////////////////
  $("[id*=E_]").on("click", function () {
    let E = $(this);
    let EId = $(this)["0"].id;

    allA.css("fill", "#fff");
    allB.css("fill", "#fff");
    allC.css("fill", "#fff");
    allD.css("fill", "#fff");
    allF.css("fill", "#fff");
    allG.css("fill", "#fff");
    E.css("fill", "rgba(0, 0, 255, 0.4)");

    EId = EId.replace("E_", "");
    let boucle = true;
    do {
      EId = EId.replace("_", " ");
      if (EId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text("");
    $("#infosC").text("");
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text("");
    $("#infosE").text(GId);

    console.log(EId);
  });

  // A chaque click sur un F_  //////////////////////////////////////////////////////////////////////////
  $("[id*=F_]").on("click", function () {
    let F = $(this);
    let FId = $(this)["0"].id;

    allA.css("fill", "#fff");
    allB.css("fill", "#fff");
    allC.css("fill", "#fff");
    allD.css("fill", "#fff");
    allE.css("fill", "#fff");
    allG.css("fill", "#fff");
    F.css("fill", "rgba(0, 143, 0, 0.7)");

    FId = FId.replace("F_", "");
    let boucle = true;
    do {
      FId = FId.replace("_", " ");
      if (FId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text("");
    $("#infosC").text("");
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text(FId);
    $("#infosG").text("");

    console.log(FId);
  });

  // A chaque click sur un G_  //////////////////////////////////////////////////////////////////////////
  $("[id*=G_]").on("click", function () {
    let G = $(this);
    let GId = $(this)["0"].id;

    allA.css("fill", "#fff");
    allB.css("fill", "#fff");
    allC.css("fill", "#fff");
    allD.css("fill", "#fff");
    allE.css("fill", "#fff");
    allF.css("fill", "#fff");
    G.css("fill", "rgb(0, 0, 255)");

    GId = GId.replace("G_", "");
    let boucle = true;
    do {
      GId = GId.replace("_", " ");
      if (GId.indexOf("_") == -1) boucle = false;
    } while (boucle);

    $("#infosA").text("");
    $("#infosB").text("");
    $("#infosC").text("");
    $("#infosD").text("");
    $("#infosE").text("");
    $("#infosF").text("");
    $("#infosG").text(GId);

    console.log(FId);
  });
});
