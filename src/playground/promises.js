const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved succesfully');
        // reject('Something went wrong'));
    }, 2000);
});

console.log('before');

promise.then(data => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Another promise');
            // reject('Something went wrong'));
        }, 2000);
    });;
})
.then(str => console.log('Does this run?', str)) //.then can make use of a previous returned thing (including promises) if you declare anything as a parameter in the .then method
.catch(error => console.log('error:', error));

console.log('after');

