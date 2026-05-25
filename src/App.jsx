import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Images from './components/Images'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>App</h1>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Vald bild" />
        </div>
      )}
      {showMenu && <Images onSelect={setSelectedImage} />}
    </div>
  )
}

export default App
