import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  // currentData = new Date();

  resultado: number = 10;

  ngOnInit(){
    // this.currentData = new Date();
    // console.log(this.currentData);
  }

  sumar(a: number, b: number){
    this.resultado = a + b;
  }
}
