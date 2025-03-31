let request = "";
let url = "";
const imagem = document.getElementById("pokeImg");
const audio = document.getElementById("grito");
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
    const teste = await fetch(url);
    if (!teste.ok) {
      throw new Error("Verifique o nome do pokemon");
    }
    const resultado = await teste.json();
    console.log(resultado);
    update(
      resultado.sprites.front_default,
      resultado.types,
      resultado.cries.latest
    );
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function update(img, tipos, grito) {
  imagem.src = img;
  imagem.onload = () => {
    audio.src = grito;
    audio.setAttribute("controls", true);
    audio.volume = 0.05;

    document.getElementById("tipo0").innerText = tipos[0].type.name;
    document.getElementById("tipo0").classList.remove(...list);
    document.getElementById("tipo0").classList.add(tipos[0].type.name);

    if (tipos[1]) {
      document.getElementById("tipo1").innerText = tipos[1].type.name;
      document.getElementById("tipo1").classList.remove(...list);
      document.getElementById("tipo1").classList.add(tipos[1].type.name);
      document.getElementById("tipo1").style.display = "block";
    } else {
      document.getElementById("tipo1").style.display = "none";
    }
  };
}
