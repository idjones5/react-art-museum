import { Link, useParams } from "react-router-dom";

function ArtDescription({ art, gallery }) {
    const { artId } = useParams();
    const { galleryId } = useParams(); 
    const image = art.find(({ imageid }) => imageid === parseInt(artId));

    return (
        <div>
            <h1>{image.description != null ? image.description : ""}</h1>
            <h2>Image Description</h2>
            <p className="item-desc">{gallery.objects[0].description}</p>
            <Link to={`/galleries/${galleryId}`}> Back to Gallery</Link>
        </div>
    );
}

export default ArtDescription;