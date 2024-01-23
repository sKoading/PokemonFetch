async function fetchData(pokeName) {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    document.getElementById("pokemonSprite").style.display = "block";
    document.getElementById("pokemonSprite").src =
      `${data.sprites.front_default}`;
  } catch (error) {
    console.log(error);
  }
}
