import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton}                         from '@angular2-material/button';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';

import {ClusterService} from '../services/infrastructures/ClusterService';
import {HostService} from '../services/infrastructures/HostService';

import {ICluster} from '../dtos/infrastructures/Cluster';
import {IHost} from '../dtos/infrastructures/Host';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-details',
  templateUrl: 'cluster-details.component.html',
  styleUrls: ['cluster-details.component.css'],
  directives: [MdButton, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class ClusterDetailsComponent implements OnInit {
  private _clusterService: ClusterService;
  private _hostService: HostService;
  private _router: Router;
  private _route: ActivatedRoute;

  private _clusterId: string;

  private _cluster: ICluster;
  public get cluster(): ICluster {
    return this._cluster;
  }

  private _hosts$: Observable<IHost[]>;
  public get hosts$(): Observable<IHost[]> {
    return this._hosts$;
  }

  constructor(clusterService: ClusterService, hostService: HostService, route: ActivatedRoute, router: Router) { 
    this._clusterService = clusterService;
    this._hostService = hostService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._clusterId = params['clusterId'];

      this.retrieveCluster();
    });
  }

  public navToHost(host: IHost): void {
    this._router.navigateByUrl(`hosts/${host.hostId}`);
  }
  
  private retrieveCluster(): void {
    this._clusterService.getItemById(this._clusterId).subscribe(cluster => {
      this._cluster = cluster;

      this.retrieveHosts();
    });
  }

  private retrieveHosts(): void {
    this._hosts$ = this._hostService.getItemsById(this._cluster.hostIds.map(id => id.toString()));
  }
}
