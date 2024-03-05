import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color='indigo' maxRating={7} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={'snow'} />
    <StarRating
      size={56}
      color={'green'}
      className='testing'
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
