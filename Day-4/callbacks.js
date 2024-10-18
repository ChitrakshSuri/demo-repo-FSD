// function func() {
//   console.log("Chitraksh");
// }

// func();

// // setTimeout(func, 2000);

// // let a = function() {
// //   console.log("Shourya");
// // }

// // IIFE: immigiately invoke function
// (function () {
//   console.log("Shourya");
// })();

// // Constructor
// let a = new Function(`console.log("Abc");console.log("Xyz")`);
// a();

// // Using Arrow Fucntion
// let b = () => {
//   console.log("Arrow Function");
// };
// b();

// function rollNum(num){
//     // console.log("First");
//     console.log("Roll Num is: ", num);
// }
// setTimeout(rollNum, 2000, 20220151049);
// setTimeout(rollNum, 2000, 20220151011);


// callback hell
function rollNum(num, delay, nextRoll) {
  setTimeout(() => {
    console.log("Roll Num is: ", num);
    if (nextRoll) nextRoll();
  }, delay);
}

rollNum(123, 1000, () => {
  rollNum(456, 2000, () => {
    rollNum(789, 3000, () => {
      rollNum(1111, 4000);
    });
  });
});
