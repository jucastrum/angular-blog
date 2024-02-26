import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string ="https://i2-prod.cornwalllive.com/incoming/article5941182.ece/ALTERNATES/s1200b/1_EC_CL_MattSmithDOg_10.jpg"
  @Input()
  cardTitle: string ="Confira spoilers do BTS da nova temporada"
  
  constructor() { }

  ngOnInit(): void {
    // Insira seu código de inicialização aqui
  }

}
