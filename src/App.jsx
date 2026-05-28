import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Images from './components/Images'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [topFontSize, setTopFontSize] = useState(32);
  const [bottomFontSize, setBottomFontSize] = useState(32);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>App</h1>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} topText={topText} setTopText={setTopText} bottomText={bottomText} setBottomText={setBottomText} topFontSize={topFontSize} setTopFontSize={setTopFontSize} bottomFontSize={bottomFontSize} setBottomFontSize={setBottomFontSize} />
      {selectedImage && (
        <div className="meme">
          <img src={selectedImage} alt="Vald bild" />
          <p className="meme-text top" style={{ fontSize: topFontSize + 'px' }}>{topText}</p>
          <p className="meme-text bottom" style={{ fontSize: bottomFontSize + 'px' }}>{bottomText}</p>
        </div>
      )}
      {showMenu && <Images onSelect={(url) => { setSelectedImage(url); setTopText(''); setBottomText(''); }} />}
    </div>
  )
}

export default App
