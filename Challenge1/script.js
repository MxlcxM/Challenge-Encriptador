// Constantes que vamos a usar
const inMsj = document.querySelector(".inMsj")
const outMsj = document.querySelector(".outMsj")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".salto")
const btn4 = document.querySelector(".copy")
 
//funcion para encriptar los mensajes
function cifrar(){
    var msj = inMsj.value.toLowerCase()
    var msjCifrado = msj
    .replaceAll("e", "enter")
    .replaceAll("o", "ober")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    return msjCifrado
}
//funcion para el boton que encripta
function btnEnc(){
    const cifrado = cifrar(inMsj.value)
    outMsj.value = cifrado;
    inMsj.value = ""

}

btn1.onclick = btnEnc

//funcion para desencriptar
function descifrar(){
    var msj = inMsj.value.toLowerCase()
    var msjCifrado = msj
    .replaceAll("enter", "e")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    return msjCifrado
}

//funcion para el boton de desencriptat
function btnDes(){
    const cifrado = descifrar(inMsj.value)
    outMsj.value = cifrado;
    inMsj.value = ""

}

btn2.onclick = btnDes

//funcion para el boton que lleva el msj del campo 2 al campo 1
function btnSalto(){
    inMsj.value = outMsj.value
    outMsj.value = ""
    
}

btn3.onclick = btnSalto

function copiar(){
    outMsj.select()
    navigator.clipboard.writeText(outMsj.value)
    outMsj.value = ""
}

btn4.onclick = copiar
