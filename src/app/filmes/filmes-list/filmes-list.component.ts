import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme.model"
import { FilmeService } from "../filme.service"

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.css']
})
export class FilmesListComponent implements OnInit {
  filme = {
    name: '',
    id: 0
  }
  edit = true;
  add = false;
  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.getFilmes()
  }
  private getFilmes() {
    this.filmeService.getFilmes().subscribe(filmes => this.filmes = filmes);
  }

  addFilme() {
    const data = {
      name: this.filme.name,
      id: this.filme.id
    };
    this.filmeService.createFilme(data).subscribe(response => {
      console.log(response)
      this.getFilmes();
    });
  }

  setFilmeEdit(filme: Filme) {
    this.filme.name = filme.name;
    this.filme.id = filme.id;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.filme.name = "";
    this.filme.id = 0;
    this.edit = true;
    this.add = false;
  }

  removeFilme(filme: Filme) {
    const id = filme.id;
    console.log(filme)
    this.filmeService.deleteFilme(id).subscribe(filme => console.log(filme));
    this.getFilmes()
  }

  updateFilme(){
    this.filmeService.editFilme(this.filme).subscribe(response => console.log(response));
    this.getFilmes()
    this.resetValues()
  }

}
