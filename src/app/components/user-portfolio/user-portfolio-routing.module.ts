import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserPortfolioComponent} from "./user-portfolio.component";
import {UserPostsComponent} from "./user-posts/user-posts.component";

const routes: Routes = [
  {
    path: '',
    component: UserPortfolioComponent
  },
  {
    path:'user-posts/:id',
    component: UserPostsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPortfolioRoutingModule {
}
