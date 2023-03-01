import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';

function BlogPost(props) {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const auth = useAuth();
  const blogpost = props.blogDataContent.find(post => post.slug === slug);

  const authorityDelete = auth.user?.Isrol?.rol.delete;
  const authorityEdit = auth.user?.Isrol?.rol.write;
  
  // Acepta ruta fija (/blog) o dinámica (/blog/:slug), o incluso -1. Puede usarse también para eventos como por ejemplo si alguien no se ha autenticado a los 30 segundos redireccione a otra ruta.
  const returnToBlog = () => navigate('/blog');

  const deletePost = slug => {
    props.deletePost(slug);
    returnToBlog();
  };

  const savePost = slug => {
    props.savePost(slug);
    navigate(`/blog/${document.querySelector('.postTitle')?.innerText.replace(/[\s?]+/g, '-').toLowerCase()}`);
  };


  return (
    <>
      <button onClick={returnToBlog}>Volver al blog</button>

      <h2
        className='postTitle' 
        contentEditable={props.editing}
        suppressContentEditableWarning={true}
      >
        {blogpost?.title}
      </h2>

      <code
        className='postAuthor'
        contentEditable={props.editing}
        suppressContentEditableWarning={true}
      >
        {blogpost?.author}
      </code>

      <p
        className='postContent'
        contentEditable={props.editing}
        suppressContentEditableWarning={true}
      >
        {blogpost?.content}
      </p>

      <p style={{color:'red', fontSize:'10px'}} id="msg"></p>

      {authorityDelete && (
        <button onClick={() => deletePost(slug)}>Eliminar</button>
      )}

      {authorityEdit && (
        <button onClick={props.editPost}>Editar</button>
      )}

      {props.editing && (
        <button onClick={() => savePost(slug)}>Save</button>
      )}

    </>
  );
}

export { BlogPost };