const { of, Observable } = require('rxjs')

function terminadoCom(textoFinal) {
    return function(fonte) {
        return Observable.create(subscriber => {
            fonte.subscribe({
                next(texto) {
                    if (texto.endsWith(textoFinal)) {
                        subscriber.next(texto)
                    }
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}
of('Ana da Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)