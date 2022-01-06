function operations(a,b)
{
    var sum=a+b
     var product=a-b
    var  mul=a*b
    return {sum,product,mul}
}
var c=operations(10,20)
console.log(c)


// function operations(a,b)
// {
//    var sum=a+b
//     var product=a-b
//     console.log(" addition is"+sum)
//     console.log("subtraction is"+product)
// }
//   var c=operations(10,20)

// anonymous function most use const variable for security purpuse

// const sum=function(a,b){
//     return a+b

// }
// console.log(sum(2,5))




// arrow functions

// const sum=(a,b)=>
// {
//     return a+b

// }
//  const m=sum(10,20)
//  console.log(m)




// without writing true and false in return keyword chaecking positive and negative

// const sum=(num)=>

// {
//     return num>0


// }
// console.log(sum(10))



// writing true and false in return  checking positive and negative
  
const sum=(num)=>

{
 if(num>0)
 {
     return true
 }
 else{
     return false
 }


}
console.log(sum(-10))
  





// generating  a random number
// const a = Math.random();
// console.log(a);


// const random=()=>

//     Math.random()

// console.log(random())


// const randomNumber = _ => Math.random();

// console.log(randomNumber());