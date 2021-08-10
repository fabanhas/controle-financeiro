import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {
  listaContas;
  contasForm: FormGroup;

  constructor(
    private builder : FormBuilder,
    private nav : NavController,
    private service : ContaService
  ) { }

  ngOnInit() {
    this.service.lista('pagar').subscribe(x => this.listaContas = x);
  }

  remove(conta){
    this.service.remove(conta);
  }
}
