const content = document.querySelector(".user-info")

const inputNome = document.querySelector("#name")
const inputIdade = document.querySelector("#idade")
const inputLocalidade = document.querySelector("#localidade")
const inputBiografia = document.querySelector("#biografia")

const Modal = {
    open(){
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")
    },
    close(){
        document
            .querySelector(".modal-overlay")
            .classList
            .remove("active")
    }
}

function changeData() {
    if(inputNome.value) {
        document.querySelector(".user-name").textContent = (inputNome.value)
        inputNome.value = ""
        alertMessage("Dados alterados com sucesso !")
    }
    if(inputIdade.value) {
        document.querySelector(".user-age").textContent = (inputIdade.value)+" anos"
        inputIdade.value = ""
        alertMessage("Dados alterados com sucesso !")
    }
    if(inputLocalidade.value) {
        document.querySelector(".user-location").textContent = (inputLocalidade.value)
        inputLocalidade.value = ""
        alertMessage("Dados alterados com sucesso !")
    }
    if(inputBiografia.value) {
        document.querySelector(".user-biography").textContent = inputBiografia.value
        inputBiografia.value = ""
        alertMessage("Dados alterados com sucesso !")
    }

    Modal.close()
}

function alertMessage(msg) {
    const message = document.createElement("div");
    message.classList.add('alert-message')
    message.insertAdjacentText('beforeend', msg)

    content.appendChild(message)

    setTimeout(() => {
        message.style.display = "none"
    }, 3000)
}

