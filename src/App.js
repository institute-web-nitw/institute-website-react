import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App page text-center">
      <Switch>
        <Route path="/" component={DepartmentPage} exact />
        <Route path="/administration" component={DepartmentPage} />
        <Route path="/shop" component={DepartmentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
