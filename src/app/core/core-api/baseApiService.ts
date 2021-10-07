// https://medium.com/@mohammedalrowad/creating-a-generic-http-service-in-angular-7c8169abe863
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { correctFormatForQueryUrl } from '../utils';

@Injectable({ providedIn: 'root' })
export class BaseApiService implements RestApiMethods {
  private readonly END_POINT: string;
  constructor(private http: HttpClient) {
    this.END_POINT = 'https://jsonplaceholder.typicode.com';
  }

  // Post or Patch methods
  postOrPatch<returnType>(
    route: string,
    data: any,
    id: number | null = null,
    method: 'post' | 'patch' = 'post',
    qp: QueryParams = {}
  ): Observable<returnType> {
    const cfqu = correctFormatForQueryUrl(qp);
    return this.http[method](
      `${this.END_POINT}/${route}${id ? '/' + id : ''}${cfqu}`,
      data
    ) as Observable<returnType>;
  }

  // Remove or GetOne or Get All methods
  getOrRemove<returnType>(
    id: string | number,
    route: string,
    qp: QueryParams = {},
    method: 'get' | 'delete' = 'get'
  ): Observable<returnType> {
    const cfqu = correctFormatForQueryUrl(qp);
    return this.http[method](
      `${this.END_POINT}/${route}${id ? '/' + id : ''}${cfqu}`
    ) as Observable<returnType>;
  }

  handleError(error: any): void {
    throw new Error('Method not implemented.');
  }
}

interface RestApiMethods {
  postOrPatch<returnType>(
    route: string,
    data: any,
    id: number | null,
    method: 'post' | 'patch',
    qp: QueryParams
  ): Observable<returnType>;

  getOrRemove<returnType>(
    id: string | number,
    route: string,
    qp: QueryParams,
    method: 'get' | 'delete'
  ): Observable<returnType>;

  handleError(error: any): void;
}
