import {UserService} from "./user.service";
import {map, Observable, switchMap} from "rxjs";
import {PostModel} from "../../models/user/post.model";
import {UserModel} from "../../models/user/user.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PropertiesService} from "../properties/properties.service";

@Injectable({
  providedIn: 'root',
})
export class UserImplService extends UserService {
  private static readonly USERS_URL_KEY: string = 'get-users-url';
  private static readonly POSTS_URL_KEY: string = 'get-posts-url';

  constructor(private http: HttpClient,
              private propertiesService: PropertiesService) {
    super();
  }

  getUsers(): Observable<UserModel[]> {
    return this.propertiesService.getProperty<string>(UserImplService.USERS_URL_KEY).pipe(
      switchMap((url: string) => this.http.get<UserModel[]>(url))
    )
  }


  getPosts(): Observable<PostModel[]> {
    return this.propertiesService.getProperty<string>(UserImplService.POSTS_URL_KEY).pipe(
      switchMap((url: string) => this.http.get<PostModel[]>(url))
    )
  }


}
