import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Adminpage from './layouts/Adminpage';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import { Route } from 'react-router';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Route exact path = "/home" component={Home}/>
      <Container className = "main">
        <Adminpage/>
      </Container>
    </div>
  );
}

export default App;
