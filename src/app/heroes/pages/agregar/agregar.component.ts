import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Person } from '../../interfaces/persons.interface';
import { PeopleService } from '../../services/people.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  person: Person = {
    fullname: '',
    birth: '',
    id_mother: null,
    id_father: null
  }

  constructor( private peopleService: PeopleService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.peopleService.getPersonPorId( id ) )
      )
      .subscribe( person => this.person = person );

  }

  guardar() {
    
    if( this.person.fullname.trim().length === 0  ) {
      return;
    }

    if ( !this.person.id ) {
      // Crear
      this.peopleService.agregarPerson( this.person )
        .subscribe( person => {
          this.router.navigate(['/person/listado', person.details.insertId ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarHeroe() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.person
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.peopleService.borrarPerson( this.person.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
            });
        }
        
      }
    )



  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}
