import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PeopleService } from '../../services/people.service';
import { Person } from '../../interfaces/persons.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class PersonComponent implements OnInit {

  person!: Person;

  constructor( private activatedRoute: ActivatedRoute,
               private peopleService: PeopleService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.peopleService.getPersonPorId(id) )
      )
      .subscribe( person => this.person = person );

  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
