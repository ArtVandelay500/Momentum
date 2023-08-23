const images = [
    "A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpeg",
"Amedeo_Modigliani_Reclining_nude.jpeg",
"David_Hockney_splash.jpeg",
"Edouard_Manet_-_Le_Chemin_de_fer_-_Google_Art_Project-copy.webp",
"Édouard_Manet_-_Le_Déjeuner_sur_l'herbe.jpg",
"Edouard_Manet_-_Le_Suicidé.jpeg",
"Edouard_manet-the_bench_aka_my_garden_.jpeg",
"F_Joaquín_Sorolla_y_Bastida_Strolling_along_the_Seashore_google_96.jpg",
"girl-with-flowers_Joaquin_sorolla.jpg",
"Jean-François_Millet_the_reclining_nude.avif",
"Joean_Honoré_Fragonard-The_Swing.jpeg",
"Matisse_dance.jpeg",
"Monet_dejeunersurlherbe.jpg",
"Paul_Cézanne,_Still_Life_With_Apples,_c._1890.jpg",
"Prendergast_May_day,Central Park.jpeg",
"Retrato_del_Papa_Inocencio_X._Roma,_by_Diego_VelázquezFXD.jpg",
"snow_in_new_york_robert_henri.jpeg",
"Watermill_in_Pont_Aven-Paul_Gauguin_039.jpg"
];



const chosenImage = images[Math.floor(Math.random()*images.length)];

function bgInsert(randomImg){
    document.body.style.backgroundImage = `linear-gradient(
        to bottom,
        rgba(0,0,0, 0.6),
        rgba(0,0,0, 0)
      ),url("img/${randomImg}")`;
}


bgInsert(chosenImage);
