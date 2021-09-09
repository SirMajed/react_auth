import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Routes/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'
import Blog from './Routes/Blog/Blog';
import About from './Routes/About/About';
function App() {
  return (
    <Router >
      <div className="App bg-bgColor ">

      <div className="max-w-5xl mx-auto mt-5 bg-bgColor">
      <Header/>
      
        <Switch>
          {/* Only one route shows at one time */}
          <Route exact path="/">
          <Home/>
          </Route>

          <Route exact path="/about">
          <About/>
          </Route>

          <Route exact path="/login">
          <Login/>
          </Route>


          <Route exact path="/register">
          <Register/>
          </Route>

          <Route exact path="/blog">
          <Blog/>
          </Route>

        </Switch>
      </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
