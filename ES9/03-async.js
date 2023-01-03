async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
}

const otherGen = anotherGenerator()
    otherGen.next().then(Response => console.log(Response.value));
    otherGen.next().then(Response => console.log(Response.value));
    otherGen.next().then(Response => console.log(Response.value));
    otherGen.next().then(Response => console.log(Response.value));
console.log('**** Letrerito ****');

// ======================================================

async function arregloNombres(array) {
    for await (let values of array) {
        console.log(values);
    }
}

const names = arregloNombres(['Lola', 'Lila', 'Lulu']);
console.log('**** Ultimo ****');