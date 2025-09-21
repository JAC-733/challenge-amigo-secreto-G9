let amigos=[];

// FUNCION AGREGAR AMIGO
function agregarAmigo(){
    let inputAmigos=document.getElementById("amigo");
    let nombreAmigos=inputAmigos.value.trim()

    if(nombreAmigos===""){
        alert('Por favor ingresa un nombre')
        return
        }

    //VERIFICAR QUE EN EL INPUT SOLO SE ESTAN INGRESANDO LETRAS  
    if (amigos.includes(nombreAmigos)) {
            alert("Este nombre ya fue agregado");
            inputAmigos.value="";
    return;
    }   

    //VERIFICAR QUE EN EL INPUT SOLO SE ESTAN INGRESANDO LETRAS
    let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(!soloLetras.test(nombreAmigos)){
        alert("Solo se permiten letras en el nombre");
        inputAmigos.value="";
        return;
    }
     amigos.push(nombreAmigos);
     console.log(amigos);
     mostrarAmigo();
     inputAmigos.value=""
     document.querySelector('#reiniciar').removeAttribute('disabled');
    }
// MOSTRAR AMIGO

function mostrarAmigo(){
    let ListaAmigos=document.getElementById("listaAmigos");
    ListaAmigos.innerHTML="";

    for (let i = 0; i < amigos.length; i++) {
        ListaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//SORTEAR AMIGO
function sortearAmigo(){
    // CONDICION SI ES QUE NO SE HA INGRESADO NINGUN AMIGO
    if (amigos.length===0){
        alert("No se puede realizar el sorteo, por favor agrega algún amigo");
        return;
    }
    //GENERANDO INDICE ALEATORIO PARA OBTENER NOMBRE SORTEADO
    let indiceAleatorio=Math.floor(Math.random()*amigos.length);
    let amigoSorteado=amigos[indiceAleatorio];
    let amigoSecreto=document.getElementById("resultado");
    amigoSecreto.innerHTML=`El amigo sorteado es ${amigoSorteado}`;

}
// NUEVO SORTEO
function nuevoSorteo(){
    console.log("Se ha iniciado el Sorteo nuevamente, por favor ingrese los nombres")
    condicionesIniciales();
}

//CONDICIONES INICIALES
function condicionesIniciales(){
    amigos=[]
    document.getElementById('amigo').value=""
    document.getElementById('resultado').innerHTML=""
    document.getElementById('listaAmigos').innerHTML=""
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}