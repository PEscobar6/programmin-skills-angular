import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Person } from '../../interfaces/persons.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  people: Person[] = [];
  personaSeleccionada: Person | undefined;

  constructor( private peopleService: PeopleService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.peopleService.getSugerencias( this.termino.trim() )
      .subscribe( people => this.people = people );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.personaSeleccionada = undefined;
      return;
    }

    const person: Person = event.option.value;
    this.termino = person.fullname;

    this.peopleService.getPersonPorId( person.id! )
      .subscribe( person => this.personaSeleccionada = person );
  }

}
