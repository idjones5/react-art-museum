import { NavLink } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from './data/harvardArt';

function App() {
  
  return (
      <div>
        <GalleryNavigation  galleries={harvardArt.records}/>
      </div>
    
  );
}


export default App;
