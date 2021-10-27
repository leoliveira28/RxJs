const { from, Observable } = require('rxjs')

function primeiro() {
    return function(param) {
        return Observable.create(subscriber => {
            param.subscribe({
                next(v) {
                    subscriber.next(1)
                }
            })
        })
    }
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
    //.pipe(primeiro())
    .pipe(ultimo())
    .subscribe(console.log)