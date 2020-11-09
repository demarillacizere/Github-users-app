import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repository', component: ReposComponent},
  { path: 'user/:users.name', component: UserDetailsComponent },
  { path: '', redirectTo:"/user", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
