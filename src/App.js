import { Route, Switch ,Redirect} from "react-router-dom";
import './App.css';
import Circket from "./homework/Cricket/cricket";
import Bussiness from "./homework/Cricket/Bussiness";
import Political from "./homework/Cricket/political";
import NotFound from "./homework/Cricket/notFounf";
import NavBar2 from "./homework/Cricket/navBar2";

function App() {
  return (
    <>
      <NavBar2/>
      <div className="App">
        <Switch>
          <Route path="/circket" component={Circket}></Route>
          <Route path="/Bussiness" component={Bussiness} ></Route>
          <Route path="/political" component={Political} />
          <Route path="/notFounf" component={NotFound} />
          <Redirect from="/"  exact to="/circket"></Redirect>
          <Redirect to="/notFounf"/>
        </Switch>
      </div>
    </>
  );
}

export default App;

