import logo from './logo.svg';
import './App.css';
import MyRoutes from './MyRoutes';
import CounterReducer from './Reducers/CounterReducer';
import { createStore } from 'redux';

function App() {
  const store= createStore(CounterReducer)
  return (
    <div className="App">
      <MyRoutes/>
    </div>
  );
}

export default App;
