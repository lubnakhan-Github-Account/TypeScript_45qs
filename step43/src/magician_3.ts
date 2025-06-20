let magician : string[] = ['Harry Potter','Sameri','Hamoon','Bilbatori'];

function copyArray(arr:string[]){
    return [...arr]
}
function make_great(magicianArr :string[]){
    for(let i =0; i<magicianArr.length; i++){
        magicianArr[i] = 'The great ' + magicianArr[i]
    }
}
function show_magicians(magicians : string[]){
    magicians.forEach(element => {
        console.log(element);

    })
}
const copyMagicianArr = copyArray(magician)
make_great(copyMagicianArr);
console.log('This is original array.');
show_magicians(magician);
console.log('This is modified copy of array.');
show_magicians(copyMagicianArr);
