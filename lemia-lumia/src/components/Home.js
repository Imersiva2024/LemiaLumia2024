import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiSearch } from 'react-icons/fi';
import { useUserContext } from '../App';
import BottomMenu from './BottomMenu';
import '../styles/Home.css';

function Home() {
  const { currentUser, users } = useUserContext();
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <FiUser onClick={() => navigate('/profile')} size={24} />
        <h2>Home</h2>
        <FiSearch onClick={() => navigate('/search')} size={24} />
      </header>
      <main className="content">
        {currentUser?.isAdmin && (
          <div>
            <h3>Usuários cadastrados</h3>
            <ul>
              {users.filter(user => !user.isAdmin).map((user, index) => (
                <li key={index}>{user.name} ({user.email})</li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <BottomMenu />
    </div>
  );
}

export default Home;







