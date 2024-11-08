let url = "https://api.github.com/users/ChitrakshSuri";
let b = fetch(url);
b.then((data) => {
//   console.log(data);
  return data.json();
})
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("ERROR");
  })
  .finally(() => {
    console.log("FINALLY");
  });

async function learnAPI() {
  let url = "https://api.github.com/users";
  let b = await fetch(url);
  let data = await b.json();
  console.log(data);
}
learnAPI();
