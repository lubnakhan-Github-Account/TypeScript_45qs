function storeCarInfo(manufacturer :string ,modelName :string,...extraOption:{[key:string]
:any}[]):object{
    const carInfo = {
     manufacturer,
     modelName,
     ...Object.assign({}, ...extraOption)
    }
    return carInfo;
}
let answer = storeCarInfo('Honda','Civic',{color:'black'},{features:[
    'navigation','power window'
]})
console.log(answer)