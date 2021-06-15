import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Adminpage from './layouts/Adminpage';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className = "main">
        <Adminpage/>
      </Container>
    </div>
  );
}

export default App;
