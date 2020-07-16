// const fs = require('fs')
// const fs = require('express') -> Paquetes no nativos de node
// const fs = require('./fs') -> Nuestros propios archivos
const { crearArchivo } = require('./multiplicar/multiplicar')

// let base = '11'
// console.log(module)
// console.log(process.argv)

const argv = process.argv
let parameter = argv[2]
let base = parameter.split('=')[1]

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err))


/*** CREAR REPO 
 *  1. GIT INIT
 *  2. Crear archivo .gitignore
 *  3. GIT ADD *
 *  4. GIT STATUS 
 *  5. GIT COMMIT -M "mensaje"
 ***/