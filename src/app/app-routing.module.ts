import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemarioComponent } from './pages/temario/temario.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'temario', component: TemarioComponent, data: { titulo: 'Temario' }  },
  { path: 'home', component: HomeComponent, data: { titulo: 'Home' }  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {  }