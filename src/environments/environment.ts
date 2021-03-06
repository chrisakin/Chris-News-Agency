// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Link to get the articles
  articlesUrl: 'http://newsapi.org/v2/everything?q=Apple&from=2020-10-17&sortBy=popularity&apiKey=dfb051d3aafa454c9161803e895013a8',
  articleUrl: 'http://newsapi.org/v2/everything?q=Apple&from=2020-10-17&sortBy=popularity&apiKey=dfb051d3aafa454c9161803e895013a8',

  // Firebase Config
  firebaseConfig:  {
    apiKey: "AIzaSyD9PqokeN8Noabzg-ibDQFWCIJ_lCbVUec",
    authDomain: "chris-newsagency.firebaseapp.com",
    databaseURL: "https://chris-newsagency.firebaseio.com",
    projectId: "chris-newsagency",
    storageBucket: "chris-newsagency.appspot.com",
    messagingSenderId: "340971788908",
    appId: "1:340971788908:web:17337b1d9108f05a401649",
    measurementId: "G-TNKPWFLGN4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
