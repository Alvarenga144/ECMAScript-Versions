const promesa1 = new Promise((resolve, reject) => reject('Nashee'));
const promesa2 = new Promise((resolve, reject) => resolve('Piola'));
const promesa3 = new Promise((resolve, reject) => resolve('Suuii'));

Promise.allSettled([promesa1, promesa2, promesa3])  
    .then(response => console.log(response));