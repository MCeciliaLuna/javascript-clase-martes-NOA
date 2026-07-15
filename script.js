// IMPRIMIR/mostrar DATOS EN LA CONSOLA

console.log("console GENÉRICO")

//DAR ADVERTENCIAS
console.warn("console PARA ADVERTENCIAS")

//AVISAR DE ERRORES
console.error("console PARA ERRORES")

//----------------------------

//VARIABLES

let variableLet = "datos que pueden cambiar/modificarse";
const variableConst = "datos que no cambian/no se pueden modificar";

var variableVar = "tipos de variables obsoletas ya"

//ejemplo
//MARIA CECILIA
let edad = 29;
const nombre = "María Cecilia Luna";
const dni = 123456789;
let peso = 55;

//CAMELCASE
const nombreCompleto = "María Cecilia Luna"

edad = 30;
console.log(edad);

// nombre = "María Lucía Messi";

peso = 60

console.warn(peso)

// TIPOS DE DATOS
const string = "texto, 123, es pa cios, #$%&"
const number = 123.5

console.log("STRING", string)
console.log("STRING", number)

const numeroSuma1 = 50;
const numeroSuma2 = 100;

console.log("SUMA", numeroSuma1 + numeroSuma2)

const nombrePrincipal = "Fulanito ";
const apellido = "de Tal";

const textoConcatenado = nombrePrincipal + apellido;

console.log(textoConcatenado)

//OTROS TIPOS DE DATOS
const booleanoVerdadero = true;
const booleanoFalso = false;

let numeroMayor = 100;
let numeroMenor = 50;

const esMayor = numeroMayor > numeroMenor;

console.log(esMayor)


// FORZAR NULL Y UNDEFINED
let valorNulo = null;
let valorSinDefinir;

console.log("Valor nulo:", valorNulo);
console.log("Valor sin definir:", valorSinDefinir);

valorSinDefinir = "ahora si tiene definicion"

console.warn("Valor sin definir:", valorSinDefinir);


// EJEMPLO DEBUG CON IA
let edadCecilia = 12;

edadCecilia = 13;

console.log(edadCecilia)