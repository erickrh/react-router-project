import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (

    <nav>
      <ul>
        
        {/*
        With Link
        <li> 
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li> */}

        {/*
        With NavLink
        <li>
          <NavLink // NavLink nos permite obtener el argument isActive, para saber si se esta sobre esa ruta.
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue', // Si isActive es true, entonces será rojo. De lo contrario será azul.
          })}
          to={'/'}
          >Home</NavLink>
        </li>
        <li>
          <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
            })}
          to={'/blog'}
          >Blog</NavLink>
        </li>
        <li>
          <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
          })}
          to={'/profile'}
          >Profile</NavLink>
        </li> */}

        {routes.map(route => (
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        {console.log(routes)}
      </ul>
    </nav>
  );
}

const routes = [];
  
routes.push({
  to: '/',
  text: 'Home'
});
routes.push({
  to: '/blog',
  text: 'Blog'
});
routes.push({
  to: '/profile',
  text: 'Profile'
});


export { Menu };