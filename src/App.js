import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>Welcome to MY APP !</h1>
      </Route>
      <Route path="/part5">
        <Home/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
