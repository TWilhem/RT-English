const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Link = "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-reseaux-et-telecommunications-parcours-"
const FILIERE_LABELS = {
    1: `<a src="${Link}cybersecurite">Cyber Security</a>`,
    2: `<a src="${Link}reseaux-operateurs-et-multimedia">Operator and Multimedia</a>`,
    3: `<a src="${Link}developpement-systeme-et-cloud">DevCloud</a>`
};

// Liste de points avec infos
const etablissements = [
{
    name: "École nationale de l'enseignement professionnel supérieur, Université Grenoble Alpes",
    coords: [45.1672, 5.7653],
    filieres: [1]
},
{
    name: "IUT de Colmar, Université de Haute Alsace Mulhouse",
    coords: [48.0817, 7.3556],
    filieres: [1, 2, 3]
},
{
    name: "IUT de Blois, Université de Tours",
    coords: [47.5939, 1.3281],
    filieres: [1]
},
{
    name: "IUT de Châlons, Université de Reims Champagne-Ardenne",
    coords: [48.9575, 4.3650],
    filieres: [1, 3]
},
{
    name: "IUT de Kourou, Université de Guyane",
    coords: [5.1597, -52.6503],
    filieres: [1]
},
{
    name: "IUT Grand Ouest Normandie - pôle de Caen, campus d'Ifs, Université de Caen Normandie",
    coords: [49.1300, -0.3500],
    filieres: [1]
},
{
    name: "IUT de La Rochelle, La Rochelle Université",
    coords: [46.1667, -1.1500],
    filieres: [1]
},
{
    name: "IUT de Blagnac, Université Toulouse - Jean Jaurès",
    coords: [43.6364, 1.3906],
    filieres: [1]
},
{
    name: "IUT d'Annecy, Université Savoie Mont Blanc",
    coords: [45.8992, 6.1294],
    filieres: [1]
},
{
    name: "IUT de Valence, Université Grenoble Alpes",
    coords: [44.9333, 4.8924],
    filieres: [1]
},
{
    name: "IUT de Roanne, Université Jean Monnet Saint-Étienne",
    coords: [46.0333, 4.0667],
    filieres: [1, 2]
},
{
    name: "IUT 1 (campus - Saint-Martin-d'Hères), Université Grenoble Alpes",
    coords: [45.1672, 5.7653],
    filieres: [1, 3]
},
{
    name: "IUT Clermont Auvergne - site de Clermont-Ferrand, Université Clermont Auvergne",
    coords: [45.7772, 3.0870],
    filieres: [1]
},
{
    name: "IUT de Béthune, Université d'Artois",
    coords: [50.5300, 2.6400],
    filieres: [1, 2]
},
{
    name: "IUT de Béziers, Université de Montpellier",
    coords: [43.3442, 3.2158],
    filieres: [1, 3]
},
{
    name: "IUT de La Roche sur Yon, Nantes université",
    coords: [46.6700, -1.4260],
    filieres: [1]
},
{
    name: "IUT de Saint-Pierre, Université de La Réunion",
    coords: [-21.3393, 55.4781],
    filieres: [1, 2]
},
{
    name: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
    coords: [48.9530, 2.3417],
    filieres: [1, 2]
},
{
    name: "IUT de Vélizy, Université Versailles Saint-Quentin-en-Yvelines",
    coords: [48.7821, 2.1865],
    filieres: [1]
},
{
    name: "IUT des Pays de l'Adour - Campus de Mont-de-Marsan, Université de Pau et des Pays de l'Adour",
    coords: [43.8900, -0.5000],
    filieres: [1, 2]
},
{
    name: "IUT Dijon - Auxerre - Nevers - site d'Auxerre, Université Bourgogne Europe",
    coords: [47.7982, 3.5730],
    filieres: [1]
},
{
    name: "IUT de Lannion, Université de Rennes",
    coords: [48.7320, -3.4560],
    filieres: [1, 3]
},
{
    name: "IUT d'Aix-Marseille - site de Marseille Luminy, Aix-Marseille Université",
    coords: [43.2328, 5.4333],
    filieres: [1]
},
{
    name: "IUT Nancy-Brabois, Université de Lorraine",
    coords: [48.6530, 6.1530],
    filieres: [1, 2]
},
{
    name: "IUT Nice Côte d'Azur - Site de Sophia-Antipolis, Université Côte d'Azur",
    coords: [43.6150, 7.0550],
    filieres: [1, 3]
},
{
    name: "IUT Nord Franche-Comté Belfort-Montbéliard, Université Marie et Louis Pasteur",
    coords: [47.5167, 6.8000],
    filieres: [1]
},
{
    name: "IUT de Saint-Malo, Université de Rennes",
    coords: [48.6490, -2.0250],
    filieres: [1, 3]
},
{
    name: "IUT de Créteil-Vitry (site de Vitry-sur-Seine), Université Paris-Est Créteil Val de Marne",
    coords: [48.7870, 2.4030],
    filieres: [1, 2]
},
{
    name: "IUT de Poitiers - Niort - Châtellerault - site de Châtellerault, Université de Poitiers",
    coords: [46.8167, 0.5500],
    filieres: [2]
},
{
    name: "IUT Rouen site d'Elbeuf, Université de Rouen Normandie",
    coords: [49.2790, 1.0000],
    filieres: [3]
}
];


document.querySelectorAll('.Media').forEach(mediaDiv => {
    const imgs = mediaDiv.querySelectorAll('img');
    if (imgs.length === 2) {
        mediaDiv.classList.add('two-images');
    } else if (imgs.length === 4) {
        mediaDiv.classList.add('four-images');
    }
});
