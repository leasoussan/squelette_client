import {useState, createContext} from 'react';
import LoginRegisterForm from './components/LoginRegisterForm';
import Home from './components/Home'
import Nav from './components/Nav'
import Users from './components/Users'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState('')
  return (
    <BrowserRouter>
      <AppContext.Provider value={{token,setToken}}>
        <div className="App">
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<LoginRegisterForm title='Login' />} />
            <Route path='/register' element={<LoginRegisterForm title='Register' />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
