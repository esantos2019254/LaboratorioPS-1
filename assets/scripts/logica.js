
function contactos(){
    let inputEmail = document.getElementById('inputEmail').value;
    let inputPassword = document.getElementById('inputPassword').value;
    let datos = {
        inputEmail: inputEmail,
        inputPassword: inputPassword
    };
    localStorage.setItem('datosUsuario', JSON.stringify(datos));
    window.location.href = "./assets/pages/contactos.html";
}
