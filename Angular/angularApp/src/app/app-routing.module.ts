import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserViewComponent } from './components/user-view/user-view.component';


const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'child', component: ChildComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user-edit/:id', component: UserEditComponent},
  { path: 'user-view/:id', component: UserViewComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
