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
