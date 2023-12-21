import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';
import pawprint from './images/paw-solid.svg';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // function handleClick() {

  // }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className='App'>
      { 
        <div className='puppy-name-container'>
        {puppies.map((puppy) => {
          return (
            <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id} className='puppy-name'>
              {puppy.name}
            </p>
          );
        })
        }
        </div>
      }
      { 
        featPupId &&
        <div className='details-container'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          <img src={pawprint} alt="paw print" />
        </div>
      }
    </div>
  )
}

export default App
