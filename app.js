// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable globales 
let amigos = []
const listaAmigos = document.getElementById("listaAmigos");
 const ResultadoGanador = document.getElementById("resultado");
 const buttonSortear = document.querySelector(".button-draw")
 let  li ; // variable para crear el elemento o etiqueta Li


//Funcion para validar amigo 
function validarUser(amigoAdd) {
    if (amigoAdd.value == "") {
        alert ("Digite tu nombre");
    } else{
        amigos.push(amigoAdd.value);
        amigoAdd.value ="";
    }
    
    
}

//funcion Crear lista de usuarios
function crearLista(amigosArray ,listaAmigos ){  // espera dos parametros  de ul  y el array que va a recorrer
    listaAmigos.innerHTML ="";  
    for(let i = 0 ;  i < amigosArray.length ; i++ ){
        li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li)
        
    }
}

// funcion para resetar el juego
function reiniciar(){
    amigos = []
    listaAmigos.innerHTML ="";  
    buttonSortear.disabled = false;
    ResultadoGanador.innerHTML = " ";
    alert("Sorteo Reiniciado ")
}



function agregarAmigo() {
    const amigoAdd =  document.getElementById("amigo");
    validarUser(amigoAdd);  // mandamos de argumente el  nombre del usuario
    crearLista(amigos,listaAmigos); // mandamos dos argumetnos el arrat y el ul 
    console.log(amigos)  

}



function sortearAmigo(){
    // condicional para verificar si existe datos en el array
    // si no existe mas de 1 participante el sorteo no se realizara
    if (amigos.length <= 1) {
       alert ("¡Necesitamos más participantes para el sorteo!")       
       return  
    }
    const indexAleatorio  = Math.floor(Math.random() * amigos.length);   // index aleatorio
    const amigoGanador =  amigos[indexAleatorio];
    li = document.createElement('li');
    li.textContent = ` El ganador es ${amigoGanador}`;
    ResultadoGanador.appendChild(li);
    buttonSortear.disabled = true;
  
}

