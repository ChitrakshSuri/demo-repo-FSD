// USE OF REJECT

function roll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll no is " + num);
      reject();
    }, delay);
  });
}

roll(1234, 1000)
  .then(() => {
    roll(1234, 2000).then(() => {
      roll(1234, 3000).then(() => {
        console.log("All roll no are printed");
      });
    });
  })
  .catch(() => {
    console.log("Caught");
  });

// all the thens are skipped directly goes to catch
