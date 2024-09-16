import React from 'react';
import carregamentoImg from '../Img/carregamento.png';

const LoadingScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffffff' }}>
      <img src={carregamentoImg} alt="Carregamento" />
    </div>
  );
};

export default LoadingScreen;