// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
//
import App from './App';
import { AuthProvider } from './contexts/JWTContext';
// Components
import { GoogleOAuthProvider } from '@react-oauth/google';

// ----------------------------------------------------------------------

ReactDOM.render(
  <GoogleOAuthProvider clientId="764758912941-5n0l0pfih1urfgd2i2kkrhtjbaoufe6v.apps.googleusercontent.com">
    <AuthProvider>
      <HelmetProvider>
        <SettingsProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CollapseDrawerProvider>
        </SettingsProvider>
      </HelmetProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
  ,
  document.getElementById('root')
);
