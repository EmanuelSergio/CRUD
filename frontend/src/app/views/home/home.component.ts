import { Component } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';


@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  
  constructor( private headerService: HeaderService ) {
    headerService.headerData = {
      title:'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  


}
