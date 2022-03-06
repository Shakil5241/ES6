//function myFunc(a,b,c){
  //  console.log(a,b,c);
//}
//myFunc(4,5,7);

function myFunc(a,...params) {
   console.log(a);
    console.log(params);
}
myFunc(2,3,4,5,6,7);