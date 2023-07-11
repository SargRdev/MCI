


let info = document.getElementById("info")

info.addEventListener('click', verificarFormulario)

var campo1 = document.getElementById("nombre");
var campo2 = document.getElementById("select-Ubicacion");
var campo3 = document.getElementById("select-Dependencia");
var campo4 = document.getElementById("area");


console.log(campo3)
function verificarFormulario() {
    // Obtener referencias a los campos del formulario

    // Verificar si los campos están llenos
    if (campo1.value === "" || campo2.value === "Selecciona..." || campo2.value === "" ||
        campo3.value === "Selecciona..." || campo3.value === "" || campo4.value === "") {

        Swal.fire(
            'Oops...',
            '¡Completa tus datos para contactarte!',
            'warning'
        )
        // Al menos un campo está vacío
        return false; // Evita el envío del formulario
    }

    else {

        Swal.fire({
            title: '<p>En menos de lo que te imaginas, sabrás de nosotros...</p>',
            text: '',
            imageUrl: '../imagenes/SITIO WEB HERO-20.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
  // Todos los campos están llenos
  return true; // Permite el envío del formulario
    }
  
}


