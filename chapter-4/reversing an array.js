function reverseArray(array)
{
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) 
  {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array)
{
  for (let i = 0; i < Math.floor(array.length / 2); i++) 
  {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["X", "Y", "Z"]));

let arrayValue = [21, 22, 23, 24, 25];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
