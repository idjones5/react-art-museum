import { Link, NavLink, Route, Switch } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from './data/harvardArt';
import GalleryView from "./components/GalleryView";

function App() {
  
  return (
      <div className="page-wrapper">
        
        {/* <Switch> */}
          <Route>
          <GalleryNavigation  galleries={harvardArt.records}/>
          </Route>
          <Route path="/galleries/:galleryId">
            <GalleryView galleries={harvardArt.records}/>
          </Route>
        {/* </Switch> */}
      </div>
  );
}


export default App;
