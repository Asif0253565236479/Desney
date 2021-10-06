import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import Login from './Components/Login/Login';
import Header  from "./Components/Header/Header"
function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Switch>
         <Route path="/" component={Login} exact ></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
