const Images = ({ onSelect }) => {
    const images = [
        {id: 1, url:'src/assets/images/img1.jpg'}, 
        {id: 2, url:'src/assets/images/img2.jpg'}, 
        {id: 3, url:'src/assets/images/img3.jpg'},
        {id: 4, url:'src/assets/images/img4.jpg'},
        {id: 5, url:'src/assets/images/img5.jpg'},
        {id: 6, url:'src/assets/images/img6.jpg'},
    ]

    return (
        <div className="images">
            {images.map(image => (
                <img key={image.id} src={image.url} alt={`Meme ${image.id}`} 
                onClick={() => onSelect(image.url)} />
            ))}
        </div>
    )

}

export default Images;