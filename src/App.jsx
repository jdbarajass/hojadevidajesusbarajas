import HojaDeVida from "./pages/HojaDeVida"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/"]}>
            <HojaDeVida/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
