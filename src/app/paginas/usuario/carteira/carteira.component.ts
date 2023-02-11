import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import Swal from 'sweetalert2';
import {PilacoinService} from "../../../services/pilacoin-service.service";

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  pilacoins?: any[] ;
  mineracaoButtonText: string = "Iniciar Mineração";
  minerando = false;
  pilacoinCount = 0;
  refreshCounter = false;

  paginationId = 'pilaCoinPagination';
  paginationConfig: PaginationInstance = {
    id: this.paginationId,
    itemsPerPage: 6,
    currentPage: 1
  };

  constructor(
    private pilacoinService: PilacoinService
  ) { }

  ngOnInit(): void {
    this.getPilaCoins();
    setInterval(() => {
      if (this.minerando) {
         this.refreshPilaCoinsConstantly();
      }
    }, 1000);
  }

  getPilaCoins(): void {
    this.pilacoinService.getAll().subscribe({
      next: (data: any[] ) => {
        this.pilacoins = data;
        console.log(data);
        this.pilacoinCount = data.length;
        console.log(data.length);
      },
      error: (e: any) => console.error(e)
    });
  }

  refreshPilaCoinsConstantly() {
    this.pilacoins = undefined;
    this.getPilaCoins();
    console.log(this.pilacoinCount);
  }

  refreshPilaCoins() {
    this.pilacoins = undefined;
    this.getPilaCoins();
    console.log(this.pilacoinCount);
    const Toast = Swal.mixin({
      width: '100px',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      background: '#5F007E',
      color:'white',
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: ''
    })
  }

  minerar(): void {
    this.minerando = !this.minerando;
    this.mineracaoButtonText = this.minerando ? '❌Parar Mineração❌' : '❗Iniciar Mineração❗';
    this.pilacoinService.minerar(this.minerando).subscribe({
      next: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background: '#5F007E',
          color:'white',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          background: '#5F007E',
          color:'white',
          icon: 'success',
          title: this.mineracaoButtonText === 'Parar Mineração' ? '💫Iniciou!💫' : '💢Parou!💢'
        })
      },
      error: (e: any) => console.error(e)
    });
  }

}

