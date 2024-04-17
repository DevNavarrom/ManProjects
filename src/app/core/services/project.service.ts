import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProject } from '../models/project';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL: string = environment.development?.API_URL;

  http = inject(HttpClient);

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  getProjects$(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.URL+'projects', {headers: this.headers}).pipe(
      map((data: IProject[]) => data)
    );
  }

}
