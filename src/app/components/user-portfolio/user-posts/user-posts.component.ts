import {Component, OnInit} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {PostModel} from "../../../models/user/post.model";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  posts$: Observable<PostModel[]> | undefined;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(): void {
    this.posts$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.userService.getPosts().pipe(
          map((posts: PostModel[]) => {
            return posts.filter((post: PostModel) => post.userId == params['id']);
          })
        );
      })
    );
  }

}
