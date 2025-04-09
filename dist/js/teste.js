"use strict";
let request = "";
let url = "";
const imagem = document.getElementById("pokeImg");
const audio = document.getElementById("grito");
audio.volume = 0.1;
const list = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
    "unknown",
    "double-type",
];
document.querySelector("main form").addEventListener("submit", () => {
    request = document.querySelector("input").value;
    url = `https://pokeapi.co/api/v2/pokemon/${request}`;
    pokemon(url);
});
async function pokemon(url) {
    try {
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error("Nome Incorreto");
        }
        const resultado = await request.json();
        console.log(resultado);
        updateDisplay(resultado.sprites.front_default, resultado.types, resultado.cries.latest);
    }
    catch (error) {
        console.error(error);
        alert(error);
    }
}
function updateDisplay(img, tipos, grito) {
    imagem.src = img;
    imagem.onload = () => {
        audio.src = grito;
        audio.setAttribute("controls", "true");
    };
}
