let mascotas = [{
    foto: `<img src="../img/aviso_pet.png" class="foto_pet">`,
    nombre: `Rex`,
    nacimiento: `5/6/2017`,
    estado: `Perdido`
}];

let mi_mascota = document.querySelector(".mi_mascota");

mascotas.forEach(mascota =>{
    const su_tarjeta = document.createElement("div");
    // su_tarjeta.classList.add("mi_mascota");
    su_tarjeta.innerHTML = `
    <div class="sus_datos">
        ${mascota.foto}
        <h4 class="su_nombre">${mascota.nombre}</h4>    
    </div>
    <div class="sus_tramites">
        <p class="tramite_nombre">Nombre: ${mascota.nombre}</p>
        <p class="tramite_nacimiento">Fecha de Nacimiento: ${mascota.nacimiento}</p>
        <p class="tramite_estado">Estado: ${mascota.estado}</p>
    </div>`;

    let reporte;
    if (mascota.estado != `Perdido`) {
        reporte = document.createElement("div");
        reporte.classList.add("reportar_perdido")
        reporte.innerHTML = `
        <button class="boton_reporte">Reportar como desaparecido</button>`;
    } else if (mascota.estado == `Perdido`) {
        reporte = document.createElement("div");
        reporte.classList.add("reportar_perdido")
        reporte.innerHTML = `
        <button class="boton_reporte">Reportar como encontrado</button>`;
    }
    mi_mascota.appendChild(reporte);
    mi_mascota.appendChild(su_tarjeta);
}) // NO TOCAR ABSOLUTAMENTE NADA 
