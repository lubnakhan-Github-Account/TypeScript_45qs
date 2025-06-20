"use strict";
let magician = ['Harry Potter', 'Samrei', 'Hamoon', 'Bilbatori'];
function make_great(magicianArr) {
    for (let i = 0; i < magicianArr.length; i++) {
        magician[i] = 'The great ' + magicianArr[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
