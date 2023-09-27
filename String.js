//String
const string = "Rathan Rajiv Singh";
const stringlength = string.length;
console.log(string, "is", stringlength, "in length");
const firstcharacter = string[0];
console.log("first character:", firstcharacter);
const lastcharacter = string[string.length-1];
console.log("lastcharacter:", lastcharacter);
//const typelast = typeof.lastcharacter;
console.log(typeof lastcharacter);
console.log(typeof firstcharacter);

// String Concatenation
let firstName = "Rathan";
let secondName = "Rajiv";
let lastName = "Singh";

//1st Method Addition symbol +
let Name = firstName + " " + secondName + " " + lastName;
console.log(Name);
//2nd Method concat
let fullName = firstName.concat(" ", secondName, " ", lastName);
console.log(fullName);
//3rd Method Backticks
let intro = `My name is ${fullName}`;
console.log(intro);
//ToUpperCase

const hi = "Hello Rathan";
//const uppercase = hi.toUpperCase();
console.log(hi.toUpperCase());

// Includes
let inc = fullName.includes("Singh");
console.log(inc);

//Replace string
let rep = fullName.replace("Singh", "King");
console.log(rep);

// To split the Name into Array
let nameArray = fullName.split(",");
console.log(nameArray);

let fruit = "Grapes, Mango, Dragon";
let fruitArray = fruit.split(",");
console.log(fruitArray);

//String whitespaces
let trim = "             Trim  Me    !    ";
console.log(trim.trim());

//Using charAt to access character index
let gname = "Guna Xavia Ansha"
console.log(gname.length); // Lenth of the String gname
console.log(gname.charAt(1));

//Indexof sub string
let h = "Hello World";
console.log(h.indexOf("World"));