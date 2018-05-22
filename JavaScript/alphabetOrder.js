function alphabet_order(str)
  {
return str.split('').sort().join('');
  }


var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = alphabet_order(num);
}