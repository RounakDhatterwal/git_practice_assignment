// problem1 : Check whether a number is Prime or not

let num = 15;
let bag = 0;
for(let i=0; i<=num; i++){
if(num%i == 0){
bag ++;
}
}
if (bag == 2){
console.log(num, "is a prime number");
}
else
{
console.log(num, "is not a prime number");
}
