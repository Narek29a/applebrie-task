import {UserModel} from "./user.model";
import {PostModel} from "./post.model";

export interface UserPosts {
  user: UserModel;
  posts: PostModel[];
}
