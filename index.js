const fizz = "Fizz";
const buzz = "Buzz";
//const a = document.createElement("li");
const arr1000FizzBuzz = new Array(1000)
  .fill(0)
  .map((_, i) =>
    !(i % 3) && !(i % 5) ? fizz + buzz : !(i % 5) ? buzz : !(i % 3) ? fizz : i
  )
  .forEach((i) => {
    const a = document.createElement("li");
    a.innerText = i.toString();
    document.getElementById("listNum").appendChild(a);
    console.log(i);
  });

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
