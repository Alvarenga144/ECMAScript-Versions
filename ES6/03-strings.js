// Forma regular de impresion concatenada de strings
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multilinea para strings
let lorem = 'Esto es un string \n ' + 'Y esto también pero en otra linea'; //?Normal version
let lorem1 = `Esta es una frase épica.
y esta es la continuación de la frase épica. 
`; //new version

console.log(lorem);
console.log(lorem1);