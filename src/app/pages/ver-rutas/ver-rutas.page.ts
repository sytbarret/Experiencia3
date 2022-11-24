import { Component, OnInit } from '@angular/core';
import { RutasI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ver-rutas',
  templateUrl: './ver-rutas.page.html',
  styleUrls: ['./ver-rutas.page.scss'],
})
export class VerRutasPage implements OnInit {

rutas: RutasI[] = [];

  constructor(private firestore :FirestoreService) { 

  }

  ngOnInit() {
    this.getRutas();
  }

  getRutas(){
    this.firestore.getCollection2<RutasI>('Rutas').subscribe(res=>{
      console.log('Lectura a la base de datos', res);
      this.rutas = res;
    })
  }

}
