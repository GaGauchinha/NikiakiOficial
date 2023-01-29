import { Component } from '@angular/core';
import {Receita} from "../../../../models/receita.model";
import {ReceitaService} from "../../../../services/receita.service";

@Component({
  selector: 'app-registrar-receita',
  templateUrl: './registrar-receita.component.html',
  styleUrls: ['./registrar-receita.component.css']
})
export class RegistrarReceitaComponent {

  receita: Receita = {
    nome: '',
    categoria: '',
    ingredientes: '',
    porcoes:'',
    tempodepreparo:'',
    mododepreparo: '',
  };
  submitted = false;

  constructor(private receitaService: ReceitaService) { }

  ngOnInit(): void {
  }

  saveReceita(): void {
    const data = {
      nome: this.receita.nome,
      categoria: this.receita.categoria,
      ingredientes: this.receita.ingredientes,
      porcoes: this.receita.porcoes,
      tempodepreparo: this.receita.tempodepreparo,
      mododepreparo: this.receita.mododepreparo
    };

    this.receitaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newReceita(): void {
    this.submitted = false;
    this.receita = {
      nome: '',
      categoria: '',
      ingredientes: '',
      porcoes:'',
      tempodepreparo:'',
      mododepreparo:'',
    };
  }
}
