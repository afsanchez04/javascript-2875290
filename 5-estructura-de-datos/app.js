const container = document.querySelector('.container')

peliculas.forEach( element => {
    let card = document.createElement('div');

    card.innerHTML = `
        <section class="tarjeta">
        <div class="contenedor">
            <img src="${element.image}" >
            <div class="name">Nombre: ${element.nombre}</div>
            <div class="direct">Director: ${element.direccion}</div>
            <div class="prot">Protagonistas: ${element.protagonistas[0]} </div>
            <div class="gen">Genero: ${element.genero[0]}</div>
            <div class="year">Año: ${element.year}</div>
        </div>
    </section>
    `
    container.appendChild(card);
} ) 


