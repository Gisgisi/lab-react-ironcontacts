import logo from './logo.svg';
import './App.css';
import ContactsJSON from './contacts.json'
import { startTransition, useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(ContactsJSON.slice(0, 5))
  console.log(contacts)
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {contacts.map((star) =>
              <tr key={star.id}>
                <td><img class='starimg' src={star.pictureUrl}/></td>
                <td>{star.name}</td>
                <td>{star.popularity}</td>
              </tr>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
