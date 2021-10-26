const { Observable } = require('rxjs')

const obs = new Observable(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('muito')
    subscriber.next('legal')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error("Deu ruim!")
    }
})

obs.subscribe(console.log)