let perfiles_veterinaria = [{
    foto: ``,
    nombre: `Juan Carlos`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Lucia Raldes`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Paul Ramon`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `MiCompañero`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Martin Garcia`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Pethelp`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Lautaro Reldes`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Mimejoramigo`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `SiempreConEl`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Roberto del Campo`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Lucrecia Soule`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Juan Lopez`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},,{
    foto: ``,
    nombre: `Florencia Baez`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Fernando Donfe`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Alrescate`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativas`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Martias Correa`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Petmedical`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Walter Calamaro`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Suvida`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Acaestamos`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Fundacion`
},{
    foto: ``,
    nombre: `Lisandro Fernandez`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios diversos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Josefina Soule`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente negativos`,
    clase: `Usuario`
},{
    foto: ``,
    nombre: `Juan Roman`,
    tipo_servicio: `veterinaria`, 
    comentarios: `Comentarios mayormente positivos`,
    clase: `Usuario`
}];

let contenedor = document.querySelector(`.card__front`);
// let buscador = document.querySelector(".search");
// let sinResultado = document.querySelector(".sin-resultados");

perfiles_veterinaria.forEach(perfil =>{
    const veterinaria = document.createElement("div");
    veterinaria.classList.add("card__front");
    
    if (perfil.clase === `Fundacion`) {
        veterinaria.innerHTML = `
        <a href="../html/chat.html">
            <span class="material-symbols-outlined">groups</span>
            <span class="servicio_name">${perfil.nombre}</span>
            <p class="data_servicio">
                ${perfil.tipo_servicio} - ${perfil.comentarios}
            </p>
        </a>
        <div class="opcines">
            <button class="fundacion">${perfil.clase}</button>
            <a href="../html/perfil.html">
                <button class="ver_perfil">Ver perfil</button>
            </a>
        </div>`;
    } else if (perfil.clase === `Usuario`){
        veterinaria.innerHTML = `
        <a href="../html/chat.html">
            <span class="material-symbols-outlined">person</span>
            <span class="servicio_name">${perfil.nombre}</span>
            <p class="data_servicio">
                ${perfil.tipo_servicio} - ${perfil.comentarios}
            </p>
        </a>
        <div class="opcines">
            <button class="usuario">${perfil.clase}</button>
            <a href="../html/perfil.html">
                <button class="ver_perfil">Ver perfil</button>
            </a>
        </div>`;
    }   
    contenedor.appendChild(veterinaria);

}); // NO TOCAR ABSOLUTAMENTE NADA 

// Buscador

const buscar = document.querySelector(".search");

buscar.addEventListener(`keyup`, e => {
    if (e.target.matches(`#buscador`)) {
        document.querySelectorAll(`.card__front`).forEach(perfil =>{
            perfil.textContent.toLowerCase().includes(e.target.value)
            ? perfil.classList.remove(`filtro`)
            : perfil.classList.add(`filtro`);
        })
    }
})

// Notificacion de mensaje

let notificaciones = [{
    cliente : `Francisco Baez`,
    mensaje: `Hola, que tal?`
}]

let aviso = document.querySelector(".notificacion_boton")
let panel = document.querySelector(".panel");
let mensaje = document.createElement("div");

notificaciones.forEach(notificacion => {
    if (notificacion.mensaje == ``) {
        mensaje.innerHTML = `
        <span class="material-symbols-outlined">mail</span>
        `;
        panel.innerHTML = `<p>No tienes ningun mensaje</p>`;
    } else {
        mensaje.innerHTML = `
        <span class="material-symbols-outlined">mark_email_unread</span>
        `;
        panel.innerHTML = `
        <a href="../html/chat.html"><p>${notificacion.cliente}:</a> ${notificacion.mensaje}</p>
        `;
    } 
    aviso.appendChild(panel)
    aviso.appendChild(mensaje)
})
