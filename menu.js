let carrito = [];

function agregarAlCarrito(plato) {
    carrito.push(plato);
    alert(`${plato} se agregó al carrito`);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'ms-2');
        botonEliminar.onclick = () => {
            carrito.splice(index, 1);
            mostrarCarrito();
        };
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

function mostrarFormularioOrden() {
    document.getElementById('formulario-orden').style.display = 'block';
    document.getElementById('resumen-orden').value = carrito.join('\n');
}

document.getElementById('orden-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Orden enviada correctamente. ¡Gracias por su compra!');
    carrito = [];
    mostrarCarrito();
    document.getElementById('formulario-orden').style.display = 'none';
});

