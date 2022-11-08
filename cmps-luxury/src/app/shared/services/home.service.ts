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

  public getLuxuryInside(): any {
    return of([
      {
        img: 'assets/img/banners/home/luxury-inside/luxury-inside-1.svg',
        title: 'Nova loja',
        secondTitle: 'CMPS Arena',
        subtitle:
          'Experiência definitiva, a CMPS Arena abre suas portas na 50 avenue des Champs-Élysées. Dois mil metros quadrados de diversidade. Espaços exclusivos. Conheça o coração pulsante de todas as culturas CMPS.',
        textButton: 'Descubra',
      },
      {
        img: 'assets/img/banners/home/luxury-inside/luxury-inside-2.svg',
        title: '"NÃO NASCEMOS ÚNICOS. NOS TORNAMOS"',
        secondTitle: 'A Fundação CMPS, 10 anos.',
        subtitle:
          'A nossa missão? Fazer da igualdade de oportunidades uma realidade ao apoiar jovens para alcançarem o seu potencial através dos valores de espírito de equipe, perseverança e de superação individual.',
        textButton: 'Descubra',
      },
      {
        img: 'assets/img/banners/home/luxury-inside/luxury-inside-3.svg',
        title: 'Novas tendências',
        secondTitle: 'Novidades desta estação.',
        subtitle:
          'Aproveite o calor com o melhor da estilo clima. Underwear, regatas e muito mais excelências estão te aguardando.',
        textButton: 'Explorar',
      },
    ]);
  }
}
