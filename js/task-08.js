const formEl = document.querySelector(".login-form");
const emailInputEl = document.querySelector('input[name="email"]');
const passInputEl = document.querySelector('input[type = "password"]');

const onSubmit = (event) => {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("All fields must be filled");
    }

    const userData = {
        "email": email.value,
        "password": password.value,
    }
    console.log(userData);
  
    function reset () {
        email.value = "";
        password.value = "";
    }
    reset ();
    
}
formEl.addEventListener("submit", onSubmit);
