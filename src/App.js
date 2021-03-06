import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Adminpage from './layouts/Adminpage';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import { Route } from 'react-router';
import JobAdvertAdd from './pages/JobAdvertAdd';
import JobAdvertList from './pages/JobAdvertList'
import ResumeAdd from './pages/ResumeAdd'
import JobAdvertDetail from './pages/JobAdvertDetail';
import EmployeeConfirmJobAdvert from './pages/EmployeeConfirmJobAdvert';



function App() {
  return (
    <div className="App">
      <Navi/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/jobAdvetAdd" component={JobAdvertAdd}/>
      <Route exact path = "/jobAdvertList" component={JobAdvertList}/>
      <Route exact path = "/resumeAdd" component={ResumeAdd}/>
      <Route exact path = "/jobAdverts/:id" component = {JobAdvertDetail}/>
      <Route exact path = "/EmployeeConfirmJobAdvert" component = {EmployeeConfirmJobAdvert}/>
      <Container className = "main">
        <Adminpage/>
      </Container>
    </div>
  );
}

export default App;
