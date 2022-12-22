import { NavLink, useParams } from "react-router-dom";


function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(({ galleryid }) => galleryid === parseInt(galleryId));
    console.log(galleryId)
    return (
        <div>
        <h1>{gallery.name}</h1>
        <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default GalleryView;