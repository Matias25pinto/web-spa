import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe:Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Este es el id: '+ params['id'] );
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
   }
}
