const url = "../js/db/prod-puma.json"


$.getJSON(url, (response, status) => {


    if (status !== 'success') {
        throw new Error('Error')
    }

    for (const p of response) {

        const seccionProducto = $('#productoSeccion');
        seccionProducto.prepend(`<div class="producto"><img src="${p.img}" alt=""><h3>${p.marca}</h3><p>$${p.precio}</p><a id="btnCompra${p.id}" href="">Comprar</a></div>`);

        const btnCompra = $(`#btnCompra${p.id}`)
        btnCompra.click(() => {
            localStorage.setItem(`zapatilla${p.id}`, JSON.stringify(response[p.id - 41]))

        })
    }

})