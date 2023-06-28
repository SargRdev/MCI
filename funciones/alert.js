
function iniciar() {

    let btn = document.getElementById("info")

    btn.addEventListener("click", alerta)



    function alerta() {

        Swal.fire({
            title: '<p>En menos de lo que te imaginas, sabrás de nosotros...</p>',
            text: '',
            imageUrl: '../imagenes/SITIO WEB HERO-20.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    verificarFormulario();

}


window.addEventListener("load", iniciar)

function verificarFormulario() {
    // Obtener referencias a los campos del formulario
    var campo1 = document.getElementById("nombre");
    var campo2 = document.getElementById("select-Ubicacion");
    var campo3 = document.getElementById("select-Dependencia");
    var campo4 = document.getElementById("mensaje");

    // Verificar si los campos están llenos
    if (campo1.value === "" || campo2.value === "" || campo3.value === "" || campo4.value === "") {
        // Al menos un campo está vacío
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evita el envío del formulario
    }

    // Todos los campos están llenos
    return true; // Permite el envío del formulario
}


