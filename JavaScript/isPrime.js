const isPrime = num1 => {
    for(let i = 2, s = Math.sqrt(num1); i <= Math.sqrt(num1); i++)
        if(num1 % i === 0) return false; 
    return num1 !== 1;
}
console.log(isPrime(45));

var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = isPrime(num);
}