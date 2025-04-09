let request: string = "";
let url: string = "";
const imagem = document.getElementById("pokeImg") as HTMLImageElement;
const audio = document.getElementById("grito") as HTMLAudioElement;
audio.volume = 0.1;
const list: string[] = [
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

(document.querySelector("main form") as HTMLFormElement).addEventListener(
  "submit",
  () => {
    request = document.querySelector("input")!.value;
    url = `https://pokeapi.co/api/v2/pokemon/${request}`;
    pokemon(url);
  }
);

async function pokemon(url: string) {
  try {
    const request: Response = await fetch(url);
    if (!request.ok) {
      throw new Error("Nome Incorreto");
    }
    const resultado = await request.json();
    console.log(resultado);
    updateDisplay(
      resultado.sprites.front_default,
      resultado.types,
      resultado.cries.latest
    );
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function updateDisplay(img: string, tipos: Array<object{}>, grito: string) {
  imagem.src = img;
  imagem.onload = () => {
    audio.src = grito;
    audio.setAttribute("controls", "true");
  };
  document.getElementById("tipo0")!.innerText = tipos[0].type.name;
}
