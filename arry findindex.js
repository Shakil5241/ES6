var numbers = [1,2,3,4,5,6,7,8,9];
var result = numbers.findIndex((currentvalue, index,arr)=> {
    return currentvalue >20;
});
console.log(result);