import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: 'layout', pathMatch: 'full'},
  {path: 'layout', component: LayoutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'layout', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {

}
