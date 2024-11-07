const passwordBox = document.querySelector("#input-box");
const length = 10;
const gernate = document.querySelector('button');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbercase = "0123456789";
const symbloscase = "@_$-";

const allChars = uppercase + lowercase + numbercase + symbloscase

function createPassword(){
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbercase[Math.floor(Math.random() * numbercase.length)];
    password += symbloscase[Math.floor(Math.random() * symbloscase.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)] 
    }
    passwordBox.value = password;
}

gernate.addEventListener("click", function(){
    createPassword();
})


let copy = document.querySelector("#copy");
copy.addEventListener("click", function(){
   var select =  Selection(passwordBox.innerText);
})

// function copyPassword(){
//     passwordBox.Select();
//     document.exeCommand("copy");
//     alert("text copy")
// }