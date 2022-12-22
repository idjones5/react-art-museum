import './ArtImageTile.css';

function ArtImageTile({art}) {
    var id = 1;
    return (
        <div>
            <h1>Artworks</h1>
            <div className='image-container'>
            {
                art.map((images) => (
                    <img className="images" key={`${id++}`} src={`${images.baseimageurl}`}/>
                ))
            }
            </div>
        </div>
    )
}

export default ArtImageTile;