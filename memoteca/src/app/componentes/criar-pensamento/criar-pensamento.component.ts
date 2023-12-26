import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'debiloide',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert('Para de clicar, maluco')
  }

  cancelar(){
    alert('Proibido cancelar :(')
  }

}
