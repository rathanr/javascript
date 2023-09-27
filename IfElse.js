let y = 5>10
if(y)
{
 console.log("Condition is True")
}
else
{
 console.log("condition is False")
}

// If-Else Condition Statement for voting Eligiblity

let age = '&';

if(age>=18){
    console.log("You are Eligible to Vote")
}else{
    console.log("You are not eligible to vote")
}

//Else-If condition statement for voting Eligiblity

if(age>=18){
    console.log("You are Eligible to Vote")
}else if(age == 18){
    console.log("Incorrect Age provided")
}else{
    console.log("You are not eligible to vote")
}

//If-Else for Odd Even statement
// Here 0 also will provide the modulus value as 0 so it will print "Even Number"
let a = 0;
if(a%2 == 0 && a !=0){
    console.log("Even number")
}else if(a <= 0){
    console.log("Invalid Number")
}else{
    console.log("Odd number")
}

// Inavlid Input like instead of Number provided Alpha value in the Age

if(isNaN(age)){
    console.log("Please provide a valid number in Age")
}else if(age >= 18){
    console.log("Eligible to Vote")
}else{
    console.log("You are not eligible to vote")
}
