// utils/googleAuth.js
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session' 
import { useEffect } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebase/config';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = (onLogin) => {
    const redirectUri = AuthSession.makeRedirectUri({ 
        useProxy: true,
        native: 'OAuth:/oauth'
    });
    
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '693688161012-t15575uvbm5na7klnh6b841c65r5h4ue.apps.googleusercontent.com',
    webClientId: '693688161012-s11mgauqb9l884ba8313c7a0jjtil41o.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    redirectUri
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          if (onLogin) onLogin(); // callback after login
        })
        .catch((error) => {
          console.error('Firebase sign in error', error);
        });
    }
  }, [response]);

  console.log(AuthSession.makeRedirectUri({ useProxy: true }))

  return {
    request,
    promptAsync,
  };
};
