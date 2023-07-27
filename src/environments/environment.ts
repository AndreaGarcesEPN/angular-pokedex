// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyBP6i0xinmSjR3btGkH8imBEICKl1LxXGg',
    authDomain: 'pokemon-pokedex-780ad.firebaseapp.com',
    projectId: 'pokemon-pokedex-780ad',
    storageBucket: 'pokemon-pokedex-780ad.appspot.com',
    messagingSenderId: '334509035000',
    appId: '1:334509035000:web:727b51692aeda3fa03da0d',
    measurementId: 'G-XLV4ZRT6J8',
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
