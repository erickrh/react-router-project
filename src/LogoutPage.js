import React from 'react';
import { useAuth } from './auth';

function LogoutPage() {
  const auth = useAuth();

  const logout = e => {
    e.preventDefault();
    auth.logout();
  };
  
  return (
    <>
      <h1>LogoutPage</h1>

      <form onSubmit={logout}>
        <label>¿Estas seguro de cerrar la sesión?</label>
        <button type="submit">¡Sacame de aquí!</button>
      </form>
    </>
  );
}

export { LogoutPage };