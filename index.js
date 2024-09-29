// "use strict"
// document.getElementById("loginform").addEventListener("submit", function(event) {
//     event.preventDefault()

//     let user = document.getElementById("Username");
//     let pass = document.getElementById("password")
//      if(user === "Admin" && pass === "admin123") {
//         console.log(true)
//         alert("Login Succesfully")
//      }else {
//         console.log(false);
//         alert("wrong password")
//         user.value = "";

//      }

// })


"use stict"

const form = document.getElementById("loginform");
let user = document.getElementById("Username");
let pass = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    if(user.value === "carl" && pass.value === "carl123") {
        console.log(true);
        alert("Login Successfully");
        user.value = "";
        pass.value = "";
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }else {
        console.log(false);
        alert("wrong password");
        user.value = ""
        pass.value = ""
    }
    
})