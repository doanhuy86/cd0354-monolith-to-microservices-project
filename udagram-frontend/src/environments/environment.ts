// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://a226e529e0fce47ec9bdf913eab2c769-160611152.us-east-1.elb.amazonaws.com:8080/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file apiHost: 'http://a141d11078ba743d9a288aa0481c422c-1842277229.us-east-1.elb.amazonaws.com:8080/api/v0'
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
