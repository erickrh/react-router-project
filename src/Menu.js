import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Menu() {
  const auth = useAuth();
  const userSlug = auth.user?.userContent?.slug;

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.private && !auth.user) return null;

          if (auth.user && route.text === 'Login') return null;

          if (userSlug && route.text === 'Register') return null;
          
          if (!userSlug && route.text === 'Profile') return null;
          
          if (route.text === 'Profile') {
            return (
              <li key={route.to}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'blue',
                  })}
                  to={`${route.to}/${userSlug}`}
                >
                  {route.text}
                </NavLink>
              </li>
            );
          }

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
  to: '/register',
  text: 'Register',
  private: true,
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

export { Menu };