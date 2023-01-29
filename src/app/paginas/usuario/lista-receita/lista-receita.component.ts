import { Component } from '@angular/core';
import {Receita} from "../../../models/receita.model";
import {ReceitaService} from "../../../services/receita.service";

@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.css']
})
export class ListaReceitaComponent {

  receita?: Receita[];
  currentReceita: Receita = {};
  currentIndex = -1;
  nome = '';

  constructor(private receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.retrieveReceita();
  }

  retrieveReceita(): void {
    this.receitaService.getAll()
      .subscribe({
        next: (data) => {
          this.receita = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveReceita();
    this.currentReceita = {};
    this.currentIndex = -1;
  }

  setActiveReceita(receita: Receita, index: number): void {
    this.currentReceita = receita;
    this.currentIndex = index;
  }

  removeAllReceitas(): void {
    this.receitaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNome(): void {
    this.currentReceita = {};
    this.currentIndex = -1;

    this.receitaService.findByNome(this.nome)
      .subscribe({
        next: (data) => {
          this.receita = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
