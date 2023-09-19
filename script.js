document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cliente-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;

        // Puedes hacer lo que desees con los datos aquí, como enviarlos a un servidor o mostrarlos en la página.
        mostrarResultado(nombre, apellido, email, telefono, direccion, ciudad);
    });
});

function mostrarResultado(nombre, apellido, email, telefono, direccion, ciudad) {
    const resultado = `
    Cliente registrado:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Email: ${email}
    Teléfono: ${telefono}
    Dirección: ${direccion}
    Ciudad: ${ciudad}
    `;

    alert(resultado);
}
