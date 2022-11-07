import { Injectable } from '@angular/core';
import { CurrentlyPopular } from '../interfaces/currently-popular';
import { Observable, of } from 'rxjs';
import { NoticesCarousel } from '../interfaces/notices-carousel';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  public getCurrentlyPopular(): Observable<CurrentlyPopular[]> {
    return of([
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
    ]);
  }

  public getNoticesCarousel(): Observable<NoticesCarousel[]> {
    return of([
      {
        title: 'Produtos com 40% de desconto',
        subtitle: 'Compre agora',
      },
      {
        title: 'Por tempo limitado: frete grátis em tênis',
        subtitle: 'Compre agora',
      },
      {
        title: 'Torne-se membro e ganhe benefícios',
        subtitle: 'Junte-se a nós',
      },
    ]);
  }
}
