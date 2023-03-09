import React from 'react';
import { useAuth } from './auth';
import { Link } from 'react-router-dom';

function HomePage() {
  const auth = useAuth();
  return (
    <>
      <h1>Home</h1>
      {!auth.user && (
        <p>Welcome home, <Link to={'/login'}>login</Link> please.</p>
      )}

      {auth.user && (
        <p>Welcome home, {auth.user?.username}!</p>
      )}
    </>
  );
}

export { HomePage };