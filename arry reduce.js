var number = [1,2,3,4,5];
var sum = number.reduce((prevValue,currentvalue, currentIndex, arr)=> {
    return prevValue + currentvalue ;
});
console.log(sum);
