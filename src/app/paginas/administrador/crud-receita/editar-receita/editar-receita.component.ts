import {Component, Input} from '@angular/core';
import {Receita} from "../../../../models/receita.model";
import {ReceitaService} from "../../../../services/receita.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent {

  @Input() viewMode = false;

  @Input() currentReceita: Receita = {
      nome: '',
      categoria: '',
      ingredientes: '',
      porcoes:'',
      tempodepreparo:'',
      mododepreparo:'',
  };

  message = '';

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getReceita(this.route.snapshot.params["id"]);
    }
  }

  getReceita(id: string): void {
    this.receitaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentReceita = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateReceita(): void {
    this.message = '';

    this.receitaService.update(this.currentReceita.id, this.currentReceita)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Receita alterada com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteReceita(): void {
    this.receitaService.delete(this.currentReceita.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/lista-receita']);
        },
        error: (e) => console.error(e)
      });
  }

}
