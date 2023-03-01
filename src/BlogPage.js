import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BlogPage({ blogDataContent }) {
  return (
    <>
      <h1>BlogPage</h1>

      <Outlet /> {/* Permite trabajar con nested routes */}

      <ul>
        {blogDataContent.map(post => (
          <BlogLink post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };