// Funciones asíncronas
const funAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // Ternario
        ? setTimeout(() => resolve('Async execute!'), 2000)
        : reject(new Error('F'));
    })
}

const anotherFun = async () => {
    const something = await funAsync();
    console.log(something);
    console.log('Second Fun');
}
console.log('Before ===');
anotherFun();
console.log('After ===');