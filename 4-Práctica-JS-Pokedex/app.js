const pokemones = [
    {
        id:1,
        nombre:"Bulbasur",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        habilidad:"Overgrow"
    },
    {
        id:2,
        nombre:"Ivysaur",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        habilidad:"Overgrow"
    },
    {
        id:3,
        nombre:"Venusaur",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        habilidad:"Overgrow"
    },
    {
        id:4,
        nombre:"Charmander",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        habilidad:"blaze"
    },
    {
        id:5,
        nombre:"Charmeleon",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        habilidad:"blaze"
    },
    {
        id:6,
        nombre:"Charizard",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        habilidad:"blaze"
    },
    {
        id:7,
        nombre:"Squirtle",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        habilidad:"torrent"
    },
    {
        id:8,
        nombre:"Wartortle",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        habilidad:"torrent"
    },
    {
        id:9,
        nombre:"Blastoise",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        habilidad:"torrent"
    },
    {
        id:10,
        nombre:"Caterpie",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        habilidad:"shield-dust"
    },
    {
        id:11,
        nombre:"Metapod",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        habilidad:"shed-skin"
    },
    {
        id:12,
        nombre:"Butterfree",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        habilidad:"compound-eyes"
    },
    {
        id:13,
        nombre:"Weedle",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        habilidad:"shield-dust"
    },
    {
        id:14,
        nombre:"Kakuna",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
        habilidad:"shed-skin"
    },
    {
        id:15,
        nombre:"Beedrill",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        habilidad:"swarm"
    },
    {
        id:16,
        nombre:"Pidgey",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        habilidad:"keen-eye"
    },
    {
        id:17,
        nombre:"Pidgeotto",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        habilidad:"keen-eye"
    },
    {
        id:18,
        nombre:"Pidgeot",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        habilidad:"keen-eye"
    },
    {
        id:19,
        nombre:"Rattata",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        habilidad:"run-away"
    },
    {
        id:20,
        nombre:"Ratticate",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
        habilidad:"run-away"
    },
    {
        id:21,
        nombre:"Spearow",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        habilidad:"keen-eye"
    },
    {
        id:22,
        nombre:"Fearow",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
        habilidad:"keen-eye"
    },
    {
        id:23,
        nombre:"Ekans",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
        habilidad:"Intimidate"
    },
    {
        id:24,
        nombre:"Arbok",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        habilidad:"intimidate"
    },
    {
        id:25,
        nombre:"Pikachu",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        habilidad:"static"
    },
    {
        id:26,
        nombre:"Raichu",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        habilidad:"static"
    },
    {
        id:27,
        nombre:"Sandshrew",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
        habilidad:"sand-veil"
    },
    {
        id:28,
        nombre:"Sandslashe",
        img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
        habilidad:"san-veil"
    },
]

// Funcion Generadoras de todos los pokemones favoritos 

const generarCardsPokemones = (pokemones) => {

    // Obtenemos el div que contendra los pokemones
    let cards = document.getElementById("pokemones");
    
    // Generamos la card para cada pokemon
    pokemones.forEach( pokemon => {
        
        // Creamos la etiqueta div cardPokemon
        let cardPokemon = document.createElement("div");
        // Asignamos la clase "pokemon"
        cardPokemon.className = "pokemon";
        // Capturamos el id y el nombre de cada pokemon
        const zZ = pokemon.id;
        const hH = pokemon.nombre;
        // Asignamos un evento onclick a cada cardPokemon
        cardPokemon.onclick = function coco(zZ,hH){
            foto(`${pokemon.id}`);
            letra(`${pokemon.nombre}`)
        }

        // Generamos el contenido de la cardPokemon
        let card = `            
            <img class="imagen-pokemon" src="${pokemon.img}" alt="Card image cap">
            <p class="numerillo card-text">${pokemon.id}</p>
            <h4 class="card-title">${pokemon.nombre}</h4>
            <p class="habilidades card-text">Habilidades</p>
            <p class="habilidad card-text">${pokemon.habilidad}</p>
        `;
    
        // Asignamos el contenido a cada cardPokemon
        cardPokemon.innerHTML = card;

        // Agregamos la cardPokemon a las cards Pokemones
        cards.appendChild(cardPokemon);
    });    
    
}

/* Inicializacion de pokemones al cargar la página */
generarCardsPokemones(pokemones);

/*---------------------------------------------*/


/*-------TOMAR FOTO DEL PREFERIDO-------*/

/* Captura el id del pokemon, lo almacena en el Session Storage y redirecciona a la página foto.html */
function foto(num){
    const numPok = num;
    sessionStorage.setItem("pokemon",numPok);
    window.location.href="./foto.html";    
}
/* Captura el nombre del pokemon y lo almacena en el Session Storage*/
function letra(nom){
    const name = nom;
    sessionStorage.setItem("nombrePokemon",name);    
}
