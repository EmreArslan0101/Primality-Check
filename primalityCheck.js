const x = prompt("Type the number you want to check if it is prime")
const asalDizisi =[]

for(let i = 1;i<=x; i++ ){
    if(x%i==0){
        asalDizisi.push(Number(1))
    }else{
        asalDizisi.push(Number(0))
    }
}

const bolen= asalDizisi.filter(x => x==1).length

if(bolen>2){
    console.log("This is not a prime number")
}else{
    console.log("This is a prime number")
}