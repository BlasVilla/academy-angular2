import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton}                         from '@angular2-material/button';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';

import {UsageReportChartComponent} from '../usage-report-chart';

import {StatePipe} from '../state.pipe';
import {MemoryPipe} from '../memory.pipe';

import {VirtualMachineService} from '../services/infrastructures/VirtualMachineService';

import {IVirtualMachine} from '../dtos/infrastructures/VirtualMachine';

@Component({
  moduleId: module.id,
  selector: 'app-virtual-machine-details',
  templateUrl: 'virtual-machine-details.component.html',
  styleUrls: ['virtual-machine-details.component.css'],
  directives: [UsageReportChartComponent, MdButton, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  pipes: [StatePipe, MemoryPipe],
  providers: [MdIconRegistry]
})
export class VirtualMachineDetailsComponent 
  implements OnInit {
  private _vmService: VirtualMachineService;
  private _router: Router;
  private _route: ActivatedRoute;

  private _vmId: string;

  private _vm: IVirtualMachine;
  public get vm(): IVirtualMachine {
    return this._vm;
  }

  constructor(vmService: VirtualMachineService, route: ActivatedRoute, router: Router) { 
    this._vmService = vmService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._vmId = params['vmId'];

      this.retrieveVm();
    });
  }
  
  private retrieveVm(): void {
    this._vmService.getItemById(this._vmId).subscribe(vm => {
      this._vm = vm;
    });
  }
}
