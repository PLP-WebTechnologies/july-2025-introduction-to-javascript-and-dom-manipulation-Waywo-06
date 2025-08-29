// Variables & Conditionals
let heroVisible = {
  flash: true,
  starlord: true,
  superman: true
};

function updateOutput(message) {
  document.getElementById("output").textContent = message;
}

function toggleHero(heroId) {
  const heroElement = document.getElementById(heroId);
  heroVisible[heroId] = !heroVisible[heroId];
  heroElement.style.display = heroVisible[heroId] ? "block" : "none";
  updateOutput(`${heroId} is now ${heroVisible[heroId] ? "visible" : "hidden"}`);
}

function formatHeroName(name) {
  return name.toUpperCase();
}

// Loops
const heroes = ["flash", "starlord", "superman"];

function hideAllHeroes() {
  for (let i = 0; i < heroes.length; i++) {
    document.getElementById(heroes[i]).style.display = "none";
    heroVisible[heroes[i]] = false;
  }
  updateOutput("All heroes are now hidden.");
}

function showAllHeroes() {
  heroes.forEach(hero => {
    document.getElementById(hero).style.display = "block";
    heroVisible[hero] = true;
  });
  updateOutput("All heroes are now visible.");
}

// DOM Interactions
document.body.addEventListener("keydown", function (e) {
  if (e.key === "h") hideAllHeroes();
  if (e.key === "s") showAllHeroes();
});