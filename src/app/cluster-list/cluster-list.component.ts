import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {MdButton}                         from '@angular2-material/button';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';

import {ClusterService} from '../services/infrastructures/ClusterService';

import {ICluster} from '../dtos/infrastructures/Cluster';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-list',
  templateUrl: 'cluster-list.component.html',
  styleUrls: ['cluster-list.component.css'],
  directives: [MdButton, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class ClusterListComponent implements OnInit {

  private _service: ClusterService;

  private _router: Router;

  private _clusters$: Observable<ICluster[]>;

  public get clusters$(): Observable<ICluster[]> {
    return this._clusters$;
  }

  constructor(service: ClusterService, router: Router) { 
    this._service = service;
    this._router = router;
  }

  ngOnInit() {
    this._clusters$ = this._service.getAllItems();
  }

  navToCluster(cluster: ICluster): void {
    this._router.navigateByUrl(`clusters/${cluster.clusterId}`);
  }
}
