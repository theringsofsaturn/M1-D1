// an ALGORITHM is a finite set of steps for solving a particular problem
// DATA TYPES
// NUMBERS
// 5
// 5.5
// 55.5555555

// STRINGS
"Hello World" // " or ' => String delimiter
'Hello World'

// BOOLEANS
true
false
3 > 2 // same as wirting true 
5 < 10 // same as writing false
 3 === 3 // true
 5 === '5' // false
 'strive' === 'strive' // true
 // === checks if they are the same in VALUE and TYPE
 // Try to use the triple === instead of ==
 
 // 3 + 4 = 7
 // '3' + '4' = '34'

 // SPECIAL ONES
 undefined // variable decalred but not defined yet
 null // not existing, total absence of value

 // VARIABLES
 let // keyword to declare a variable
 var // keyword to declare a variable
 //let firstValue // camelCase syntax
 //let secondValue
 // to assign a variable use = (single = sign)
 //let firstValue = 10 // you can assign a value later
 firstValue = 20 // for reassigning the variable we don't use let. let is for declaring a variable

 let sum = 30 + firstValue

 const // this value will not change ever
 const name = Emilian
 //const name = Diego // this will trigger an error

 console.log("Show text here") // to print

 let multiply = 10 * 5
 let division = 50 / 10

 let modulo = 25 % 5 // 0
 let result = (25 + 10) * 3

 let multipleStrings = "hello" + "" + "Emilian" 
 console.log(multipleStrings) // strings will be concatenated together
  //typeof -- where you want to check the type of the variable

  let upperString = multipleStrings.toUpperCase // to uppercase the string
  console.log(upperString)

  //Booleans examples

  console.log(6 >= 6) // true
  console.log("Emilian" === "Emilian") // true
  console.log("Emilian" !== "Emilian") // false --- Emilian is not equal to Emilian = false

  // && --> AND
  // || --> OR

  console.log( 5 === 5 && 10 === 10) // true
  //AND will return TRUE if the expressions are both TRUE

  console.log( 5 === 5 || 10 === 1) // true
  // OR will return TRUE if just one of conditions are TRUE
   
  // TRUE && TRUE --> TRUE
  // TRUE || FALSE --> TRUE
  // FALSE || TRUE --> TRUE
  // FALSE || FALSE --> FALSE

  // The card has a total 
  // you have a threshold for giving free shipping
  // if the total is more than the threeshold, shipping is free
  // the ground total will be the card total
  // if we don't reach the threeshold, we need to add shipping cost

  let cardTotal = 51
  let freeShippingThreShold = 50
  let shippingCost = 10

  let grandTotal

  cardTotal > freeShippingThreShold //the grand total will be our cardTotal
   // if not, the total will be the cardTotal + shippingCost

  // if cardTotal is greater than freeShipping
   if (cardTotal > freeShippingThreShold){
       //I am eligible to free shipping
        console.log("FREE SHIPPING")
        grandTotal = cardTotal


   } else{
       // we are not eligible for free shipping
        console.log("NO FREE SHIPPING")
        grandTotal = cardTotal + shippingCost

   }

   console.log("Grand Total is", grandTotal)


