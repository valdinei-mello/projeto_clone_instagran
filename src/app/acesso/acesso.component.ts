import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { offset } from '@popperjs/core';

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

        animate("500ms 0s ease-in-out")]),
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void=>criado', [
        style({ opacity: 0, transform: 'translate(50px,0px)' }),
        animate("1.5s 0s ease-in-out", keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)' }),

          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' })


        ]))])

    ]
    )
  ]

})
export class AcessoComponent implements OnInit {

  constructor() { }


  public estadoCriado: string = 'criado';
  public cadastro: boolean = false


  ngOnInit(): void {
  }

  public exibirpainel(event: string): void {
    if (event === 'cadastro') {
      this.cadastro = true
    } else {
      this.cadastro = false
    }
  }
}
