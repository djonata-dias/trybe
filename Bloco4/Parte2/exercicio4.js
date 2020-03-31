

function triangulo4 (n){
    let string = '*' 
    let space = ' '
    for(let i = 1;i <= n; i++){
       if(i%2 != 0){
        let astec = string.repeat(i);
        let j = (n-i)/2
       let blank = space.repeat(j)
        console.log(blank + astec)
            }    
        }
    }

triangulo4(10)
