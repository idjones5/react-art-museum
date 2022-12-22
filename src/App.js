import { Link, NavLink, Route, Switch } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from './data/harvardArt';
import GalleryView from "./components/GalleryView";

function App() {
  
  return (
      <div className="page-wrapper">
        
        <Switch>
          {/* <Route exact path="/">
            <h2>Home Page</h2>
          </Route> */}
          <Route exact path="/">
          <GalleryNavigation galleries={harvardArt.records}/>
          </Route>
          <Route path="/galleries/:galleryId">
            <GalleryView galleries={harvardArt.records}/>
          </Route>
          <Route>
            <h1>404 Not Found: This Page Does Not Exist</h1>
          </Route>
        </Switch>
      </div>
  );
}


export default App;
