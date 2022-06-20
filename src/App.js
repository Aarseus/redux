import logo from './logo.svg';
import './App.css';
import MyRoutes from './MyRoutes';
import CounterReducer from './Reducers/CounterReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './Reducers/gameReducer';

function App() {
  // const Counterstore= createStore(CounterReducer)
  // const Gamestore=createStore(gameReducer)

  const rootReducer= combineReducers({
    counter: CounterReducer,
    game:gameReducer
  })
  const store=createStore(rootReducer)
  return (
    <div className="App">

      {/* <Provider store={Counterstore}> */}

        <Provider store={store}>
        <MyRoutes/>
      </Provider>
      
    </div>
  );
}

export default App;
