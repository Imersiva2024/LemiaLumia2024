import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../App';
import logoLemiaImg from '../Img/logoLemia.png';
import manchaAmarelaImg from '../Img/manchaAmarela.png';
import '../styles/Register.css';

function Register() {
  const { users, setUsers } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  const [name, setName] = useState(''); 
  const [recoveryPhrase, setRecoveryPhrase] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  
  const checkPasswordRequirements = (password) => ({
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@$!%*?&]/.test(password),
    isLongEnough: password.length >= 8
  });

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
    if (!validatePassword(password)) {
      setError('A senha deve conter: pelo menos 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.');
      return;
    }
    const newUser = { username, password, email, phone, name, recoveryPhrase, isAdmin: false };
    setUsers([...users, newUser]);
    alert('Usuário registrado com sucesso!');
    navigate('/');
  };

  const { hasUpperCase, hasNumber, hasSpecialChar, isLongEnough } = checkPasswordRequirements(password);

  return (
    <div className='register-container'>
      <img src={manchaAmarelaImg} className='manchaAmarela' alt="Mancha amarela no topo" />
      <img src={logoLemiaImg} className='logoLemia' alt="Logo do Lêmia" />
      {error && <p style={{ color: 'red' }}>{error}</p>} 

      <div className='form-container'>
        <label className='txt-campo'>Nome de Usuário:</label>
        <input type="text" className='input-user' value={username} onChange={(e) => setUsername(e.target.value)} />
        
        <label className='txt-campo'>E-mail: </label>
        <input type="email" className='input-email' value={email} onChange={(e) => setEmail(e.target.value)} />
       
        <label className='txt-campo'>Senha:</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-passw"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="show-password-btn"
          >
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
        </div>

        <label className='txt-campo'>Frase de Segurança:</label>
        <input
          type="text"
          className="input-passw"
          value={recoveryPhrase}
          onChange={(e) => setRecoveryPhrase(e.target.value)}
          required
        />
        
        <div className='container-requisitos'>
          <label className='txt-requisitos'>Requisitos obrigatórios para a senha:</label>
          <ul>
            <li className={isLongEnough ? 'valid' : 'invalid'}>- 8 caracteres;</li>
            <li className={hasUpperCase ? 'valid' : 'invalid'}>- 1 Letra maiúscula;</li>
            <li className={hasSpecialChar ? 'valid' : 'invalid'}>- 1 Caracter especial;</li>
            <li className={hasNumber ? 'valid' : 'invalid'}>- 1 Número.</li>
          </ul>
        </div>
        <button className='btn-cad' onClick={handleRegister}>CADASTRAR</button>
      </div>
    </div>
  );
}

export default Register;
