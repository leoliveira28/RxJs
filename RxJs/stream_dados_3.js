const { interval } = require('rxjs')

const gerarNumeros = interval(1000)

const sub1 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() =>
    sub1.unsubscribe(), 8000)