// For Loop
for(i=1;i<=100;i++){
    if(i%3==0)
    console.log(i);
}
console.log("************************************")
// For Loop with IF condition
// From 1 to 10 give me common Multiple value of 2 & 5
for(j=1;j<=10;j++){
    if(j%2 == 0 && j%5 == 0)
    {
        console.log(j)
    }
}
console.log("************************************")
// From 1 to 10 give the multiple of 2 || 5
let n = 0
for(k=0;k<=10;k++){
    if(k%2 == 0 || k&5 ==0){
        n++
        console.log(k)
        if(n == 3)
        break
    
    }
}