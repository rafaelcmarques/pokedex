export function Modal(modal, pokemon) {
  function createModal() {
    const modal = document.createElement("div")
    modal.classList.add("modal-wrapper")
    modal.innerHTML = `
      <div class="infos">
              <button id="btnClose">x</button>
              <h1>Informations</h1>
              <p>Ditto</p>
              <table>
                <thead>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td>Height</td>
                    <td id="height">2</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td id="weight">10</td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td id="numberId">Pound</td>
                  </tr>
                </tbody>
              </table>
            </div>
      `
    return modal
  }

  function fillingModal() {
    const newModal = createModal()
    console.log(newModal)
    newModal.querySelector("p").textContent = pokemon.name
    newModal.querySelector("#height").textContent = pokemon.height
    newModal.querySelector("#weight").textContent = pokemon.weight
    newModal.querySelector("#numberId").textContent = pokemon.id
    newModal.querySelector("#btnClose").onclick = () => {
      hiddeModal()
      removeNewModal()
    }
    modal.append(newModal)
  }

  function showModal() {
    modal.classList.remove("close")
  }

  function hiddeModal() {
    modal.classList.add("close")
  }

  function removeNewModal() {
    modal.querySelector(".modal-wrapper").remove()
  }

  return {
    createModal,
    fillingModal,
    showModal,
    hiddeModal,
  }
}
