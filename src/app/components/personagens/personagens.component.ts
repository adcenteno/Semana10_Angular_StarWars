import { Component, OnInit } from '@angular/core';
import { PersonagensService } from '../../services/personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {
  personagens: any = [];
  constructor(pS:PersonagensService) {    
    //this.personagens = pS.getTodos();
    pS.getTodos().subscribe(personagens => this.personagens = personagens['results']);
  }
  ngOnInit(): void {
  }
}