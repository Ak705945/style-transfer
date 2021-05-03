import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import TryPage from "./TryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/try-page" component={TryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
