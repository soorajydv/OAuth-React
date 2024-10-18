import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up the authentication listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    // Clean up the listener on component unmount
    return () => {
      if (authListener) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);
  

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, loginWithGoogle, logout };
};
