import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-portfolio',
    pathMatch: 'full'
  },
  {
    path: 'user-portfolio',
    loadChildren: () => import('./components/user-portfolio/user-portfolio.module').then(module => module.UserPortfolioModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
