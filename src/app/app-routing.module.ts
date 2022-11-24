import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrearRutasComponent } from './backend/crear-rutas/crear-rutas.component';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./pages/comentarios/comentarios.module').then( m => m.ComentariosPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'crear-rutas', component: CrearRutasComponent,
    //canActivate: [NoIngresadoGuard]
    
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'ver-rutas',
    loadChildren: () => import('./pages/ver-rutas/ver-rutas.module').then( m => m.VerRutasPageModule),
    //canActivate: [NoIngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
