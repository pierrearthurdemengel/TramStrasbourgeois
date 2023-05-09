function init() {
  const parcThabor = {
    lat: 48.1143,
    lng: 2.1643,
  };
  const zoomLevel = 7;
  const map = L.map("map").setView([parcThabor.lat, parcThabor.lng], zoomLevel);

  const mainLayer = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 19,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoidGNob3VwaTQ1NiIsImEiOiJjbGhhbTVidzAwaXg4M2ZzMmR1djc2ZzloIn0.5UFfKXSKgsaAAQVDQWWenA",
    }
  );

  mainLayer.addTo(map);

  // Définition de l'icône personnalisée pour le marqueur
  const customIcon = L.icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  // Définition du tableau d'arrêts B à afficher sur la carte
  const points = [
    // Ligne A
    { name: "Ligne A - Parc des Sports", lat: 48.57606, lng: 7.759417 },
    { name: "Ligne A - Hautepierre Maillon", lat: 48.602103, lng: 7.731926 },
    { name: "Ligne A - Ducs d'Alsace", lat: 48.600667, lng: 7.752824 },
    { name: "Ligne A - Hôpital de Hautepierre", lat: 48.607088, lng: 7.747933 },
    { name: "Ligne A - Saint-Florent", lat: 48.578808, lng: 7.741693 },
    { name: "Ligne A - Le Galet", lat: 48.585585, lng: 7.746405 },
    { name: "Ligne A - Hohwart", lat: 48.582775, lng: 7.750778 },
    { name: "Ligne A - Rotonde", lat: 48.585983, lng: 7.755574 },
    { name: "Ligne A - Landsberg", lat: 48.602661, lng: 7.795833 },
    { name: "Ligne A - Porte de l'Hôpital", lat: 48.581511, lng: 7.747126 },
    { name: "Ligne A - Grand'Rue", lat: 48.584433, lng: 7.750234 },
    { name: "Ligne A - Homme de Fer", lat: 48.584744, lng: 7.742047 },
    { name: "Ligne A - Langstross - Grand'Rue", lat: 48.583477, lng: 7.747295 },
    { name: "Ligne A - Place d'Islande", lat: 48.581113, lng: 7.757205 },
    { name: "Ligne A - Etoile Bourse", lat: 48.584987, lng: 7.742968 },
    { name: "Ligne A - Etoile Polygone", lat: 48.585776, lng: 7.747404 },
    { name: "Ligne A - Leclerc", lat: 48.603496, lng: 7.748876 },
    { name: "Ligne A - Colonne", lat: 48.591467, lng: 7.751127 },
    { name: "Ligne A - Baggersee", lat: 48.601337, lng: 7.773082 },
    { name: "Ligne A - Emile Mathis", lat: 48.585605, lng: 7.73436 },
    { name: "Ligne A - Lycée Couffignal", lat: 48.602492, lng: 7.768479 },
    { name: "Ligne A - Krimmeri - Stade de la Meinau",lat: 48.579076,lng: 7.74053},
    {name: "Ligne A - Illkirch Lixenbuhl", lat: 48.528695, lng: 7.724287 },

    // Ligne B
    {name: "Ligne B - Le Ried", lat: 48.635355, lng: 7.759321},
    {name: "Ligne B - Pont Phario",lat: 48.631696,lng: 7.757646},
    {name: "Ligne B - Le Marais",lat: 48.625781,lng: 7.752639},
    {name: "Ligne B - Futura Glacière",lat: 48.617797,lng: 7.750078},
    {name: "Ligne B - Rives de l’Aar",lat: 48.610558,lng: 7.746754},
    {name: "Ligne B - Wacken",lat: 48.598012,lng: 7.751138},
    {name: "Ligne B - Lycée Kléber",lat: 48.586607,lng: 7.75109},
    {name: "Ligne B - Parc du Contades",lat: 48.583273,lng: 7.7533},
    {name: "Ligne B - République",lat: 48.582821,lng: 7.729894},
    {name: "Ligne B - Broglie",lat: 48.583654,lng: 7.745365},
    {name: "Ligne B - Homme de Fer",lat: 48.583262,lng: 7.741963},
    {name: "Ligne B - Alt Winmärik",lat: 48.583219,lng: 7.732933},
    {name: "Ligne B - Faubourg National", lat: 48.582692, lng: 7.727986 },
    {name: "Ligne B - Gare Centrale",lat: 48.585357,lng: 7.738545},
    {name: "Ligne B - Ancienne Synagogue - Les Halles",lat: 48.584131,lng: 7.750385},
    {name: "Ligne B - Place des Halles - Centre Commercial",lat: 48.580508, lng: 7.745397 },
    {name: "Ligne B - Musée d’Art Moderne - Laiterie",lat: 48.581317,lng: 7.731234 },
    {name: "Ligne B - Montagne Verte",lat: 48.576282,lng: 7.724414},
    {name: "Ligne B - Elsau",lat: 48.568379,lng: 7.701326 },
    {name: "Ligne B - Schluthfeld",lat: 48.566835,lng: 7.70866},
    {name: "Ligne B - Jean Jaurès",lat: 48.567756,lng: 7.718373},
    {name: "Ligne B - Aristide Briand",lat: 48.570383,lng: 7.727194},
    {name: "Ligne B - Ostwald Hôtel de Ville",lat: 48.558486,lng: 7.715798},

    // Ligne C

    { name: "C - Gare Centrale", lat: 48.585071, lng: 7.734798 },
    { name: "C - Faubourg National", lat: 48.583947, lng: 7.738011 },
    { name: "C - Homme de Fer", lat: 48.585054, lng: 7.746247 },
    { name: "C - République", lat: 48.584942, lng: 7.752813 },
    { name: "C - Gallia", lat: 48.584801, lng: 7.757144 },
    { name: "C - Universités", lat: 48.584766, lng: 7.761551 },
    { name: "C - Observatoire", lat: 48.584721, lng: 7.765911 },
    { name: "C - Esplanade", lat: 48.584675, lng: 7.770271 },
    { name: "C - Winston Churchill", lat: 48.583557, lng: 7.774631 },
    { name: "C - Krimmeri-Meinau", lat: 48.579948, lng: 7.778991 },
    { name: "C - Jean Jaurès", lat: 48.576339, lng: 7.783351 },
    { name: "C - Lycée Couffignal", lat: 48.57273, lng: 7.787711 },
    { name: "C - Montagne Verte", lat: 48.569121, lng: 7.792071 },
    { name: "C - Saint-Florent", lat: 48.565512, lng: 7.796431 },
    { name: "C - Neuhof Rodolphe Reuss", lat: 48.561903, lng: 7.800791 },

    // Ligne D
    { name: "D - Poteries", lat: 48.622432, lng: 7.744748 },
    { name: "D - Ducs d’Alsace", lat: 48.619788, lng: 7.738464 },
    { name: "D - Aristide Briand", lat: 48.613211, lng: 7.741405 },
    { name: "D - Marcel Rudloff", lat: 48.605131, lng: 7.745076 },
    { name: "D - Lycée Kléber", lat: 48.598293, lng: 7.750563 },
    { name: "D - Rotonde", lat: 48.593317, lng: 7.760045 },
    { name: "D - Landsberg", lat: 48.588903, lng: 7.769303 },
    { name: "D - Porte de l’Hôpital", lat: 48.583813, lng: 7.774956 },
    { name: "D - Grand’Rue", lat: 48.583488, lng: 7.747156 },
    { name: "D - Homme de Fer", lat: 48.585054, lng: 7.746247 },
    { name: "D - Langstross - Grand’Rue", lat: 48.584338, lng: 7.73774 },
    { name: "D - Place d’Islande", lat: 48.586295, lng: 7.727871 },
    { name: "D - Etoile Bourse", lat: 48.587289, lng: 7.719097 },
    { name: "D - Etoile Polygone", lat: 48.587665, lng: 7.712719 },
    { name: "D - Leclerc", lat: 48.591408, lng: 7.697769 },
    { name: "D - Krimmeri - Stade de la Meinau", lat: 48.594365, lng: 7.686326 },
    { name: "D - Aristide Briand", lat: 48.613211, lng: 7.741405 },
    { name: "D - Jean Jaurès", lat: 48.622155, lng: 7.731661 },
    { name: "D - Schluthfeld", lat: 48.619398, lng: 7.718833 },
    { name: "D - Lycée Jean Monnet", lat: 48.617036, lng: 7.711904 },
    { name: "D - Colonne", lat: 48.616049, lng: 7.702509 },
    { name: "D - Port du Rhin", lat: 48.60127, lng: 7.741027 },
    { name: "D - Kehl Bahnhof", lat: 48.580356, lng: 7.815932 },
    { name: "D - Kehl Rathaus", lat: 48.578039, lng: 7.818956 },

    // Ligne E
    { name: "E - Campus d'Illkirch", lat: 48.528404, lng: 7.715948 },
    { name: "E - Illkirch Lixenbuhl", lat: 48.530178, lng: 7.722412 },
    { name: "E - Colonne", lat: 48.532952, lng: 7.728876 },
    { name: "E - Cours de l'Illiade", lat: 48.535726, lng: 7.73534 },
    { name: "E - Baggersee", lat: 48.5385, lng: 7.741804 },
    { name: "E - Emile Mathis", lat: 48.541274, lng: 7.748268 },
    { name: "E - Lingolsheim Tiergaertel", lat: 48.544048, lng: 7.754732 },
    { name: "E - Lingolsheim Alouettes", lat: 48.546822, lng: 7.761196 },
    { name: "E - Lingolsheim Gare", lat: 48.549596, lng: 7.76766 },
    { name: "E - Wolfisheim Stade", lat: 48.55237, lng: 7.774124 },
    { name: "E - Wolfisheim Mairie", lat: 48.555144, lng: 7.780588 },
    { name: "E - Hohwart", lat: 48.557918, lng: 7.787052 },
    { name: "E - Ducs d'Alsace", lat: 48.560692, lng: 7.793516 },
    { name: "E - Wacken", lat: 48.591408, lng: 7.769303 },
    { name: "E - Parlement Européen", lat: 48.597172, lng: 7.766829 },
    { name: "E - Droits de l'Homme", lat: 48.602936, lng: 7.764355 },
    { name: "E - Lycée Kléber", lat: 48.598293, lng: 7.750563 },
    { name: "E - Parc du Contades", lat: 48.595649, lng: 7.756027 },
    { name: "E - République", lat: 48.584942, lng: 7.752813 },
    { name: "E - Gallia", lat: 48.584801, lng: 7.757144 },
    { name: "E - Palais de la Musique et des Congrès", lat: 48.58466, lng :7.761475},
    { name : "E - Winston Churchill" ,lat :48.583557 ,lng :7.774631},
    {name : "E - Boecklin" ,lat :48.587665,lng :7.778991},
    {name : "E - Robertsau L'Escale" ,lat :48.591773 ,lng :7.783351},

    // Ligne F
    { name: "F - Elsau", lat: 48.562973, lng: 7.708695 },
    { name: "F - Saint-Florent", lat: 48.565747, lng: 7.715159 },
    { name: "F - Montagne Verte", lat: 48.568521, lng: 7.721623 },
    { name: "F - Laiterie", lat: 48.571295, lng: 7.728087 },
    { name: "F - Alt Winmärik", lat: 48.574069, lng: 7.734551 },
    { name: "F - Homme de Fer", lat: 48.583778, lng: 7.745019 },
    { name: "F - Langstross Grand'Rue", lat: 48.581134, lng: 7.750483 },
    { name: "F - Porte de l'Hôpital", lat: 48.57849, lng: 7.755947 },
    { name: "F - Etoile Bourse", lat: 48.575846, lng: 7.761411 },
    { name: "F - Etoile Polygone", lat: 48.573202, lng: 7.766875 },
    { name : "F - Duc d'Alsace" ,lat :48.570558 ,lng :7.772339},
    {name : "F - Aristide Briand" ,lat :48.567914 ,lng :7.777803},
    {name : "F - Comtes" ,lat :48.56527 ,lng :7.783267},
    {name : "F - Place d'Islande" ,lat :48.584662 ,lng :7.768551}
  ];
  // Boucle pour parcourir le tableau de points et générer un marker pour chaque point
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const marker = L.marker([point.lat, point.lng], { icon: customIcon }).addTo(
      map
    );
    marker.bindPopup(point.name);
  }
}
