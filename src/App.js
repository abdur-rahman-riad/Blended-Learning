import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses/Courses';
import Other from './components/Other/Other';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/other">
            <Other></Other>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
