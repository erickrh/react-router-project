import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.private && !auth.user) return null;

          if (auth.user && route.text === 'Login') return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];
  
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true,
});
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
});
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true,
});
routes.push({
  to: '/privado',
  text: 'Privado',
  private: true,
});


export { Menu };