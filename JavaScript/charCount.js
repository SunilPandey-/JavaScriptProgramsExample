function count(string) {
  let string1 = string.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}
//count("thequickbrownfoxjumpsoverthelazydog");


var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     //console.log(a);
     //console.log(num+" num ");
     count(num);
     //document.getElementById("p1").innerHTML = count(num);
}