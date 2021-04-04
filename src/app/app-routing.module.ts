import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsdescriptionComponent } from './shared/songsdescription/songsdescription.component';



const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./main/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'description/:event', 
    component: SongsdescriptionComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
