// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBcF0reQTPQhR_pRS3nnyP_V8R6y7apQuQ',
    authDomain: 'fir-demo-eef0f.firebaseapp.com',
    databaseURL: 'https://fir-demo-eef0f.firebaseio.com',
    projectId: 'fir-demo-eef0f',
    storageBucket: 'fir-demo-eef0f.appspot.com',
    messagingSenderId: '454728288838'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
