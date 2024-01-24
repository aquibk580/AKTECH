import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from '../App.js';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-551bm1z4qxcqvsql.us.auth0.com"
    clientId="z5wwmb1ktgLmTL6YifW3P6u2pRiIOrPB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);