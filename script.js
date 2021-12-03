
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@!#$%&_";

const pLength= document.getElementById("p-length");
const upperCase= document.getElementById("p-uppercase");
const lowerCase= document.getElementById("p-lowercase");
const pNumber= document.getElementById("p-number");
const pSymbol= document.getElementById("p-symbol");
const submit= document.getElementById("submit");
const password= document.getElementById("password");
const strength = document.getElementById("strenght");

submit.addEventListener("click" , () =>{
    let initialPass = "";
    (upperCase.checked) ? initialPass += uCase : "";
    (lowerCase.checked) ? initialPass += lCase : "";
    (pNumber.checked) ? initialPass += number : "";
    (pSymbol.checked) ? initialPass += symbol : "";

    let count=0;
    (upperCase.checked) ? count += 1: 0;
    (lowerCase.checked) ? count += 1: 0;
    (pNumber.checked) ? count += 1: 0;
    (pSymbol.checked) ? count += 1: 0;


    password.value = generatePassword(pLength.value, initialPass);
    strength.value = checkStrenght(pLength.value, count)
});


function generatePassword(l,initialPass){
    let pass = "";
    for (let i=0; i<l; i++){
        pass += initialPass.charAt(Math.floor(Math.random() * initialPass.length));

    }
    return pass;
}

function checkStrenght(l,count){
    let stren= ""
    if(l<=9){
        if(count<=2){
            stren= "Weak"
        }else if(count==3){
            stren ="Medium"
        }else if(count==4){
            stren= "Strong"
        }
    }else{
        if(count<=2){
            stren= "Weak"
        }else if(count==3){
            stren ="Strong"
        }else if(count==4){
            stren= "Strongest"
        }
    }

    return stren;
}


const copy = document.getElementById("copy");

copy.addEventListener("click" , () =>{
    if(password.value==""){
        alert("Please generate password")
    } else{
        password.select();
        document.execCommand("copy");
        alert("Password has been copied")
    }
    password.onselect();
})

