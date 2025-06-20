"use strict";
let guest_list = ["Amir", "Ali", "Zain"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mr." + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you');
}
let absent_guest = "Amir";
let new_guest = "Kamran Tessori";
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mr." + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you');
}
console.log(`Mr.${absent_guest} is not coming to the party.`);
