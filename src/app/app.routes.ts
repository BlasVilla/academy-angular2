import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ChartsDemoComponent} from './charts-demo/charts-demo.component';
import {ClusterListComponent} from './cluster-list/cluster-list.component';
import {ClusterDetailsComponent} from './cluster-details/cluster-details.component';
import {HostDetailsComponent} from './host-details/host-details.component';
import {VirtualMachineDetailsComponent} from './virtual-machine-details/virtual-machine-details.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'chartsdemo', component: ChartsDemoComponent },
  { path: 'clusters', component: ClusterListComponent },
  { path: 'clusters/:clusterId', component: ClusterDetailsComponent },
  { path: 'hosts/:hostId', component: HostDetailsComponent },
  { path: 'virtualmachines/:vmId', component: VirtualMachineDetailsComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];