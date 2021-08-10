import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from './cadastro/cadastro.page';
import { PagarPage } from './pagar/pagar.page';
import { ReceberPage } from './receber/receber.page';
import { RelatorioPage } from './relatorio/relatorio.page';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'pagar', component: PagarPage,
      },
      {
        path: 'receber', component: ReceberPage,
      },
      {
        path: 'cadastro', component: CadastroPage,
      },
      {
        path: 'relatorio', component: RelatorioPage,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagarPage,
    ReceberPage,
    CadastroPage,
    RelatorioPage
  ],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
