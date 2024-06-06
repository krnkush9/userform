import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import Update from './Components/Update';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  // useState Hook
  // For tracking the login or not
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">

{/* Routes for jump one component to  another component*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/registration' element={<Registration  setLoggedIn={setLoggedIn} />} />

        <Route path='/dashboard' element={<PrivateRoute loggedIn={loggedIn}>
          <Dashboard />
        </PrivateRoute>
        } />

        <Route path='/update' element={<PrivateRoute loggedIn={loggedIn}>
          <Update />
        </PrivateRoute>}
        />

      </Routes>
    </div>

  );
}

export default App;
