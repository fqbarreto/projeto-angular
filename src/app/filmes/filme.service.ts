import { Injectable } from '@angular/core';
import { Filme } from './filme.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
var gid = 3;
@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private filmesUrl = 'api/filmes/';
  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.filmesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createFilme(filme: Filme): Observable<Filme> {
    gid = gid + 1;
    filme.id = gid;
    return this.http.post<Filme>(this.filmesUrl, filme).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editFilme(filme: Filme): Observable<any> {
    return this.http.put(this.filmesUrl + filme.id, filme);
  }

  deleteFilme(id: number): Observable<any> {
    return this.http.delete(this.filmesUrl + id);
  }
}