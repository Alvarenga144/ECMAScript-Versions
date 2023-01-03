try {
    hello();
} catch (error) {
    console.log(error);
}

const funfun = () => {
    console.info("let's fuck*ng go!")
}

try {
    funfun();
} catch (error) {
    console.log('Cagaste' + error);
}
// if function funfun doesn't exist, try catch output is the error