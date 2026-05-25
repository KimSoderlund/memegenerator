const MenuInputs = ({ topText, setTopText, bottomText, setBottomText }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Top Text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bottom Text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
            />
        </div>
    )
}

export default MenuInputs;