console.log('Hello World!')

let age = 10
console.log(age)
age = 20

console.log(age)

var salary = 100
var salary = 200

console.log(salary)

let cartVal = 100
let minDesc = 150
let minOrder = 120

if(cartVal > minOrder && cartVal > minDesc){
    console.log("All the conditions have been met.")
}
else{
    let generalMSG = "You have not met all conditions."
    let specificMSG = "You are " + "£" + (minOrder - cartVal) + " away from the minimum order value."
    //let specificMSG = `You are ${(minOrder - cartVal)} away.`

    console.log(generalMSG + " " + specificMSG)
}

let array1 = [1,2,3,4,5, 'Joe', true] // bunch of items

const item = {
    name: "iPhone",
    price: 799,
    color: "Black",
    memory: [64,128,256]
} // one entity at a time!

console.log(item.name)

// LOOPS //

for(let i = 0; i < array1.length; i++){
    console.log(array1[i])
}

array2 = array1.slice()

let start = 0

while(start < array2.length){
    console.log(array2[start])
    start++
}

let newNums = [1,2,3,4,5,6,7,8,9,10]

let evenNums = newNums.filter((number, index, newNums)=>{
    return number % 2 == 0 //should return BOOL
})

console.log(evenNums)