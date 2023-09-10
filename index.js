const usuario1 = document.querySelector("#usuario")
const contraseña = document.querySelector("#password")
const contraseña1 = parseInt(contraseña.value);
const botoninicial = document.querySelector("#btningresar")

const total1 = document.querySelector("#total")
const operacion = document.querySelector("#operacion1")
const botonfinal = document.querySelector("#btnEjecucion")
const saldo = document.querySelector("#monto")

let dinero = 600
let totalParrafo = document.getElementById("total");
let intentos = 4

botoninicial.addEventListener("click", cuenta)
botonfinal.addEventListener("click", operar)

function cuenta(){
    if(usuario1.value === "francisco" && contraseña.value === "1234"){
        alert("Bienvenido")
    }
    else{
        intentos --;
    }
    if (intentos > 0){
        alert("Contraseña incorrecta, intente de nuevo")
    }
    else {
        alert("Alcanzaste los intentos máximos que son 3.");
        contraseña.style.display = "none";
    }
}

function operar(){
if(operacion.value === "1"){
    let entero = parseInt(saldo.value)
    dinero = (entero + dinero)
    totalParrafo.textContent = `Su saldo es de:$ ${dinero}`;

} else if(operacion.value === "2") {
    let entero = parseInt(saldo.value)
        
    if(entero <= dinero){
    dinero = (dinero - entero)
    totalParrafo.textContent = `Su saldo es de:$ ${dinero}`;
}else{
    alert("NO PUEDES REALIZAR ESTA OPCION!")
}
}
}


