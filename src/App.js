import './App.css'
import jackLogo from './assets/jackLogo.png'
import julianImg from './assets/julian.jpg'
import CursorTrail from './components/cursorTrail.tsx'

function App() {
  return (
    <>
    <div className="App">
        <h1>
          <img src={jackLogo} alt="couldnt load" className='headerImage'></img>
          Jack's Website 
        </h1>
        <p>website of jack winkler</p>
        <p>I ran out of time to make this any good mb, got it hosted at least</p>
        <p>heres a pic of julian sneaking a finger in my asshole</p>
        <img src={julianImg} alt= "couldnt load" className='julian'></img>
    </div>
    </>
  )
}

export default App;
