import {Observable} from "rxjs";
import {UserModel} from "../../models/user/user.model";
import {PostModel} from "../../models/user/post.model";

export abstract class UserService {

  /**
   * Load Users
   *
   * @return An `Observable` of the UserModel[].
   */
  abstract getUsers(): Observable<UserModel[]>;

  /**
   * Load Users Posts
   *
   * @return An `Observable` of the PostModel[].
   */
  abstract getPosts(): Observable<PostModel[]>

}
