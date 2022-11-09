
/* Id identificadores de la card */
const numero = document.getElementById("numero");
const pokeNombre = document.getElementById("nombre");
const habilidad1 = document.getElementById("habilidad1");
const habilidad2 = document.getElementById("habilidad2");
const titulillo = document.getElementById("titulillo");
const pokePhoto = document.getElementById("pokeImg");
/* Foto inicial */
pokePhoto.src = "./img/feliz.gif";

/* Capturando el input */
const pokeNameInput = document.getElementById("pokeName");

/* Indice para los botones de pasar a otro pokemón */
var indice = 0;

/*--------BUSCAR UN POKEMON DEFINIDO---------*/
const buscaPokemon = () => {    
    var valor = pokeNameInput.value;
    if (valor==""||valor>898||valor<1){
        // Alerta (Solo números entre 1 y 898)
        Swal.fire({
            icon: 'warning',
            iconColor:'yellow',
            title: 'ERROR',
            color:'lightblue',
            text: 'Debe introducir un numero entre 1 y 898. O bien el nombre de algún pokemón. Por ejemplo: Pikachu'
        })
    }
    // Hacer llamada a la API con el valor ingresado 
    else {
        valor = valor.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${valor}`;
    traerDato(url)
    } 
    
    
        
}

/* TRAER POKEMON (tanto por input como por botones pasar) */
function traerDato(url) {
    fetch(url).then((res) => {
        /* En caso de no encontrar ningún pokemón */
        if (res.status != "200") {
            // No se ha encontrado ningún pokemón
            pokePhoto.src="./img/giphy.gif";
            pokeNombre.innerHTML = "No se ha encontrado ningún pokemón";
            numero.innerHTML = "";
            titulillo.innerHTML = "";
            habilidad1.innerHTML = "";         
        }
        /* POKEMON ENCONTRADO */
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            /* Asignar DATA a la card */
            /* pokePhoto.src=data.sprites.front_default;*/
            pokePhoto.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
            numero.innerHTML = data.id;         
            pokeNombre.innerHTML = data.species.name.toUpperCase();
            titulillo.innerHTML = "Habilidades";
            habilidad1.innerHTML = data.abilities[0].ability.name;
            indice=data.id;
            pokeNameInput.value=data.species.name.toUpperCase();
        }
    });
} 
/*--------------------------------------------------------------*/

/*==========BOTONES PARA PASAR A OTRO POKEMON===================*/

/* Función EL QUE SIGUE */
function adelante(){    
    if (indice>0 && indice<898) {
        const url = `https://pokeapi.co/api/v2/pokemon/${indice+1}`
        traerDato(url)
    } else if (indice==898||indice==0) {
        const url = "https://pokeapi.co/api/v2/pokemon/1";
        traerDato(url)        
    } 
}

/* Función EL ANTERIOR */
function atras(){
    if (indice==0||indice==1) {
        const url = "https://pokeapi.co/api/v2/pokemon/898"
        traerDato(url)
    } else if (indice>1 && indice<899) {
        const url = `https://pokeapi.co/api/v2/pokemon/${indice-1}`
        traerDato(url)
    } 
}