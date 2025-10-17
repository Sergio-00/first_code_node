
// Crear un programa que identifique cuantos multiplos de 3 hay en un 
// rango del 0 al 100 y que los imprima en consola

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i)
//   }
// }

import { log } from 'console';
import os from 'os';

// console.log(os);

const memory = (os.freemem() / 1024) / 1024

// Memoria libre
console.log(os.freemem());
console.log(memory);

// Memoria total del sistema
console.log(os.totalmem());

// Ruta de la carpeta del usuario
console.log(os.homedir());

// El nombre del sistema operativo
console.log(os.type());

// Arquitectura del procesador
console.log(os.arch());

// Versión del sistema operativo
console.log(os.release());

// Prioridad del proceso en el sistema de Node
console.log(os.getPriority());

// Este establece la prioridad del proceso del programa
// console.log(os.setPriority());

// Muestra el tipo de arquitectura de maquina
console.log(os.machine());

// Muestra las redes wifi
console.log(os.networkInterfaces());

// Muestra el tiempo que lleva encendida la maquina
console.log(os.uptime());

// Muestra la información de usuario
console.log(os.userInfo());

// Muestra el nombre del computador
console.log(os.hostname());

// Muestra los nucleos de los procesadores disponibles
console.log(os.cpus())

// Muestra el tipo de plataforma en la que Node fue instalado
console.log(os.platform());

// 
console.log(os.availableParallelism());

// Muestra el el orden de bytes del procesador (Solo da BE o LE)
console.log(os.endianness());

// Ruta de la carpeta temporal del sistema
console.log(os.tmpdir());

// Devuelve un promedio del tiempo de carga pero da 0 en windows
console.log(os.loadavg());

// Versión del sistema operativo legible
console.log(os.version());