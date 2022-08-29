// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_MAIN = '/principal';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected')
};

export const PATH_MAIN = {
  root: ROOTS_MAIN,
  teacher: {
    schedule: path(ROOTS_MAIN, '/horario'),
    course: path(ROOTS_MAIN, '/curso'),
    volume: path(ROOTS_MAIN, '/tomo')
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
