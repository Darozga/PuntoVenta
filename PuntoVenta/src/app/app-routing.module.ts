import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { CheckPrincipalGuard } from './shared/guards/check-principal.guard';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
                        canActivate: [CheckPrincipalGuard]  }, 
                        { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
                        { path: '', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), 
                        canActivate: [CheckLoginGuard] },
                        { path: 'articulos', loadChildren: () => import('./pages/articulos/articulos.module').then(m => m.ArticulosModule), canActivate: [CheckPrincipalGuard] },
                        { path: 'facturacion', loadChildren: () => import('./pages/facturacion/facturacion.module').then(m => m.FacturacionModule),canActivate: [CheckPrincipalGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
