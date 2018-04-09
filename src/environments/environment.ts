// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyADFGmQVtuAnMVfqXhw2u4oCV1KC2PObn4',
    authDomain: 'todo-full-app-42d5c.firebaseapp.com',
    databaseURL: 'https://todo-full-app-42d5c.firebaseio.com',
    projectId: 'todo-full-app-42d5c',
    storageBucket: 'todo-full-app-42d5c.appspot.com',
    messagingSenderId: '245569689413'
  }
};
