import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import HomePage from './pages/HomePage';
import ListRealTimedbPage from "./pages/ListRealTimedbPage";
import ListFirestorePage from "./pages/ListFirestorePage";

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/realtime" component={ListRealTimedbPage}/>
        <Route exact path="/firestore" component={ListFirestorePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
