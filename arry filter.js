var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.filter((currentvalue, index, Arr) => {
    return currentvalue > 1;

});
console.log(numbers);
console.log(result);