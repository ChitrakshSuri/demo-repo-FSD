// promised ko handle karne ke 2 tarike
// 1. using then catch
// 1. using async await

// async function se pehle lagane se function by default promise return karta hai

// await bina asyn ke kaam nahi karega
// await pomised ke resolve hone tak ka wait karega

function getRoll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll no is " + num);
      resolve();
    }, delay);
  });
}

async function printRoll() {
  await getRoll(1, 1000);
  await getRoll(2, 1000);
  await getRoll(3, 1000);
}
printRoll();
