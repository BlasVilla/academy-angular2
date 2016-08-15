import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton}                         from '@angular2-material/button';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';

import {StatePipe} from '../state.pipe';
import {MemoryPipe} from '../memory.pipe';

import {HostService} from '../services/infrastructures/HostService';
import {VirtualMachineService} from '../services/infrastructures/VirtualMachineService';

import {IHost} from '../dtos/infrastructures/Host';
import {IVirtualMachine} from '../dtos/infrastructures/VirtualMachine';

@Component({
  moduleId: module.id,
  selector: 'app-host-details',
  templateUrl: 'host-details.component.html',
  styleUrls: ['host-details.component.css'],
  directives: [MdButton, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  pipes: [StatePipe, MemoryPipe],
  providers: [MdIconRegistry]
})
export class HostDetailsComponent implements OnInit {
  private _hostService: HostService;
  private _vmService: VirtualMachineService;
  private _router: Router;
  private _route: ActivatedRoute;

  private _hostId: string;

  private _host: IHost;
  public get host(): IHost {
    return this._host;
  }

  private _vms$: Observable<IVirtualMachine[]>;
  public get vms$(): Observable<IVirtualMachine[]> {
    return this._vms$;
  }

  constructor(hostService: HostService, vmService: VirtualMachineService, route: ActivatedRoute, router: Router) { 
    this._hostService = hostService;
    this._vmService = vmService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._hostId = params['hostId'];

      this.retrieveHost();
    });
  }

  public navToVm(vm: IVirtualMachine): void {
    this._router.navigateByUrl(`virtualmachines/${vm.virtualMachineId}`);
  }
  
  private retrieveHost(): void {
    this._hostService.getItemById(this._hostId).subscribe(host => {
      this._host = host;

      this.retrieveVms();
    });
  }

  private retrieveVms(): void {
    this._vms$ = this._vmService.getItemsById(this._host.virtualMachineIds.map(id => id.toString()));
  }
}
