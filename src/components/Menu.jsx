import React, { useState } from 'react';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

return (
  <div>
    <h2>Menu</h2>
    <button onClick={() => setShowMenu(!showMenu)}>New Meme</button>
    {showMenu && <p>Menu is open</p>}
  </div>
)

}

export default Menu;