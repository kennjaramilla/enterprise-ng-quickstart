import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/**
 * The {providedIn: 'root'} argument will load this service lazily
 * by Angular (behind the scenes) and redundant code can be removed
 * automatically. This can lead to a better performance and loading speed
 */
@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  /**
   *  Sample API rest service context URL
   */
  private apiUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  /**
   * Constructs an observable that, when subscribed,
   * causes the configured GET request to execute on the server.
   */
  get(url: string, options?: Record<string, unknown>): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${url}`, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      );
  }

  /**
   * Constructs an observable that, when subscribed,
   * causes the configured POST request to execute on the server.
   * The server responds with the location of the replaced resource.
   */
  post(url: string, body: any, options?: Record<string, unknown>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${url}`, body, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      );
  }

  /**
   * Constructs an observable that, when subscribed,
   * causes the configured PUT request to execute on the server.
   * The PUT method replaces an existing resource with a new set of values.
   */
  put(url: string, body: any, options?: Record<string, unknown>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${url}`, body, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      );
  }

  /**
   * Constructs an observable that, when subscribed,
   * causes the configured PATCH request to execute on the server.
   */
  patch(url: string, body: any, options?: Record<string, unknown>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}${url}`, body, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      );
  }

  /**
   * Constructs an observable that, when subscribed,
   * causes the configured DELETE request to execute on the server.
   */
  delete(url: string, options?: Record<string, unknown>): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${url}`, options)
      .pipe(
        retry(1),
        catchError(this.onError)
      );
  }

  /**
   * Simple error handling solution
   */
  onError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      /**
       * This will get client-side error
       */
      errorMessage = error.error.message;
    } else {
      /**
       * This will get SERVER-side error
       */
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    /**
     * This is a sample implementation only but we can talk
     * about creating standards for error messages later on
     */
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
