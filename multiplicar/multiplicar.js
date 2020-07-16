const fs = require('fs')
const colors = require('colors')

module.exports.crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return
        }

        console.log('==========================='.green)
        console.log(`Tabla de ${base}`.green)
        console.log('==========================='.green)

        let data = ''
        for (let i = 0; i < limite; i++) {
            data += `${base} *  ${i + 1} = ${(i + 1) * base}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(colors.green(`tabla-${base}-al-${limite}.txt`))
        })
    })
}

module.exports.listar = (base = 1, limite = 10) => {
    console.log('==========================='.green)
    console.log(`Tabla de ${base}`.green)
    console.log('==========================='.green)

    for (let i = 0; i < limite; i++)
        console.log(`${base} * ${i + 1} = ${base * (i + 1)}`)
}

// module.exports = {
//     crearArchivo
// }