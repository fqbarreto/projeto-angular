import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilmesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FilmesListComponent]
})
export class FilmesModule { }
