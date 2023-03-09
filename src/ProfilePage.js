import React from 'react';
import { useAuth } from './auth';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { slug } = useParams();
  const auth = useAuth();
  const userSlug = auth.user?.userContent?.slug;
  const canEdit = (userSlug  === slug) || (auth.user?.userContent?.rol.type === 'admin');
  const currentProfile = auth.users.find(user => user.slug === slug);

  const [editing, setEditing] = React.useState(false);
  
  const edit = () => {
    setEditing(true);
    setTimeout(() => {
      document.querySelector('.description').focus();
    }, 100);
    document.querySelector('.msg').innerHTML = 'The post is now editable. Try to edit it.';
  };

  const save = () => {
    setEditing(false);
    document.querySelector('.msg').innerHTML = '';
    currentProfile.name = document.querySelector('.name').innerText;
    currentProfile.description = document.querySelector('.description').innerText;
  };

  if (currentProfile) {
    return (  
      <>
        <h1>Profile</h1>

        <h3
          className='name'
          contentEditable={editing}
          suppressContentEditableWarning={true}
        >
          {currentProfile?.name}
        </h3>

        <p
          className='description'
          contentEditable={editing}
          suppressContentEditableWarning={true}
        >
          {currentProfile?.description}
        </p>
       
        <p style={{color:'red', fontSize:'10px'}} className='msg'></p>
        
        {canEdit && (
          <button onClick={edit}>Edit profile</button>
        )}

        {editing && (
          <button onClick={save}>Save</button>
        )}
      </>
    );
  } else {
    return (
      <h2>Ups! Parece que {slug} no existe!</h2>
    );
  }

}

export { ProfilePage };