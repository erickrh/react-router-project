import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  try {
    if (auth.user.username) {
      return (
        <>
          <h1>Profile</h1>
          <p>Welcome, {auth.user.username}</p>
        </>
      );
    }
  } catch (e) {
    return (
      <>
        <h1>Por favor, inicia sesión.</h1>
      </>
      );
  } 
}

export { ProfilePage };