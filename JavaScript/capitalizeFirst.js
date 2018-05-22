capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
    
 console.log(capitalize('js string exercises'));

var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = capitalize(num);
}