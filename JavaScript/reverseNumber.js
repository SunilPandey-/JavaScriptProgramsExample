
function reverse_a_number(n)
{
	n = n + "";
	return Number(n.split("").reverse().join(""));
}
console.log(reverse_a_number(32243));

console.log(typeof reverse_a_number(32243));
//document.getElementById("p1").innerHTML = reverse_a_number(32243);

var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = reverse_a_number(num);
}