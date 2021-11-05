import { prodAdidas } from './productos.js'

prodAdidas.forEach((p) => {
    const seccionProducto = document.getElementById('productoSeccion')
    seccionProducto.innerHTML += `<div class="producto"><img src="${p.img}" alt=""><h3>${p.marca}</h3><p>${p.precio}</p><a id="btnCompra${p.id}" href="">Comprar</a></div>`
});


prodAdidas.forEach((p) => {
    const btnCompra = document.getElementById(`btnCompra${p.id}`)
    btnCompra.addEventListener('click', () => {
        localStorage.setItem(`zapatilla${p.id}`, JSON.stringify(prodAdidas[p.id - 1]))
    })

})