"use strict";
let person_name = "";
person_name = prompt("what is your name? ") || "";
if (person_name !== null && person_name !== "") {
    alert(`hello ${person_name} would you like to learn some python today`);
}
else {
    alert("please fill your name");
}
