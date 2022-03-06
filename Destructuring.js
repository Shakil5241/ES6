//Object Destructuring
var user = {
    id : 336,
    name: "shakil",
    age: 23,
    education: {
        degree: "master" },
};
var {education: {degree} }=user;
console.log(degree);

//arry Destructuring
var numbers =[1,2,[3,100,500],4,6];
var [,,[,a,b]]= numbers;
console.log(a,b);

//change values
var a=4;
var b=6;
[b,a]=[a,b];
console.log(a,b)