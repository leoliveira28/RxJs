const { from, Observable } = require('rxjs')

function createPipeableOperator(nextFn) {
    return function(param) {
        return Observable.create(subscriber => {
            param.subscribe({
                next(v) {
                    nextFn(subscriber, v)
                }
            })
        })
    }
}

function primeiro() {
    return createPipeableOperator((subscriber, v) => {
        subscriber.next(v)
        subscriber.complete()
    })
}

function ultimo() {
    return function(param) {
        return Observable.create(subscriber => {
            let ultimo
            param.subscribe({
                next(v) {
                    ultimo = v

                },
                complete() {
                    subscriber.next(ultimo)
                    subscriber.complete()
                }

            })
        })
    }
}

from([1, 2, 3, 4, 5, 6])
    .pipe(primeiro())
    //.pipe(ultimo())
    .subscribe(console.log)