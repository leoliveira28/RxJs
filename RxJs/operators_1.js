const { of } = require('rxjs')
const { last } = require('rxjs')

of(1, 2, 'Ana', true, 'Ultimo')
    .pipe(last())
    .subscribe(function(valor) {
        console.log(`valor gerado foi ${valor}`)
    })