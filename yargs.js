const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors')

// console.log('argv', argv._)
const comando = argv._[0]

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(err))
        break
    default:
        console.log('Comando no reconocido')
        break
}

// console.log('Base: ', argv.base)
// console.log('Limite: ', argv.limite)