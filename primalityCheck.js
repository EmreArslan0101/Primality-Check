const isPrime = function(num){
    
//If you want to use it, you can open it
//const x = prompt("Type the number you want to check if it is prime");
    
    for(let i = 1;i<=x; i++ ){
        if(num%i!=0){
            return false;
        };
    };
    return true;
    
};

export isPrime;
