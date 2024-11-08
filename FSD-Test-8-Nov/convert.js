function convertCurr() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((user) => {
        document.getElementById("").innerHTML = user.avatar_url;
        document.getElementById("username").innerHTML = `Username: ${user.login}`;
        document.getElementById("bio").innerHTML = `Bio: ${user.bio}`;
        document.getElementById(
          "publicRepo"
        ).innerHTML = `Public Repos: ${user.public_repos}`;
        document.getElementById(
          "numRepo"
        ).innerHTML = `No. of Repos: ${user.public_repos}`;
      });
  }