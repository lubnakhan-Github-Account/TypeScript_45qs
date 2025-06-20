// creates objects containing these items.
// datatype of student object. 
interface  student {
    name:string,
    age : number,
    rollno : number,
}
// student object.
let student : student = {
    name : 'Zain',
    age : 21,
    rollno : 1234,
}
console.log(student);

//datatype of car object.
interface car{
    make :string,
    color :string,
    automatic : boolean
}
// car object
let car:car ={
    make:'toyota',
    color :'Black',
    automatic :true
}
console.log(car);
