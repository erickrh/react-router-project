import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = e => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return auth.myPath ? <Navigate to={auth.myPath} /> : <Navigate to={'/profile'} />;
  }

  return (
    <>
      <h1>LoginPage</h1>
        
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export { LoginPage };