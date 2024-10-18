let promise = new Promise((resolve, reject) => {
  resolve({ user: "CS", pass: "1233" });
});
promise
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((res) => {
    console.log(res.user);
  })
  .catch(() => {
    console.log("ERROR");
  })
  .finally(() => {
    console.log("FINALLY");
  });
