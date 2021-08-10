import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import AboutUs from "./pages/home/AboutUs";
// import CseDepartmentPage from "./pages/academics/departments/CseDepartmentPage";
import AcademicServicesPage from "./pages/academics/AcademicServicesPage";
import BoardOfGoverners from "./pages/home/BoardOfGoverners";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/board-of-governers" component={BoardOfGoverners} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/test2" component={AcademicServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
