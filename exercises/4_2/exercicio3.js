

function triangulo2 (n){
    let string = '*' 
    let space = ' '
    for(let i = 1;i <= n; i++){
       let astec = string.repeat(i);
       let blank = space.repeat(n-i)
        console.log(blank + astec)
       }
    }

triangulo2(5)
