import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

  const auth = useAuth();
  const canDelete = auth.user?.isAdmin || (blogpost.author === auth.user?.username);
  const canEdit = auth.user?.isEditor;
  const canTest = auth.user?.isTester;
  
  // Acepta ruta fija (/blog) o dinamica (/blog/:slug), o incluso -1. Puede usarse también para eventos como por ejemplo si alguien no se ha autenticado a los 30 segundos redireccione a otra ruta.
  const returnToBlog = () => navigate('/blog');


  return (
    <>
      <button onClick={returnToBlog}>Volver al blog</button>
      <h2>{blogpost.title}</h2>
      <code>Author: {blogpost.author}</code>
      <p>{blogpost.content}</p>

      {canDelete && (
        <>
          <button>Eliminar</button>
          <button>Editar</button>
        </>
      )}

      {canEdit && (
        <button>Editar</button>
      )}

      {canTest && (
        <button>Testear</button>
      )}

    </>
  );
};

export { BlogPost };