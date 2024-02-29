/*******************************
 *  
 *  * funcion de validación
 *  
*********************************/

/* 
    * javascript de login.html
*/

/* function validacion(e){

    e.preventDefault();
    let correcto = true; //todo funciona por defecto
    let username = document.getElementById('username').value; // getter
    let password = document.getElementById('password').value;

    if (username == "" || !(username.length >= 8 && username.length <= 12)) {
        document.getElementById('usernameHelp').style.visibility="visible";
        document.getElementById('username').style.borderColor="red";
        correcto = false;
    }
    
    if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}$/.test(password))) {
        document.getElementById('passwordHelp').style.visibility="visible";
        document.getElementById('password').style.borderColor="red";
        correcto = false;
    }
    
    return correcto;

}

function resetear(id) {

    document.getElementById(id + 'Help').style.visibility="hidden"; // concateno el id con el 'Help'
    document.getElementById(id).style.borderColor="lightgray";

} */


function validacion() {

    let correcto = true;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "" || !(username.length >= 8 && username.length <= 12)) {
        document.getElementById('usernameHelp').style.visibility = "visible";
        document.getElementById('username').style.borderBottom = "2px solid red";
        correcto = false;
    }

    // Validar la contraseña con al menos una mayúscula, una minúscula y un dígito
    if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}$/.test(password))) {
        document.getElementById('passwordHelp').style.visibility = "visible";
        document.getElementById('password').style.borderBottom = "2px solid red";
        correcto = false;
    }

    return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}

