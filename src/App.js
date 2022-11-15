import logo from './logo.svg';
import './App.css';
import ContactsJSON from './contacts.json'
import { startTransition, useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(ContactsJSON.slice(0, 5));
  

  let getRandomInt = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomStar = function() {
    let randomContactIndex = getRandomInt(5, ContactsJSON.length - 1);
    let randomContact = ContactsJSON[randomContactIndex];
    
    setContacts([randomContact,...contacts]);
    ContactsJSON.splice(randomContactIndex, 1);
  }

  let sortByName = function() {
    const contactList = [...contacts];
    contactList.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(contactList);
  };

  let sortByPopularity = function() {
    const contactList = [...contacts];
    contactList.sort(function(a, b) {
      return parseFloat(b.popularity) - parseFloat(a.popularity);
  });
    setContacts(contactList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomStar}>Add Random</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr className='tablehead'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
            {contacts.map((star) =>
              <tr key={star.id}>
                <td><img className='starimg' src={star.pictureUrl} /></td>
                <td>{star.name}</td>
                <td>{(Math.round((star.popularity) * 100)) / 100}</td>
                {(star.wonOscar === true) && <td>🏆</td>}
                {(star.wonEmmy === true) && <td>🏆</td>}
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
