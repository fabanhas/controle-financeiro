import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
})
export class ReceberPage implements OnInit {
  listaContas;

  constructor(
    private builder : FormBuilder,
    private nav : NavController,
    private service : ContaService
  ) { }

  ngOnInit() {
    this.service.lista('receber').subscribe(x => this.listaContas = x);
  }
  remove(conta){
    this.service.remove(conta);
  }
}
