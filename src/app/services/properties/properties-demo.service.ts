import {PropertiesService} from "./properties.service";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PropertiesDemoService extends PropertiesService {
  private static readonly PROPERTIES_URL: string = '/assets/config/properties.json';

  constructor(private http: HttpClient) {
    super();
  }
  getProperty<T>(key: string): Observable<T> {
    return this.http.get(PropertiesDemoService.PROPERTIES_URL).pipe(
      map((response: object) => response[key as keyof object])
    );
  }
}
