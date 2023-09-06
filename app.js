const button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let typeOne = document.getElementById("type1");

let ChangePokemon = async () => {
    const types = [];
    let randomNumber = Math.round(Math.random() * 1010 + 1);
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

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
            typeOne.style.background = "#539DDF";


            break;

        case "grass":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "ice":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "fighting":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "poison":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "ground":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "flying":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "psychic":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "bug":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "rock":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "ghost":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "dark":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "steel":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "fairy":
            typeOne.src = `src/icons/${type}.svg`;

            break;

        case "dragon":
            typeOne.src = `src/icons/${type}.svg`;

            break;

          break;
        default:
          break;
      }

    
}

ChangePokemon();
button.addEventListener("click",ChangePokemon);