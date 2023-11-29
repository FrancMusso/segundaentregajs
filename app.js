document.addEventListener("DOMContentLoaded", function () {
    try {
        const correos = prompt("Ingrese correos electrónicos separados por comas para recibir información adicional:").split(',');
        const telefonos = prompt("Ingrese números telefónicos separados por comas para recibir información adicional:").split(',');

        const datosContacto = [
            { tipo: 'correo', valor: correos[0] },
            { tipo: 'correo', valor: correos[1] },
            { tipo: 'telefono', valor: telefonos[0] },
            { tipo: 'telefono', valor: telefonos[1] }
        ];

        console.log("Datos de contacto:", datosContacto);

        const correosFiltrados = datosContacto.filter(item => item.tipo === 'correo');
        console.log("Correos electrónicos filtrados:", correosFiltrados);

        const primerTelefono = datosContacto.find(item => item.tipo === 'telefono');
        console.log("Primer teléfono encontrado:", primerTelefono);

        const valoresDeContacto = datosContacto.map(item => item.valor);
        console.log("Valores de contacto:", valoresDeContacto);

        enviarDatosContacto(datosContacto);
    } catch (error) {
        console.error("Ocurrió un error al recopilar los datos:", error.message);
    }
});

function enviarDatosContacto(datosContacto) {
    alert("Datos de contacto enviados para recibir información adicional:\n" +
        "Correos electrónicos: " + obtenerValoresFiltrados(datosContacto, 'correo').join(', ') + "\n" +
        "Números telefónicos: " + obtenerValoresFiltrados(datosContacto, 'telefono').join(', ') + "\n" +
        "¡Gracias por enviar tus datos!");
}

function obtenerValoresFiltrados(datos, tipo) {
    return datos
        .filter(item => item.tipo === tipo)
        .map(item => item.valor);
}