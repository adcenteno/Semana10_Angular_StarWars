import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { SnakecasePipe } from './../snakecase.pipe';
import { PersonagemComponent } from './personagem/personagem.component';
import { RouterModule } from '@angular/router';
import { PlanetaComponent } from './planeta/planeta.component';


@NgModule({
  declarations: [HomeComponent,PersonagensComponent,PlanetasComponent,SnakecasePipe,PersonagemComponent,PlanetaComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent,PersonagensComponent,PlanetasComponent,SnakecasePipe,PersonagemComponent,PlanetaComponent],
})
export class ComponentsModule { }
