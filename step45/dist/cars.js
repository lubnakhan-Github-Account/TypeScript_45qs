"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: [
        'navigation', 'power window'
    ] });
console.log(answer);
