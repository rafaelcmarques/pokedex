export function View(pokemon, newModal, pokemonViewWrapper, pokemonCard) {
  function createView() {
    const view = document.createElement("div")
    view.classList.add("pokemon-view")

    view.innerHTML = `
          <h1 id="name">Ditto</h1>
              <img
                id="sprite"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="imagem Ditto"
              />
              <div id="type-wrapper">
                <p id="type">Type: normal</p>
                <p id="type2">Type: normal</p>
              </div>
              <button class="btnInfo">Info +</button>
  
      `
    return view
  }

  function fillingView() {
    const view = createView()

    view.querySelector("#name").textContent = pokemon.name

    view.querySelector(
      "#sprite"
    ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    view.querySelector(
      "#type"
    ).textContent = `Type: ${pokemon.types["0"]["type"]["name"]} `
    try {
      view.querySelector(
        "#type2"
      ).textContent = `Type: ${pokemon.types["1"]["type"]["name"]} `
    } catch (error) {
      view.querySelector("#type2").textContent = ""
    }
    view.querySelector("button").onclick = () => {
      newModal.fillingModal()
      newModal.showModal()
    }
    pokemonCard.append(view)
  }

  function removeView() {
    pokemonViewWrapper.querySelector(".pokemon-view").remove()
  }

  return {
    createView,
    removeView,
    fillingView,
  }
}
