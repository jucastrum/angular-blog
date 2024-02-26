import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class AppBigCardComponent implements OnInit {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string="Nova temporada de House of the dragon anunciada"
  @Input()
  cardDescription:string="Agora começará a fase final da guerra pelo trono de ferro."
  constructor() { }

  ngOnInit(): void {
    // Insira seu código de inicialização aqui
  }

}
