const options = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        default: 10,
        alias: 'l',
    },
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command(
        'crear',
        'Crea un archivo con la tabla de multiplicar especificada',
        options
    )
    .help().argv

module.exports = {
    argv,
}