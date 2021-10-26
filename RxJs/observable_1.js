const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promisse é legal')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer é bem legal')
})

obs.subscribe(console.log)