"use strict";
function make_shirt(size = 'large', text = 'Ilove python') {
    console.log(`creating a ${size} shirt with the message :${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love python');
