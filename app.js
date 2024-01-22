let numeroIntentos = 0; // cantidad de intentos que ustede lleva 
let maxIntentos= 5; //Maximo de intentos posibles 
let numeroMaximo = 10;//Numero maximo que el numero secreto va a tomar
let numeroMinimo = 1; //Numero minimo  que el numero secreto puede tomar 
let listaNumeros= []; //Lista de numeros Secretos que han salido



let numeroSecreto = 0;// return el elemento a adivinar 
console.log(numeroSecreto);

function numCorrect( ){ //lee el elemento del input y lo devuelve como un int 
    let numUsuario = parseInt(document.getElementById('inputNumero').value);
    let palabraintento = numeroIntentos > 1 ? 'intentos' : 'intento';
    if(numeroIntentos == maxIntentos){
        asignarElemento('p', `Usted ha alcanzado los maximos intentos posibles`);
        disableButton();
        return;
    }
    if(numUsuario < numeroMinimo || numUsuario > numeroMaximo){
        asignarElemento('p',`El numero ${numUsuario} no entra dentro de los parametros del juego`);
    }else if(numUsuario === numeroSecreto){
        asignarElemento('p', `Usted ha acertado el número en ${numeroIntentos} ${palabraintento}.`);
        disableButton();
    }else{
        if(numUsuario > numeroSecreto){
            asignarElemento('p',`El numero es menor`);
        }else{
            asignarElemento('p',`El numero es mayor`);
        }
        numeroIntentos++;
        cleanBox();
        }
    return;
}
function initialConditions(){
    asignarElemento('h1','Juego del número secreto');
    asignarElemento('p','Indica un numero del 1 al 10');// Indicar el mensaje inicial
    contEnCeros();//Reiniciar el contador
    numeroSecreto= getRandomArbitrary(numeroMinimo,numeroMaximo);//Generar el valor aleatorio
}


function disableButton(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function enableButton(){
    document.getElementById('reiniciar').setAttribute('disabled','true')
}
function contEnCeros(){
    numeroIntentos = 1;
}
function cleanBox(){
    let valorCaja = document.querySelector('#inputNumero');
    valorCaja.value= '';
}


function asignarElemento(elemento, text){ //llena los elementos de elemento en text
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML = text;
    return;
}
//Esta función aun no funciona (Posted in forum)
function asignarElementoByID(id, text){
    let htmlElement = document.getElementById(id);
    htmlElement.innerHTML = text;
    return;
}


function getRandomArbitrary(min, max) { //return un elemnto entre dos intervalos (min, max) 
    let numero_generado =parseInt(Math.random() * (max - min) + min);
    if(listaNumeros.length == numeroMaximo){
        asignarElemento('p','Ya se sortearon todos los elementos');
    }else{
        if(listaNumeros.includes(numero_generado)){
            return getRandomArbitrary(min, max);
        }else{
            listaNumeros.push(numero_generado);
            return numero_generado;
        }
    }
}


function playAgain(){
    cleanBox(); // limpiar el input
    initialConditions(); 
    enableButton();
}

function agregarNumeroLista(elemento){
    listaNumeros.push(elemento);
}


initialConditions();


//asignarElementoByID('titulo', 'Juego del número secreto');
