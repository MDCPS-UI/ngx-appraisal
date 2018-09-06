import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AjaxRequest } from './ajax.interface';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

// putting common headers outside the request
const commonHeaders: any = {
  'Content-Type': 'application/json'
};

/**
 * @author: Sai Nagulapally
 */
@Injectable()
export class AjaxService {

  /**
   * @constructor
   * @param: {http<HttpClient>}
   */
  constructor(private http: HttpClient) { }

  /**
   * @GET
   * @public
   * @param: {request<AjaxRequest>}
   * @return {Observable<HttpEvent<T>>}
   */
  public get<T>(request: AjaxRequest): Observable<HttpEvent<T>> {
    // merge the common headers with the request headers
    const httpOptions: any = {
      headers: new HttpHeaders(Object.assign({},
        commonHeaders, (request.headers || {})
      ))
    };

    // construct the request url
    const url: string = request.url + (request.id || '');
    return this.http.get<T>(url, httpOptions);
  }

  /**
   * @PUT
   * @public
   * @param: {request<AjaxRequest>}
   * @return {Observable<T>}
   */
  public put<T>(request: AjaxRequest): Observable<T> {
    // construct the request url
    const url: string = request.url + (request.id || '');
    return this.http.put<T>(url, request.body);
  }

  /**
   * @POST
   * @public
   * @param: {request<AjaxRequest>}
   * @return {Observable<HttpEvent<T>>}
   */
  public post<T>(request: AjaxRequest): Observable<HttpEvent<T>> {
    // merge the common headers with the request headers
    const httpOptions: any = {
      headers: new HttpHeaders(Object.assign({},
        commonHeaders, (request.headers || {})
      ))
    };

    return this.http.post<T>(
      request.url, request.body, httpOptions
    );
  }

  /**
   * @DELETE
   * @public
   * @param: {request<AjaxRequest>}
   * @return {Observable<T>}
   */
  public delete<T>(request: AjaxRequest): Observable<T> {
    // construct the request url
    const url: string = request.url + (request.id || '');
    return this.http.delete<T>(url);
  }

  /**
   * @ALL
   * @public
   * @param: {req<AjaxRequest>}
   * @return {Observable<HttpEvent<T>>}
   */
  public request<T>(req: AjaxRequest): Observable<HttpEvent<T>> {
    return this.http.request<T>(req.method, req.url, req.options);
  }
}
