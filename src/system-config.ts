// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-charts': 'vendor/ng2-charts'
};

/** User packages configuration. */
const packages: any = {
};

// put the names of any of your Material components here
const materialPkgs: string[] = [
  'core',
  'button',
  'card',
  'checkbox',
  'grid-list',
  'icon',
  'input',
  'list',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slide-toggle',
  'tabs',
  'toolbar'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

packages['ng2-charts'] = {defaultExtensions: 'js'};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'symbol-observable',

  // App specific barrels.
  'app',
  'app/shared',
  'app/test-material',
  'app/test1',
  'app/test2',
  'app/welcome-page',
  'app/chart-demo',
  'app/bar-chart',
  'app/usage-report',
  'app/virtual-machine-details',
  'app/charts-demo',
  'app/cluster-list',
  'app/cluster-details',
  'app/host-details',
  'app/usage-report-chart',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'symbol-observable': 'vendor/symbol-observable',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
