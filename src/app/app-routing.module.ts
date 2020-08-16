import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { PlanetaComponent } from './components/planeta/planeta.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: 'planetas', component: PlanetasComponent },
    { path: 'personagem/:id', component: PersonagemComponent },
    { path: 'planeta/:id', component: PlanetaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}