import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person, HelperRequest } from '../interfaces/persons.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPeople(): Observable<HelperRequest> {
    return this.http.get<HelperRequest>(`${ this.baseUrl }/people`);
  }

  getPersonPorId( id: string ):Observable<Person> {
    return this.http.get<Person>(`${ this.baseUrl }/people/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Person[]> {
    return this.http.get<Person[]>(`${ this.baseUrl }/people?q=${ termino }&_limit=6`);
  }

  agregarPerson( persona: Person ): Observable<HelperRequest> {
    return this.http.post<HelperRequest>(`${ this.baseUrl }/people`, persona );
  }

  borrarPerson( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/people/${ id }`);
  }

}
