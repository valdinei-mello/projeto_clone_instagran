import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-50px,0px)' }),
        animate("500ms 0s ease-in-out")])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  constructor() { }


  public estadoCriado: string = 'criado';

  ngOnInit(): void {
  }


}
