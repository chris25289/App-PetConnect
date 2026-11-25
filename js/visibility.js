let inputPassword = document.querySelector("#password");
let iconoVisibilidad = document.querySelector(".visibility");

iconoVisibilidad.addEventListener("click", () => {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        iconoVisibilidad.textContent = "visibility";
    } else {
        inputPassword.type = "password";
        iconoVisibilidad.textContent = "visibility_off"
    }
});
