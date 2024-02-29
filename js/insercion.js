/*********** código del modal del footer *************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}

/* 

funcion validacion para inserccion.html

*/
function validacion(e) {

    e.preventDefault();
    let correcto = true;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let id = document.getElementById('id').value;
    let email = document.getElementById('email').value;
    let provincia = document.getElementById('provincia').value;
    let familia = document.querySelector('input[value="yes"]:checked');
    let terminos = document.getElementById('terminos').checked;
    let numero = document.getElementById('numero').value;

    if (name == "") {
        document.getElementById('nameHelp').style.visibility = "visible";
        document.getElementById('name').style.borderBottom = "3px solid red";
        correcto = false;
    }

    if (!/^.{6,}$/.test(surname)) {
        document.getElementById('surnameHelp').style.visibility = "visible";
        document.getElementById('surname').style.borderBottom = "3px solid red";
        correcto = false;
    }

    if (!/^(?=.*[A-Z])(?=.*\d{8}).{9}$/.test(id)) {
        document.getElementById('idHelp').style.visibility = "visible";
        document.getElementById('id').style.borderBottom = "3px solid red";
        correcto = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailHelp').style.visibility = "visible";
        document.getElementById('email').style.borderBottom = "3px solid red";
        correcto = false;
    }

    if (provincia === "0") {
        document.getElementById('provinciaHelp').style.visibility = "visible";
        document.getElementById('provincia').style.borderBottom = "3px solid red";
        correcto = false; // Detiene el envío del formulario
    }

    if (!familia === "yes") {
        document.getElementById('familiaHelp').style.visibility = "visible";
        correcto = false; // Detiene el envío del formulario
    }

    if (!/^\d{9}$/.test(numero)) {
        document.getElementById('numeroHelp').style.visibility = "visible";
        document.getElementById('numero').style.borderBottom = "3px solid red";
        correcto = false; // Detiene el envío del formulario
    }

    if (!terminos) {
        document.getElementById('terminosHelp').style.visibility = "visible";
        correcto = false; // Detiene el envío del formulario
    }

    return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}