
function contactos(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    window.location.href = "./assets/pages/contactos.html";
}
