import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public notices = [
    {
      title: 'Produtos com 40% de desconto',
      subtitle: 'Compre agora',
      router: '',
    },
    {
      title: 'Por tempo limitado: frete grátis em tênis',
      subtitle: 'Compre agora',
      router: '',
    },
    {
      title: 'Torne-se membro e ganhe benefícios',
      subtitle: 'Junte-se a nós',
      router: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
