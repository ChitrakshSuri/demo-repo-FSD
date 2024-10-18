const promise = new Promise(function (resolve, reject) {
  console.log("Creating a new promise to demonstrate asynchronous behavior.");
  resolve("The promise has been successfully resolved!"); // This indicates the promise was fulfilled.
  reject("The promise has been rejected due to an error."); // This indicates the promise was not fulfilled.
});

promise
  .then(() => {
    console.log(
      "The 'then' block executed successfully, handling the resolved promise."
    );
  })
  .catch(() => {
    console.log("My first Catch");
  });

// promise.then(console.log);
