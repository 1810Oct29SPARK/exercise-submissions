/*
    Basic FizzBuzz:
    Write a function which prints out the numbers 1-100, with the following substitutions:
    Each multiple of 3 replaced with 'fizz'
    Each multiple of 5 replaced with 'buzz'
    Each multiple of both 3 and 5 replaced with 'fizzbuzz'
*/
function fizzBuzz1(){

    for (i=1;i<101;i++)

    if( i%3==0 && i%5==0)
    {
        console.log("fizzbuzz");
    }
    else if (i%3==0)
    {
        console.log("fizz");
    }
    else if (i%5==0)
    {
        console.log("buzz");
    }
    else
    {
        console.log(i);
    }

}

/*
    Variable-length FizzBuzz:
    Write a function which prints out the numbers m-n, with the following substitutions:
    Each multiple of 3 replaced with 'fizz'
    Each multiple of 5 replaced with 'buzz'
    Each multiple of both 3 and 5 replaced with 'fizzbuzz'
    Validation that m <= n is a plus. 
*/
function fizzBuzz2(m,n){
    if (m>n)
    {
        return("m is greater than n so this really doesn't work");
    }

    for (i=m;i<(n+1);i++)
    {
        if( i%3==0 && i%5==0)
        {
            console.log("fizzbuzz");
        }
        else if (i%3==0)
        {
            console.log("fizz");
        }
        else if (i%5==0)
        {
            console.log("buzz");
        }
        else
        {
            console.log(i);
        } 
    }
}

/*
    Variable-length, varying-fizz/buzz number FizzBuzz:
    Write a function which prints out the numbers m-n, with the following substitutions:
    Each multiple of fizzNum replaced with 'fizz'
    Each multiple of buzzNum replaced with 'buzz'
    Each multiple of both fizzNum and BuzzNum replaced with 'fizzbuzz'
    Validation that m <= n is a plus. 
*/
function fizzBuzz3(m,n,fizzNum,buzzNum){
    if (m>n)
    {
        return("m is greater than n so this really doesn't work");
    }

    for (i=m;i<(n+1);i++)
    {
        if( i%fizzNum==0 && i%buzzNum==0)
        {
            console.log("fizzbuzz");
        }
        else if (i%fizzNum==0)
        {
            console.log("fizz");
        }
        else if (i%buzzNum==0)
        {
            console.log("buzz");
        }
        else
        {
            console.log(i);
        } 
    }
}

/*
    Variable-length FizzBuzz with arrays:
    Write a function which prints out the numbers m-n with substitutions of: 
    each element of the numbers array replaced by the element at the same index of the terms array.
    e.g., to mimic the behavior of fizzBuzz1, you would call the function like so:
    fizzBuzz4(1,100,[3,5],['fizz','buzz'])
    Validation the m <= n is a plus. 
    The arrays may have any length, but validation that their length is the SAME is a plus. 
*/
function fizzBuzz4(m,n,numbers,terms){
    if (m>n)
    {
        return("m is greater than n so this really doesn't work");
    }
    if(numbers.length != terms.length){
        console.log("the length of 'numbers' and 'terms' isn't equal which may not necessarily be an issue")
    }

    for (i=m;i<(n+1);i++)
    {


        if( i%(numbers[0])==0 && i%(numbers[1])==0)
        {
            console.log(terms[0],terms[1]);
        }
        else if (i%(numbers[0])==0)
        {
            console.log(terms[0]);
        }
        else if (i%(numbers[1])==0)
        {
            console.log(terms[1]);
        }
        else
        {
            console.log(i);
        } 
    }
}

function fizzbuzz5(m,n,numbers,terms)
{
  /*  if (m>n)
    {
        return("m is greater than n so this really doesn't work");
    }
    if(numbers.length != terms.length){
        console.log("the length of 'numbers' and 'terms' isn't equal which may not necessarily be an issue")
    }

    for (i=m;i<(n+1);i++)
    {
        let currentIndex =-1;

    
        numbers.forEach(foreachloop);
        function foreachloop(value)
        {
            currentIndex++;
            if(i%value==0)
            console.log(terms[currentIndex], i);
            else
            {
                console.log(i);
            }
        }
    }*/
    let Finalresult;
    for (currentNumber=m;currentNumber<(n+1);currentNumber++)
    {
        for(currentdivider=0;currentdivider<(numbers.length+1);currentdivider++)
        {
            if(currentNumber%number[currentdivider]==0)
            {
                Finalresult[currentdivider]=terms[currentdivider];
            }


        }
        if(Finalresult=undefined)
        {
            console.log(currentNumber);
        }
        else console.log(Finalresult);
    }

}


