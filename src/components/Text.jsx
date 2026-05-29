const MenuInputs = ({ topText, setTopText, bottomText, setBottomText, topFontSize, setTopFontSize, bottomFontSize, setBottomFontSize }) => {
    return (
        <div className="menu-inputs">
            <div className="input-row">
                <input
                    type="text"
                    placeholder="Top Text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
                <input type="range" min="10" max="100" value={topFontSize} onChange={(e) => setTopFontSize(e.target.value)} />
            </div>
            <div className="input-row">
                <input
                    type="text"
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                />
                <input type="range" min="10" max="100" value={bottomFontSize} onChange={(e) => setBottomFontSize(e.target.value)} />
            </div>
        </div>
    )
}

export default MenuInputs;