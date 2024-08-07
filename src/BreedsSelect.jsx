// BreedsSelect.js
import './App.css'

/**
 * @param {Object} props
 * @param {string[]} props.breeds
 * @param {string} props.selectedBreed
 * @param {(breed: string) => void} props.onBreedChange
 */

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
    <div>
      <label htmlFor="breeds">Select a Breed: </label>
      <select
        className='selectBox'
        id="breeds"
        value={selectedBreed}
        onChange={(e) => onBreedChange(e.target.value)}
      >
        <option value="" disabled>Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedsSelect;
