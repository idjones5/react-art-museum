import { NavLink } from 'react-router-dom';
import './ArtImageTile.css';
import {  useRouteMatch } from 'react-router-dom'

function ArtImageTile({ art }) {
    const { url } = useRouteMatch();
    return (
        <div>
            <h1 className="title">Artworks</h1>
            <div className='image-container'>
            {
                art.map((images) => (
                    <NavLink to={`${url}/art/${images.imageid}`} key={`${images.imageid}`}><img className="images" src={`${images.baseimageurl}`}/></NavLink>
                ))
            }
            </div>
        </div>
    )
}

export default ArtImageTile;