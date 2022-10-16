import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {UserModel} from "../../models/user/user.model";
import {combineLatest, map, Observable, tap} from "rxjs";
import {PostModel} from "../../models/user/post.model";
import {UserPosts} from "../../models/user/user-posts";

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.scss']
})
export class UserPortfolioComponent implements OnInit {

  usersPosts$: Observable<UserPosts[]> | undefined;
  isLoaded: boolean = false;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.generateUsersPosts();
  }

  generateUsersPosts(): void {
    const users$: Observable<UserModel[]> = this.userService.getUsers();
    const posts$: Observable<PostModel[]> = this.userService.getPosts();
    this.usersPosts$ = combineLatest([users$, posts$]).pipe(
      map(([users, posts]: [UserModel[], PostModel[]]) => {
        return users.reduce((total: UserPosts[], user: UserModel) => {
          const currentUserPosts: PostModel[] = posts.filter((post: PostModel) => user.id === post.userId);
          total.push({
            user: user,
            posts: currentUserPosts
          })
          return total;
        }, []);
      }),
      tap(() => this.isLoaded = true)
    );
  }

  columns = [
    'Username',
    'Email',
    'City',
    'Phone',
    'Website',
    'Company Name',
    'Post Title'
  ]

}
