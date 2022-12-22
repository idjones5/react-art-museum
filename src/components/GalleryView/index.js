import { NavLink, Route, useParams, Switch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";


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
        <h1 style={{textAlign: "center"}}>{gallery.name}: <span style={{fontWeight: 400}}>{gallery.theme}</span></h1>
        <NavLink to="/">Home</NavLink>
        <p>{gallery.labeltext}</p>

        <Switch>
            <Route exact path={`/galleries/:galleryId`}>
               <ArtImageTile art={artworks} />
            </Route>
            <Route path={`/galleries/:galleryId/art/:artId`}>
               <ArtDescription art={artworks} gallery={gallery}/>
            </Route>
        </Switch>
        </div>
    )
}

export default GalleryView;