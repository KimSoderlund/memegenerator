import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div>
      <h1>App</h1>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default App
