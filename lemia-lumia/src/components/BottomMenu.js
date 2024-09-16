import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiHome, FiMessageSquare } from 'react-icons/fi';

function BottomMenu() {
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      background: '#fff',
      borderTop: '1px solid #ccc',
      padding: '10px 0'
    }}>
      <FiMapPin size={24} onClick={() => navigate('/location')} />
      <FiHome size={24} onClick={() => navigate('/home')} />
      <FiMessageSquare size={24} onClick={() => navigate('/chat')} />
    </div>
  );
}

export default BottomMenu;


