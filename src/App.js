import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider, AuthRoute } from './auth';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import { usePosts } from './usePosts';
import { PrivadoPage } from './PrivadoPage';

function App() {
  const {
    blogDataContent,
    editing,
    deletePost,
    editPost,
    savePost,
  } = usePosts();

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
  
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage blogDataContent={blogDataContent} />}>
              <Route path=":slug" element={
                <BlogPost
                  blogDataContent={blogDataContent}
                  editing={editing}
                  deletePost={deletePost}
                  editPost={editPost}
                  savePost={savePost}
                />}
              />
            </Route>

            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />

            <Route
              path="/privado"
              element={
                <AuthRoute>
                  <PrivadoPage />
                </AuthRoute>
              } />
          
            <Route path="*" element={<p>No found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
