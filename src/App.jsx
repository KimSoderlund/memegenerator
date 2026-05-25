import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Images from './components/Images'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div>
      <h1>App</h1>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Images />}
    </div>
  )
}

export default App
