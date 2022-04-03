const x = prompt("Type the number you want to check if it is prime")
const primaryNumArr =[]

for(let i = 1;i<=x; i++ ){
    if(x%i==0){
        primaryNumArr.push(Number(1))
    }else{
        primaryNumArr.push(Number(0))
    }
}

const divisor= primaryNumArr.filter(x => x==1).length

if(divisor>2){
    console.log("This is not a prime number")
}else{
    console.log("This is a prime number")
}