import PropTypes from 'prop-types';
import './styles.css';
import { useEffect, useState } from 'react';

const ProgressBar = ({progress}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

  }, [progress]);

  return (
    <div className="outer">
      <div className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translate(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "white" : "black"
        }}
        role='progressbar'
        aria-valuenow={animatedProgress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number
};

function App() {

  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={70}/>
    </div>
  )
}

export default App
