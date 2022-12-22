import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    return (
        <>
        <h1 className="title">Gallery Navigation</h1>
        <div className="homepage">
            <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-container">
            <nav className="nav">
                {
                    galleries.map(gallery => (
                        <NavLink className="links" to={`/galleries/${gallery.galleryid}`} key={gallery.id}>{gallery.name} - {gallery.theme}</NavLink> 
                    ))
                }
            </nav>
        </div>
        </>
        
    )
}

export default GalleryNavigation;