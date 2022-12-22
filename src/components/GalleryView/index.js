import { useParams } from "react-router-dom";


function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(({ galleryid }) => galleryid === parseInt(galleryId));

    return (
        <div>
        <h1>{gallery.name}</h1>
        </div>
    )
}

export default GalleryView;