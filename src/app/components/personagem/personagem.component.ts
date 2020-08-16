import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonagensService } from '../../services/personagens.service';


@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  id: number;
  personagem: any;

  constructor(private route: ActivatedRoute, private pS: PersonagensService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.pS.getPersonagem(this.id).subscribe(personagem => {
        this.personagem = personagem});
    })
  }

}
