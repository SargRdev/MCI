let mail = document.getElementById("mail").style.display = 'none'
let telefono = document.getElementById("tele").style.display = "none"

function selectRadio() {

    const radios = document.getElementsByName('contactado-por');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            if(radios[i].value === "telefono"){
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            }else if (radios[i].value === "Whatsapp"){
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            }else {
                let mail = document.getElementById("mail").style.display = "block"
                let telefono = document.getElementById("tele").style.display = "none"
            }
            break;
        }

    }
}


