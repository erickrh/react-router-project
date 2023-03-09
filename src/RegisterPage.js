import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [newUser, setNewUser] = React.useState({
    name: '',
    rol: auth.rolesToNewUser.estandar,
    slug: '',
    description: '',
  });

  const register = e => {
    e.preventDefault();

    const newListUsers = [...auth.users];
    newListUsers.push({
      name: newUser.name,
      rol: newUser.rol,
      slug: newUser.slug,
      description: newUser.description,
    });
    auth.setUsers(newListUsers);

    // Replica el login
    const username = newUser.name;
    const userContent = newUser;
    auth.setUser({ username, userContent });
    navigate(`/profile/${newUser.slug}`);
  };

  return (
    <>
      <h1>Register page</h1>
      <p>Thanks for chosen us, please create a user.</p>
      
      <form onSubmit={register}>
        <label htmlFor="name"><b>Name:</b></label>
        <input
          style={{marginLeft: '10px'}}
          name='name'
          id='name'
          type="text"
          placeholder='Erick Riaño'
          value={newUser.name}
          onChange={e => setNewUser({
            ...newUser,
            name: e.target.value,
          })}
          required
        />

        <br />

        <label htmlFor="description"><b>Description:</b></label>
        <input
          style={{marginLeft: '10px'}}
          id='description'
          name='description'
          type="text"
          placeholder='I love cats'
          value={newUser.description}
          onChange={e => setNewUser({
            ...newUser,
            description: e.target.value,
          })}
          required
        />

        <br />
        
        <label htmlFor="slug"><b>Slug:</b></label>
        <input
          style={{marginLeft: '10px'}}
          type="text"
          id='slug'
          name='slug'
          placeholder='Solo letras y numeros.'
          value={newUser.slug.toLowerCase()}
          onChange={e => setNewUser({
            ...newUser,
            slug: e.target.value.toLowerCase(),
          })}
          pattern="^[a-z0-9]*$"
          required
        />

        <br />

        <button style={{marginTop: '10px'}} type="submit">Register</button>
      </form>
      
    </>
  );
}

export { RegisterPage };