// @ts-check
import {useState} from 'react';

import './App.css'
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/dachshund/dachshund-1920_640.jpg');
  const updateDogUrl = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('Error fetching the dog image:', error);
    }
  };

  return (
    <>
      <div>
        <main>
        <div className="left">
          <p>This is the platform for the dog lovers 🐶☆</p>
        </div>
        <div className="right">
          <DogImage imageUrl={dogUrl} />
          <button onClick={updateDogUrl}>DOG!</button>
        </div>
        </main>
      </div>
    </>
  )
}

export default Description
