console.log('conectado!!!')
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-Card').content
const templateFooter = document.getElementById('template-Footer').content
const templateCarrito= document.getElementById('template-Carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    obtenerProductos()
})

const obtenerProductos = async () => {
    const res = await fetch('./api/productos.json')
    const data = await res.json () 
    //console.log(data)
    pintarCrds(data)
}

const pintarCards = (data) => {
    data.forEach(item => {
templateCard.querySelector('h5').textContent = item.Titulo
templateCard.querySelector('p').textContent = item.Precio 
templateCard.querySelector('button').dataset.id = item.id


const clone = templateCard.cloneNode(true)

fragment.appendChild(fragment)
    })
    cards.appendChild(fragment)
}