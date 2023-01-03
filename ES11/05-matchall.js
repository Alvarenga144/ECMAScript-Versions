let regex = /\b(banana)+\b/g;

let fruits = 'banana, kiwi, guineyo, majoncho, pipian, mamon, polla, achote, banana, mielita';

for (const match of fruits.matchAll(regex)) {
    console.log(match);
}