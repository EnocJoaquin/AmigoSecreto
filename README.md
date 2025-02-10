# Challenge Amigo Secreto.

<p>
El siguiente documento tiene como objetivo reforzar lo aprendido en los curso AluraLatam sombre logica de programación mediante el uso del lenjuage Javascript
</p>

## Descripción

<p>
Este código permite a los usuarios agregar nombres a una lista y luego seleccionar un nombre al azar de dicha lista. La aplicación es un complemneto de codigo escrito en HTML, CSS y Javascrpt  que mediante un sitio se agregan nombres a una lista para posteriormente sortearlos.
</p>

###Funciones

<p>
- **Agregar Amigo**: Agrega nombres a una lista.
- **Sortear Amigo**: Selecciona un nombre al azar de la lista y lo muestra en pantalla.
</p>

## Estructura del Código

### 1. Creación de la Lista de Nombres

Se crea una lista vacía llamada `listaAmigos` para almacenar los nombres de los amigos:

```javascript
let listaAmigos = [];
```

### 2. Función para Agregar un Amigo
<p>
La función agregarAmigo evalúa y agrega un nombre a la lista, llamando a otras funciones que validan el nombre:
</p>

```javascript
function agregarAmigo(nombre){
    if (validarNombres(nombre) && !nombreRepetido(nombre)){
        listaAmigos.push(nombre);
    }else{
        alert('Nombre Invalido o Repetido');
    }
    return;
}
```

### 3. Función para Validar Nombres

<p>
La función validarNombres se asegura de que el nombre no esté vacío y solo contenga letras:
</p>

```javascript
function validarNombres(nombre){
    if(nombre.trim() === ""){
        alert("Nombre invalido");
        return false;
    }
    const condicion = /^[A-Za-z\s]+$/;
    if(!condicion.test(nombre)){
        alert("Caracter invalido");
        return false;
    }
    return true;
}
```

### 4. Función para Verificar Nombres Repetidos
<p>
La función nombreRepetido evita que se ingrese un nombre que ya esté en la lista:
</p>

```
function nombreRepetido(nombre){
    const nombreNormalizado = nombre.toLowerCase();
    if(listaAmigos.some(n => n.toLowerCase() === nombreNormalizado)){
        return true;
    }
    return false;
}
```

###5. Función para Sortear un Amigo

<p>
La función sortearAmigo selecciona y muestra un nombre aleatorio de la lista:
</p>

```javascript
function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert ("No hay nombres en la lista");
        return;
    }
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`El amigo secreto es ${sorteado}`);
}
```

###6. Función actualizar lista.

<p>
Esta función tiene la tarea de actualizar la lista, ya sea para cuando se agregaron nombre o cuando la lista se reinicie.
</p> 

```javascript
function actualizarLista(){
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    listaAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
    return;
}
```
