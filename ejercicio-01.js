function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    //Para la prueba uno
   if(creditCardNumber == undefined){
       return("Ingresa un numero");
   }
   //Para la prueba dos
   if(typeof creditCardNumber != "number"){
       return("Error de dato");
   }
   //Para la prueba tres
   if(cantidadDeDigitos(creditCardNumber) != true){
       return("Faltan numeros");
   }
   //Para as prueba cuatro y cinco
   if(validacionNumero(creditCardNumber) == true){
       return(true);
   } else {
       return (false);
   }
}

//Función para validar la prueba tres
function cantidadDeDigitos(creditCardNumber){
  //Pasamos el número dado a string para poder obtener la longitud
  var numero = creditCardNumber.toString();
   if(numero.length == 16){
       return(true);
   }
}

//Función para las pruebas cuatro y cinco
function validacionNumero(numeroDeTarjeta){
  //Pasamos el número a string para poder ocupar split y separarlos
 var numeroEnString = (numeroDeTarjeta.toString()).split("");
 //Ya separados se paso eso a número, con la función más abajo definida
 var numeros = numeroEnString.map(convertirNumeros);
 var paresYaMultiplicados = numeros.map(multiplicacionDePares);
 var numerosFinales = paresYaMultiplicados.map(reducirNumeroPar);
 var sumaDeNumeros = numerosFinales.reduce(sumaDeTodos);
 //Ya que es un algoritmo base diez, sacamos el módulo de diez
   if(sumaDeNumeros%10 === 0){
     return true;
   }
}
//Función para después del split, pasarlo a número
function convertirNumeros(numero){
 return parseInt(numero);
}

//Función para multiplicar los números pares
function multiplicacionDePares(elemento,i){
  //Siendo módulo de dos igual a cero,indica que es un número par
 if(i%2 == 0){
   //Si resulta par se multiplica por dos
   return elemento*2;
 }else{
   return elemento;
 }
}
//A los números restantes, es decir, los que están en posición impar
//Sin son mayores de nueve se les resta nueve, si no así se quedan.
function reducirNumeroPar(num){
 if(num > 9){
   return num-9;
 }else{
   return num;
 }
}
//Al final se suman ambos grupos de números.
function sumaDeTodos(suma,numero){
 return suma + numero;
}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
