const paso = 235; // card (220px) + gap (15px)

document.querySelectorAll('.categoria').forEach((categoria) => {
    const viewport = categoria.querySelector('.viewport');
    const izq = categoria.querySelector(".flecha_izq");
    const der = categoria.querySelector(".flecha_der");

    function actualizarBotones() {
        const max = viewport.scrollWidth - viewport.clientWidth;
        izq.disabled = viewport.scrollLeft <= 0;
        der.disabled = viewport.scrollLeft >= max -1;
    }

    der.addEventListener('click', () => viewport.scrollBy({ left: paso }));
    izq.addEventListener('click', () => viewport.scrollBy({ left: -paso }));

    viewport.addEventListener('scroll', actualizarBotones);
    window.addEventListener('resize', actualizarBotones);
    actualizarBotones();
});

const v = document.querySelector('.viewport');
console.log(v.scrollWidth, v.clientWidth);


// mascotas perdidas

const perdido = document.getElementById("aviso");

let mascotas = [{
    foto: `<img src="../img/aviso_pet.png">`,
    nombre: `Rex`,
    numero: "",
    paradero: " En bosques de palermo, 22/10/2026",
    descripcion: `Mancha negra en la pata trasera izquerda con forma de la letra "t"`
},{
    foto: `<img src="../img/cat_aviso.png">`,
    nombre: `Totti`,
    numero: "",
    paradero: " Entre cabildo y dorrego, 2/11/2026",
    descripcion: `Mancha negra en la pata trasera derecha`
},{
    foto: `<img src="../img/cat_aviso.png">`,
    nombre: `Leo`,
    numero: "",
    paradero: " Entre cabildo y maure, 24/10/2026",
    descripcion: `Le falta una parte de su oreja derecha`
},{
    foto: `<img src="../img/aviso_pet.png">`,
    nombre: `Grey`,
    numero: "",
    paradero: " Barrancas de Belgrano, 22/8/2026",
    descripcion: `Es un poco agrecivo`
},{
    foto: `<img src="../img/cat_aviso.png">`,
    nombre: `Leo`,
    numero: "",
    paradero: " Entre cabildo y maure, 24/10/2026",
    descripcion: `Le falta una parte de su oreja derecha`
},{
    foto: `<img src="../img/aviso_pet.png">`,
    nombre: `Coddy`,
    numero: "",
    paradero: " En la plaza mafalda, 22/11/2026",
    descripcion: `Es muy amigable, si te ve ira a saludarte `
}];

mascotas.forEach(mascota =>{
    const tarjeta_perdidos = document.createElement("div");
    tarjeta_perdidos.classList.add("aviso_mascota");
    tarjeta_perdidos.innerHTML = `
    <div class="foto_pet">
        ${mascota.foto}
    </div>
    <div class="info_pet">
        <h5>Nombre: ${mascota.nombre}</h5>
        <h5>Numero Telefonico:${mascota.numero}</h5>
        <h5>Visto por ultima vez:${mascota.paradero}</h5>
        <h5>Descripcion: ${mascota.descripcion}</h5>
    </div>`;
    perdido.appendChild(tarjeta_perdidos);
}) // NO TOCAR ABSOLUTAMENTE NADA 

// temas

// ALIMENTACION

let temas_a = [{
    nombre_tema: `¿Mi mascota come mucho?`,
    descripcion_tema: `Si come mucho, no siempre tiene una sola respuesta`,
    interaciones: `+3.000 interacciones`,
    publicacion: `02/10/2026`
},{
    nombre_tema: `¿Notas que no come?`,
    descripcion_tema: `¿Que hago si mi mascota no quiere comer?`,
    interaciones: `+250 interacciones`,
    publicacion: `20/11/2026`
},{
    nombre_tema: `¿Que deberia comer mi mascota?`,
    descripcion_tema: `Este es el Plato ideal`,
    interaciones: `+500 interacciones`,
    publicacion: `02/09/2026`
},{
    nombre_tema: `Cantidad alimentaria necesaria`,
    descripcion_tema: `En rasgos generales`,
    interaciones: `+1.250 interacciones`,
    publicacion: `12/10/2026`
}];

const alimentacion = document.getElementById("alimentacion");

temas_a.forEach(tema =>{
    const tema_debate = document.createElement("div");
    tema_debate.classList.add("tema");
    tema_debate.innerHTML = `
    <div class="container_foro">
        <div class="inicio_foro">
            <div class="titulo_foro">
                <h5>${tema.nombre_tema}</h5>
            </div>
            <div class="descripcion_foro">
                <h6>${tema.descripcion_tema}</h6>
            <div>
        </div>
        <div class="foro_info">
            <p>${tema.interaciones} - ${tema.publicacion}</p>
        </div>
    </div>`;
    alimentacion.appendChild(tema_debate);
}) // NO TOCAR ABSOLUTAMENTE NADA 

// BIENESTAR

let temas_b = [{
    nombre_tema: `¿Que tanto te necesita tu mascota?`,
    descripcion_tema: `Te necesita y no te estas dando cuenta`,
    interaciones: `+10.000 interacciones`,
    publicacion: `02/09/2026`
},{
    nombre_tema: `Lo que necesita es...`,
    descripcion_tema: `Esto es lo que necesita`,
    interaciones: `+900 interacciones`,
    publicacion: `15/11/2026`
},{
    nombre_tema: `¿Le gusta jugar?`,
    descripcion_tema: `Aprovecha ahora`,
    interaciones: `+280 interacciones`,
    publicacion: `20/11/2026`
},{
    nombre_tema: `¿Lo ves diferente en algo?`,
    descripcion_tema: `Solo vos lo conoces y solo vos podes ayudarlo`,
    interaciones: `+3.750 interacciones`,
    publicacion: `25/09/2026`
}];

const bienestar = document.getElementById("bienestar");

temas_b.forEach(tema =>{
    const tema_debate = document.createElement("div");
    tema_debate.classList.add("tema");
    tema_debate.innerHTML = `
    <div class="container_foro">
        <div class="inicio_foro">
            <div class="titulo_foro">
                <h5>${tema.nombre_tema}</h5>
            </div>
            <div class="descripcion_foro">
                <h6>${tema.descripcion_tema}</h6>
            <div>
        </div>
        <div class="foro_info">
            <p>${tema.interaciones} - ${tema.publicacion}</p>
        </div>
    </div>`;
    bienestar.appendChild(tema_debate);
}) // NO TOCAR ABSOLUTAMENTE NADA 


// HABITOS 

let temas_h = [{
    nombre_tema: `¿Trata de esconderse debajo de la cama?`,
    descripcion_tema: `Te esta diciendo algo`,
    interaciones: `+5.000 interacciones`,
    publicacion: `05/09/2026`
},{
    nombre_tema: `La verdad detras de sus acciones`,
    descripcion_tema: `Nadie te cuenta lo que en verdad hace`,
    interaciones: `+4.550 interacciones`,
    publicacion: `12/08/2026`
},{
    nombre_tema: `¿Porque se adueña de un lugar?`,
    descripcion_tema: `Su lugar favorito`,
    interaciones: `+750 interacciones`,
    publicacion: `02/11/2026`
},{
    nombre_tema: `¿Se te acerca demasiado?`,
    descripcion_tema: `Puede que sepa algo que vos no`,
    interaciones: `+7.500 interacciones`,
    publicacion: `01/10/2026`
}];

const habitos = document.getElementById("habitos");

temas_h.forEach(tema =>{
    const tema_debate = document.createElement("div");
    tema_debate.classList.add("tema");
    tema_debate.innerHTML = `
    <div class="container_foro">
        <div class="inicio_foro">
            <div class="titulo_foro">
                <h5>${tema.nombre_tema}</h5>
            </div>
            <div class="descripcion_foro">
                <h6>${tema.descripcion_tema}</h6>
            <div>
        </div>
        <div class="foro_info">
            <p>${tema.interaciones} - ${tema.publicacion}</p>
        </div>
    </div>`;
    habitos.appendChild(tema_debate);
}) // NO TOCAR ABSOLUTAMENTE NADA 

// RECOMENDACIONES

let temas_r = [{
    nombre_tema: `Cada tanto deberias...`,
    descripcion_tema: `Cuida su salud como cuidas la tuya`,
    interaciones: `+1.000 interacciones`,
    publicacion: `22/11/2026`
},{
    nombre_tema: `¿Que deberia hacer si...?`,
    descripcion_tema: `Podes tomar accion`,
    interaciones: `+3.850 interacciones`,
    publicacion: `17/11/2026`
},{
    nombre_tema: `A veces es bueno escucharlo`,
    descripcion_tema: `Te puede salvar`,
    interaciones: `+1.150 interacciones`,
    publicacion: `16/11/2026`
},{
    nombre_tema: `prueba`,
    descripcion_tema: `Este es un foro de prueba`,
    interaciones: `+1.350 interacciones`,
    publicacion: `18/10/2026`
}];

const recomendacion = document.getElementById("recomendaciones");

temas_r.forEach(tema =>{
    const tema_debate = document.createElement("div");
    tema_debate.classList.add("tema");
    tema_debate.innerHTML = `
    <div class="container_foro">
        <div class="inicio_foro">
            <div class="titulo_foro">
                <h5>${tema.nombre_tema}</h5>
            </div>
            <div class="descripcion_foro">
                <h6>${tema.descripcion_tema}</h6>
            <div>
        </div>
        <div class="foro_info">
            <p>${tema.interaciones} - ${tema.publicacion}</p>
        </div>
    </div>`;
    recomendacion.appendChild(tema_debate);
}) // NO TOCAR ABSOLUTAMENTE NADA 
