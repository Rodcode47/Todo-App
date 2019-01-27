import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
//import { TodoListComponent } from './components/todo-list/todo-list.component';

import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  //{path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  //{path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'register', component: RegisterComponent},
  //{path: 'todo', component: TodoOverviewComponent, canActivate:[AuthGuard]},
  //{path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: 'todo', component: TodoOverviewComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, RegisterGuard],
  declarations: []
})
export class AppRoutingModule { }
