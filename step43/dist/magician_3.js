"use strict";
let magician = ['Harry Potter', 'Sameri', 'Hamoon', 'Bilbatori'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArr) {
    for (let i = 0; i < magicianArr.length; i++) {
        magicianArr[i] = 'The great ' + magicianArr[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArr = copyArray(magician);
make_great(copyMagicianArr);
console.log('This is original array.');
show_magicians(magician);
console.log('This is modified copy of array.');
show_magicians(copyMagicianArr);
