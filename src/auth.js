// El nombre auth.js en minusculas es porque se estará realizando múltiples export de componentes, no es solo uno.
import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const roles = {
  admin: {
    write: true,
    delete: true,
    type: 'admin',
  },
  editor: {
    write: true,
    delete: false,
    type: 'editor',
  },
  estandar: {
    write: false,
    delete: false,
    type: 'estandar',
  },
};

const usuarios = [
  {
    name: 'Erick',
    rol: roles.admin,
    slug: 'erick',
    description: 'Hello world, I am a frontend developer!',
  },
  {
    name: 'e93',
    rol: roles.editor,
    slug: 'e93',
    description: 'I like the number ninety-three.',
  },
  {
    name: 'slash',
    rol: roles.estandar,
    slug: 'slash',
    description: 'Godfather solo',
  },
];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const rolesToNewUser = roles;

  const [users, setUsers] = React.useState(usuarios);

  const [user, setUser] = React.useState(null);

  const [myPath, setMypath] = React.useState(null);

  const login = ({ username }) => {
    const userContent = users.find(user => (user.name === username) ? user.rol : null);
    setUser({ username, userContent });
    // navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    setMypath(null);
    navigate('/');
  };
  
  const auth = {
    user,
    users,
    myPath,
    rolesToNewUser,
    setUser,
    setUsers,
    setMypath,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    React.useEffect(() => {
      auth.setMypath(location.pathname);
    }, []);
    return <Navigate to={'/login'} />;
  }
  return props.children;
}

export {
  AuthProvider,
  useAuth,
  AuthRoute,
};