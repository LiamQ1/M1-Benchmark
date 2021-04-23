let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

let myData = {
    Name: "Liam",
    Surname: "Quain", 
    Email: "liamquain16@gmail.com",
}
delete myData.Email
console.log(myData) 

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
console.log(arr)

var randoms = [...Array(100)].map(() => Math.floor(Math.random() * 1000));
console.log(randoms)

let minMax = function() {
    randoms.sort((a,b) => a-b)
    console.log(randoms.join(", "))
    
    const min = randoms[0]
    const max = randoms[randoms.length-1]
    console.log(`Minimum: ${min}, Maximum:${max}`)
}
minMax()

let random10 = [...Array(10)].map(
    () => [...Array(10)].map(
        () => Math.floor(Math.random() * 100) + 1
    )
 )
 /* console.log(random10)

 let longestArr = function(Array) {
     let longest = Array[0],
     i;

     for(i = 1; i < Array.length; i++){
         if(Array[i].length > longest.length){
             longest = Array[i];
         }
         }
         return longest;
     }
 console.log(longestArr(["long"], ["this is"])) */

