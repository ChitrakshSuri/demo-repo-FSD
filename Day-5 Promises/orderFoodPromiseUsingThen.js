function orderFood(item, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order name: " + item);
      resolve();
    }, time);
  });
}

orderFood("pizza", 1000).then(() => {
  orderFood("burger", 2000).then(() => {
    orderFood("pasta", 3000).then(() => {
      orderFood("garlic bread", 1000).then(() => {
        console.log("All orders are delivered");
      });
    });
  });
});
