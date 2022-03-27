import React from "react";
import Card from "./card";
import contacts from "../contacts";
console.log(contacts);
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        name="beyonce"
        number="+123 456 789"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
