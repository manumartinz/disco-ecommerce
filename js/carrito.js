for (let i = 0; i < localStorage.length; i++) {
    const parseItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const tabla = $('#prodTabla')
    tabla.prepend(`
               <tbody align="center">
               <td class="carrito__img"><img src="${parseItem.img}" alt=""></td>
               <td>Por Sucursal</td>
               <td>$${parseItem.precio}</td>
               <td><button id="quitarCant">-</button><span id="secCantidad">${parseInt(parseItem.cantidad)}</span><button id="sumarCant">+</button></td>
               <td>$${parseItem.precio}</td>
               <td><button class="btn-borrar" id="btnBorrar">X</button></td>
               </tbody>`)

    const sumarCant = $('#sumarCant')
    const secCantidad = $('#secCantidad')
    sumarCant.click(() => {
        parseItem.cantidad++
            if (parseItem.cantidad <= 5) {
                secCantidad.html('')
                secCantidad.prepend(`${parseInt(parseItem.cantidad)}`)
            } else {
                alert('No puede comprar más de 5 (cinco) pares por persona.')
            }

    })

    const quitarCant = $('#quitarCant')
    quitarCant.click(() => {
        parseItem.cantidad--
            if (parseItem.cantidad >= 1) {
                secCantidad.html('')
                secCantidad.prepend(`${parseInt(parseItem.cantidad)}`)
            } else {
                alert('No puede bajar más la cantidad.')
            }
    })

    const btnBorrar = $('#btnBorrar')
    btnBorrar.click(() => {
        localStorage.removeItem(localStorage.key(i))
        alert('Producto Removido.')
    })

}