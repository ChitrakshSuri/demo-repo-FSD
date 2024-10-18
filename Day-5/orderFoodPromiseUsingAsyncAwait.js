function orderFood(item, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order name: " + item);
      resolve();
    }, time);
  });
}

async function printFoodItems() {
  await orderFood("Chole Bhatoore", 1000);
  await orderFood("Dal Makhni", 2000);
  await orderFood("Chole Kulche", 3000);
}
printFoodItems();
