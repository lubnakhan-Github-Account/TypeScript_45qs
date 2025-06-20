let current_users :string[] = ['TaHa','ZaIn','AlI','UmEr','MaAz'];
let new_users :string[] =['Bilal','TaHa','Saad','Amir','UmEr'];
new_users.forEach(newUsername =>{
    let lowerCase:string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The user name ${newUsername} is not available.please write a different user name`);

    }
    else{
        console.log(`The user name ${newUsername} is available.`);

    }
})