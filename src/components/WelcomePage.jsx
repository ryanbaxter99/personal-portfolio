import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { michigan } from "../assets";

function WelcomePage({ onFinish }) { // Change prop name from onComplete to onFinish
    const [fadeOut, setFadeOut] = useState(false);
    // const history = useHistory();
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setFadeOut(true);
      }, 3000); // Adjust the delay to match the length of your fade-out effect
  
      return () => clearTimeout(timeout);
    }, []);
  
    useEffect(() => {
      if (fadeOut) {
        history.push('/main'); // Replace with the path to your main page
        onFinish(); // Call the onFinish callback function
      }
    }, [fadeOut, history, onFinish]); // Add onFinish to the dependency array  

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
        {/* Add your SVG logo here */}
        <svg>
            <use href={michigan} />
        </svg>

        {/* Add any other welcome message or content here */}
        <h1>Hello There</h1>

    </div>
  );
}

export default WelcomePage;
