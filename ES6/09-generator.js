// generators
function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Esteban', 'Oscar', 'David', 'Juan', 'Jenn']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);