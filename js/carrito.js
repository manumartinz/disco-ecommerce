for (let i = 0; i < localStorage.length; i++) {
    const parseItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (parseItem) {
        const tabla = document.getElementById('prodTabla');
        tabla.innerHTML += `<tbody align="center">
                                <td class="carrito__img"><img src="${parseItem.img}" alt=""></td>
                                <td>Por Sucursal</td>
                                <td>${parseItem.precio}</td>
                                <td>1</td>
                                <td>${parseItem.precio}</td>
                                <td><button>X</button></td>
                                </tbody>`;
    }

}
const btnCompra = document.getElementById('btn-compra');
btnCompra.addEventListener('click', () => {
    localStorage.getItem('zapatilla', alert(value))
})