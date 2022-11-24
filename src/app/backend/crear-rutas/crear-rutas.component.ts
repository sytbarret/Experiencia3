import { Component, OnInit } from '@angular/core';
import { LoadingController, PopoverController } from '@ionic/angular';
import { MenuComponent } from 'src/app/menu/menu.component';
import { RutasI, UserI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.scss'],
})
export class CrearRutasComponent implements OnInit {

  usuarios: UserI[] = [];

  data: RutasI = {
    conductor:{
      nombre:'',
      patente:''
  },
  rutas:{
      avenida1: '',
      avenida2: '',
      avenida3: ''
  },
  avenidaOpcional1:'',
  avenidaOpcional2:'',
  id: '',
  }

  constructor(private firestore: FirestoreService , private interaction : InteractionService,
              private loadingController: LoadingController, 
              private popoverController: PopoverController,) { }

  ngOnInit() {
    console.log('Sitio para crear rutas');
    this.getRutas();
  }

  async openMenu(ev: any){
    console.log('abrir menú');
    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: true,
      event: ev
    });

    await menu.present();
  }

  crearRuta(){

  
    this.interaction.showLoading('Creando..')

    const path = 'Rutas';
    const id = this.firestore.getId();
    this.data.id=id;
    this.firestore.createDoc(this.data,path, id).then((res)=>{
      console.log('Ruta creada exitosa');
      this.interaction.presentToast2('bottom','Ruta creada')
    })
    
  }
  getRutas(){
    this.firestore.getCollection2<UserI>('Usuarios').subscribe(res=>{
      console.log('Lectura a la base de datos', res);
      this.usuarios = res;
    })
  }

}
