import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { Nav } from "./components/nav/Nav";
import { Login } from "./components/user/Login";
import { Signup } from "./components/user/Signup";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
