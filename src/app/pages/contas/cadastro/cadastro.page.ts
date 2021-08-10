import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  contasForm: FormGroup;

  constructor(
    private builder : FormBuilder,
    private nav : NavController,
    private service : ContaService,
    private toast : ToastController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.contasForm = this.builder.group({
      valor : ['', [Validators.min(0.01), Validators.required]],
      parceiro : ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(6)]],
      tipo : ['',[Validators.required]]
    })
  }

  registrarConta(){
    const conta = this.contasForm.value;
    this.service.registrarConta(conta)
    .then(() => this.presentToast());
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Conta salva.',
        duration: 2000
    });
    toast.present();
  }

}
