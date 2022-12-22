import { NavLink, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";


function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(({ galleryid }) => galleryid === parseInt(galleryId));
    const artworks = [];

    function mapImages() {
        gallery.objects[0].images.forEach(element => {
            artworks.push(element)
        });
    }

    mapImages();
    
    return (
        <div>
        <h1>{gallery.name}</h1>
        <ArtImageTile art={artworks}/>
        <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default GalleryView;