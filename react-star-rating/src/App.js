import React, {useState} from 'react';
import RatingReview from "./components/RatingReview";

function App() {
  const [rating, setRating] = useState(0)

  return (
    <RatingReview rating={rating} setRating={setRating} />
  );
}

export default App;
