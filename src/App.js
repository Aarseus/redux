import logo from './logo.svg';
import './App.css';
import MyRoutes from './MyRoutes';
import CounterReducer from './Reducers/CounterReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './Reducers/gameReducer';
import finalRootReducer from './Reducers/finalRootReducer';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
const persistConfig = {
  key: 'root',
  storage,
}

function App() {
  // const Counterstore= createStore(CounterReducer)
  // const Gamestore=createStore(gameReducer)

  // const rootReducer= combineReducers({
  //   counter: CounterReducer,
  //   game:gameReducer
  // })
  // const store=createStore(rootReducer)

  const persistedReducer = persistReducer(persistConfig,finalRootReducer)
  const store=createStore(persistedReducer)
  const persistor = persistStore(store)
  
  
  return (
    <div className="App">

      {/* <Provider store={Counterstore}> */}

        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MyRoutes/>
          </PersistGate>
        
      </Provider>
      
    </div>
  );
}

export default App;
