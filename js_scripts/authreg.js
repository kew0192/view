const eye_button = document.getElementById("eye_button");
const input_password = document.getElementById("password")
const input_passworddup = document.getElementById("passworddup")

eye_button.addEventListener('click', () => {
    switch (input_password.type){
        case "password":
            input_password.type = "text";
            input_passworddup.type = "text";
            eye_button.style.backgroundImage = "url('/images/eye_crossed_out.jpg')";
            break;
        case "text":
            input_password.type = "password";
            input_passworddup.type = "password";
            eye_button.style.backgroundImage = "url('/images/eye.jpg')";
            break;
    }
});
