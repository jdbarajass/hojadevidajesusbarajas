import HojaDeVida from "./pages/HojaDeVida";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HojaDeVida />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
