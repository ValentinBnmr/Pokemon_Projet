// Déclaration des variable
const button = document.getElementById("button");
const image = document.getElementById("image");
const pokeNumber = document.getElementById("number");
const pokeName = document.getElementById("name");
const typeOne = document.getElementById("type1");
const searchBar = document.getElementById("search-poke");
const searchBtn = document.getElementById('search-btn');
// Booléen pour le choix entre le btn pokémon aléatoire ou rechercher un pokémon
let boolChoice;

let requestString;

function typeImage(type){

}

// Appel de l'API Pokéapi
let ChangePokemon = async (choice,input) => {
    let errorMsg = document.getElementById('error-msg');
    
    if(choice === true ){
        let randomNumber = Math.round(Math.random() * 1010 + 1);
        requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
        errorMsg.style.visibility = 'hidden';

    } else if (choice === undefined) {
        requestString = `https://pokeapi.co/api/v2/pokemon/pikachu`;
        errorMsg.style.visibility = 'hidden';

    }  
    else {
        try {
            requestString = `https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`;
            let data = await fetch(requestString);
            let response = await data.json();
            errorMsg.style.visibility = 'hidden';


            
        } catch (error) {
            
            errorMsg.style.visibility = 'visible';
        }
       
    }
    

    let data = await fetch(requestString);
    let body = document.body;

    let response = await data.json();
    let type = response.types[0].type.name;
    console.log(response);
    console.log(response.types[0].type.name);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    typeOne.textContent = type;

    switch (type) {
        case "normal":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#A0A29F";

            break;

        case "fire":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FBA54C";


            break;

        case "water":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#539DDF";


            break;

        case "electric":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FFDE00";


            break;

        case "grass":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#1CD80E";

            break;

        case "ice":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#2EE4C6";


            break;

        case "fighting":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FF215B";


            break;

        case "poison":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#B763CF";


            break;

        case "ground":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FF6B0D";


            break;

        case "flying":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#89BDFF";


            break;

        case "psychic":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FF6C64";


            break;

        case "bug":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#7BCF00";
            break;

        case "rock":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#D8BC5A";
            break;

        case "ghost":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#4E6AFF";
            break;

        case "dark":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#5A566A";
            break;

        case "steel":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#23A1BD";
            break;

        case "fairy":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#FF76FF";
            break;

        case "dragon":
            typeOne.src = `src/icons/${type}.svg`;
            typeOne.style.background = "#0076FF";
            break;


        default:
          break;
      }

    
}

ChangePokemon();
button.addEventListener("click",()=>{
    boolChoice = true;
    ChangePokemon(boolChoice,searchBar);
});

searchBtn.addEventListener("click",()=>{
    boolChoice = false;
    ChangePokemon(boolChoice,searchBar);
});