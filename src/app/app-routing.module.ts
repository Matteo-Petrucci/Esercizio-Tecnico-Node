import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaArticoloComponent } from './pages/crea-articolo/crea-articolo.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'crea-articolo',
    component: CreaArticoloComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
