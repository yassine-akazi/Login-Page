// const button = document.getElementById("")
email.addEventListener("input", function () {
    console.log("input changed");
    if (email.value.includes('@' && ".")) {
        error.innerHTML = ""
    } else {
        error.innerHTML = " vérifier votre email"
    }
    

});

