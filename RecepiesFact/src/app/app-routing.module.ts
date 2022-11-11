import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRecettesComponent } from './composant/page-recettes/page-recettes.component';

const routes: Routes = [
  {path : "recettes", component : PageRecettesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

