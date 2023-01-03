// Promises
const myFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Yeah!');
        } else {
            reject('Whoops');
        }
    })
}

myFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));