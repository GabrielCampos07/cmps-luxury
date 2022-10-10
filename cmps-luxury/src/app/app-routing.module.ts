import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './core/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
