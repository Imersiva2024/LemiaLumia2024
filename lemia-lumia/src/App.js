import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Register from './components/Register';
import Location from './components/Location';
import Chat from './components/Chat';
import BottomMenu from './components/BottomMenu';
import LoadingScreen from './components/LoadingScreen';
import RememberPassword from './components/RememberPassword'; 

const UserContext = createContext();

const initialUsers = [
  { username: 'Lemia2024', password: 'ImersivaLemiaTcc', email: 'admin@example.com', phone: '123456789', name: 'Admin User', recoveryPhrase: 'examplePhrase', isAdmin: true }
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location" element={<Location />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/remember" element={<RememberPassword />} /> {/* Nova rota */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {currentUser && <BottomMenu />}
      </Router>
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export default App;
export { useUserContext };












