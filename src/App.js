
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Ajouter from './components/Ajouter';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <p>bbb</p>
        <Navbar />
        <div className='contenu'>
          <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route  path='/ajouter'>
                <Ajouter />
              </Route>
              <Route  path='/blogs/:id'>
                <BlogDetail />
              </Route>
              <Route  path='*'>
                <NotFound />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
