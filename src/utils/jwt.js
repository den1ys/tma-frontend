import jwtDecode from 'jwt-decode';
// routes
import { PATH_AUTH } from '../routes/paths';
//
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (access_token) => {
  if (!access_token) {
    return false;
  }
  const decoded = jwtDecode(access_token);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('Token expired');

    localStorage.removeItem('access_token');

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (access_token) => {
  if (access_token) {
    localStorage.setItem('access_token', access_token);
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(access_token); // ~5 days by minimals server
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('materiales');
    localStorage.removeItem('access_token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
