import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces/persons.interface';

@Component({
  selector: 'app-person-tarjeta',
  templateUrl: './person-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class PersonTarjetaComponent{

  @Input() person!: Person;

}
