function combinator (s) {
   list_of_strings = new Array();
   for(i=0;i<s.length;i++) {
       for(j=i+1;j<s.length+1;j++) {
           list_of_strings.push(s.slice(i, j));
       }
   }
   return list_of_strings;
}

var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = combinator(num);
}