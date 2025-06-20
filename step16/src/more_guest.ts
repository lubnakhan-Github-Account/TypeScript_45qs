let guest_list :string[] = ["Amir","Ali","Zain"];
let absent_guest :string = "Amir";
let new_guest :string = "Kamran Tessori";
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.'+ guest_list[i] + '\n\n is our pleasure to invite you in our party.\n\nthank you\n\n')
}
console.log(`Mr.${absent_guest} is not coming to the party.`);
console.log('Good news ! we find big table so we are inviting 3 more guests.');
guest_list.unshift('sir Zia Khan');
guest_list.splice(2,0 ,'Ameen Alam');
guest_list.push('Daniyal');
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.'+ guest_list[i] + '\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n');
    
}