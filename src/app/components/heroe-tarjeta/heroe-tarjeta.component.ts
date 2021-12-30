import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};//De esta forma se recibe el heroe desde afuera con Input
  @Input() index:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
  }

}
