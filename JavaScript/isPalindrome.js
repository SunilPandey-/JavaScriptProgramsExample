function isPalindrome(s) {
  s =s.toLowerCase();
  var rev = s.split("").reverse().join("");
  return s == rev;
}

console.log(isPalindrome("sunil"));
//console.log(typeof reverse_a_number(32243));
//document.getElementById("p1").innerHTML = isPalindrome("sunil");


var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = isPalindrome(num);
}