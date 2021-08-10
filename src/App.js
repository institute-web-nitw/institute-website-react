import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import AcademicServicesPage from "./pages/academics/AcademicServicesPage";

//  Home // 
import AboutUs from "./pages/home/AboutUs";
import BoardOfGoverners from "./pages/home/BoardOfGoverners";
import BuildingAndWorksCommittee from "./pages/home/BuildingAndWorksCommittee";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Home */}
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/board-of-governers" component={BoardOfGoverners} />
          <Route exact path="/building-and-works-committee" component={BuildingAndWorksCommittee} />

        <Route exact path="/test" component={TestPage} />
        <Route exact path="/test2" component={AcademicServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
