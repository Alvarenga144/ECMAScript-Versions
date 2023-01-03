const user = { 
    username: 'Rabbit',
    age: 150,
    country: 'SV'
}
const { username, ...values } = user;
console.log(username);
console.log(values);