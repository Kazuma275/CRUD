/*******************************
 *  
 *  * funcion de validación
 *  
*********************************/

/* 
    * javascript de login.html
*/


/* Función validacion */

function validacion() {

    let correcto = true;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    /* Validación usuario */

    if (username === "" || !(username.length >= 8 && username.length <= 12)) {
        document.getElementById('usernameHelp').style.visibility = "visible";
        document.getElementById('username').style.borderBottom = "3px solid red";
        correcto = false;
    }

    /* Validación contraseña */

    // Validar la contraseña con al menos una mayúscula, una minúscula y un dígito
    if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}$/.test(password))) {
        document.getElementById('passwordHelp').style.visibility = "visible";
        document.getElementById('password').style.borderBottom = "3px solid red";
        correcto = false;
    }

    return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}

