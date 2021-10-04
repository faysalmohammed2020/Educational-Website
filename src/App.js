import { BrowserRouter , Switch,
  Route, } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';

function App() {
  return (
    <div>
      
      <BrowserRouter >
        <Switch>
          <Route exact path ="/">
          <Home></Home> 
          </Route>
          <Route path ="/Home">
          <Home></Home> 
          </Route>
          <Route path ="/Service">
          <Service></Service> 
          </Route>
        </Switch>
      </BrowserRouter >
               
           
    </div>
  );
}

export default App;
