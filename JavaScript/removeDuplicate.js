function removeDuplicate()
  {
    const array = [1, 4, 99, 3, 1, 4, 15];
   // const arra = new Array(str);
const noDups = Array.from(new Set(array));

console.log(noDups); //[1, 4, 99, 3, 15]
 document.getElementById("p1").innerHTML = noDups;
    return noDups;

  }

removeDuplicate();
