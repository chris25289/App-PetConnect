// chat
    let chats = [{
        me_1: `Buenas tardes, mi nombre es...${`<br>`}Me comunico por que, desgraciadamente, mi mascota sufre de...`,
        you_1: "Buenas tarde..., que desgracia que tu mascota este sufriendo, ¿te gustaria traerla a mi consultorio para hacerle una revicion?",
        you_2: "Tengo un tiempo libre a las 17:30",
        me_2: "Se lo agradesco, para esa hora estaremos alli",
        me_3: "Gracias por todo señor, ya se siente mucho mejor, ¿Cuanto le debo?",
        you_3: "Por ser la primera vez, y al haber sido algo corto, serian $5500",
        me_4: "Listo, ahi le pase el comprobante. Muchas gracias por todo",
        you_4: "No hay porque, fue un gusto"
    }];

    let contenedor_chat = document.querySelector(".chat__content");
    
chats.forEach(chat =>{
    const conversacion = document.createElement("div");
    conversacion.classList.add("chat__content")
    conversacion.innerHTML = `
        <div class="msg self" id="me">
            <p class="msg__content self">${chat.me_1}</p>
        </div>
        <div class="msg">
            <p class="msg__content">${chat.you_1}</p>
        </div>
        <div class="msg">
            <p class="msg__content">${chat.you_2}</p>
        </div>
        <div class="msg self">
            <p class="msg__content self">${chat.me_2}</p>
        </div>
        <div class="msg self" id="me">
            <p class="msg__content self">${chat.me_3}</p>
        </div>
        <div class="msg">
            <p class="msg__content">${chat.you_3}</p>
        </div>
        <div class="msg self">
        <p class="msg__content self">${chat.me_4}</p>
        </div>
        <div class="msg">
            <p class="msg__content">${chat.you_4}</p>
        </div>
        <div class="msg self">
        <p class="msg__content self">${chat.me_4}</p>
        </div>
        <div class="msg">
            <p class="msg__content">${chat.you_4}</p>
        </div>
        <div class="div_inferior">
            <div class="inferior">
                <input placeholder="Mensaje" class="barra_msg">
                <span class="material-symbols-outlined enviar" id="enviar">send</span>
            </div>
        </div>
    `;
    contenedor_chat.appendChild(conversacion)
});
