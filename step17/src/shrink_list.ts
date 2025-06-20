let guest_list :string[] = ["Amir","Ali","Zain"];
let absent_guest :string = "Amir";
let new_guest :string = "Kamran Khan";
guest_list[0] = new_guest;
console.log(`Mr. ${absent_guest} is not coming to the party.`);
console.log('Good news! we find big table so we inviting 3 more guests.');
guest_list.unshift('sir Zia Khan');
guest_list.splice(2,0,'Ameen Alam');
guest_list.push('Daniyal');
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.' + guest_list[i] + '\n\nit is our pleasure to invite you in our party.\n\nthank you!');
}
console.log('sorry we can not arrange big table,only two people will be invited.');
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Mr.${remove_guest},you are not invited for dinner.`);
}
    for(let i=0; i<guest_list.length; i++){
        console.log('Dear Mr.' + guest_list[i] +',\n\nyou are still invited.\n\nthank you!\n\n');
    }
guest_list.splice(0,2);
console.log(guest_list);


    