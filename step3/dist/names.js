"use strict";
let personName = " ";
personName = prompt("what is your name? ") || "";
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
if (personName !== null && personName !== "") {
    alert(`hello ${personName} here is your name in :
    lowercase:${lowercase}
    uppercase :${uppercase}
    titlecase:${titlecase}`);
}
else {
    alert("fill your name");
}
