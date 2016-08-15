import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {AppComponent, environment} from './app/';

import {ClusterService} from './app/services/infrastructures/ClusterService';
import {HostService} from './app/services/infrastructures/HostService';
import {VirtualMachineService} from './app/services/infrastructures/VirtualMachineService';
import {UsageReportFactory} from './app/services/infrastructures/UsageReportFactory';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
  [
    HTTP_PROVIDERS, 
    APP_ROUTER_PROVIDERS,
    ClusterService,
    HostService,
    VirtualMachineService,
    UsageReportFactory,
    disableDeprecatedForms(), 
    provideForms()
    ]);
