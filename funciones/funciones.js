function iniciar() {

  let manuales = [];
  let opcionManuales;
  let contenedorManuales = document.getElementById('contenedor-manuales');

  class manual {
    constructor(nombre, url, foto) {
      this.nombre = nombre;
      this.url = url;
      this.foto = foto;
    }
  }


  let completo = new manual('completo', 'manual.html','imagenes/PORTADA.jpg');
  let primera = new manual('primera', 'https://heyzine.com/flip-book/8bff3511a4.html', 'imagenes/AMARILLO.jpg');
  let segunda = new manual('segunda', 'https://heyzine.com/flip-book/b925ceca84.html', 'imagenes/TURQUESA.jpg');
  let tercera = new manual('tercera', 'https://heyzine.com/flip-book/ce4546a8db.html', 'imagenes/MORADO1.jpg');
  let cuarta = new manual('cuarta', 'https://heyzine.com/flip-book/c174c4f4a0.html', 'imagenes/MORADO2.jpg');
  let quinta = new manual('quinta', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/MORADO3.jpg');
  let sexta = new manual('sexta', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/ROSADO.jpg');
  let septima = new manual('septima', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/AQUA.jpg');
  let octava = new manual('octava', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/CELESTE.jpg');
  let novena = new manual('novena', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/AZUL.jpg');
  let decima = new manual('decima', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/VERDE.jpg');
  let onceava = new manual('onceava', 'https://heyzine.com/flip-book/1796be0bcc.html', 'imagenes/ANARANJADO.jpg');
  
  
  manuales.push(completo, primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, decima, onceava);



  manuales.forEach((manual) => {

    opcionManuales = `<div class="imagenes">
        <a href="${manual.url}">
          <button>
            <img src="${manual.foto}" alt="${manual.nombre}"/>
          </button>
        </a>
      </div>`

    contenedorManuales.innerHTML += opcionManuales;

  });

}



window.addEventListener('load', iniciar);