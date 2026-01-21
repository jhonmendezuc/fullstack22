/*
variables, condicionales, ciclos, funciones, estructuras datos, objetos
*/
//variables tipos

//variables tipos
//let local
let nombre = "jhon"; //str
let edad = 45; //number int
let estatura = 1.7; //number dec
let estudiante = false; //bool
let apellido = undefined; // undefined
let profesion = null; //null (vacio)
//let codigo = symbol // no se puede cambiar
console.log(nombre);
console.log(edad);
console.log(estudiante);
//var -- global
var fechaActual = "13/01/2026";
//const
const universidad = "universidad de cataluña";
universidad;

//tipos de datos de referencia -> Arrays, Objects, Functions, Date, Map, Reducer, Maths

//tipo de dato arrays
let usuarios = [
  ["jhon@gmail.com", "jhon", "123"],
  ["javier@gmail.com", "javier", "123"],
];
let numeros = [1, 2, 3, 4, 5];

//tipo de dato objeto
let usuario = new Object();
usuario.nombre = "gabriel";
usuario.apellido = "gonzalez";
usuario.email = "gabriel@gmail.com";

console.log(console.log);
console.log(Math.PI);

//CONDICIONALES
//operadores relacionales: >, <, ==, !=, >=, <=, ===

let edad2 = "19";
if (edad2 >= 19) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}

//ciclos: inicio, condicion, incremento

let numeros2 = [1, 2, 3, 4, 6];
/*
let inicio = 0
while (inicio >= 0){
  inicio = inicio + 1
}
    
do{
  inicio = inicio++
}while(inicio<4)

for(let inicio =0; inicio<numeros.length; inicio++){
  console.log(numeros[inicio])
} */

for (let numero in numeros2) {
  console.log(numero);
}

for (let numero of numeros2) {
  console.log(numero);
}

//funciones
//convencional

function agregarTarea(nombreTarea) {
  console.log(`${nombreTarea} guardada...`);
}
//funciones de flecha
let eliminarTarea = (nombreTarea) => {
  console.log(`${nombreTarea} "eliminada`);
};

//funciones autoinvocables
(() => {
  console.log("funcion autoinvocable");
  agregarTarea("tarea 1");
  agregarTarea("tarea 2");
  agregarTarea("tarea 3");
  eliminarTarea("tarea1");
})();

/*objetos literales*/
let tareas = [];
let responsable1 = {
  nombre: "jhon",
  correo: "jhon@gmail.com",
};
let responsable2 = {
  nombre: "felipe",
  correo: "felipe@gmail.com",
};
let tarea = {
  titulo: "lectura",
  descripcion: "leer libro",
  estado: true,
  responsables: [responsable1, responsable2],
};
tareas.push(tarea);
//impresion de un objeto
console.log(tarea);
//impresion de un atributo
console.log(tarea.titulo);
console.log(tarea.responsables[1].correo);

/*crear objetos funcionales*/
function User(username, password) {
  this.username = username;
  this.password = password;
  this.mostrarDatos = () => {
    console.log(this.username, this.password);
  };
}

let usuario1 = new User("jhonm", "213");
console.log(usuario1.mostrarDatos);

let usuario2 = new User("felipem", "789");

/* crear objetos con la clase Object */

let Persona = new Object();

Persona.nombre = "jhon";
Persona.apellido = "mendez";
Persona.telefonos = [2132321, 45646];
Persona.correos = ["jhon@gmail.com", "jhon@outloook.es"];
Persona.ubicaciones = [
  {
    tipo: "casa",
    direccion: "calle 123",
  },
  {
    tipo: "oficina",
    direccion: "calle 789",
  },
];
console.log(Persona);

import Factura from "./Factura.js";

const factura1 = new Factura("jhon", "2026-01-20", 45000);
console.log(factura1);
