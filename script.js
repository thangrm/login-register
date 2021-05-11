var btnNav = document.getElementById("btnNav");
var btnTitle = document.getElementById("btnTitle");
var formLogin = document.getElementById("formLogin");
var formRegister = document.getElementById("formRegister");

btnNav.addEventListener("click", function() {
    formLogin.classList.toggle("hide");
    formRegister.classList.toggle("hide");

    if (btnNav.classList.contains("nav-register")) {
        btnNav.classList.remove("nav-register");
        btnNav.classList.add("nav-login");
        btnTitle.textContent = "Login";
    } else {
        btnNav.classList.remove("nav-login");
        btnNav.classList.add("nav-register");
        btnTitle.textContent = "Register";
    }
});