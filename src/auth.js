// El nombre auth.js en minusculas es porque se estará realizando múltiples export de componentes, no es solo uno.
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const adminList = ['Erick', 'e93'];
const editorList = ['Juanito', 'Alimañana'];
const testerList = ['Pepito'];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find(admin => admin === username);
    const isEditor = editorList.find(admin => admin === username);
    const isTester = testerList.find(admin => admin === username);

    setUser({
      username,
      isAdmin,
      isEditor,
      isTester
    });
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = { user, login, logout };

  return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
};

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to='/login' />;
  };
  
  return props.children;
}

export {
  AuthProvider,
  useAuth,
  AuthRoute,
};