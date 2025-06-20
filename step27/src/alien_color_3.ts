// version 1
let alienColors :string = 'green';
if(alienColors === 'green'){
    console.log('player earned 5 points.');
}
else if(alienColors === 'yellow'){
    console.log('player earned 10 points.');
} else if(alienColors === 'red'){
    console.log('player earned 15 points.');
} else{
    console.log('please select right color.')
}
// version 2
alienColors = 'yellow';
if(alienColors === 'green'){
    console.log('player earned 5 points.');
} else if(alienColors === 'yellow'){
    console.log('player earned 10 points.');
} else if(alienColors === 'red'){
    console.log('player earned 15 points.');
} else{
    console.log('please select right color.');
}
// version 3
alienColors = 'red';
if(alienColors === 'green'){
    console.log('player earned 5 points.')
} else if(alienColors === 'yellow'){
    console.log('player earned 10 points.');
} else if(alienColors === 'red'){
    console.log('player earned 15 points');
} else {
    console.log('please select right color.');
}
