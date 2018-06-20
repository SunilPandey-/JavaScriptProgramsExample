function swapCase(str1)
  {
    
str = str1;
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(str[x] == str[x].toUpperCase())
    {
      result.push(str[x].toLowerCase());
    }
    else if(str[x] == str[x].toLowerCase())
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
 console.log(result.join(''));
return result.join('');

  }


var num;
function myFunction() {
    var a= document.getElementById("myText").value;
     document.getElementById("sp1").innerHTML = a;
     num = document.getElementById("myText").value;
     console.log(a);
     console.log(num+" num ");

     document.getElementById("p1").innerHTML = swapCase(num);
}