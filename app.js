// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// En primera instancia, se crea la lista en la que guardarán los nombres.
let listaAmigos = [];

//En este apartado se hara la conexcion entre el codigo javascript y html en cuestion del boton añadir amigo y la lsita donde se almacenan los nombres.
document.getElementById('agregarBtn').addEventListener('click', () => {
    const nombre = document.getElementById('amigo').value;
    agregarAmigo(nombre);
    document.getElementById('amigo').value = '';
    actualizarLista();
});

//En este bloque de codigo hace la conexión entre el codigo javascript y html para hacer funcionar el botón "sortear amigo"
document.getElementById('sortearBtn').addEventListener('click', () => {
    sortearAmigo();
});

// se creo la función "agregarAmigo" para poder evauar y posteriormente agregar el nombre a la lista. 
// Cabe mecionar que esta función llama a otras funciones que tambien se encargan de restringir nombres invalidos y es aqui donde corvengen.
function agregarAmigo(nombre){
    if (validarNombres(nombre) && !nombreRepetido(nombre)){
        listaAmigos.push(nombre);   
    }else{
        alert('Nombre Invalido o Repetido')
    }
    return 
}

function validarNombres(nombre){
    // esta funcion sirve para evitar que el usuario no deje un nombre vacio o incluya caracteres
   if(nombre.trim() === ""){
    alert("Nombre invalido");
    return false;
   }  
   // esta funcion se encarga de aseguar que el usuario ingrese solo letras mayusculas o minusculas
   const condicion = /^[A-Za-z\s]+$/;
   if(!condicion.test(nombre)){
    alert("Caracter invalido");
    return false;
   }
   return true;
}

function nombreRepetido(nombre){
    // esta funcion es para evitar que se ingrese un nombre que ya ha sido ingresado anteriormente
    const nombreNormalizado = nombre.toLowerCase();

    if(listaAmigos.some(n => n.toLowerCase() === nombreNormalizado)){
        return true;
    }
    return false;
}


// esta función tiene la función de tomar y mostrar de la lista de nombre un nombre alaeatorio
function sortearAmigo(nombre){
    if (listaAmigos.length === 0){
        alert ("No hay nombres en la lista");
        return;
    }
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; 
    alert(`El amigo secreto es ${sorteado}`);
    
}


// es funcion tiene la función de actualizar la lista, ya sea para cuando se agregaron nombre o cuando la lista se reinicie
function actualizarLista(){
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    listaAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    })
    return;
}
