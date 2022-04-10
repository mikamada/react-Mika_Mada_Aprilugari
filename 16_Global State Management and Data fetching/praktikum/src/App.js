
import './App.css';
import Home from './components/Home';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persiststor} from './store/store'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor} >
        <Home/>
      </PersistGate>
    </Provider>
  );
}

export default App;
