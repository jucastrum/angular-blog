import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { AppBigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, AppBigCardComponent, SmallCardComponent, MenuBarComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Insira seu código de inicialização aqui
  }

}
