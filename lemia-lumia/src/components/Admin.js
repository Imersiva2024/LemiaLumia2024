import React, { useState, useEffect } from 'react';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    setUsers([

      
    ]);
  }, []);

  return (
    <div>
      <h2>Admin - Usuários Cadastrados</h2>
      <h3>teste</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;




