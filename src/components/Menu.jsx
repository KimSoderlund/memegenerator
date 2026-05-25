import React from 'react';
import MenuInputs from './Text';

const Menu = ({ showMenu, setShowMenu, topText, setTopText, bottomText, setBottomText }) => {

return (
  <div>
    <h2>Menu</h2>
    <button onClick={() => setShowMenu(!showMenu)}>New Meme</button>
    {showMenu && <MenuInputs topText={topText} setTopText={setTopText} bottomText={bottomText} setBottomText={setBottomText} />}
  </div>
)
}

export default Menu;