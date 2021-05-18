import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/* The {providedIn: 'root'} argument will load this service lazily
 * by Angular (behind the scenes) and redundant code can be removed
 * automatically. This can lead to a better performance and loading speed
*/
@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  // Sample API rest service context URL
  private apiUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  get(url: string, options?: {}): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      )
  }



  onError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // This will get client-side error
      errorMessage = error.error.message;
    } else {
      // This will get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    /* This is a sample implementation only but we can talk
     * about creating standards for error messages later on
    */
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}