import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { michigan } from "../assets";

function WelcomePage() {
  const [fadeOut, setFadeOut] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Adjust the delay to match the length of your fade-out effect

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      history.push('/main'); // Replace with the path to your main page
    }
  }, [fadeOut, history]);

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
