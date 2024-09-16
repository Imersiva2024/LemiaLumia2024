import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../App';

function RememberPassword() {
  const { users, setUsers } = useUserContext();
  const [username, setUsername] = useState('');
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRecoverPassword = () => {
    const user = users.find((user) => user.username === username);
    if (!user) {
      setError('Usuário não encontrado.');
      return;
    }

    if (user.recoveryPhrase !== recoveryPhrase) {
      setError('Frase de recuperação incorreta.');
      return;
    }

    setError('');
    setSuccess(true);
  };

  const handleChangePassword = () => {
    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, password: newPassword } : user
    );
    setUsers(updatedUsers);
    alert('Senha alterada com sucesso!');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Recuperar Senha</h2>
      <div style={styles.inputContainer}>
        <label>Nome de Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label>Frase de Recuperação:</label>
        <input
          type="text"
          value={recoveryPhrase}
          onChange={(e) => setRecoveryPhrase(e.target.value)}
          style={styles.input}
        />
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <button onClick={handleRecoverPassword} style={styles.button}>
        Verificar
      </button>
      {success && (
        <div style={styles.inputContainer}>
          <label>Nova Senha:</label>
          <div style={styles.passwordContainer}>
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword((prev) => !prev)}
              style={styles.showPasswordBtn}
            >
              {showNewPassword ? 'Esconder' : 'Mostrar'}
            </button>
          </div>
          <button onClick={handleChangePassword} style={styles.button}>
            Alterar Senha
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {

  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  showPasswordBtn: {
    marginLeft: '10px',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },

  error: {
    color: 'red',
    marginBottom: '20px',
  },
};

export default RememberPassword;

