import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {
 
  tarefas = [
    {
      nome: 'Atividades Diárias',
      descricao: 'Atividades a serem realizadas ao longo do dia.',
      checklist: [
        {
          nome: 'Bater o ponto',
          concluido: true,
        },
        {
          nome: 'Consultar lista de atividades',
          concluido: true,
        },
        {
          nome: 'Iniciar atividade no Monday',
          concluido: true,
        },
        {
          nome: 'Daily 09:10',
          concluido: false,
        },
        {
          nome: 'Horário de Almoço',
          concluido: false,
        },
        {
          nome: 'Revisar atividades do dia',
          concluido: false
        },
      ]
    },
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {
    
    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }
}