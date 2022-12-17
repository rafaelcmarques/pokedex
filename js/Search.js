import { Pokemon } from "./Pokemon.js"
import { View } from "./View.js"
import { Modal } from "./Modal.js"
import { ChartStatus } from "./ChartStatus.js"

export class Search {
  constructor(root) {
    this.root = document.querySelector(root)

    this.pokemonViewWrapper = this.root.querySelector(".pokemon-view-wrapper")

    this.pokemonCard = this.root.querySelector(".pokemon-card")

    this.modal = this.root.querySelector(".modal")

    this.chartWrapper = this.root.querySelector(".chart-wrapper")
    console.log(this.chartWrapper)
  }
}

export class searchPokemon extends Search {
  constructor(root) {
    super(root)
    this.onAdd()
    this.pokemon = ""
  }

  async add(pokemonName) {
    try {
      const newPokemon = await Pokemon.search(pokemonName)
      this.pokemon = newPokemon

      this.newChart = new ChartStatus(
        this.root,
        this.pokemon,
        this.chartWrapper
      )

      this.newModal = new Modal(this.modal, this.pokemon)

      this.newView = new View(
        this.pokemon,
        this.newModal,
        this.pokemonViewWrapper,
        this.pokemonCard
      )

      this.newView.removeView()

      this.update()
    } catch (error) {
      try {
        this.newChart.createChart()
      } catch {
        console.log(
          "nao foi possivel criar chart pq pokemon não foi encontrado"
        )
      }

      console.log(error.message)
      alert("Pokemon não encontrado")
    }
  }

  onAdd() {
    const btnSearch = this.root.querySelector(".search button")
    var input = this.root.querySelector(".search input")

    input.addEventListener("keypress", function (e) {
      if (!checkChar(e)) {
        e.preventDefault()
      }
    })

    function checkChar(e) {
      var char = String.fromCharCode(e.keyCode)

      var pattern = "[a-zA-Z0-9]"
      if (char.match(pattern)) {
        return true
      }
    }
    btnSearch.onclick = () => {
      const { value } = this.root.querySelector(".search input")
      const valueLowCase = value.toLowerCase() //garante que será passado sem letras Uppercase
      this.add(valueLowCase)
      this.root.querySelector(".search input").value = ""

      try {
        this.newChart.removeChart()
      } catch (error) {
        console.log("não há grafico para ser removido")
      }
    }
  }

  update() {
    this.newView.fillingView()
    this.newChart.createChart()
    this.newChart.showChart()
  }
}
