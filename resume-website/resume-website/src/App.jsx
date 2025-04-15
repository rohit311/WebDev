import './App.css';
import Intro from './components/Intro';
import Details from './components/Details';
import Misc from './components/Misc';
import Copyright from './components/Copyright';

function App() {

  return (
    <>
    <div className='container'>
      <div className="header">
        <div>
        <p>Rohit Chavan</p>
        </div>
        <div>
          <span>Home / </span>
          <span>Projects / </span>
          <span>Articles / </span>
          <span>Contacts </span>
        </div>
      </div>

      <Intro />
      <Details />
    </div>
    <Misc />
    <div className='copyright'>
      <Copyright />
    </div>
    </>
  )
}

export default App
