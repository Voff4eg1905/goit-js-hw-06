const formEl = document.querySelector(".login-form");
const emailInputEl = document.querySelector('input[name="email"]');
const passInputEl = document.querySelector('input[type = "password"]');

const onSubmit = (event) => {
    
    event.preventDefault();
    
    const {elements: {email, password}} = event.currentTarget;
    
    const userData = {
        "email": email.value,
        "password": password.value,
    }


    if (email.value === "" || password.value === "") {
        alert("All fields must be filled");
    } else {
        console.log(userData);
        reset ();
    }

    function reset () {
        email.value = "";
        password.value = "";
    }
 
}
formEl.addEventListener("submit", onSubmit);
