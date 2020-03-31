

function numeroPrimo(divisor){
for(let i = 0; i > 0; i++){
    if(divisor%i == 0)
        divisor++

    if(divisor == 2){
        console.log('O '+ i +' é primo e não poderá ser usado na função do triangulo');
        return 
    }else{
        console.log('O '+ i +' não é primo e poderá ser usado na função do triangulo');
        return i = m
    }}

function triangulo (n){
    let string = '*' 
    let space = ' '
    for(let i = 1;i <= n; i++){
        if(i === 1){
            let blank = space.repeat(n/2 + 1)  
            console.log(blank + string);
        }
        if(i != n && i%2 != 0 ){
       let astec = string.repeat(1);
       let blank = space.repeat(((n-i)/2)+1)
       let blanko = space.repeat(((i+i))/2)
        console.log(blank + astec + blanko + astec)}
        if(i === n && n%2 == 0){
            console.log(string.repeat(i+3))
        }
        if (i === n && n%3 == 0 && n%2 == 2){
            console.log(string.repeat(i+2))
        }

       }
    }

triangulo(m)
}
