import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MenuComponent } from './menu/menu.component';
import { CrearRutasComponent } from './backend/crear-rutas/crear-rutas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent,MenuComponent,CrearRutasComponent],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFirestoreModule,FormsModule
            
          ,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
            IonicStorageModule.forRoot({
              name: 'mydb',
              driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
            }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
