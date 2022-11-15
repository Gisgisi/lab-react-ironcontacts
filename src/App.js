import logo from './logo.svg';
import './App.css';
import ContactsJSON from './contacts.json'
import { startTransition, useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(ContactsJSON.slice(0, 5))
  console.log(contacts)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr class='tablehead'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {contacts.map((star) =>
              <tr key={star.id}>
                <td><img class='starimg' src={star.pictureUrl}/></td>
                <td>{star.name}</td>
                <td>{(Math.round((star.popularity)*100))/100}</td>
                {(star.wonOscar === true) && <td>🏆</td>}
                {(star.wonEmmy === true) && <td>🏆</td>}
              </tr>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
