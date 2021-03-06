import React from "react";
import Card from "./card";
import contacts from "../contacts";
console.log(contacts);
//you must put the key prop
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      number={contact.phone}
      email={contact.email}
      img={contact.imgURL}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
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
