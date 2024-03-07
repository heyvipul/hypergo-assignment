import './App.css'
import {Routes,Route} from "react-router-dom"
import Player from './components/Player'
import SinglePlayer from './components/SinglePlayer'

function App() {
  

  return (
    <>
    <div className='banner'>
      <h2>Video Hub: Your Gateway to Endless Entertainment!</h2>
    </div>
    <Routes>
      <Route path='/' element={<Player/>}/>
      <Route path='/singleplayer/:page/:index' element={<SinglePlayer/>} />
    </Routes>  
    </>
  )
}

export default App
