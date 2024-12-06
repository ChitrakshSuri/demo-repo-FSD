import React, { useState } from "react";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  const getData = () => {
    fetch("https://api.github.com/users/ChitrakshSuri")
      .then((response) => response.json())
      .then((user) => {
        setUserData(user);
      });
  };

  return (
    <div>
      <h1>Want to see GitHub Data?</h1>
      <button onClick={getData}>Get Data</button>
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <p id="username">Username: {userData.login}</p>
          <p id="bio">Bio: {userData.bio}</p>
          <p id="numRepo">No. of Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
