import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../App';
import logoLemiaImg from '../Img/logoLemia.png';
import manchaAmarelaImg from '../Img/manchaAmarela.png';
import cabecaLumiaImg from '../Img/cabecaLumia.png';
import '../styles/Login.css';

function Login() {
  const { users, setCurrentUser } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username);

    if (!user) {
      setError('Usuário não cadastrado');
      return;
    }

    if (user.password !== password) {
      setError('Senha incorreta');
      return;
    }

    setCurrentUser(user);
    if (user.isAdmin) {
      navigate('/home');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className='login-container'>

<img src={manchaAmarelaImg} class ='manchaAmarela'alt="Mancha amarela no topo" />
<img src={logoLemiaImg} class='logoLemia' alt="Logo do Lêmia" />

<form onSubmit={handleLogin}  className="login-form">
    <div className='container-usu'>
      <label className='txt-campo'>Nome de Usuário:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="input-name"
      />
    </div>
      <div className="container-form">
        <label className='txt-campo'>Senha:</label>
        <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-pass"
        />
      <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="show-password-btn"
        >
          {showPassword ? 'Esconder' : 'Mostrar'}
      </button>
      </div>
      </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='btn-login'>ENTRAR</button>
        
        <a className='link-remember' onClick={() => navigate('/remember')}><u>Esqueceu a senha?</u></a>
        <a className='link-cad' onClick={() => navigate('/register')}><u>Não tem uma conta? Cadastre-se já!</u></a>
      </form>

      <img src={cabecaLumiaImg} class='cabeca-Lumia' alt="Cabeça da Lumia" />

    </div>
  );
}

export default Login;









