const fizz = "Fizz";
const buzz = "Buzz";
const arr1000FizzBuzz = new Array(1000).fill(0).map((_, i) => {
  const value =
    !(i % 3) && !(i % 5) ? fizz + buzz : !(i % 5) ? buzz : !(i % 3) ? fizz : i;
  this.setInDOM(value);
  return value;
});

function setInDOM(value) {
  const a = document.createElement("li");
  a.innerText = value.toString();
  document.getElementById("listNum").appendChild(a);
}

// arr1000.forEach((item) => {
//   !(item % 3) && !(item % 5)
//     ? console.log(fizz + buzz)
//     : !(item % 5)
//     ? console.log(buzz)
//     : !(item % 3)
//     ? console.log(fizz)
//     : console.log(item);
// });

// const arrayFizzBuzz = arr1000.map((item) => {
//   return !(item % 3) && !(item % 5)
//     ? fizz + buzz
//     : !(item % 5)
//     ? buzz
//     : !(item % 3)
//     ? fizz
//     : item;
// });
// console.log(arr1000FizzBuzz);
