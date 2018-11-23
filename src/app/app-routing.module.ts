import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EduComponent } from './edu/edu.component';
import { EduSearchComponent } from './edu-search/edu-search.component';
import { EduListComponent } from './edu-list/edu-list.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {
    path:'edu', 
    component:EduComponent,
    children:[
      {path:'', redirectTo:'search', pathMatch: 'full' },
      {path:'search', component: EduSearchComponent},
      {path:'list', component:EduListComponent}
    ]
  },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
