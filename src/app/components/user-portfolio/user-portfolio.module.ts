import {NgModule} from "@angular/core";
import {UserPortfolioComponent} from "./user-portfolio.component";
import {UserImplService} from "../../services/user/user-impl.service";
import {UserService} from "../../services/user/user.service";
import {UserPortfolioRoutingModule} from "./user-portfolio-routing.module";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PropertiesService} from "../../services/properties/properties.service";
import {PropertiesDemoService} from "../../services/properties/properties-demo.service";
import { UserPostsComponent } from './user-posts/user-posts.component';

@NgModule({
  imports: [
    UserPortfolioRoutingModule,
    NgForOf,
    AsyncPipe,
    NgIf
  ],
  declarations:[
    UserPortfolioComponent,
    UserPostsComponent
  ],
  providers: [
    {
      provide: UserService, useClass: UserImplService
    },
    {
      provide: PropertiesService, useClass: PropertiesDemoService
    }
  ]
})
export class UserPortfolioModule {}
