import logo from './logo.svg';
import './App.css';
import MyRoutes from './MyRoutes';
import CounterReducer from './Reducers/CounterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function App() {
  const Counterstore= createStore(CounterReducer)
  return (
    <div className="App">

      <Provider store={Counterstore}>
        <MyRoutes/>
      </Provider>
      
    </div>
  );
}

export default App;
