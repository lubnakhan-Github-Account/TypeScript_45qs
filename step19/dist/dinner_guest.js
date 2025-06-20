"use strict";
let guest_list = ['Amir', 'Ali', 'Zain'];
let absent_guest = 'Amir';
let new_guest = 'Kamran Tessori';
guest_list[0] = new_guest;
guest_list.unshift('sir Zia Khan'); //sir Zia Khan, Kamran Tessori, Ali, Zain
guest_list.splice(2, 0, 'Ameen Alam'); //sir Zia Khan, Kamran Tessori, Ameen Alam, Ali, Zain
guest_list.push('Daniyal'); //sir Zia Khan, Kamran Tessori, Ameen Alam, Ali, Zain, 'Daniyal
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(guest_list);
}
guest_list.splice(0, 2);
console.log(guest_list);
// exercise 19.
console.log(`Total number of guests are :${guest_list.length}`);
