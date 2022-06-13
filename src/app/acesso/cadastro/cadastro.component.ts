import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

 @Output() public exibirpainel: EventEmitter<string> = new EventEmitter<string>()
  

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainelLogin(): void{
    this.exibirpainel.emit('login')
  }
}
