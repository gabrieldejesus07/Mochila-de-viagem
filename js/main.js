const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
   
    evento.preventDefault()
    criarElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criarElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innearHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    console.log(novoItem)
}