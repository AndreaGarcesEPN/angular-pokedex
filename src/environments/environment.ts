// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: "AIzaSyC4PSHklv3Ah52IrbLt6eYnD5PHQdiJ5MM",
    authDomain: "pokemon-pokedex-eb023.firebaseapp.com",
    projectId: "pokemon-pokedex-eb023",
    storageBucket: "pokemon-pokedex-eb023.appspot.com",
    messagingSenderId: "987063196629",
    appId: "1:987063196629:web:d3608e046eedd631b93b5c",
    measurementId: "G-R4Z1R8FSXX"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
