import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import CseDepartmentPage from "./pages/academics/departments/CseDepartmentPage";
import AcademicServicesPage from "./pages/academics/AcademicServicesPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/test" component={TestPage} />
        <Route path="/test2" component={AcademicServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
