import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetasService } from '../../services/planetas.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  id: number;
  planeta: any;

  constructor(private route: ActivatedRoute, private pS: PlanetasService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.pS.getPlaneta(this.id).subscribe(planeta => {
        this.planeta = planeta});
    })
  }
}
