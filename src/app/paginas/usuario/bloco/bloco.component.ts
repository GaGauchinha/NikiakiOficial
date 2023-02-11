import { Component } from '@angular/core';
import {PaginationInstance} from "ngx-pagination";
import {PilacoinService} from "../../../services/pilacoin-service.service";
import Swal from "sweetalert2";
import {BlocoService} from "../../../services/bloco.service";

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.css']
})
export class BlocoComponent {

  blocos?: any[] ;
  refreshCounter = false;

  constructor(
    private blocoService: BlocoService
  ) { }


  getBlocos(): void {
    this.blocoService.getAll().subscribe({
      next: (data: any[] ) => {
        this.blocos = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });
  }

}
