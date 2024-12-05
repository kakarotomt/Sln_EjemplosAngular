import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'users', component: UserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
