// arrays destructuring
let fruits = ['Apple', 'Banana', 'Pineapple'];
let [a, b, c] = fruits;
console.log(a, b, c);

// object destructuring
let users = { username: 'Chepe', age: 18 };
let { username, age } = users;
console.log(username, age);
//? The name of the new variables should be the same as the object's attributes.

// Spread operators
let person = { nombre: 'Pedro', edad: 18 };
let codigo = 144;
let data = { id: 1, ...person, codigo };
console.log(data);

function sum(num, ...values){
    console.log(num);
    console.log(values);
    console.log('============');
    console.log(num + values[0] + values[1]);
    return num + values[0];
}

sum(1, 5, 5);