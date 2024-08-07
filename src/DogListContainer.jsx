import { useState, useEffect } from 'react';

import './App.css'
import BreedsSelect from './BreedsSelect';
import DogImage from './DogImage';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]); // initially 'breeds' set to the initial array
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);

  // 'breeds' holds the list of dog breeds
  // 'setBreeds' is the function used to update the state

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedList = Object.keys(data.message); // Object.keys takes an object and returns an array of the keys (or property names) of that object.
        setBreeds(breedList); // here, updating 'breeds' state which only contains BreedList(Object.keys)
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    // 'useEffect' allows to peform side-effects in the components.
    // In this case, its side-effects is fetching breeds which happens in the fetchBreeds func.

    fetchBreeds();
  }, []);

  const fetchImages = async () => {
    if (selectedBreed) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/hound/images/random/3`);
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  };

  return (
    <div className='BreedsSelectBox'>
      <h1 className='DogListTitle'>Discover DOG!</h1>
      <div className="selector-container">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onBreedChange={setSelectedBreed}
        />
        <button className="select-button" onClick={fetchImages}>Show</button>
      </div>
      {images.map((image, index) => (
            <DogImage key={index} imageUrl={image} />
          ))}
    </div>
  );
};

// index represents the position of each image within the images array.

export default DogListContainer;