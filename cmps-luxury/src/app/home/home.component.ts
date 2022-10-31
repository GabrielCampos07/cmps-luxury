import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sectionImages: any = {};

  constructor() {
    this.sectionImages = [
      {
        title: 'Vestido Dionysus',
        gender: 'Feminino',
        price: 'R$ 2.700,00',
        image:
          'assets/img/models/section-home/currently-popular/currently-popular-1.svg',
      },
      {
        title: 'Cardigan Ocasional',
        gender: 'Feminino',
        price: 'R$ 1.900,00',
        image:
          'assets/img/models/section-home/currently-popular/currently-popular-2.svg',
      },
      {
        title: 'Blusa Inverno',
        gender: 'Feminino',
        price: 'R$ 1.200,00',
        image:
          'assets/img/models/section-home/currently-popular/currently-popular-3.svg',
      },
      {
        title: 'Vestido Festivo',
        gender: 'Feminino',
        price: 'R$ 3.500,00',
        image:
          'assets/img/models/section-home/currently-popular/currently-popular-4.svg',
      },
      {
        title: 'Sobretudo Invernal',
        gender: 'Feminino',
        price: 'R$ 3.500,00',
        image:
          'assets/img/models/section-home/currently-popular/currently-popular-5.svg',
      },
    ];
  }

  ngOnInit(): void {}

  public scrollDown(): void {
    window.scrollTo(0, 700);
  }
}
