/* Esta funcionalidad permite recuperar los datos almacenados en el Session Storage y cargarlos en la página */

// Capturamos el Id de la imagen y el nombre del pokemón
const elegido = document.getElementById("imagenElegido");
const elegidoNombre = document.getElementById("apodo");

// Traemos los datos desde el Session Storage
const pokeElegido = sessionStorage.getItem("pokemon");
const pokeNombreElegido = sessionStorage.getItem("nombrePokemon");

// Asignamos los datos traidos
elegido.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeElegido}.png`;
elegidoNombre.innerHTML = `${pokeNombreElegido}`