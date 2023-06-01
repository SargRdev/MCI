let mail = document.getElementById("mail").style.display = 'none'
let telefono = document.getElementById("tele").style.display = "none"

function selectRadio() {

    const radios = document.getElementsByName('contactado-por');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            if (radios[i].value === "telefono") {
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            } else if (radios[i].value === "Whatsapp") {
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            } else {
                let mail = document.getElementById("mail").style.display = "block"
                let telefono = document.getElementById("tele").style.display = "none"
            }
            break;
        }

    }
}

let ubicaciones = ["Municipalidad de Guatemala", "Emetra", "Empagua"];
let dependencias = ["Selecciona...","Atención al Vecino", "Catastro", "Desarrollo Social", "Informática", "Obras", "EMETRA", "EMPAGUA"];

let selectUbicaciones = document.getElementById('select-Ubicacion');
let selectDependencias = document.getElementById('select-Dependencia')
let label_dependencia = document.getElementById('label-Depen')

selectDependencias.style.display='NONE'
label_dependencia.style.display='NONE'

function recorrer(depen, valores) {
    selectDependencias.innerHTML = '';

    for (let index of valores) {
        depen.innerHTML += `<option>${index}</option>`
    }
}

function llenarUbicacion() {
    recorrer(selectUbicaciones, ubicaciones)
}


llenarUbicacion()

selectUbicaciones.addEventListener('change', (e) => {
    let dato = e.target.value

    switch (dato) {
        case 'Municipalidad de Guatemala':
            recorrer(selectDependencias, dependencias.slice(0, 5));
            selectDependencias.style.display='BLOCK'
            label_dependencia.style.display='BLOCK'
            break;
        case 'Emetra':
            recorrer(selectDependencias, dependencias.slice(6, 7));
            label_dependencia.style.display='NONE'
            selectDependencias.style.display='NONE'
            break;
        case 'Empagua':
            recorrer(selectDependencias, dependencias.slice(7, 8));
            label_dependencia.style.display='NONE'
            selectDependencias.style.display='NONE'
            break;

        default:
            label_dependencia.style.display='NONE'
            selectDependencias.style.display='NONE'
            break;
    }

})







