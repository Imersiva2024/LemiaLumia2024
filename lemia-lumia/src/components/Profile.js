import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../App';

const Profile = () => {
  const { currentUser, users, setUsers, setCurrentUser } = useUserContext();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setPhone] = useState(currentUser.phone);
  const [password, setPassword] = useState(currentUser.password);
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
    if (oldPassword !== currentUser.password) {
      setError('Senha incorreta.');
      return;
    }

    const updatedUsers = users.map(user => 
      user.username === currentUser.username ? { ...user, name, email, phone, password } : user
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...currentUser, name, email, phone, password });
    setEditing(false);
    setError('');
  };

  const handleDeleteAccount = () => {
    const enteredPassword = prompt('Digite sua senha para confirmar a exclusão:');
    if (enteredPassword === currentUser.password) {
      const updatedUsers = users.filter(user => user.username !== currentUser.username);
      setUsers(updatedUsers);
      setCurrentUser(null);
      navigate('/');
    } else {
      alert('Senha incorreta. Não foi possível excluir a conta.');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <div>
        {editing ? (
          <>
            <label>
              Nome:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Telefone:
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              Senha:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
              Confirmar Senha:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <label>
              Senha Atual:
              <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleSaveProfile}>Salvar</button>
          </>
        ) : (
          <>
            <p>Nome: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
            <p>Telefone: {currentUser.phone}</p>
            <p>Senha: ********</p> 
            <button onClick={handleEditProfile}>Editar Perfil</button>
          </>
        )}
      </div>
      <button onClick={handleDeleteAccount}>Excluir Conta</button>
      <button onClick={handleLogout}>Sair da Conta</button>
    </div>
  );
};

export default Profile;














