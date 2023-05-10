function init() {
  const parcThabor = {
    lat: 48.584858,
    lng: 7.735531,
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
    { name: "Ligne A - Parc des Sports", lat: 48.598579, lng: 7.694158 },
    { name: "Ligne A - Le Galet", lat: 48.596098, lng: 7.698652 },
    { name: "Ligne A - Cervantès", lat: 48.593269, lng: 7.698902 },
    { name: "Ligne A - Dante", lat: 48.591238, lng: 7.702837 },
    { name: "Ligne A - Hôpital de Hautepierre", lat: 48.591572, lng: 7.706823 },
    { name: "Ligne A - Ducs d'Alsace", lat: 48.590162, lng: 7.715290 },
    { name: "Ligne A - Saint-Florent", lat: 48.591591, lng: 7.720319 },
    { name: "Ligne A - Rotonde", lat: 48.591864, lng:7.724911 },
    { name: "Ligne A - Gare centrale", lat: 48.584858, lng:7.735531  },
    { name: "Ligne A - Ancienne Synagogue / Les Halles", lat: 48.585280, lng:7.742432  },
    { name: "Ligne A - Homme de Fer", lat: 48.584079, lng: 7.744578 },
    { name: "Ligne A - Langstross - Grand'Rue", lat: 48.581470, lng: 7.746296 },
    { name: "Ligne A - Porte de l'Hôpital", lat: 48.578149, lng: 7.750123 },
    { name: "Ligne A - Etoile Bourse", lat: 48.574481, lng: 7.753562 },
    { name: "Ligne A - Schluthfeld", lat: 48.568557, lng: 7.751680 },
    { name: "Ligne A - Krimmeri - Stade de la Meinau",lat: 48.561895,lng: 7.752252 },
    { name: "Ligne A - Lycée Couffignal", lat: 48.558782, lng: 7.749177 },
    { name: "Ligne A - Emile Mathis", lat: 48.553156, lng: 7.744235 },
    { name: "Ligne A - Hohwart", lat: 48.549261, lng: 7.741598 },
    { name: "Ligne A - Baggersee", lat: 48.544956, lng: 7.737884 },
    { name: "Ligne A - Colonne", lat: 48.538082, lng: 7.733537 },
    { name: "Ligne A - Leclerc", lat: 48.534441, lng: 7.734430 },
    { name: "Ligne A - Campus d'Illkirch ", lat: 48.528695, lng: 7.732819 },
    { name: "Ligne A - Illkirch Lixenbuhl", lat: 48.529927, lng: 7.724279 },
    { name: "Ligne A - Parc Malraux", lat: 48.526868, lng: 7.720505 },
    { name: "Ligne A - Cour de l'Illiade", lat: 48.527745, lng: 7.710442 },
    { name: "Ligne A - Graffenstaden", lat: 48.524841, lng: 7.708087 },
    
    // Ligne B
    {name: "Ligne B - Hoenheim Gare", lat: 48.628008, lng: 7.758577 },
    {name: "Ligne B - Général de Gaulle", lat: 48.621616, lng: 7.763957 },
    {name: "Ligne B - Le Ried", lat: 48.621380, lng: 7.767749 },
    {name: "Ligne B - Lycée Marc Bloch",lat: 48.616509,lng: 7.767931 },
    {name: "Ligne B - Pont Phario",lat: 48.612919,lng: 7.767149 },
    {name: "Ligne B - Le Marais",lat: 48.609895,lng: 7.765685 },
    {name: "Ligne B - Futura Glacière",lat: 48.605065,lng: 7.759383 },
    {name: "Ligne B - Rives de l’Aar",lat: 48.600740,lng: 7.754580 },
    {name: "Ligne B - Wacken",lat: 48.598617,lng: 7.760639 },
    {name: "Ligne B - Lycée Kléber",lat: 48.594103,lng: 7.757765 },
    {name: "Ligne B - Parc du Contades",lat: 48.590271,lng: 7.755961 },
    {name: "Ligne B - République",lat: 48.586208,lng: 7.754489 },
    {name: "Ligne B - Broglie",lat: 48.584654,lng: 7.749092 },
    {name: "Ligne B - Homme de Fer",lat: 48.584343,lng: 7.744767},
    {name: "Ligne B - Alt Winmärik",lat: 48.583407,lng: 7.740237},
    {name: "Ligne B - Faubourg National", lat: 48.582400, lng: 7.736596 },
    {name: "Ligne B - Musée d'Art Moderne", lat: 48.577902, lng: 7.734045 },
    {name: "Ligne B - Laiterie",lat: 48.575910,lng: 7.731485 },
    {name: "Ligne B - Montagne Verte",lat: 48.574592,lng: 7.727159 },
    {name: "Ligne B - Elsau",lat: 48.567823,lng: 7.726243 },
    {name: "Ligne B - Martin Schongauer",lat: 48.566104,lng: 7.720090 },
    {name: "Ligne B - Elmerforst",lat: 48.563053,lng: 7.711569 },
    {name: "Ligne B - Wihrel",lat: 48.554709,lng: 7.712791 },
    {name: "Ligne B - Ostwald Hôtel de Ville",lat: 48.551019,lng: 7.710051 },
    {name: "Ligne B - Bohrie",lat: 48.549826,lng: 7.702802 },
    {name: "Ligne B - Allouettes",lat: 48.551255,lng: 7.692597},
    
    
    
    // Ligne C
    { name: "Ligne C - Gare centrale", lat: 48.584858, lng:7.735531  },
    { name: "Ligne C - Faubourg de Saverne", lat: 48.585449, lng: 7.740276 },
    { name: "Ligne C - Homme de Fer",lat: 48.584343,lng: 7.744767},
    { name: "Ligne C - Broglie",lat: 48.584652,lng: 7.749086},
    { name: "Ligne C - République", lat: 48.585804, lng: 7.755204 },
    { name: "Ligne C - Gallia", lat: 48.584342, lng: 7.758359 },
    { name: "Ligne C - Universités", lat: 48.582733, lng: 7.763965 },
    { name: "Ligne C - Observatoire", lat: 48.581414, lng: 7.768848 },
    { name: "Ligne C - Esplanade", lat: 48.578352, lng: 7.769409 },
    { name: "Ligne C - Winston Churchill", lat: 48.573740, lng: 7.766690 },
    { name: "Ligne C - Landsberg", lat: 48.569669, lng: 7.763136 },
    { name: "Ligne C - Jean Jaurès", lat: 48.567212, lng: 7.772077 },
    { name: "Ligne C - Lycée-Jean-Monnet", lat: 48.564439, lng: 7.769518 },
    { name: "Ligne C - Gravière", lat: 48.561355, lng: 7.764364 },
    { name: "Ligne C - Kibitzenau", lat: 48.555136, lng: 7.767173 },
    { name: "Ligne C - Saint Christophe", lat: 48.551189, lng: 7.766374 },
    { name: "Ligne C - Neuhof Rodolphe Reuss", lat: 48.546188, lng: 7.766762 },
    

    
    // Ligne D
    { name: "Ligne D - Poteries", lat: 48.583549, lng: 7.692366 },
    { name: "Ligne D - Marcel Rudloff", lat: 48.587421, lng: 7.697538 },
    { name: "Ligne D - Dante", lat: 48.591238, lng: 7.702837 },
    { name: "Ligne D - Hôpital de Hautepierre", lat: 48.591572, lng: 7.706823 },
    { name: "Ligne D - Ducs d’Alsace", lat: 48.590144, lng: 7.715269 },
    { name: "Ligne D - Saint Florent", lat: 48.591582, lng: 7.720322 },
    { name: "Ligne D - Rotonde", lat: 48.591864, lng:7.724911 },
    { name: "Ligne D - Gare centrale", lat: 48.584858, lng:7.735531  },
    { name: "Ligne D - Homme de Fer", lat: 48.584079, lng: 7.744578 },
    { name: "Ligne D - Langstross - Grand'Rue", lat: 48.581470, lng: 7.746296 },
    { name: "Ligne D - Porte de l'Hôpital", lat: 48.578149, lng: 7.750123 },
    { name: "Ligne D - Etoile Bourse", lat: 48.574481, lng: 7.753562 },
    { name: "Ligne D - Etoile Polygone", lat: 48.571553, lng: 7.755578 },
    { name: "Ligne D - Landsberg", lat: 48.569609, lng: 7.763252 },
    { name: "Ligne D - Jean Jaurès", lat: 48.567217, lng: 7.772067 },
    { name: "Ligne D - Aristide Briand", lat: 48.568536, lng: 7.776682 },
    { name: "Ligne D - Citadelle", lat: 48.571442, lng: 7.780062 },
    { name: "Ligne D - Starcoop", lat: 48.574108, lng: 7.785670 },
    { name: "Ligne D - Port du Rhin", lat: 48.572748, lng: 7.795171 }, 
    { name: "Ligne D - Kehl Bahnhof", lat: 48.575907, lng: 7.807224 },
    { name: "Ligne D - Hochschule / Läger", lat: 48.575539, lng: 7.816100 },
    { name: "Ligne D - Kehl Rathaus", lat: 48.572257, lng: 7.813871 },

    
    



    

    
    // Ligne E
    // Tapé à la mano 
    {name: "Ligne E et B - Lycée Kléber",lat: 48.594103,lng: 7.757765 },
    {name: "Ligne E et B - Parc du Contades",lat: 48.590271,lng: 7.755961 },
    {name: "Ligne BCF - République",lat: 48.586208,lng: 7.754489 },
    
    { name: "Ligne E- Campus d'Illkirch ", lat: 48.528695, lng: 7.732819 },
    { name: "Ligne E- Leclerc", lat: 48.534441, lng: 7.734430 },
    { name: "Ligne E- Colonne", lat: 48.538082, lng: 7.733537 },
    { name: "Ligne E- Baggersee", lat: 48.544956, lng: 7.737884 },
    { name: "Ligne E- Hohwart", lat: 48.549261, lng: 7.741598 },
    { name: "Ligne E- Emile Mathis", lat: 48.553156, lng: 7.744235 },
    { name: "Ligne E- Lycée Couffignal", lat: 48.558782, lng: 7.749177 },
    { name: "Ligne E- Krimmeri - Stade de la Meinau",lat: 48.561895,lng: 7.752252 },
    { name: "Ligne E- Schluthfeld", lat: 48.568557, lng: 7.751680 },
    { name: "Ligne E - Etoile Polygone", lat: 48.571553, lng: 7.755578 },
    { name: "Ligne E - Landsberg", lat: 48.569609, lng: 7.763252 },
    { name: "Ligne E - Winston Churchill", lat: 48.573740, lng: 7.766690 },
    { name: "Ligne D - Esplanade", lat: 48.578352, lng: 7.769409 },
    { name: "Ligne D - Observatoire", lat: 48.581414, lng: 7.768848 },
    { name: "Ligne D - République", lat: 48.585804, lng: 7.755204 },
    { name: "Ligne D - Gallia", lat: 48.584342, lng: 7.758359 },
    { name: "Ligne D - Parc du Contades",lat: 48.590271,lng: 7.755961 },
    { name: "Ligne D - Lycée Kléber",lat: 48.594103,lng: 7.757765 },
    { name: "Ligne D - Wacken",lat: 48.598617,lng: 7.760639 },
    { name: "Ligne E - Parlement Européen", lat: 48.599352, lng: 7.766851 },
    { name: "Ligne E - Droits de l'Homme", lat: 48.596169, lng: 7.774028 },
    { name: "Ligne E - Boecklin", lat: 48.597994, lng: 7.778073 },
    { name: "Ligne E - Jardinier", lat: 48.599442, lng: 7.783091 },
    { name: "Ligne E - Mélanie", lat: 48.603301, lng: 7.784864 },
    { name : "Ligne E - Robertsau L'Escale" ,lat :48.609247 ,lng :7.785164},
    

    

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
