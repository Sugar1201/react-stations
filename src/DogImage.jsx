export const DogImage = (props) => {

  return (
    <div>
      <img 
        src={props.imageUrl} 
        alt="Dog" 
      />
    </div>
  );
};

export default DogImage;