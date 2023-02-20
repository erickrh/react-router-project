import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata';
import { useAuth } from './auth';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

  const auth = useAuth();
  const authorityDelete = auth.user?.Isrol?.rol.delete;
  const authorityEdit = auth.user?.Isrol?.rol.write;
  
  // Acepta ruta fija (/blog) o dinámica (/blog/:slug), o incluso -1. Puede usarse también para eventos como por ejemplo si alguien no se ha autenticado a los 30 segundos redireccione a otra ruta.
  const returnToBlog = () => navigate('/blog');


  return (
    <>
      <button onClick={returnToBlog}>Volver al blog</button>
      <h2>{blogpost.title}</h2>
      <code>Author: {blogpost.author}</code>
      <p>{blogpost.content}</p>

      {authorityDelete && (
        <button>Eliminar</button>
      )}

      {authorityEdit && (
        <button>Editar</button>
      )}

    </>
  );
}

export { BlogPost };