import React from 'react';

const Menu = ({ showMenu, setShowMenu }) => {

return (
  <div>
    <h2>Menu</h2>
    <button onClick={() => setShowMenu(!showMenu)}>New Meme</button>
    {showMenu && <MenuInputs />}
  </div>
)
}

export default Menu;

const MenuInputs = () => {
    return (
        <div>
            <input type="text" placeholder="Top Text" />
            <input type="text" placeholder="Bottom Text" />
        </div>
    )
}