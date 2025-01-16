function calculateDiscount(price , discount){
   let discountprice = (price*discount)/100
    price = price - discountprice
    return price;

}
// let finalprice =calculateDiscount(1000,10)
// console.log(finalprice)
function mergearray(a,b){
     return[...a,...b]
}
let d = [1,2,3]
let e = [4,5,6]
// let c = mergearray(d,e)
// console.log(c)

function logArguments(...arg){
    console.log(...arg)
}
//logArguments(1,2,3,4,5,6,7,8,9)

function createMessage(...names){
    console.log("Good morning to",...names )
}
//createMessage("prince","vivek","gautam","Aditya")

function sum(a,b,c){
    return a+b+c;
}
const numbers = [1,2,3]
//console.log(`sum of the number is ,${sum(...numbers)}`);

function createUserProfiles(username,age=25,country ="unknown"){
    return {username,age,country}
}
console.log(createUserProfiles("prince",undefined)
)