import {Observable} from "rxjs";

export abstract class PropertiesService {

  /**
   * Get property by key
   *
   * @param key The property key.
   *
   * @return An `Observable` of the property.
   */
  abstract getProperty<T>(key: string): Observable<T>;
}
