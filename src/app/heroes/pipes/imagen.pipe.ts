import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/persons.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( person: Person ): string {

    if( !person.id && !person.alt_img ) {
      return 'assets/no-image.png';
    } else if ( person.alt_img ) {
      return person.alt_img;
    } else {
      return `assets/persons/${ person.id }.jpg`;
    }


  }

}
