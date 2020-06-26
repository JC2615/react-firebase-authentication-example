import React, {useState} from "react";
import axios from "axios";

alert(window.localStorage.getItem("emailForSignIn"));

export default function CreateUser2() {
  const [email, setEmail] = useState(window.localStorage.getItem("emailForSignIn"));
  const [password, setPassword] = useState('');

  function enrollUser() {
    axios.post(
      "http://localhost:8080/CreateUser",
      {email: email, password: password})
      .then(function (response) {
        //handle success
        alert(JSON.stringify(response));
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <form>
      <div>
        <label>Email: </label>
        <br/>
        <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <br/>
        <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="button" onClick={enrollUser}>
        Submit
      </button>
    </form>
    
  );
}
