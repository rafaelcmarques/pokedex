export class Pokemon {
  static search(pokemonName) {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(endPoint)
      .then((data) => data.json())
      .then(({ id, name, forms, sprites, height, weight, types, stats }) => ({
        id,
        name,
        forms,
        sprites,
        height,
        weight,
        types,
        stats,
      }))
  }
}
