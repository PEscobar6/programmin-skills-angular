import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person, HelperRequest } from '../../interfaces/persons.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  personas: Person[] = [];
  
  constructor( private peopleService: PeopleService ) { }

  ngOnInit(): void {
    let personaGet: HelperRequest;
    this.peopleService.getPeople()
      .subscribe( personGet => {
        personaGet = personGet;
        
        this.personas = personaGet.details;
      });
  }

}
