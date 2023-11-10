import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux'
import { store } from './app/store';
function App() {

  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Home/>  
    </Provider>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
