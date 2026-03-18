const eye_button = document.getElementById("eye_button");
const input_password = document.getElementById("password")
eye_button.addEventListener('click', () => {
    switch (input_password.type){
        case "password":
            input_password.type = "text";
            eye_button.style.backgroundImage = "url('../images/eye_crossed_out.jpg')";
            break;
        case "text":
            input_password.type = "password";
            eye_button.style.backgroundImage = "url('../images/eye.jpg')";
            break;
    }
});