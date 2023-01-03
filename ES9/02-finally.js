const myFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Yeah!');
        } else {
            reject('Whoops');
        }
    })
}

myFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    //acá sigue
    .finally(() => console.log('Finally!!!'));