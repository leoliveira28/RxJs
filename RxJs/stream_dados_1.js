function gerarNumeros() {
    return {
        iniciar(fn) {
            let num = 0
            setInterval(() => {
                fn(num++)
            }, 1000)
        }
    }

}

const temp1 = gerarNumeros()
temp1.iniciar(numero => {
    console.log(`#1 ${numero * 2}`)
}, 1000)

const temp2 = gerarNumeros()
temp2.iniciar(a => {
    console.log(`#2 ${a + 100}`)
}, 2000)